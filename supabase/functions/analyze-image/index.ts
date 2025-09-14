import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { GoogleGenerativeAI } from "npm:@google/generative-ai";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      },
    });
  }

  try {
    const { prompt, image } = await req.json();

    const genAI = new GoogleGenerativeAI(Deno.env.get("GEMINI_API_KEY")!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent([
      { text: prompt || "Describe this image" },
      {
        inlineData: {
          mimeType: "image/png",
          data: image,
        },
      },
    ]);

    return new Response(JSON.stringify({ output: result.response.text() }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",  // <-- IMPORTANT
      },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
});
