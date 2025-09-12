import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus, IndianRupee, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "@/lib/translations";

interface MarketPrice {
  crop: string;
  currentPrice: number;
  msp: number;
  trend: 'up' | 'down' | 'stable';
  change: string;
  market: string;
}

interface MarketPricesWidgetProps {
  location?: string;
  crops?: string[];
  language?: string;
}

// Mock market data fallback
const mockMarketData: MarketPrice[] = [
  {
    crop: 'Rice',
    currentPrice: 2850,
    msp: 2700,
    trend: 'up',
    change: '+5.6%',
    market: 'Delhi',
  },
  {
    crop: 'Wheat',
    currentPrice: 2450,
    msp: 2425,
    trend: 'up',
    change: '+1.0%',
    market: 'Punjab',
  },
  {
    crop: 'Cotton',
    currentPrice: 6800,
    msp: 6620,
    trend: 'down',
    change: '-2.3%',
    market: 'Gujarat',
  },
  {
    crop: 'Sugarcane',
    currentPrice: 385,
    msp: 375,
    trend: 'stable',
    change: '0.0%',
    market: 'UP',
  },
  {
    crop: 'Soybean',
    currentPrice: 4200,
    msp: 4300,
    trend: 'down',
    change: '-2.3%',
    market: 'MP',
  },
  {
    crop: 'Groundnut',
    currentPrice: 5850,
    msp: 5850,
    trend: 'up',
    change: '+3.2%',
    market: 'Gujarat',
  },
];

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case 'up':
      return <TrendingUp className="h-4 w-4 text-success" />;
    case 'down':
      return <TrendingDown className="h-4 w-4 text-destructive" />;
    default:
      return <Minus className="h-4 w-4 text-muted-foreground" />;
  }
};

const getTrendColor = (trend: string) => {
  switch (trend) {
    case 'up':
      return 'text-success';
    case 'down':
      return 'text-destructive';
    default:
      return 'text-muted-foreground';
  }
};

export const MarketPricesWidget: React.FC<MarketPricesWidgetProps> = ({ location, crops, language = 'en' }) => {
  const { toast } = useToast();
  const t = useTranslation(language);
  const [marketData, setMarketData] = useState<MarketPrice[]>(mockMarketData);
  const [isLoading, setIsLoading] = useState(false);
  const [isUsingMockData, setIsUsingMockData] = useState(true);
  const [currentState, setCurrentState] = useState<string>('');

  useEffect(() => {
    if (location) {
      fetchMarketData();
    }
  }, [location, crops]);

  const fetchMarketData = async () => {
    if (!location) return;

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('market-data', {
        body: { location, crops: crops || [] },
      });
      
      if (error) throw error;

      setMarketData((data as any).marketData);
      setCurrentState((data as any).state);
      setIsUsingMockData(false);
    } catch (error) {
      console.error('Market data fetch error:', error);
      toast({
        title: "Market Data Error",
        description: "Failed to fetch live market prices. Using sample data.",
        variant: "destructive",
      });
      setIsUsingMockData(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-agricultural">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <IndianRupee className="h-5 w-5" />
          {t('marketPrices.title')} & MSP
          {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
          {isUsingMockData && <span className="text-xs text-muted-foreground">(Sample Data)</span>}
        </CardTitle>
        {currentState && (
          <p className="text-sm text-muted-foreground">
            📍 {t('marketPrices.showingPricesFor')} {currentState}
          </p>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {marketData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-earth-light/50 transition-agricultural"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">{item.crop}</span>
                  <Badge variant="outline" className="text-xs">
                    {item.market}
                  </Badge>
                  {crops && crops.some(userCrop => 
                    userCrop.toLowerCase().includes(item.crop.toLowerCase()) || 
                    item.crop.toLowerCase().includes(userCrop.toLowerCase())
                  ) && (
                    <Badge variant="default" className="text-xs">
                      Your Crop
                    </Badge>
                  )}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {t('marketPrices.msp')}: ₹{item.msp.toLocaleString()}/quintal
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-lg">
                    ₹{item.currentPrice.toLocaleString()}
                  </span>
                  {getTrendIcon(item.trend)}
                </div>
                <div className={`text-sm ${getTrendColor(item.trend)}`}>
                  {item.change}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-primary/10 rounded-lg">
          <p className="text-sm text-primary text-center">
            💡 <strong>{t('common.tip')}:</strong> {t('marketPrices.tipAboveMsp')}
          </p>
          {crops && crops.length > 0 && (
            <p className="text-xs text-muted-foreground text-center mt-1">
              Showing personalized data for your crops: {crops.join(', ')}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};