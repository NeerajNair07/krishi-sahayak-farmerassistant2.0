import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Toaster } from "@/components/ui/toaster";
import { WeatherWidget } from './WeatherWidget';
import { MarketPricesWidget } from './MarketPricesWidget';
import { ChatInterface } from './ChatInterface';
import { FertilizerAdvice } from './FertilizerAdvice';
import { IrrigationGuide } from './IrrigationGuide';
import { FarmingCalendar } from './FarmingCalendar';
import { LanguageSelector } from './LanguageSelector';
import { ProfileEdit } from './ProfileEdit';
import { Settings } from './Settings';
import { Notifications } from './Notifications';
import { useTranslation } from "@/lib/translations";
import { 
  Cloud, 
  TrendingUp, 
  MessageCircle, 
  Calendar,
  Camera,
  Leaf,
  Droplets,
  Sprout,
  WifiOff,
  Bell,
  Settings as SettingsIcon,
  LogOut,
  User,
  Edit
} from 'lucide-react';

interface FarmerData {
  name: string;
  location: string;
  crops: string[];
  landSize: number;
  landUnit: 'acres' | 'hectares';
  phone: string;
  latitude?: number;
  longitude?: number;
}

interface DashboardProps {
  farmerData: FarmerData;
  language: string;
  onLanguageChange: (language: string) => void;
  onLogout: () => void;
}

const quickActions = [
  { 
    id: 'weather', 
    label: 'Check Weather', 
    icon: Cloud, 
    color: 'bg-primary', 
    description: 'Get 7-day forecast' 
  },
  { 
    id: 'market', 
    label: 'Market Prices', 
    icon: TrendingUp, 
    color: 'bg-accent', 
    description: 'Live crop prices' 
  },
  { 
    id: 'fertilizer', 
    label: 'Fertilizer Advice', 
    icon: Leaf, 
    color: 'bg-success', 
    description: 'Crop nutrition tips' 
  },
  { 
    id: 'irrigation', 
    label: 'Irrigation Guide', 
    icon: Droplets, 
    color: 'bg-earth-brown', 
    description: 'Water management' 
  },
  { 
    id: 'calendar', 
    label: 'Farming Calendar', 
    icon: Calendar, 
    color: 'bg-warning', 
    description: 'Sowing & harvest dates' 
  },
  { 
    id: 'identify', 
    label: 'Crop Disease ID', 
    icon: Camera, 
    color: 'bg-destructive', 
    description: 'AI image analysis' 
  },
];

export const Dashboard: React.FC<DashboardProps> = ({ 
  farmerData, 
  language, 
  onLanguageChange,
  onLogout 
}) => {
  const t = useTranslation(language);
  const [activeWidget, setActiveWidget] = useState<string>('chat');
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [isProfileEditOpen, setIsProfileEditOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [currentFarmerData, setCurrentFarmerData] = useState<FarmerData>(farmerData);

  React.useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleQuickAction = async (actionId: string) => {
    switch (actionId) {
      case 'weather':
        setActiveWidget('weather');
        break;
      case 'market':
        setActiveWidget('market');
        break;
      case 'fertilizer':
        setActiveWidget('fertilizer');
        break;
      case 'irrigation':
        setActiveWidget('irrigation');
        break;
      case 'calendar':
        setActiveWidget('calendar');
        break;
      case 'identify':
        // Show toast for features coming soon
        const { toast } = await import('@/hooks/use-toast');
        toast({
          title: t('common.error'),
          description: `${quickActions.find(a => a.id === actionId)?.label} will be available once backend APIs are integrated.`,
        });
        break;
      default:
        setActiveWidget('chat');
    }
  };

  const handleProfileUpdate = (updatedData: FarmerData) => {
    setCurrentFarmerData(updatedData);
  };

  // Map quick action ids to translation keys for label and description
  const quickActionLabelKey: Record<string, string> = {
    weather: 'quickActions.checkWeather',
    market: 'quickActions.marketPrices',
    fertilizer: 'quickActions.fertilizerAdvice',
    irrigation: 'quickActions.irrigationGuide',
    calendar: 'quickActions.farmingCalendar',
    identify: 'quickActions.cropDiseaseId',
  };

  const quickActionDescKey: Record<string, string> = {
    weather: 'quickActions.getForecast',
    market: 'quickActions.livePrices',
    fertilizer: 'quickActions.nutritionTips',
    irrigation: 'quickActions.waterManagement',
    calendar: 'quickActions.sowingHarvest',
    identify: 'quickActions.imageAnalysis',
  };

  const renderActiveWidget = () => {
    switch (activeWidget) {
      case 'weather':
        return <WeatherWidget 
          latitude={currentFarmerData.latitude} 
          longitude={currentFarmerData.longitude}
          language={language}
        />;
      case 'market':
        return <MarketPricesWidget 
          location={currentFarmerData.location}
          crops={currentFarmerData.crops}
          language={language}
        />;
      case 'fertilizer':
        return <FertilizerAdvice 
          language={language}
          farmerData={{
            crops: currentFarmerData.crops,
            location: currentFarmerData.location,
          }}
        />;
      case 'irrigation':
        return <IrrigationGuide 
          language={language}
          farmerData={{
            crops: currentFarmerData.crops,
            location: currentFarmerData.location,
          }}
        />;
      case 'calendar':
        return <FarmingCalendar 
          language={language}
          farmerData={{
            crops: currentFarmerData.crops,
            location: currentFarmerData.location,
            latitude: currentFarmerData.latitude,
            longitude: currentFarmerData.longitude,
          }}
        />;
      default:
        return <ChatInterface 
          language={language} 
          farmerData={{
            name: currentFarmerData.name,
            location: currentFarmerData.location,
            crops: currentFarmerData.crops,
            landSize: currentFarmerData.landSize,
            landUnit: currentFarmerData.landUnit,
            latitude: currentFarmerData.latitude,
            longitude: currentFarmerData.longitude,
          }}
        />;
    }
  };

  return (
    <div className="min-h-screen bg-background agricultural-pattern">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-agricultural">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-gradient-primary">
                🌾 Krishi Sahayak
              </div>
              {isOffline && (
                <Badge variant="destructive" className="flex items-center gap-1">
                  <WifiOff className="h-3 w-3" />
                  {t('chat.offline')}
                </Badge>
              )}
            </div>
            
            <div className="flex items-center gap-3">
              <LanguageSelector 
                currentLanguage={language} 
                onLanguageChange={onLanguageChange} 
              />
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsNotificationsOpen(true)}
                className="relative"
              >
                <Bell className="h-4 w-4" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                  3
                </Badge>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsSettingsOpen(true)}
              >
                <SettingsIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" onClick={onLogout}>
                <LogOut className="h-4 w-4" />
                {t('common.logout')}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Farmer Profile Card */}
          <div className="xl:col-span-1">
            <Card className="shadow-agricultural">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {currentFarmerData.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-lg">{currentFarmerData.name}</div>
                      <div className="text-sm text-muted-foreground">{currentFarmerData.location}</div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsProfileEditOpen(true)}
                    className="h-8 w-8 p-0"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground">{t('profile.landSize')}</div>
                  <div className="font-medium">
                    {currentFarmerData.landSize} {currentFarmerData.landUnit}
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-muted-foreground">{t('profile.crops')}</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {currentFarmerData.crops.map((crop, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {crop}
                      </Badge>
                    ))}
                  </div>
                </div>

                {currentFarmerData.phone && (
                  <div>
                    <div className="text-sm text-muted-foreground">{t('profile.phone')}</div>
                    <div className="font-medium">{currentFarmerData.phone}</div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="mt-6 shadow-agricultural">
              <CardHeader>
                <CardTitle className="text-lg">{t('quickActions.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {quickActions.map((action) => {
                    const IconComponent = action.icon;
                    return (
                      <Button
                        key={action.id}
                        variant="farmer"
                        className="h-auto p-3 justify-start"
                        onClick={() => handleQuickAction(action.id)}
                      >
                        <div className={`w-8 h-8 ${action.color} rounded-lg flex items-center justify-center text-white mr-3`}>
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <div className="text-left">
                          <div className="font-medium text-sm">{t(quickActionLabelKey[action.id])}</div>
                          <div className="text-xs text-muted-foreground">{t(quickActionDescKey[action.id])}</div>
                        </div>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="xl:col-span-3">
            <div className="flex gap-2 mb-4">
              <Button
                variant={activeWidget === 'chat' ? 'agricultural' : 'outline'}
                onClick={() => setActiveWidget('chat')}
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                {t('navigation.aiChat')}
              </Button>
              <Button
                variant={activeWidget === 'weather' ? 'agricultural' : 'outline'}
                onClick={() => setActiveWidget('weather')}
                className="flex items-center gap-2"
              >
                <Cloud className="h-4 w-4" />
                {t('navigation.weather')}
              </Button>
              <Button
                variant={activeWidget === 'market' ? 'agricultural' : 'outline'}
                onClick={() => setActiveWidget('market')}
                className="flex items-center gap-2"
              >
                <TrendingUp className="h-4 w-4" />
                {t('navigation.marketPrices')}
              </Button>
            </div>

            {renderActiveWidget()}
          </div>
        </div>
      </div>

      {/* Modals */}
      <ProfileEdit
        farmerData={currentFarmerData}
        onUpdate={handleProfileUpdate}
        language={language}
        isOpen={isProfileEditOpen}
        onClose={() => setIsProfileEditOpen(false)}
      />

      <Settings
        language={language}
        onLanguageChange={onLanguageChange}
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />

      <Notifications
        language={language}
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
      />

      <Toaster />
    </div>
  );
};