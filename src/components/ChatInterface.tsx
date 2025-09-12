import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mic, Send, Image, Paperclip, Bot, User, MicOff } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "@/lib/translations";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type: 'text' | 'image';
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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const renderBotMessage = (text: string) => {
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
    return <div className="space-y-1">{blocks}</div>;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
    setNewMessage('');
    setIsLoading(true);

    try {
      // Use the farmerData prop passed from parent

      // Build a short rolling history (last 6 messages)
      const recentHistory = messages.slice(-6).map(m => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: m.content
      }));

      const { data, error } = await supabase.functions.invoke('chat-assistant', {
        body: {
          message: newMessage,
          language,
          farmerData,
          history: recentHistory,
          provider: 'gemini',
          debug: true,
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
        type: 'text',
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      toast({
        title: t('common.error'),
        description: t('chat.error'),
        variant: "destructive",
      });
      
      // Fallback to mock response
      const responses = mockResponses[language as keyof typeof mockResponses] || mockResponses.en;
      const fallbackResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `⚠️ ${fallbackResponse} (Offline mode)`,
        sender: 'bot',
        timestamp: new Date(),
        type: 'text',
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
    recognition.lang = language === 'hi' ? 'hi-IN' : 'en-IN';

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
                  className={`max-w-[70%] rounded-lg px-3 py-2 ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-foreground border border-border shadow-sm'
                  }`}
                >
                  <div className="text-sm">
                    {message.sender === 'bot' 
                      ? renderBotMessage(message.content) 
                      : <p className="whitespace-pre-wrap">{message.content}</p>}
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
            
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Bot className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-card text-foreground border border-border rounded-lg px-3 py-2 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
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
                  placeholder={t('chat.placeholder')}
                  className="flex-1"
                  disabled={isLoading}
                />
              <Button
                variant="outline"
                size="icon"
                onClick={handleVoiceInput}
                disabled={isLoading}
                className={isListening ? 'bg-accent text-accent-foreground' : ''}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </Button>
              <Button
                variant="outline"
                size="icon"
                disabled={isLoading}
              >
                <Image className="h-4 w-4" />
              </Button>
            </div>
            <Button
              onClick={handleSendMessage}
              disabled={!newMessage.trim() || isLoading}
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