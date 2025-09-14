import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mic, Send, Image, Paperclip, Bot, User, MicOff, Cloud, Thermometer, Droplets } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "@/lib/translations";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type: 'text' | 'image' | 'weather';
  imageUrl?: string;
  weatherData?: any;
}

interface ChatInterfaceProps {
  language: string;
  farmerData?: {
    name: string;
    location: string;
    crops: string[];
    landSize?: number;
    landUnit?: string;
    latitude?: number;
    longitude?: number;
  };
}

// Weather-related keywords to detect weather queries
const weatherKeywords = {
  en: ['weather', 'temperature', 'rain', 'rainfall', 'humidity', 'wind', 'forecast', 'climate', 'sunny', 'cloudy', 'storm'],
  hi: ['मौसम', 'तापमान', 'बारिश', 'वर्षा', 'नमी', 'हवा', 'पूर्वानुमान', 'जलवायु', 'धूप', 'बादल'],
  ta: ['வானிலை', 'வெப்பநிலை', 'மழை', 'ஈரப்பதம்', 'காற்று', 'முன்னறிவிப்பு', 'தட்பவெப்ப நிலை']
};

// Mock AI responses for demo
const mockResponses = {
  en: [
    "Hello! I'm your agricultural assistant. How can I help you today?",
    "Based on your location and crop, I recommend checking the soil moisture levels.",
    "For better yield, consider organic fertilizers during this season.",
    "Weather conditions look favorable for sowing. Would you like specific timing recommendations?",
  ],
  hi: [
    "नमस्ते! मैं आपका कृषि सहायक हूँ। आज मैं आपकी कैसे मदद कर सकता हूँ?",
    "आपकी फसल के लिए मिट्टी की नमी की जांच करना अच्छा होगा।",
    "बेहतर पैदावार के लिए जैविक खाद का उपयोग करें।",
  ],
  ta: [
    "வணக்கம்! நான் உங்கள் விவசாய உதவியாளர். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
    "உங்கள் பயிருக்கு மண்ணின் ஈரப்பதத்தை சரிபார்ப்பது நல்லது.",
  ],
};

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ language, farmerData }) => {
  const { toast } = useToast();
  const t = useTranslation(language);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: mockResponses[language as keyof typeof mockResponses]?.[0] || mockResponses.en[0],
      sender: 'bot',
      timestamp: new Date(),
      type: 'text',
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check if message contains weather-related keywords
  const containsWeatherKeyword = (message: string): boolean => {
    const keywords = weatherKeywords[language as keyof typeof weatherKeywords] || weatherKeywords.en;
    const lowerMessage = message.toLowerCase();
    return keywords.some(keyword => lowerMessage.includes(keyword.toLowerCase()));
  };

  // Fetch weather data
  const fetchWeatherData = async (): Promise<any> => {
    if (!farmerData?.latitude || !farmerData?.longitude) {
      throw new Error('Location coordinates not available');
    }

    const { data, error } = await supabase.functions.invoke('weather-data', {
      body: {
        latitude: farmerData.latitude,
        longitude: farmerData.longitude,
      },
    });

    if (error) {
      throw error;
    }

    return data.weather;
  };

  // Render weather data in a formatted way
  const renderWeatherData = (weatherData: any) => {
    if (!weatherData) return null;

    const { current, forecast } = weatherData;

    return (
      <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-4 rounded-lg space-y-4">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <Cloud className="h-5 w-5 text-blue-500" />
          Current Weather - {current.location}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Thermometer className="h-4 w-4 text-red-500" />
            <span className="text-sm">Temperature: {current.temperature}°C</span>
          </div>
          <div className="flex items-center gap-2">
            <Droplets className="h-4 w-4 text-blue-500" />
            <span className="text-sm">Humidity: {current.humidity}%</span>
          </div>
          <div className="flex items-center gap-2">
            <Cloud className="h-4 w-4 text-gray-500" />
            <span className="text-sm">Condition: {current.condition}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Wind: {current.windSpeed} km/h</span>
          </div>
        </div>

        {current.rainfall > 0 && (
          <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded text-sm">
            🌧️ Rainfall: {current.rainfall}mm
          </div>
        )}

        {forecast && (
          <div>
            <h4 className="font-medium mb-2">7-Day Forecast</h4>
            <div className="grid grid-cols-7 gap-1 text-xs">
              {forecast.labels.map((day: string, index: number) => (
                <div key={index} className="text-center bg-white/50 dark:bg-black/20 p-2 rounded">
                  <div className="font-medium">{day}</div>
                  <div>{forecast.temperature[index]}°C</div>
                  <div className="text-blue-500">{forecast.humidity[index]}%</div>
                  {forecast.rainfall[index] > 0 && (
                    <div className="text-blue-600">{forecast.rainfall[index]}mm</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderBotMessage = (text: string, weatherData?: any) => {
    // Very lightweight markdown-ish rendering: **bold**, - bullets, newlines
    // 1) Split into lines to detect bullet blocks
    const lines = text.split(/\n/);
    const blocks: JSX.Element[] = [];
    let currentList: string[] = [];

    const flushList = () => {
      if (currentList.length > 0) {
        blocks.push(
          <ul key={`ul-${blocks.length}`} className="list-disc pl-4 space-y-2">
            {currentList.map((li, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{
                __html: li
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              }} />
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const item = trimmed.replace(/^[-*]\s+/, '');
        currentList.push(item);
      } else if (trimmed === '') {
        flushList();
        blocks.push(<div key={`sp-${blocks.length}`} className="h-2" />);
      } else {
        flushList();
        blocks.push(
          <p key={`p-${blocks.length}`} className="mb-2" dangerouslySetInnerHTML={{
            __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          }} />
        );
      }
    }
    flushList();
    
    return (
      <div className="space-y-3">
        <div className="space-y-1">{blocks}</div>
        {weatherData && renderWeatherData(weatherData)}
      </div>
    );
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleImageUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast({
        title: t('common.error'),
        description: "Please upload a valid image file.",
        variant: "destructive",
      });
      return;
    }

    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: t('common.error'),
        description: "Image size should be less than 5MB.",
        variant: "destructive",
      });
      return;
    }

    setIsUploadingImage(true);

    try {
      // Create a preview URL for the user message
      const imageUrl = URL.createObjectURL(file);
      
      // Add user message with image
      const userMessage: Message = {
        id: Date.now().toString(),
        content: "Uploaded an image",
        sender: 'user',
        timestamp: new Date(),
        type: 'image',
        imageUrl: imageUrl,
      };

      setMessages(prev => [...prev, userMessage]);
      setIsLoading(true);

      const reader = new FileReader();
      reader.onloadend = async () => {
        try {
          const base64 = (reader.result as string).split(",")[1]; // strip prefix
          
          // Use Supabase function for image analysis
          const { data, error } = await supabase.functions.invoke('analyze-image', {
            body: {
              prompt: `Analyze this agricultural image. Identify any crops, diseases, pests, soil conditions, or farming equipment visible. Provide specific recommendations if possible. Respond in ${language === 'hi' ? 'Hindi' : language === 'ta' ? 'Tamil' : 'English'}.`,
              image: base64,
              language,
              farmerData,
            },
          });
          
          if (error) {
            throw error;
          }

          const analysisResult = data.output || data.response || "I can see the image but couldn't analyze it properly.";

          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: analysisResult,
            sender: 'bot',
            timestamp: new Date(),
            type: 'text',
          };

          setMessages(prev => [...prev, botMessage]);
        } catch (error) {
          console.error('Image analysis error:', error);
          toast({
            title: t('common.error'),
            description: "Failed to analyze the image. Please try again.",
            variant: "destructive",
          });
          
          // Add fallback response
          const fallbackResponse = language === 'hi' ? 
            "मैं इस छवि को देख सकता हूँ, लेकिन इसका विश्लेषण करने में असमर्थ हूँ। कृपया पुनः प्रयास करें।" :
            language === 'ta' ?
            "இந்த படத்தை என்னால் பார்க்க முடிகிறது, ஆனால் பகுப்பாய்வு செய்ய முடியவில்லை. மீண்டும் முயற்சிக்கவும்." :
            "I can see the image but couldn't analyze it properly. Please try again.";
            
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: `⚠️ ${fallbackResponse}`,
            sender: 'bot',
            timestamp: new Date(),
            type: 'text',
          };

          setMessages(prev => [...prev, botMessage]);
        } finally {
          setIsLoading(false);
        }
      };
      
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('File reading error:', error);
      toast({
        title: t('common.error'),
        description: "Failed to process the image.",
        variant: "destructive",
      });
      setIsLoading(false);
    } finally {
      setIsUploadingImage(false);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
    // Reset the input value so the same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: 'user',
      timestamp: new Date(),
      type: 'text',
    };

    setMessages(prev => [...prev, userMessage]);
    const currentMessage = newMessage;
    setNewMessage('');
    setIsLoading(true);

    try {
      let weatherData = null;
      
      // Check if the message is weather-related
      if (containsWeatherKeyword(currentMessage)) {
        try {
          weatherData = await fetchWeatherData();
          console.log('Weather data fetched:', weatherData);
        } catch (weatherError) {
          console.error('Weather fetch error:', weatherError);
          // Continue without weather data
        }
      }

      // Build a short rolling history (last 6 messages, excluding images for now)
      const recentHistory = messages
        .filter(m => m.type === 'text') // Only include text messages in history
        .slice(-6)
        .map(m => ({
          role: m.sender === 'user' ? 'user' : 'assistant',
          content: m.content
        }));

      // Enhanced prompt for weather-related queries
      let enhancedMessage = currentMessage;
      if (weatherData) {
        const weatherContext = `Current weather in ${farmerData?.location || 'your location'}: 
        Temperature: ${weatherData.current.temperature}°C, 
        Humidity: ${weatherData.current.humidity}%, 
        Condition: ${weatherData.current.condition}, 
        Wind Speed: ${weatherData.current.windSpeed} km/h
        ${weatherData.current.rainfall > 0 ? `, Rainfall: ${weatherData.current.rainfall}mm` : ''}
        
        User's question: ${currentMessage}`;
        
        enhancedMessage = weatherContext;
      }

      const { data, error } = await supabase.functions.invoke('chat-assistant', {
        body: {
          message: enhancedMessage,
          language,
          farmerData,
          history: recentHistory,
          provider: 'gemini',
          debug: true,
          hasWeatherData: !!weatherData,
        },
      });
      
      if (error) {
        throw error;
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: (data as any).response,
        sender: 'bot',
        timestamp: new Date(),
        type: weatherData ? 'weather' : 'text',
        weatherData: weatherData,
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      toast({
        title: t('common.error'),
        description: t('chat.error'),
        variant: "destructive",
      });
      
      // Fallback to mock response with weather data if available
      const responses = mockResponses[language as keyof typeof mockResponses] || mockResponses.en;
      let fallbackResponse = responses[Math.floor(Math.random() * responses.length)];
      
      // If it was a weather query, try to provide weather data even in fallback
      let weatherData = null;
      if (containsWeatherKeyword(currentMessage)) {
        try {
          weatherData = await fetchWeatherData();
          fallbackResponse = language === 'hi' ? 
            "यहाँ आपके क्षेत्र का मौसम डेटा है। कृषि कार्य की योजना बनाने के लिए इसका उपयोग करें।" :
            language === 'ta' ?
            "இங்கே உங்கள் பகுதியின் வானிலை தரவு உள்ளது. விவசாய நடவடிக்கைகளை திட்டமிட இதைப் பயன்படுத்தவும்." :
            "Here's the weather data for your area. Use this to plan your agricultural activities.";
        } catch (weatherError) {
          console.error('Weather fallback error:', weatherError);
        }
      }
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `⚠️ ${fallbackResponse} (Offline mode)`,
        sender: 'bot',
        timestamp: new Date(),
        type: weatherData ? 'weather' : 'text',
        weatherData: weatherData,
      };

      setMessages(prev => [...prev, botMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      toast({
        title: t('common.error'),
        description: "Your browser doesn't support voice input.",
        variant: "destructive",
      });
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = language === 'hi' ? 'hi-IN' : language === 'ta' ? 'ta-IN' : 'en-IN';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setNewMessage(transcript);
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
      toast({
        title: t('common.error'),
        description: "Could not capture your voice. Please try again.",
        variant: "destructive",
      });
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="h-[600px] flex flex-col shadow-agricultural bg-card">
      <CardHeader className="bg-card border-b border-border">
        <CardTitle className="flex items-center gap-2 text-primary">
          <Bot className="h-5 w-5" />
          {t('chat.title')}
          <Cloud className="h-4 w-4 text-blue-500 ml-auto" title="Weather-enabled" />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-0 bg-card">
        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4 bg-card">
          <div className="space-y-4 min-h-full">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.sender === 'bot' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
                
                <div
                  className={`max-w-[75%] rounded-lg px-3 py-2 ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-foreground border border-border shadow-sm'
                  }`}
                >
                  <div className="text-sm">
                    {message.type === 'image' && message.imageUrl ? (
                      <div className="space-y-2">
                        <img 
                          src={message.imageUrl} 
                          alt="Uploaded image" 
                          className="max-w-full h-auto rounded-md max-h-48 object-contain"
                        />
                        <p className="text-xs opacity-75">Image uploaded</p>
                      </div>
                    ) : message.sender === 'bot' ? (
                      renderBotMessage(message.content, message.weatherData)
                    ) : (
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    )}
                  </div>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>
                
                {message.sender === 'user' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-accent text-accent-foreground">
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            
            {(isLoading || isUploadingImage) && (
              <div className="flex gap-3 justify-start">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Bot className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-card text-foreground border border-border rounded-lg px-3 py-2 shadow-sm">
                  <div className="flex gap-1 items-center">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
                    {isUploadingImage && (
                      <span className="ml-2 text-xs text-muted-foreground">
                        Analyzing image...
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t border-border p-4 bg-card">
          <div className="flex gap-2">
            <div className="flex-1 flex gap-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t('chat.placeholder') + ' (Try asking about weather!)'}
                className="flex-1"
                disabled={isLoading || isUploadingImage}
              />
              <Button
                variant="outline"
                size="icon"
                onClick={handleVoiceInput}
                disabled={isLoading || isUploadingImage}
                className={isListening ? 'bg-accent text-accent-foreground' : ''}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                accept="image/*"
                style={{ display: 'none' }}
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => fileInputRef.current?.click()}
                disabled={isLoading || isUploadingImage}
                title="Upload image"
              >
                <Image className="h-4 w-4" />
              </Button>
            </div>
            <Button
              onClick={handleSendMessage}
              disabled={!newMessage.trim() || isLoading || isUploadingImage}
              className="px-6"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};