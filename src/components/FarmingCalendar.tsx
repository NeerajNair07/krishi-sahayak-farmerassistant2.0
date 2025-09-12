import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, Cloud, AlertTriangle, CheckCircle, Circle, Plus, Edit, Trash2, Save } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useTranslation } from '@/lib/translations';
import { 
  getUserCropCalendars, 
  getActivitiesForMonth, 
  getActivitiesForWeek,
  CropCalendar,
  CropActivity,
  UserCalendarEntry 
} from '@/lib/farmingCalendarData';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface FarmingCalendarProps {
  language: string;
  farmerData?: {
    crops: string[];
    location: string;
    latitude?: number;
    longitude?: number;
  };
}

interface WeatherData {
  temperature: number;
  humidity: number;
  precipitation: number;
  windSpeed: number;
  condition: string;
}

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const activityTypeColors = {
  sowing: 'bg-green-100 text-green-800',
  fertilizing: 'bg-blue-100 text-blue-800',
  irrigation: 'bg-cyan-100 text-cyan-800',
  pest_control: 'bg-red-100 text-red-800',
  harvesting: 'bg-orange-100 text-orange-800',
  procurement: 'bg-purple-100 text-purple-800',
  other: 'bg-gray-100 text-gray-800'
};

const priorityColors = {
  high: 'bg-red-100 text-red-800',
  medium: 'bg-yellow-100 text-yellow-800',
  low: 'bg-green-100 text-green-800'
};

export const FarmingCalendar: React.FC<FarmingCalendarProps> = ({ language, farmerData }) => {
  const t = useTranslation(language);
  const { toast } = useToast();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentWeek, setCurrentWeek] = useState(1);
  const [userEntries, setUserEntries] = useState<UserCalendarEntry[]>([]);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('monthly');

  // Get available crop calendars for the user
  const availableCalendars = farmerData?.crops ? getUserCropCalendars(farmerData.crops) : [];

  // Load user's saved calendar entries
  useEffect(() => {
    loadUserEntries();
  }, []);

  // Load weather data
  useEffect(() => {
    if (farmerData?.latitude && farmerData?.longitude) {
      loadWeatherData();
    }
  }, [farmerData]);

  const loadUserEntries = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('user_calendar_entries')
        .select('*')
        .eq('user_id', user.id)
        .order('scheduled_date', { ascending: true });

      if (error) throw error;
      setUserEntries(data || []);
    } catch (error) {
      console.error('Error loading user entries:', error);
    }
  };

  const loadWeatherData = async () => {
    try {
      // Get OpenWeather API key from Supabase environment
      const { data: { public: { openweather_api_key } } } = await supabase
        .from('_env')
        .select('openweather_api_key')
        .single();

      if (!openweather_api_key || !farmerData?.latitude || !farmerData?.longitude) return;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${farmerData.latitude}&lon=${farmerData.longitude}&appid=${openweather_api_key}&units=metric`
      );
      
      if (response.ok) {
        const data = await response.json();
        setWeatherData({
          temperature: data.main.temp,
          humidity: data.main.humidity,
          precipitation: data.rain?.['1h'] || 0,
          windSpeed: data.wind.speed,
          condition: data.weather[0].main
        });
      }
    } catch (error) {
      console.error('Error loading weather data:', error);
    }
  };

  const saveUserEntry = async (activity: CropActivity, scheduledDate: string, notes?: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const entry: Omit<UserCalendarEntry, 'id' | 'createdAt' | 'updatedAt'> = {
        userId: user.id,
        cropName: activity.name,
        activityId: activity.id,
        scheduledDate,
        status: 'pending',
        notes,
        weatherAdjusted: false
      };

      const { data, error } = await supabase
        .from('user_calendar_entries')
        .insert([entry])
        .select()
        .single();

      if (error) throw error;

      setUserEntries(prev => [...prev, { ...data, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }]);
      
      toast({
        title: "Activity Scheduled",
        description: `${activity.name} has been added to your calendar.`,
      });
    } catch (error) {
      console.error('Error saving entry:', error);
      toast({
        title: "Error",
        description: "Failed to save calendar entry.",
        variant: "destructive",
      });
    }
  };

  const updateEntryStatus = async (entryId: string, status: 'pending' | 'completed' | 'cancelled') => {
    try {
      const { error } = await supabase
        .from('user_calendar_entries')
        .update({ 
          status,
          completedDate: status === 'completed' ? new Date().toISOString() : null,
          updatedAt: new Date().toISOString()
        })
        .eq('id', entryId);

      if (error) throw error;

      setUserEntries(prev => 
        prev.map(entry => 
          entry.id === entryId 
            ? { ...entry, status, completedDate: status === 'completed' ? new Date().toISOString() : null }
            : entry
        )
      );

      toast({
        title: "Status Updated",
        description: `Activity marked as ${status}.`,
      });
    } catch (error) {
      console.error('Error updating entry:', error);
      toast({
        title: "Error",
        description: "Failed to update activity status.",
        variant: "destructive",
      });
    }
  };

  const getWeatherAdjustment = (activity: CropActivity): string => {
    if (!weatherData || !activity.weatherDependent) return '';

    const { temperature, precipitation, windSpeed, condition } = weatherData;
    
    if (activity.type === 'sowing' || activity.type === 'harvesting') {
      if (precipitation > 5) return 'Delay due to rain';
      if (windSpeed > 15) return 'Delay due to high winds';
    }
    
    if (activity.type === 'irrigation') {
      if (precipitation > 10) return 'Reduce irrigation due to rain';
      if (temperature > 35) return 'Increase irrigation frequency';
    }
    
    if (activity.type === 'pest_control') {
      if (windSpeed > 10) return 'Delay spraying due to wind';
      if (precipitation > 2) return 'Delay due to rain';
    }

    return '';
  };

  const getActivitiesForCurrentView = () => {
    if (activeTab === 'monthly') {
      return getActivitiesForMonth(availableCalendars, currentMonth);
    } else {
      return getActivitiesForWeek(availableCalendars, currentMonth, currentWeek);
    }
  };

  const getUserEntriesForCurrentView = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    
    return userEntries.filter(entry => {
      const entryDate = new Date(entry.scheduledDate);
      const entryMonth = entryDate.getMonth() + 1;
      const entryWeek = Math.ceil(entryDate.getDate() / 7);
      
      if (activeTab === 'monthly') {
        return entryMonth === currentMonth && entryDate.getFullYear() === currentYear;
      } else {
        return entryMonth === currentMonth && entryWeek === currentWeek && entryDate.getFullYear() === currentYear;
      }
    });
  };

  const renderActivityCard = (activity: CropActivity) => {
    const userEntry = userEntries.find(entry => entry.activityId === activity.id);
    const weatherAdjustment = getWeatherAdjustment(activity);
    
    return (
      <Card key={activity.id} className="mb-4">
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div className="flex-1">
              <h4 className="font-semibold text-lg">{activity.name}</h4>
              <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge className={activityTypeColors[activity.type]}>
                  {activity.type.replace('_', ' ')}
                </Badge>
                <Badge className={priorityColors[activity.priority]}>
                  {activity.priority} priority
                </Badge>
                <Badge variant="outline">
                  {activity.duration} day{activity.duration > 1 ? 's' : ''}
                </Badge>
              </div>

              {activity.inputs && (
                <div className="mb-3">
                  <h5 className="font-medium text-sm mb-1">Required Inputs:</h5>
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    {activity.inputs.map((input, index) => (
                      <li key={index}>{input}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activity.notes && (
                <div className="mb-3">
                  <h5 className="font-medium text-sm mb-1">Notes:</h5>
                  <p className="text-sm text-gray-600">{activity.notes}</p>
                </div>
              )}

              {weatherAdjustment && (
                <Alert className="mb-3">
                  <Cloud className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Weather Adjustment:</strong> {weatherAdjustment}
                  </AlertDescription>
                </Alert>
              )}

              {userEntry && (
                <div className="mb-3 p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span className="font-medium text-blue-800">Scheduled</span>
                    <Badge variant={userEntry.status === 'completed' ? 'default' : 'secondary'}>
                      {userEntry.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-blue-700">
                    Scheduled for: {new Date(userEntry.scheduledDate).toLocaleDateString()}
                  </p>
                  {userEntry.notes && (
                    <p className="text-sm text-blue-700 mt-1">
                      Notes: {userEntry.notes}
                    </p>
                  )}
                  <div className="flex gap-2 mt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateEntryStatus(userEntry.id, 'completed')}
                      disabled={userEntry.status === 'completed'}
                    >
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Complete
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateEntryStatus(userEntry.id, 'cancelled')}
                      disabled={userEntry.status === 'cancelled'}
                    >
                      <Circle className="h-3 w-3 mr-1" />
                      Cancel
                    </Button>
                  </div>
                </div>
              )}

              {!userEntry && (
                <Button
                  size="sm"
                  onClick={() => {
                    const scheduledDate = new Date();
                    scheduledDate.setMonth(currentMonth - 1);
                    scheduledDate.setDate(currentWeek * 7);
                    saveUserEntry(activity, scheduledDate.toISOString());
                  }}
                >
                  <Plus className="h-3 w-3 mr-1" />
                  Add to Calendar
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-green-600" />
            {t('farmingCalendar.title')}
          </CardTitle>
          <CardDescription>
            {t('farmingCalendar.description')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {weatherData && (
            <Alert className="mb-4">
              <Cloud className="h-4 w-4" />
              <AlertDescription>
                <strong>Current Weather:</strong> {weatherData.condition}, {weatherData.temperature}°C, 
                Humidity: {weatherData.humidity}%, Wind: {weatherData.windSpeed} m/s
              </AlertDescription>
            </Alert>
          )}

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly">Monthly View</TabsTrigger>
              <TabsTrigger value="weekly">Weekly View</TabsTrigger>
            </TabsList>

            <TabsContent value="monthly" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">
                  {monthNames[currentMonth - 1]} Activities
                </h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentMonth(prev => prev > 1 ? prev - 1 : 12)}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentMonth(prev => prev < 12 ? prev + 1 : 1)}
                  >
                    Next
                  </Button>
                </div>
              </div>

              {getActivitiesForCurrentView().length === 0 ? (
                <Card>
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No Activities Scheduled</h3>
                    <p className="text-gray-600">
                      No farming activities are scheduled for {monthNames[currentMonth - 1]}.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {getActivitiesForCurrentView().map(renderActivityCard)}
                </div>
              )}
            </TabsContent>

            <TabsContent value="weekly" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">
                  Week {currentWeek} of {monthNames[currentMonth - 1]}
                </h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentWeek(prev => prev > 1 ? prev - 1 : 4)}
                  >
                    Previous Week
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentWeek(prev => prev < 4 ? prev + 1 : 1)}
                  >
                    Next Week
                  </Button>
                </div>
              </div>

              {getActivitiesForCurrentView().length === 0 ? (
                <Card>
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No Activities Scheduled</h3>
                    <p className="text-gray-600">
                      No farming activities are scheduled for this week.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {getActivitiesForCurrentView().map(renderActivityCard)}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* User's Saved Entries */}
      {getUserEntriesForCurrentView().length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Save className="h-5 w-5 text-blue-600" />
              Your Scheduled Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {getUserEntriesForCurrentView().map(entry => {
                const activity = availableCalendars
                  .flatMap(cal => cal.activities)
                  .find(act => act.id === entry.activityId);
                
                if (!activity) return null;

                return (
                  <div key={entry.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{activity.name}</h4>
                      <p className="text-sm text-gray-600">
                        Scheduled: {new Date(entry.scheduledDate).toLocaleDateString()}
                      </p>
                      {entry.notes && (
                        <p className="text-sm text-gray-600">Notes: {entry.notes}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={entry.status === 'completed' ? 'default' : 'secondary'}>
                        {entry.status}
                      </Badge>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateEntryStatus(entry.id, 'completed')}
                        disabled={entry.status === 'completed'}
                      >
                        <CheckCircle className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
