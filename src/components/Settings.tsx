import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  Settings as SettingsIcon, 
  Bell, 
  Globe, 
  Palette, 
  User, 
  Shield, 
  Smartphone,
  Volume2,
  Vibrate,
  Wifi,
  Moon,
  Sun,
  Monitor,
  Type,
  Save
} from 'lucide-react';
import { useTranslation } from "@/lib/translations";

interface SettingsProps {
  language: string;
  onLanguageChange: (language: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

interface SettingsData {
  // Notifications
  enableNotifications: boolean;
  emailNotifications: boolean;
  pushNotifications: boolean;
  soundNotifications: boolean;
  vibration: boolean;
  notificationFrequency: 'low' | 'medium' | 'high';
  
  // Appearance
  theme: 'light' | 'dark' | 'system';
  fontSize: 'small' | 'medium' | 'large';
  
  // Data & Sync
  autoSync: boolean;
  offlineMode: boolean;
  dataUsage: 'low' | 'medium' | 'high';
}

export const Settings: React.FC<SettingsProps> = ({
  language,
  onLanguageChange,
  isOpen,
  onClose
}) => {
  const { toast } = useToast();
  const t = useTranslation(language);
  const [settings, setSettings] = useState<SettingsData>({
    enableNotifications: true,
    emailNotifications: true,
    pushNotifications: true,
    soundNotifications: true,
    vibration: true,
    notificationFrequency: 'medium',
    theme: 'system',
    fontSize: 'medium',
    autoSync: true,
    offlineMode: false,
    dataUsage: 'medium',
  });

  const handleSettingChange = (key: keyof SettingsData, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    // Save settings to localStorage or backend
    localStorage.setItem('krishi-settings', JSON.stringify(settings));
    toast({
      title: t('common.success'),
      description: t('settings.settingsSaved'),
    });
    onClose();
  };

  const handleReset = () => {
    setSettings({
      enableNotifications: true,
      emailNotifications: true,
      pushNotifications: true,
      soundNotifications: true,
      vibration: true,
      notificationFrequency: 'medium',
      theme: 'system',
      fontSize: 'medium',
      autoSync: true,
      offlineMode: false,
      dataUsage: 'medium',
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <SettingsIcon className="h-5 w-5" />
            {t('settings.title')}
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general" className="flex items-center gap-2">
              <SettingsIcon className="h-4 w-4" />
              {t('settings.general')}
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              {t('settings.notifications')}
            </TabsTrigger>
            <TabsTrigger value="appearance" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              {t('settings.theme')}
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              {t('settings.privacy')}
            </TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  {t('settings.language')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="language">{t('settings.language')}</Label>
                  <Select value={language} onValueChange={onLanguageChange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="hi">हिन्दी (Hindi)</SelectItem>
                      <SelectItem value="ta">தமிழ் (Tamil)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  {t('settings.dataUsage')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="dataUsage">{t('settings.dataUsage')}</Label>
                  <Select
                    value={settings.dataUsage}
                    onValueChange={(value: 'low' | 'medium' | 'high') => handleSettingChange('dataUsage', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low (WiFi only)</SelectItem>
                      <SelectItem value="medium">Medium (WiFi + 4G)</SelectItem>
                      <SelectItem value="high">High (All networks)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>{t('settings.autoSync')}</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically sync data when online
                    </p>
                  </div>
                  <Switch
                    checked={settings.autoSync}
                    onCheckedChange={(checked) => handleSettingChange('autoSync', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>{t('settings.offlineMode')}</Label>
                    <p className="text-sm text-muted-foreground">
                      Work offline when possible
                    </p>
                  </div>
                  <Switch
                    checked={settings.offlineMode}
                    onCheckedChange={(checked) => handleSettingChange('offlineMode', checked)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Settings */}
          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  {t('settings.notifications')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>{t('settings.enableNotifications')}</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable all notifications
                    </p>
                  </div>
                  <Switch
                    checked={settings.enableNotifications}
                    onCheckedChange={(checked) => handleSettingChange('enableNotifications', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>{t('settings.emailNotifications')}</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => handleSettingChange('emailNotifications', checked)}
                    disabled={!settings.enableNotifications}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>{t('settings.pushNotifications')}</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive push notifications
                    </p>
                  </div>
                  <Switch
                    checked={settings.pushNotifications}
                    onCheckedChange={(checked) => handleSettingChange('pushNotifications', checked)}
                    disabled={!settings.enableNotifications}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>{t('settings.soundNotifications')}</Label>
                    <p className="text-sm text-muted-foreground">
                      Play sound for notifications
                    </p>
                  </div>
                  <Switch
                    checked={settings.soundNotifications}
                    onCheckedChange={(checked) => handleSettingChange('soundNotifications', checked)}
                    disabled={!settings.enableNotifications}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>{t('settings.vibration')}</Label>
                    <p className="text-sm text-muted-foreground">
                      Vibrate for notifications
                    </p>
                  </div>
                  <Switch
                    checked={settings.vibration}
                    onCheckedChange={(checked) => handleSettingChange('vibration', checked)}
                    disabled={!settings.enableNotifications}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="frequency">{t('settings.notificationFrequency')}</Label>
                  <Select
                    value={settings.notificationFrequency}
                    onValueChange={(value: 'low' | 'medium' | 'high') => handleSettingChange('notificationFrequency', value)}
                    disabled={!settings.enableNotifications}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low (Important only)</SelectItem>
                      <SelectItem value="medium">Medium (Regular updates)</SelectItem>
                      <SelectItem value="high">High (All updates)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appearance Settings */}
          <TabsContent value="appearance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  {t('settings.theme')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="theme">{t('settings.theme')}</Label>
                  <Select
                    value={settings.theme}
                    onValueChange={(value: 'light' | 'dark' | 'system') => handleSettingChange('theme', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">
                        <div className="flex items-center gap-2">
                          <Sun className="h-4 w-4" />
                          {t('settings.lightMode')}
                        </div>
                      </SelectItem>
                      <SelectItem value="dark">
                        <div className="flex items-center gap-2">
                          <Moon className="h-4 w-4" />
                          {t('settings.darkMode')}
                        </div>
                      </SelectItem>
                      <SelectItem value="system">
                        <div className="flex items-center gap-2">
                          <Monitor className="h-4 w-4" />
                          {t('settings.systemTheme')}
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fontSize">{t('settings.fontSize')}</Label>
                  <Select
                    value={settings.fontSize}
                    onValueChange={(value: 'small' | 'medium' | 'large') => handleSettingChange('fontSize', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">
                        <div className="flex items-center gap-2">
                          <Type className="h-4 w-4" />
                          {t('settings.small')}
                        </div>
                      </SelectItem>
                      <SelectItem value="medium">
                        <div className="flex items-center gap-2">
                          <Type className="h-4 w-4" />
                          {t('settings.medium')}
                        </div>
                      </SelectItem>
                      <SelectItem value="large">
                        <div className="flex items-center gap-2">
                          <Type className="h-4 w-4" />
                          {t('settings.large')}
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Settings */}
          <TabsContent value="privacy" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  {t('settings.privacy')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Data Collection</h4>
                  <p className="text-sm text-muted-foreground">
                    We collect minimal data necessary for providing agricultural services.
                    Your farming data is used only to provide personalized recommendations.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Data Sharing</h4>
                  <p className="text-sm text-muted-foreground">
                    We do not share your personal farming data with third parties.
                    Anonymous data may be used for improving agricultural insights.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Data Security</h4>
                  <p className="text-sm text-muted-foreground">
                    All data is encrypted and stored securely. You can request data deletion at any time.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex justify-between pt-4 border-t">
          <Button variant="outline" onClick={handleReset}>
            {t('settings.resetSettings')}
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>
              {t('common.cancel')}
            </Button>
            <Button onClick={handleSave} className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              {t('settings.saveSettings')}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
