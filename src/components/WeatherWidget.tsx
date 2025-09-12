import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Cloud, Droplets, Thermometer, Wind, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "@/lib/translations";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface WeatherData {
  current: {
    temperature: number;
    humidity: number;
    rainfall: number;
    windSpeed: number;
    condition: string;
    location: string;
  };
  forecast: {
    labels: string[];
    temperature: number[];
    humidity: number[];
    rainfall: number[];
  };
}

interface WeatherWidgetProps {
  latitude?: number;
  longitude?: number;
  language?: string;
}

// Mock weather data fallback
const mockWeatherData: WeatherData = {
  current: {
    temperature: 28,
    humidity: 72,
    rainfall: 2.5,
    windSpeed: 12,
    condition: 'Partly Cloudy',
    location: 'Your Location',
  },
  forecast: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    rainfall: [0, 2.5, 5.2, 1.8, 0.3, 0, 0.8],
    temperature: [32, 28, 26, 29, 33, 35, 31],
    humidity: [65, 72, 85, 78, 62, 58, 68],
  }
};

export const WeatherWidget: React.FC<WeatherWidgetProps> = ({ latitude, longitude, language = 'en' }) => {
  const { toast } = useToast();
  const t = useTranslation(language);
  const [weatherData, setWeatherData] = useState<WeatherData>(mockWeatherData);
  const [isLoading, setIsLoading] = useState(false);
  const [isUsingMockData, setIsUsingMockData] = useState(true);

  useEffect(() => {
    if (latitude && longitude) {
      fetchWeatherData();
    }
  }, [latitude, longitude]);

  const fetchWeatherData = async () => {
    if (!latitude || !longitude) return;

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('weather-data', {
        body: { latitude, longitude },
      });
      
      if (error) throw error;

      setWeatherData((data as any).weather);
      setIsUsingMockData(false);
    } catch (error) {
      console.error('Weather fetch error:', error);
      toast({
        title: "Weather Error",
        description: "Failed to fetch weather data. Using offline data.",
        variant: "destructive",
      });
      setIsUsingMockData(true);
    } finally {
      setIsLoading(false);
    }
  };

  const chartData = {
    labels: weatherData.forecast.labels,
    datasets: [
      {
        label: `${t('weather.temperature')} (°C)`,
        data: weatherData.forecast.temperature,
        borderColor: 'hsl(var(--accent))',
        backgroundColor: 'hsl(var(--accent) / 0.1)',
        tension: 0.4,
        yAxisID: 'y',
      },
      {
        label: `${t('weather.precipitation')} (mm)`,
        data: weatherData.forecast.rainfall,
        borderColor: 'hsl(var(--primary))',
        backgroundColor: 'hsl(var(--primary) / 0.1)',
        tension: 0.4,
        yAxisID: 'y1',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        title: {
          display: true,
          text: `${t('weather.temperature')} (°C)`,
        },
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        title: {
          display: true,
          text: `${t('weather.precipitation')} (mm)`,
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <Card className="shadow-agricultural">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Cloud className="h-5 w-5" />
          {t('weather.title')}
          {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
          {isUsingMockData && <span className="text-xs text-muted-foreground">(Offline)</span>}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* {t('weather.currentWeather')} */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2 p-3 bg-earth-light rounded-lg">
            <Thermometer className="h-5 w-5 text-accent" />
            <div>
              <div className="text-lg font-semibold">{weatherData.current.temperature}°C</div>
              <div className="text-xs text-muted-foreground">{t('weather.temperature')}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-3 bg-earth-light rounded-lg">
            <Droplets className="h-5 w-5 text-primary" />
            <div>
              <div className="text-lg font-semibold">{weatherData.current.humidity}%</div>
              <div className="text-xs text-muted-foreground">{t('weather.humidity')}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-3 bg-earth-light rounded-lg">
            <Cloud className="h-5 w-5 text-primary" />
            <div>
              <div className="text-lg font-semibold">{weatherData.current.rainfall}mm</div>
              <div className="text-xs text-muted-foreground">{t('weather.precipitation')}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-3 bg-earth-light rounded-lg">
            <Wind className="h-5 w-5 text-accent" />
            <div>
              <div className="text-lg font-semibold">{weatherData.current.windSpeed} km/h</div>
              <div className="text-xs text-muted-foreground">{t('weather.windSpeed')}</div>
            </div>
          </div>
        </div>

        {/* {t('weather.forecast')} */}
        <div className="h-64">
          <Line data={chartData} options={chartOptions} />
        </div>

        <div className="text-center p-2 bg-primary/10 rounded-lg">
          <p className="text-sm text-primary font-medium">
            🌤️ {weatherData.current.condition} - Good conditions for farming activities
          </p>
          {weatherData.current.location && (
            <p className="text-xs text-muted-foreground mt-1">
              📍 {weatherData.current.location}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};