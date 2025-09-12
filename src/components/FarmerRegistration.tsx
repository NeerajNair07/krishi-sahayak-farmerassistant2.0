import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, User, Wheat, Calculator } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/integrations/supabase/client';

interface FarmerData {
  name: string;
  location: string;
  crops: string[];
  landSize: number;
  landUnit: 'acres' | 'hectares';
  phone: string;
}

interface FarmerRegistrationProps {
  onRegistrationComplete: (farmerData: FarmerData) => void;
}

const cropOptions = [
  'Rice', 'Wheat', 'Cotton', 'Sugarcane', 'Maize', 'Soybean', 
  'Groundnut', 'Sunflower', 'Onion', 'Potato', 'Tomato', 'Chili',
  'Turmeric', 'Coriander', 'Cumin', 'Other'
];

export const FarmerRegistration: React.FC<FarmerRegistrationProps> = ({
  onRegistrationComplete,
}) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FarmerData>({
    name: '',
    location: '',
    crops: [],
    landSize: 0,
    landUnit: 'acres',
    phone: '',
  });

  const [selectedCrops, setSelectedCrops] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);

  const handleCropToggle = (crop: string) => {
    const updated = selectedCrops.includes(crop)
      ? selectedCrops.filter(c => c !== crop)
      : [...selectedCrops, crop];
    
    setSelectedCrops(updated);
    setFormData(prev => ({ ...prev, crops: updated }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.location || selectedCrops.length === 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and select at least one crop.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Authentication Error", 
          description: "Please sign in first.",
          variant: "destructive",
        });
        return;
      }

      const { error } = await supabase
        .from('farmer_profiles')
        .insert({
          user_id: user.id,
          name: formData.name,
          location: formData.location,
          crops: selectedCrops,
          land_size: formData.landSize,
          land_unit: formData.landUnit,
          phone: formData.phone,
          latitude: coordinates?.lat || null,
          longitude: coordinates?.lng || null,
        });

      if (error) {
        toast({
          title: "Registration Failed",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      const finalFarmerData: FarmerData = {
        ...formData,
        crops: selectedCrops
      };

      toast({
        title: "Registration Complete!",
        description: "Your farmer profile has been created successfully.",
      });

      onRegistrationComplete(finalFarmerData);
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred during registration.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates({ lat: latitude, lng: longitude });
          
          try {
            // Use OpenStreetMap Nominatim for reverse geocoding (free service)
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`
            );
            const data = await response.json();
            
            if (data && data.display_name) {
              // Extract meaningful location (city, state, country)
              const parts = data.display_name.split(', ');
              const location = parts.slice(0, 3).join(', '); // Get first 3 parts for readability
              
              setFormData(prev => ({
                ...prev,
                location: location
              }));
              
              toast({
                title: "Location Found",
                description: `Your location has been set to: ${location}`,
              });
            } else {
              throw new Error('Location not found');
            }
          } catch (error) {
            // Fallback to coordinates if reverse geocoding fails
            setFormData(prev => ({ 
              ...prev, 
              location: `${latitude.toFixed(4)}, ${longitude.toFixed(4)}` 
            }));
            
            toast({
              title: "Location Set",
              description: "Using coordinates as location name was not found.",
            });
          }
        },
        (error) => {
          toast({
            title: "Location Error",
            description: "Could not get your location. Please enter manually.",
            variant: "destructive",
          });
        }
      );
    } else {
      toast({
        title: "Not Supported",
        description: "Geolocation is not supported by this browser.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen agricultural-pattern bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-strong">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gradient-primary">
            🌾 Krishi Sahayak Registration
          </CardTitle>
          <CardDescription>
            Join thousands of farmers getting personalized agricultural guidance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter your full name"
                className="border-border"
                required
              />
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="+91 XXXXX XXXXX"
                className="border-border"
              />
            </div>

            {/* Location Field */}
            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Location *
              </Label>
              <div className="flex gap-2">
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="Enter your village/city"
                  className="flex-1 border-border"
                  required
                />
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={getCurrentLocation}
                  className="px-3"
                >
                  📍 GPS
                </Button>
              </div>
            </div>

            {/* Land Size */}
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-2">
                <Calculator className="h-4 w-4 text-primary" />
                Land Size
              </Label>
              <div className="flex gap-2">
                <Input
                  type="number"
                  value={formData.landSize || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, landSize: Number(e.target.value) }))}
                  placeholder="0"
                  className="flex-1 border-border"
                  min="0"
                  step="0.1"
                />
                <Select value={formData.landUnit} onValueChange={(value: 'acres' | 'hectares') => 
                  setFormData(prev => ({ ...prev, landUnit: value }))}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="acres">Acres</SelectItem>
                    <SelectItem value="hectares">Hectares</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Crops Selection */}
            <div className="space-y-3">
              <Label className="text-sm font-medium flex items-center gap-2">
                <Wheat className="h-4 w-4 text-primary" />
                Crops Grown *
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {cropOptions.map((crop) => (
                  <Button
                    key={crop}
                    type="button"
                    variant={selectedCrops.includes(crop) ? "agricultural" : "outline"}
                    size="sm"
                    onClick={() => handleCropToggle(crop)}
                    className="text-xs h-8"
                  >
                    {crop}
                  </Button>
                ))}
              </div>
              {selectedCrops.length > 0 && (
                <p className="text-xs text-muted-foreground">
                  Selected: {selectedCrops.join(', ')}
                </p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              variant="agricultural" 
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? "Creating Profile..." : "Complete Registration 🚀"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};