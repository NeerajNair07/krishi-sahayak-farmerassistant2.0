import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { X, Plus, MapPin, Phone, Crop, Ruler, User } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "@/lib/translations";

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

interface ProfileEditProps {
  farmerData: FarmerData;
  onUpdate: (updatedData: FarmerData) => void;
  language: string;
  isOpen: boolean;
  onClose: () => void;
}

const commonCrops = [
  'Rice', 'Wheat', 'Maize', 'Sugarcane', 'Cotton', 'Soybean', 'Groundnut',
  'Sunflower', 'Mustard', 'Chickpea', 'Pigeon Pea', 'Green Gram', 'Black Gram',
  'Red Gram', 'Lentil', 'Potato', 'Onion', 'Tomato', 'Chilli', 'Turmeric',
  'Ginger', 'Cardamom', 'Pepper', 'Coconut', 'Mango', 'Banana', 'Grapes',
  'Apple', 'Orange', 'Lemon', 'Pomegranate', 'Guava', 'Papaya', 'Watermelon',
  'Cucumber', 'Brinjal', 'Okra', 'Cabbage', 'Cauliflower', 'Spinach',
  'Coriander', 'Fenugreek', 'Cumin', 'Fennel', 'Ajwain', 'Basil', 'Mint'
];

export const ProfileEdit: React.FC<ProfileEditProps> = ({
  farmerData,
  onUpdate,
  language,
  isOpen,
  onClose
}) => {
  const { toast } = useToast();
  const t = useTranslation(language);
  const [formData, setFormData] = useState<FarmerData>(farmerData);
  const [newCrop, setNewCrop] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cropSearch, setCropSearch] = useState('');

  useEffect(() => {
    setFormData(farmerData);
  }, [farmerData]);

  const handleInputChange = (field: keyof FarmerData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddCrop = () => {
    if (newCrop.trim() && !formData.crops.includes(newCrop.trim())) {
      setFormData(prev => ({
        ...prev,
        crops: [...prev.crops, newCrop.trim()]
      }));
      setNewCrop('');
    }
  };

  const handleRemoveCrop = (cropToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      crops: prev.crops.filter(crop => crop !== cropToRemove)
    }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');

      const { error } = await supabase
        .from('farmer_profiles')
        .update({
          name: formData.name,
          location: formData.location,
          phone: formData.phone,
          land_size: formData.landSize,
          land_unit: formData.landUnit,
          crops: formData.crops,
          latitude: formData.latitude,
          longitude: formData.longitude,
          updated_at: new Date().toISOString()
        })
        .eq('user_id', user.id);

      if (error) throw error;

      onUpdate(formData);
      toast({
        title: t('common.success'),
        description: t('profile.profileUpdated'),
      });
      onClose();
    } catch (error) {
      console.error('Profile update error:', error);
      toast({
        title: t('common.error'),
        description: t('errors.unknownError'),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const filteredCrops = commonCrops.filter(crop =>
    crop.toLowerCase().includes(cropSearch.toLowerCase())
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            {t('profile.editProfile')}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t('profile.personalInfo')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('profile.name')}</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder={t('profile.name')}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('profile.phone')}</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder={t('profile.enterPhone')}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">{t('profile.location')}</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder={t('profile.enterLocation')}
                    className="pl-10"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Farming Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t('profile.farmingInfo')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="landSize">{t('profile.landSize')}</Label>
                  <div className="relative">
                    <Ruler className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="landSize"
                      type="number"
                      value={formData.landSize}
                      onChange={(e) => handleInputChange('landSize', parseFloat(e.target.value) || 0)}
                      placeholder={t('profile.enterLandSize')}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="landUnit">{t('profile.landUnit')}</Label>
                  <Select
                    value={formData.landUnit}
                    onValueChange={(value: 'acres' | 'hectares') => handleInputChange('landUnit', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t('profile.selectLandUnit')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="acres">Acres</SelectItem>
                      <SelectItem value="hectares">Hectares</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Crops Section */}
              <div className="space-y-4">
                <Label>{t('profile.crops')}</Label>
                
                {/* Current Crops */}
                <div className="flex flex-wrap gap-2">
                  {formData.crops.map((crop, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      <Crop className="h-3 w-3" />
                      {crop}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-4 w-4 p-0 hover:bg-destructive hover:text-destructive-foreground"
                        onClick={() => handleRemoveCrop(crop)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>

                {/* Add New Crop */}
                <div className="space-y-2">
                  <Label>{t('profile.addCrop')}</Label>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Input
                        value={cropSearch}
                        onChange={(e) => setCropSearch(e.target.value)}
                        placeholder="Search crops..."
                        className="mb-2"
                      />
                      {cropSearch && (
                        <div className="max-h-32 overflow-y-auto border rounded-md">
                          {filteredCrops.slice(0, 10).map((crop) => (
                            <button
                              key={crop}
                              className="w-full text-left px-3 py-2 hover:bg-muted text-sm"
                              onClick={() => {
                                if (!formData.crops.includes(crop)) {
                                  handleInputChange('crops', [...formData.crops, crop]);
                                }
                                setCropSearch('');
                              }}
                            >
                              {crop}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        value={newCrop}
                        onChange={(e) => setNewCrop(e.target.value)}
                        placeholder="Custom crop name"
                        onKeyPress={(e) => e.key === 'Enter' && handleAddCrop()}
                      />
                      <Button onClick={handleAddCrop} disabled={!newCrop.trim()}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coordinates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="latitude">{t('profile.latitude')}</Label>
                  <Input
                    id="latitude"
                    type="number"
                    step="any"
                    value={formData.latitude || ''}
                    onChange={(e) => handleInputChange('latitude', parseFloat(e.target.value) || undefined)}
                    placeholder="12.9716"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="longitude">{t('profile.longitude')}</Label>
                  <Input
                    id="longitude"
                    type="number"
                    step="any"
                    value={formData.longitude || ''}
                    onChange={(e) => handleInputChange('longitude', parseFloat(e.target.value) || undefined)}
                    placeholder="77.5946"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              {t('common.cancel')}
            </Button>
            <Button onClick={handleSave} disabled={isLoading}>
              {isLoading ? t('common.loading') : t('profile.updateProfile')}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
