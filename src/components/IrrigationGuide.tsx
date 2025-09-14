import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Droplets, Calendar, Cloud, AlertTriangle, Info, BookOpen, Thermometer, Sun } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useTranslation } from '@/lib/translations';
import { getCropData, getAvailableCrops, CropData } from '@/lib/cropData';

interface IrrigationGuideProps {
  language: string;
  farmerData?: {
    crops: string[];
    location: string;
  };
}

// Using CropData from cropData.ts which includes water requirements

interface WeatherCondition {
  condition: string;
  adjustment: number; // percentage adjustment to water requirement
  recommendation: string;
}

interface SoilMoistureLevel {
  level: string;
  description: string;
  action: string;
  color: string;
}

// Using crop data from cropData.ts

const weatherConditions: WeatherCondition[] = [
  {
    condition: 'Hot & Dry',
    adjustment: 20,
    recommendation: 'Increase irrigation frequency and amount'
  },
  {
    condition: 'Humid',
    adjustment: -15,
    recommendation: 'Reduce irrigation to prevent waterlogging'
  },
  {
    condition: 'Rainy',
    adjustment: -50,
    recommendation: 'Suspend irrigation, monitor drainage'
  },
  {
    condition: 'Cold',
    adjustment: -10,
    recommendation: 'Reduce irrigation, protect from frost'
  },
  {
    condition: 'Windy',
    adjustment: 10,
    recommendation: 'Increase irrigation due to evaporation'
  }
];

const soilMoistureLevels: SoilMoistureLevel[] = [
  {
    level: 'Very Dry',
    description: 'Soil is completely dry, plants wilting',
    action: 'Immediate irrigation required',
    color: 'bg-red-100 text-red-800'
  },
  {
    level: 'Dry',
    description: 'Soil is dry, plants showing stress',
    action: 'Irrigate within 1-2 days',
    color: 'bg-orange-100 text-orange-800'
  },
  {
    level: 'Optimal',
    description: 'Soil moisture is perfect for plant growth',
    action: 'Maintain current irrigation schedule',
    color: 'bg-green-100 text-green-800'
  },
  {
    level: 'Wet',
    description: 'Soil is moist, approaching saturation',
    action: 'Reduce irrigation frequency',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    level: 'Saturated',
    description: 'Soil is waterlogged, poor aeration',
    action: 'Stop irrigation, improve drainage',
    color: 'bg-purple-100 text-purple-800'
  }
];

const monsoonStrategies = {
  title: "Monsoon Management Strategies",
  content: [
    "Pre-monsoon preparation: Clear drainage channels and repair bunds",
    "During monsoon: Monitor water levels and prevent waterlogging",
    "Post-monsoon: Assess crop damage and plan recovery measures",
    "Drainage systems: Install proper drainage to prevent root rot",
    "Crop selection: Choose flood-tolerant varieties for low-lying areas",
    "Timing: Adjust planting schedules to avoid peak monsoon periods",
    "Soil conservation: Use mulching and cover crops to prevent erosion",
    "Emergency measures: Keep pumps ready for emergency drainage"
  ]
};

const droughtStrategies = {
  title: "Drought Management Strategies",
  content: [
    "Water conservation: Use mulching to reduce evaporation",
    "Efficient irrigation: Switch to drip irrigation systems",
    "Crop selection: Choose drought-tolerant varieties",
    "Soil management: Improve organic matter content",
    "Timing: Irrigate during early morning or evening",
    "Water harvesting: Collect and store rainwater",
    "Alternative sources: Use treated wastewater where possible",
    "Emergency measures: Prioritize critical growth stages"
  ]
};

const wateringSigns = {
  overWatering: {
    title: "Signs of Over-Watering",
    symptoms: [
      "Yellowing leaves starting from bottom",
      "Wilting despite moist soil",
      "Root rot and fungal diseases",
      "Stunted growth and poor yield",
      "Soil compaction and poor aeration",
      "Nutrient leaching and deficiency"
    ],
    solutions: [
      "Reduce irrigation frequency",
      "Improve soil drainage",
      "Check for clogged drainage systems",
      "Allow soil to dry between irrigations",
      "Use raised beds for better drainage",
      "Apply fungicides if root rot is present"
    ]
  },
  underWatering: {
    title: "Signs of Under-Watering",
    symptoms: [
      "Wilting and drooping leaves",
      "Dry, brittle leaves and stems",
      "Reduced growth and yield",
      "Early flowering and maturity",
      "Cracked soil surface",
      "Poor fruit/seed development"
    ],
    solutions: [
      "Increase irrigation frequency",
      "Check irrigation system efficiency",
      "Mulch soil to retain moisture",
      "Water deeply and less frequently",
      "Monitor soil moisture regularly",
      "Consider drought-tolerant varieties"
    ]
  }
};

export const IrrigationGuide: React.FC<IrrigationGuideProps> = ({ language, farmerData }) => {
  const t = useTranslation(language);
  const [selectedCrop, setSelectedCrop] = useState<string>('');
  const [selectedWeather, setSelectedWeather] = useState<string>('');
  const [selectedSoilMoisture, setSelectedSoilMoisture] = useState<string>('');
  const [plantCount, setPlantCount] = useState<number>(100);
  const [activeTab, setActiveTab] = useState<string>('requirements');

  // Get available crops for the user
  const availableCrops = farmerData?.crops ? getAvailableCrops(farmerData.crops) : [];
  
  // Auto-select first crop if available
  useEffect(() => {
    if (availableCrops.length > 0 && !selectedCrop) {
      setSelectedCrop(availableCrops[0].name.toLowerCase());
    }
  }, [availableCrops, selectedCrop]);

  const calculateWaterRequirement = (stage: any, plantCount: number, weatherAdjustment: number = 0) => {
    const baseRequirement = stage.waterRequirement * plantCount;
    const adjustedRequirement = baseRequirement * (1 + weatherAdjustment / 100);
    return Math.round(adjustedRequirement * 10) / 10;
  };

  const getWeatherAdjustment = () => {
    const weather = weatherConditions.find(w => w.condition === selectedWeather);
    return weather ? weather.adjustment : 0;
  };

  const getRecommendedMethod = (crop: CropData) => {
    const methods = crop.irrigationMethods;
    let bestMethod = 'drip';
    let bestScore = 0;

    Object.entries(methods).forEach(([method, data]) => {
      const score = data.efficiency + (data.suitability === 'High' ? 20 : data.suitability === 'Moderate' ? 10 : 0);
      if (score > bestScore) {
        bestScore = score;
        bestMethod = method;
      }
    });

    return { method: bestMethod, data: methods[bestMethod as keyof typeof methods] };
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-blue-600" />
            {t('irrigationGuide.title')}
          </CardTitle>
          <CardDescription>
            {t('irrigationGuide.description')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('irrigationGuide.selectCrop')}</label>
              <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                <SelectTrigger>
                  <SelectValue placeholder={t('irrigationGuide.selectCrop')} />
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
              <label className="text-sm font-medium">{t('irrigationGuide.weatherCondition')}</label>
              <Select value={selectedWeather} onValueChange={setSelectedWeather}>
                <SelectTrigger>
                  <SelectValue placeholder={t('irrigationGuide.weatherCondition')} />
                </SelectTrigger>
                <SelectContent>
                  {weatherConditions.map((weather) => (
                    <SelectItem key={weather.condition} value={weather.condition}>
                      {weather.condition}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('irrigationGuide.soilMoisture')}</label>
              <Select value={selectedSoilMoisture} onValueChange={setSelectedSoilMoisture}>
                <SelectTrigger>
                  <SelectValue placeholder={t('irrigationGuide.soilMoisture')} />
                </SelectTrigger>
                <SelectContent>
                  {soilMoistureLevels.map((level) => (
                    <SelectItem key={level.level} value={level.level}>
                      {level.level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('irrigationGuide.plantCount')}</label>
              <input
                type="number"
                value={plantCount}
                onChange={(e) => setPlantCount(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="1"
                step="1"
              />
            </div>
          </div>

          {selectedWeather && (
            <Alert>
              <Cloud className="h-4 w-4" />
              <AlertDescription>
                <strong>{selectedWeather} Weather:</strong> {weatherConditions.find(w => w.condition === selectedWeather)?.recommendation}
              </AlertDescription>
            </Alert>
          )}

          {selectedSoilMoisture && (
            <Alert>
              <Droplets className="h-4 w-4" />
              <AlertDescription>
                <strong>{selectedSoilMoisture} Soil:</strong> {soilMoistureLevels.find(s => s.level === selectedSoilMoisture)?.action}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {selectedCrop && getCropData(selectedCrop) && (
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="requirements">{t('irrigationGuide.waterRequirements')}</TabsTrigger>
            <TabsTrigger value="methods">{t('irrigationGuide.irrigationMethods')}</TabsTrigger>
            <TabsTrigger value="management">{t('irrigationGuide.managementStrategies')}</TabsTrigger>
            <TabsTrigger value="signs">{t('irrigationGuide.wateringSigns')}</TabsTrigger>
          </TabsList>

          <TabsContent value="requirements" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-green-600" />
                  {t('irrigationGuide.waterRequirements')} - {getCropData(selectedCrop)!.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(getCropData(selectedCrop)!.stages).map(([stage, data]) => {
                    const weatherAdjustment = getWeatherAdjustment();
                    const dailyRequirement = calculateWaterRequirement(data, plantCount, weatherAdjustment);
                    return (
                      <div key={stage} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-green-700">{stage}</h4>
                          {data.criticalPeriod && (
                            <Badge variant="destructive">{t('irrigationGuide.criticalPeriod')}</Badge>
                          )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div>
                          <span className="text-sm font-medium">{t('irrigationGuide.dailyWater')}:</span>
                          <p className="text-lg font-bold text-blue-600">{dailyRequirement} L</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium">{t('irrigationGuide.frequency')}:</span>
                          <p className="text-sm text-gray-600">{data.frequency}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium">{t('irrigationGuide.duration')}:</span>
                          <p className="text-sm text-gray-600">{data.duration}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium">{t('irrigationGuide.perPlant')}:</span>
                          <p className="text-sm text-gray-600">{data.waterRequirement} L/day</p>
                        </div>
                        </div>
                        {weatherAdjustment !== 0 && (
                          <div className="mt-2 text-sm text-orange-600">
                            {t('irrigationGuide.weatherAdjustment')}: {weatherAdjustment > 0 ? '+' : ''}{weatherAdjustment}%
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="methods" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Droplets className="h-5 w-5 text-blue-600" />
                  {t('irrigationGuide.irrigationMethods')} - {getCropData(selectedCrop)!.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(getCropData(selectedCrop)!.irrigationMethods).map(([method, data]) => {
                    const isRecommended = getRecommendedMethod(getCropData(selectedCrop)!).method === method;
                    return (
                      <div key={method} className={`border rounded-lg p-4 ${isRecommended ? 'border-green-500 bg-green-50' : ''}`}>
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold capitalize">{method} Irrigation</h4>
                          <div className="flex gap-2">
                            <Badge variant={data.suitability === 'High' ? 'default' : data.suitability === 'Moderate' ? 'secondary' : 'outline'}>
                              {data.suitability} {t('irrigationGuide.suitability')}
                            </Badge>
                            {isRecommended && <Badge variant="default">{t('irrigationGuide.recommended')}</Badge>}
                          </div>
                        </div>
                        <div className="mb-3">
                          <span className="text-sm font-medium">{t('irrigationGuide.efficiency')}: </span>
                          <span className="text-lg font-bold text-blue-600">{data.efficiency}%</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-green-700 mb-2">{t('irrigationGuide.advantages')}:</h5>
                            <ul className="text-sm space-y-1">
                              {data.pros.map((pro, index) => (
                                <li key={index} className="flex items-center gap-2">
                                  <span className="text-green-500">✓</span>
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-red-700 mb-2">{t('irrigationGuide.disadvantages')}:</h5>
                            <ul className="text-sm space-y-1">
                              {data.cons.map((con, index) => (
                                <li key={index} className="flex items-center gap-2">
                                  <span className="text-red-500">✗</span>
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="management" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cloud className="h-5 w-5 text-blue-600" />
                    {monsoonStrategies.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {monsoonStrategies.content.map((strategy, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-blue-500 mt-1">•</span>
                        {strategy}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sun className="h-5 w-5 text-orange-600" />
                    {droughtStrategies.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {droughtStrategies.content.map((strategy, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-orange-500 mt-1">•</span>
                        {strategy}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="signs" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    {wateringSigns.overWatering.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-red-700 mb-2">Symptoms:</h5>
                      <ul className="space-y-1">
                        {wateringSigns.overWatering.symptoms.map((symptom, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <span className="text-red-500 mt-1">•</span>
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-green-700 mb-2">Solutions:</h5>
                      <ul className="space-y-1">
                        {wateringSigns.overWatering.solutions.map((solution, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 mt-1">✓</span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    {wateringSigns.underWatering.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-orange-700 mb-2">Symptoms:</h5>
                      <ul className="space-y-1">
                        {wateringSigns.underWatering.symptoms.map((symptom, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <span className="text-orange-500 mt-1">•</span>
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-green-700 mb-2">Solutions:</h5>
                      <ul className="space-y-1">
                        {wateringSigns.underWatering.solutions.map((solution, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 mt-1">✓</span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};
