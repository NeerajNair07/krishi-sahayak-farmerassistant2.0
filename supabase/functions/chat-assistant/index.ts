import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, language, farmerData, debug, provider, history } = await req.json();

    if (!message) {
      throw new Error('Message is required');
    }

    const openaiApiKey = Deno.env.get('OPENAI_API_KEY');
    const geminiApiKey = Deno.env.get('GEMINI_API_KEY');
    const preferProvider = (provider || '').toLowerCase();

    // Create context for agricultural assistant with strict response style
    const systemPrompt = `You are Krishi AI, an expert agricultural assistant for India.

    Farmer profile (use to personalize):
    - Name: ${farmerData?.name || 'Unknown'}
    - Location: ${farmerData?.location || 'Unknown'}
    - Crops: ${farmerData?.crops?.join(', ') || 'Unknown'}
    - Land size: ${farmerData?.landSize || 'Unknown'} ${farmerData?.landUnit || ''}

    Response rules:
    - Language: ${language === 'hi' ? 'Hindi' : language === 'ta' ? 'Tamil' : 'English'}
    - Start with a one-line summary tailored to the farmer
    - Then give 4–6 short bullet points, each actionable and location-aware
    - Bold key crop names like **Rice**, **Sugarcane**, etc.
    - Include specific next step(s) and quantities if relevant
    - If critical info is missing (e.g., season, irrigation), ask up to 2 targeted questions at the end
    - Keep the entire answer under 180 words
    - Avoid generic textbook explanations; prioritize practical, local guidance for ${farmerData?.location || 'their area'}`;

    // helper: build fallback message
    const buildFallback = () => (
      language === 'hi' 
        ? `नमस्ते! मैं आपका कृषि सहायक हूँ। वर्तमान में AI सेवा अस्थायी रूप से अनुपलब्ध है। कृपया बाद में पुनः प्रयास करें। इस बीच, मौसम और बाजार की जानकारी के लिए ऊपर दिए गए विकल्पों का उपयोग करें।`
        : language === 'ta'
        ? `வணக்கம்! நான் உங்கள் விவசாய உதவியாளர். தற்போது AI சேவை தற்காலிகமாக கிடைக்கவில்லை. தயவுசெய்து பின்னர் மீண்டும் முயற்சிக்கவும். இதற்கிடையில், வானிலை மற்றும் சந்தை தகவலுக்கு மேலே உள்ள விருப்பங்களைப் பயன்படுத்தவும்.`
        : `Hello! I'm your agricultural assistant. The AI service is temporarily unavailable due to high demand. Please try again later. In the meantime, you can use the weather and market price widgets above for important farming information.`
    );

    // fetch live context if we have coordinates/location
    let weatherSummary = '';
    let marketSummary = '';
    try {
      const forwardApiKey = req.headers.get('apikey') || '';
      if (farmerData?.latitude && farmerData?.longitude) {
        const weatherResp = await fetch(`${new URL(req.url).origin}/functions/v1/weather-data`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', ...(forwardApiKey ? { apikey: forwardApiKey } : {}) },
          body: JSON.stringify({ latitude: farmerData.latitude, longitude: farmerData.longitude })
        });
        if (weatherResp.ok) {
          const w = await weatherResp.json();
          const c = w?.weather?.current;
          if (c) {
            weatherSummary = `Weather: ${c.condition}, ${c.temperature}°C, humidity ${c.humidity}%, wind ${c.windSpeed} km/h, rainfall ${c.rainfall}mm.`;
          }
        }
      }
      if (farmerData?.location) {
        const marketResp = await fetch(`${new URL(req.url).origin}/functions/v1/market-data`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', ...(forwardApiKey ? { apikey: forwardApiKey } : {}) },
          body: JSON.stringify({ location: farmerData.location, crops: farmerData.crops || [] })
        });
        if (marketResp.ok) {
          const m = await marketResp.json();
          const top = m?.marketData?.[0];
          if (top) {
            marketSummary = `Market (${m.state}): ${top.crop} ₹${top.currentPrice}/q (${top.change}, ${top.trend}).`;
          }
        }
      }
    } catch (_) {
      // Swallow context errors silently; chat will still work
    }

    // helpers for providers
    const callOpenAI = async (): Promise<{ ok: boolean; content?: string; status?: number; body?: string; }> => {
      if (!openaiApiKey) return { ok: false, status: 401, body: 'OPENAI_API_KEY missing' };
      console.log('Calling OpenAI with message');
      const resp = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: systemPrompt },
            ...(Array.isArray(history) ? history : []),
            { role: 'user', content: `${weatherSummary}\n${marketSummary}\n\nUser: ${message}` }
          ],
          max_tokens: 250,
          temperature: 0.3,
        }),
      });
      if (!resp.ok) {
        const txt = await resp.text();
        return { ok: false, status: resp.status, body: txt };
      }
      const json = await resp.json();
      const content = json.choices?.[0]?.message?.content ?? '';
      return { ok: true, content };
    };

    const callGemini = async (): Promise<{ ok: boolean; content?: string; status?: number; body?: string; }> => {
      if (!geminiApiKey) return { ok: false, status: 401, body: 'GEMINI_API_KEY missing' };
      console.log('Calling Gemini with message');
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`;
      const body = {
        contents: [
          {
            role: 'user',
            parts: [
              { text: `${systemPrompt}` },
              ...(Array.isArray(history) ? history.map((h: any) => ({ text: `${h.role === 'assistant' ? 'Assistant' : 'User'}: ${h.content}` })) : []),
              { text: `${weatherSummary}\n${marketSummary}\n\nUser: ${message}` }
            ]
          }
        ],
        generationConfig: {
          maxOutputTokens: 250,
          temperature: 0.3
        }
      };
      const resp = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!resp.ok) {
        const txt = await resp.text();
        return { ok: false, status: resp.status, body: txt };
      }
      const json = await resp.json();
      const content = json.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
      return { ok: true, content };
    };

    // choose order
    let result: { ok: boolean; content?: string; status?: number; body?: string; } | null = null;
    if (preferProvider === 'gemini') {
      result = await callGemini();
      if (!result.ok) {
        const fallbackTry = await callOpenAI();
        result = fallbackTry;
      }
    } else {
      // default prefer OpenAI if available
      result = await callOpenAI();
      if (!result.ok) {
        const fallbackTry = await callGemini();
        result = fallbackTry;
      }
    }

    if (!result || !result.ok) {
      const status = result?.status ?? 500;
      const body = result?.body ?? 'Unknown provider error';
      
      // Provide a graceful fallback for any non-OK response (incl. 400/401/404/429)
      const fallbackResponse = buildFallback();

      // If debug flag passed, surface error details with non-200 for easier diagnostics
      if (debug) {
        return new Response(JSON.stringify({ 
          status: 'error',
          error: 'OpenAI request failed',
          errorDetails: {
            status,
            body
          }
        }), {
          status: 502,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      return new Response(JSON.stringify({ 
        response: fallbackResponse,
        status: 'success',
        fallback: true,
        errorDetails: {
          status,
          body
        }
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const assistantResponse = result.content ?? '';
    console.log('AI response received');

    return new Response(JSON.stringify({ 
      response: assistantResponse,
      status: 'success' 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in chat-assistant function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      status: 'error'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});