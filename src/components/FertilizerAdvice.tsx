import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calculator, Leaf, TrendingUp, Calendar, Droplets, Info } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useTranslation } from '@/lib/translations';
import { getCropData, getAvailableCrops, CropData } from '@/lib/cropData';

interface FertilizerAdviceProps {
  language: string;
  farmerData?: {
    crops: string[];
    location: string;
  };
}

interface SoilData {
  name: string;
  ph: string;
  characteristics: string;
  recommendations: string;
}

const soilData: Record<string, SoilData> = {
  red: {
    name: 'Red Soil',
    ph: '6.0 - 7.5',
    characteristics: 'Well-drained, low organic matter, acidic',
    recommendations: 'Add lime for pH correction, increase organic matter'
  },
  black: {
    name: 'Black Soil',
    ph: '7.5 - 8.5',
    characteristics: 'High clay content, good water retention, alkaline',
    recommendations: 'Good for most crops, add gypsum if needed'
  },
  alluvial: {
    name: 'Alluvial Soil',
    ph: '6.5 - 8.0',
    characteristics: 'Fertile, well-drained, good for agriculture',
    recommendations: 'Ideal for most crops, maintain organic matter'
  },
  sandy: {
    name: 'Sandy Soil',
    ph: '6.0 - 7.0',
    characteristics: 'Poor water retention, low nutrients, well-drained',
    recommendations: 'Add organic matter, frequent irrigation needed'
  }
};

export const FertilizerAdvice: React.FC<FertilizerAdviceProps> = ({ language, farmerData }) => {
  const t = useTranslation(language);
  const [selectedCrop, setSelectedCrop] = useState<string>('');
  const [selectedSoil, setSelectedSoil] = useState<string>('');
  const [landSize, setLandSize] = useState<number>(1);
  const [selectedType, setSelectedType] = useState<'organic' | 'synthetic'>('organic');

  // Get available crops for the user
  const availableCrops = farmerData?.crops ? getAvailableCrops(farmerData.crops) : [];
  
  // Auto-select first crop if available
  useEffect(() => {
    if (availableCrops.length > 0 && !selectedCrop) {
      setSelectedCrop(availableCrops[0].name.toLowerCase());
    }
  }, [availableCrops, selectedCrop]);

  const calculateFertilizerRequirement = (npk: { N: number; P: number; K: number }, landSize: number) => {
    return {
      N: Math.round(npk.N * landSize * 10) / 10,
      P: Math.round(npk.P * landSize * 10) / 10,
      K: Math.round(npk.K * landSize * 10) / 10
    };
  };

  const calculateCost = (fertilizer: any, requirement: { N: number; P: number; K: number }) => {
    const nCost = (requirement.N / fertilizer.npk.N) * fertilizer.cost;
    const pCost = (requirement.P / fertilizer.npk.P) * fertilizer.cost;
    const kCost = (requirement.K / fertilizer.npk.K) * fertilizer.cost;
    return Math.round((nCost + pCost + kCost) * 10) / 10;
  };

  const getTotalNPK = () => {
    if (!selectedCrop) return { N: 0, P: 0, K: 0 };
    
    const crop = getCropData(selectedCrop);
    if (!crop) return { N: 0, P: 0, K: 0 };
    
    let total = { N: 0, P: 0, K: 0 };
    
    Object.values(crop.stages).forEach(stage => {
      total.N += stage.npk.N;
      total.P += stage.npk.P;
      total.K += stage.npk.K;
    });
    
    return total;
  };

  const totalNPK = getTotalNPK();
  const totalRequirement = calculateFertilizerRequirement(totalNPK, landSize);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-green-600" />
            {t('fertilizerAdvice.title')}
          </CardTitle>
          <CardDescription>
            {t('fertilizerAdvice.description')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('fertilizerAdvice.selectCrop')}</label>
              <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                <SelectTrigger>
                  <SelectValue placeholder={t('fertilizerAdvice.selectCrop')} />
                </SelectTrigger>
                <SelectContent>
                  {availableCrops.map((crop) => (
                    <SelectItem key={crop.name.toLowerCase()} value={crop.name.toLowerCase()}>
                      {crop.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('fertilizerAdvice.selectSoil')}</label>
              <Select value={selectedSoil} onValueChange={setSelectedSoil}>
                <SelectTrigger>
                  <SelectValue placeholder={t('fertilizerAdvice.selectSoil')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="red">Red Soil</SelectItem>
                  <SelectItem value="black">Black Soil</SelectItem>
                  <SelectItem value="alluvial">Alluvial Soil</SelectItem>
                  <SelectItem value="sandy">Sandy Soil</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('fertilizerAdvice.landSize')}</label>
              <input
                type="number"
                value={landSize}
                onChange={(e) => setLandSize(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                min="0.1"
                step="0.1"
              />
            </div>
          </div>

          {selectedSoil && soilData[selectedSoil] && (
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                <strong>{soilData[selectedSoil].name}:</strong> {soilData[selectedSoil].characteristics}
                <br />
                <strong>Recommendation:</strong> {soilData[selectedSoil].recommendations}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {selectedCrop && getCropData(selectedCrop) && (
        <>
          <Tabs value={selectedType} onValueChange={(value) => setSelectedType(value as 'organic' | 'synthetic')}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="organic">{t('fertilizerAdvice.organicOptions')}</TabsTrigger>
              <TabsTrigger value="synthetic">{t('fertilizerAdvice.syntheticOptions')}</TabsTrigger>
            </TabsList>

            <TabsContent value="organic" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-green-600" />
                    {t('fertilizerAdvice.organicOptions')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(getCropData(selectedCrop)!.organicAlternatives).map(([key, fertilizer]) => {
                    const cost = calculateCost(fertilizer, totalRequirement);
                    return (
                      <div key={key} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}</h4>
                          <Badge variant="secondary">₹{cost}/acre</Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-blue-600 font-medium">N: {fertilizer.npk.N}%</span>
                          </div>
                          <div>
                            <span className="text-green-600 font-medium">P: {fertilizer.npk.P}%</span>
                          </div>
                          <div>
                            <span className="text-orange-600 font-medium">K: {fertilizer.npk.K}%</span>
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          {t('fertilizerAdvice.required')}: {Math.round((totalRequirement.N / fertilizer.npk.N) * 100) / 100} kg/acre
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="synthetic" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-blue-600" />
                    {t('fertilizerAdvice.syntheticOptions')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(getCropData(selectedCrop)!.syntheticOptions).map(([key, fertilizer]) => {
                    const cost = calculateCost(fertilizer, totalRequirement);
                    return (
                      <div key={key} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold uppercase">{key}</h4>
                          <Badge variant="secondary">₹{cost}/acre</Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-blue-600 font-medium">N: {fertilizer.npk.N}%</span>
                          </div>
                          <div>
                            <span className="text-green-600 font-medium">P: {fertilizer.npk.P}%</span>
                          </div>
                          <div>
                            <span className="text-orange-600 font-medium">K: {fertilizer.npk.K}%</span>
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          {t('fertilizerAdvice.required')}: {Math.round((totalRequirement.N / fertilizer.npk.N) * 100) / 100} kg/acre
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                {t('fertilizerAdvice.applicationSchedule')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(getCropData(selectedCrop)!.stages).map(([stage, data]) => (
                  <div key={stage} className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-700">{stage}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                      <div>
                        <span className="text-sm font-medium">NPK (kg/acre):</span>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="outline" className="text-blue-600">N: {data.npk.N}</Badge>
                          <Badge variant="outline" className="text-green-600">P: {data.npk.P}</Badge>
                          <Badge variant="outline" className="text-orange-600">K: {data.npk.K}</Badge>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-medium">{t('fertilizerAdvice.timing')}:</span>
                        <p className="text-sm text-gray-600">{data.timing}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium">{t('fertilizerAdvice.application')}:</span>
                        <p className="text-sm text-gray-600">{data.application}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                {t('fertilizerAdvice.totalRequirements')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{totalRequirement.N} kg</div>
                  <div className="text-sm text-gray-600">{t('fertilizerAdvice.nitrogen')}</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{totalRequirement.P} kg</div>
                  <div className="text-sm text-gray-600">{t('fertilizerAdvice.phosphorus')}</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{totalRequirement.K} kg</div>
                  <div className="text-sm text-gray-600">{t('fertilizerAdvice.potassium')}</div>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  {t('fertilizerAdvice.totalNpkRequirement')} <strong>{landSize} {t('fertilizerAdvice.acres')}</strong> of <strong>{getCropData(selectedCrop)!.name}</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};
