export interface Translations {
  // Common
  common: {
    save: string;
    cancel: string;
    edit: string;
    delete: string;
    confirm: string;
    loading: string;
    error: string;
    success: string;
    close: string;
    back: string;
    next: string;
    previous: string;
    search: string;
    filter: string;
    clear: string;
    refresh: string;
    settings: string;
    profile: string;
    logout: string;
    notifications: string;
    help: string;
    about: string;
  };
  
  // Navigation
  navigation: {
    dashboard: string;
    chat: string;
    weather: string;
    marketPrices: string;
    quickActions: string;
    aiChat: string;
  };
  
  // Profile
  profile: {
    title: string;
    editProfile: string;
    personalInfo: string;
    farmingInfo: string;
    name: string;
    location: string;
    phone: string;
    landSize: string;
    landUnit: string;
    crops: string;
    addCrop: string;
    removeCrop: string;
    latitude: string;
    longitude: string;
    updateProfile: string;
    profileUpdated: string;
    selectCrops: string;
    enterLocation: string;
    enterPhone: string;
    enterLandSize: string;
    selectLandUnit: string;
  };
  
  // Chat
  chat: {
    title: string;
    placeholder: string;
    send: string;
    voiceInput: string;
    attachImage: string;
    typing: string;
    offline: string;
    error: string;
    retry: string;
  };
  
  // Weather
  weather: {
    title: string;
    currentWeather: string;
    forecast: string;
    temperature: string;
    humidity: string;
    windSpeed: string;
    pressure: string;
    visibility: string;
    uvIndex: string;
    sunrise: string;
    sunset: string;
    feelsLike: string;
    precipitation: string;
    cloudCover: string;
    day: string;
    night: string;
    today: string;
    tomorrow: string;
    thisWeek: string;
  };
  
  // Market Prices
  marketPrices: {
    title: string;
    currentPrice: string;
    msp: string;
    trend: string;
    change: string;
    market: string;
    state: string;
    lastUpdated: string;
    pricePerQuintal: string;
    pricePerKg: string;
    up: string;
    down: string;
    stable: string;
    showingPricesFor: string;
    tipAboveMsp: string;
  };
  
  // Quick Actions
  quickActions: {
    title: string;
    checkWeather: string;
    marketPrices: string;
    fertilizerAdvice: string;
    irrigationGuide: string;
    farmingCalendar: string;
    cropDiseaseId: string;
    getForecast: string;
    livePrices: string;
    nutritionTips: string;
    waterManagement: string;
    sowingHarvest: string;
    imageAnalysis: string;
  };
  
  // Fertilizer Advice
  fertilizerAdvice: {
    title: string;
    description: string;
    selectCrop: string;
    selectSoil: string;
    landSize: string;
    organicOptions: string;
    syntheticOptions: string;
    applicationSchedule: string;
    totalRequirements: string;
    costPerAcre: string;
    required: string;
    timing: string;
    application: string;
    totalNpkRequirement: string;
    nitrogen: string;
    phosphorus: string;
    potassium: string;
    acres: string;
    soilCharacteristics: string;
    recommendation: string;
  };
  
  // Irrigation Guide
  irrigationGuide: {
    title: string;
    description: string;
    selectCrop: string;
    weatherCondition: string;
    soilMoisture: string;
    plantCount: string;
    waterRequirements: string;
    irrigationMethods: string;
    managementStrategies: string;
    wateringSigns: string;
    dailyWater: string;
    frequency: string;
    duration: string;
    perPlant: string;
    efficiency: string;
    suitability: string;
    advantages: string;
    disadvantages: string;
    recommended: string;
    criticalPeriod: string;
    weatherAdjustment: string;
  };

  // Crop Stages
  cropStages: {
    nurseryStage: string;
    vegetativeStage: string;
    tilleringStage: string;
    panicleInitiation: string;
    floweringStage: string;
    grainFillingStage: string;
    maturityStage: string;
  };

  // States
  states: {
    tamilNadu: string;
    delhi: string;
    punjab: string;
    gujarat: string;
    up: string;
    mp: string;
    maharashtra: string;
    karnataka: string;
    andhraPradesh: string;
    telangana: string;
    westBengal: string;
    bihar: string;
    rajasthan: string;
    haryana: string;
    uttarakhand: string;
    himachalPradesh: string;
    jammuKashmir: string;
    assam: string;
    odisha: string;
    chhattisgarh: string;
    jharkhand: string;
    uttarPradesh: string;
    madhyaPradesh: string;
  };

  // Crops
  crops: {
    rice: string;
    wheat: string;
    cotton: string;
    sugarcane: string;
    soybean: string;
    groundnut: string;
    maize: string;
    bajra: string;
    jowar: string;
    ragi: string;
    gram: string;
    tur: string;
    moong: string;
    urad: string;
    masoor: string;
    mustard: string;
    sunflower: string;
    sesame: string;
    castor: string;
    jute: string;
  };

  // Fertilizers
  fertilizers: {
    compost: string;
    vermicompost: string;
    farmyardManure: string;
    urea: string;
    dap: string;
    mop: string;
    npk: string;
    nitrogen: string;
    phosphorus: string;
    potassium: string;
  };

  // Units
  units: {
    kgPerAcre: string;
    perAcre: string;
    quintal: string;
    kg: string;
    days: string;
  };

  // Application Methods
  applicationMethods: {
    atTransplanting: string;
    mixWithSoilBeforeTransplanting: string;
    applyInStandingWater: string;
    applyBeforePanicleEmergence: string;
    twentyToTwentyFiveDaysAfterTransplanting: string;
    fortyToFortyFiveDaysAfterTransplanting: string;
    sixtyToSixtyFiveDaysAfterTransplanting: string;
  };

  // Irrigation Methods
  irrigationMethods: {
    dripIrrigation: string;
    sprinklerIrrigation: string;
    floodIrrigation: string;
    waterEfficient: string;
    reducedWeedGrowth: string;
    highInitialCost: string;
    cloggingIssues: string;
    uniformDistribution: string;
    frostProtection: string;
    highWaterLoss: string;
    windAffected: string;
    traditionalMethod: string;
    lowCost: string;
    waterWastage: string;
    soilErosion: string;
  };

  // Management Strategies
  managementStrategies: {
    monsoonManagementStrategies: string;
    droughtManagementStrategies: string;
    preMonsoonPreparation: string;
    clearDrainageChannels: string;
    repairBunds: string;
    duringMonsoon: string;
    monitorWaterLevels: string;
    preventWaterlogging: string;
    postMonsoon: string;
    assessCropDamage: string;
    planRecoveryMeasures: string;
    drainageSystems: string;
    installProperDrainage: string;
    preventRootRot: string;
    cropSelection: string;
    chooseFloodTolerantVarieties: string;
    lowLyingAreas: string;
    timing: string;
    adjustPlantingSchedules: string;
    avoidPeakMonsoonPeriods: string;
    soilConservation: string;
    useMulching: string;
    coverCrops: string;
    preventErosion: string;
    emergencyMeasures: string;
    keepPumpsReady: string;
    emergencyDrainage: string;
    waterConservation: string;
    reduceEvaporation: string;
    efficientIrrigation: string;
    switchToDripIrrigation: string;
    chooseDroughtTolerantVarieties: string;
    soilManagement: string;
    improveOrganicMatter: string;
    irrigateEarlyMorning: string;
    irrigateEvening: string;
    waterHarvesting: string;
    collectRainwater: string;
    storeRainwater: string;
    alternativeSources: string;
    useTreatedWastewater: string;
    prioritizeCriticalStages: string;
  };

  // Watering Signs
  wateringSigns: {
    signsOfOverWatering: string;
    signsOfUnderWatering: string;
    symptoms: string;
    solutions: string;
    yellowingLeavesBottom: string;
    wiltingDespiteMoistSoil: string;
    rootRotFungalDiseases: string;
    stuntedGrowthPoorYield: string;
    soilCompactionPoorAeration: string;
    nutrientLeachingDeficiency: string;
    reduceIrrigationFrequency: string;
    improveSoilDrainage: string;
    checkCloggedDrainage: string;
    allowSoilToDry: string;
    useRaisedBeds: string;
    applyFungicides: string;
    wiltingDroopingLeaves: string;
    dryBrittleLeaves: string;
    reducedGrowthYield: string;
    earlyFloweringMaturity: string;
    crackedSoilSurface: string;
    poorFruitSeedDevelopment: string;
    increaseIrrigationFrequency: string;
    checkIrrigationEfficiency: string;
    mulchSoilRetainMoisture: string;
    waterDeeplyLessFrequently: string;
    monitorSoilMoisture: string;
    considerDroughtTolerantVarieties: string;
  };

  // Weather Conditions
  weatherConditions: {
    hotAndDry: string;
    humid: string;
    rainy: string;
    cold: string;
    windy: string;
    increaseIrrigationFrequency: string;
    reduceIrrigationPreventWaterlogging: string;
    suspendIrrigationMonitorDrainage: string;
    reduceIrrigationProtectFromFrost: string;
    increaseIrrigationDueToEvaporation: string;
  };

  // Soil Moisture Levels
  soilMoistureLevels: {
    veryDry: string;
    dry: string;
    optimal: string;
    wet: string;
    saturated: string;
    soilCompletelyDry: string;
    plantsWilting: string;
    immediateIrrigationRequired: string;
    soilIsDry: string;
    plantsShowingStress: string;
    irrigateWithinOneToTwoDays: string;
    soilMoisturePerfect: string;
    maintainCurrentIrrigationSchedule: string;
    soilMoistApproachingSaturation: string;
    reduceIrrigationFrequency: string;
    soilWaterlogged: string;
    poorAeration: string;
    stopIrrigationImproveDrainage: string;
  };
  
  
  // Settings
  settings: {
    title: string;
    general: string;
    notifications: string;
    privacy: string;
    language: string;
    theme: string;
    account: string;
    preferences: string;
    enableNotifications: string;
    emailNotifications: string;
    pushNotifications: string;
    soundNotifications: string;
    vibration: string;
    notificationFrequency: string;
    dataUsage: string;
    autoSync: string;
    offlineMode: string;
    darkMode: string;
    lightMode: string;
    systemTheme: string;
    fontSize: string;
    small: string;
    medium: string;
    large: string;
    saveSettings: string;
    resetSettings: string;
    settingsSaved: string;
  };
  
  // Notifications
  notifications: {
    title: string;
    new: string;
    all: string;
    markAllRead: string;
    clearAll: string;
    noNotifications: string;
    weatherAlert: string;
    priceAlert: string;
    farmingTip: string;
    systemUpdate: string;
    marketUpdate: string;
    weatherUpdate: string;
    cropAdvice: string;
    irrigationReminder: string;
    harvestTime: string;
    sowingTime: string;
  };
  
  // Errors
  errors: {
    networkError: string;
    serverError: string;
    validationError: string;
    notFound: string;
    unauthorized: string;
    forbidden: string;
    timeout: string;
    unknownError: string;
    tryAgain: string;
    contactSupport: string;
  };
}

export const translations: Record<string, Translations> = {
  en: {
    common: {
      save: "Save",
      cancel: "Cancel",
      edit: "Edit",
      delete: "Delete",
      confirm: "Confirm",
      loading: "Loading...",
      error: "Error",
      success: "Success",
      close: "Close",
      back: "Back",
      next: "Next",
      previous: "Previous",
      search: "Search",
      filter: "Filter",
      clear: "Clear",
      refresh: "Refresh",
      settings: "Settings",
      profile: "Profile",
      logout: "Logout",
      notifications: "Notifications",
    help: "Help",
    about: "About",
    tip: "Tip",
    },
    navigation: {
      dashboard: "Dashboard",
      chat: "Chat",
      weather: "Weather",
      marketPrices: "Market Prices",
      quickActions: "Quick Actions",
      aiChat: "AI Chat",
    },
    profile: {
      title: "Profile",
      editProfile: "Edit Profile",
      personalInfo: "Personal Information",
      farmingInfo: "Farming Information",
      name: "Name",
      location: "Location",
      phone: "Phone",
      landSize: "Land Size",
      landUnit: "Land Unit",
      crops: "Crops",
      addCrop: "Add Crop",
      removeCrop: "Remove Crop",
      latitude: "Latitude",
      longitude: "Longitude",
      updateProfile: "Update Profile",
      profileUpdated: "Profile updated successfully",
      selectCrops: "Select your crops",
      enterLocation: "Enter your location",
      enterPhone: "Enter your phone number",
      enterLandSize: "Enter land size",
      selectLandUnit: "Select land unit",
    },
    chat: {
      title: "Krishi AI Assistant",
      placeholder: "Type your farming question...",
      send: "Send",
      voiceInput: "Voice Input",
      attachImage: "Attach Image",
      typing: "Typing...",
    offline: "Offline",
    error: "Failed to get response",
    retry: "Retry",
    imageUploaded: "Image uploaded",
    analyzingImage: "Analyzing image...",
    tryWeather: "Try asking about weather!",
    },
    weather: {
      title: "Weather Forecast",
      currentWeather: "Current Weather",
      forecast: "7-Day Forecast",
      temperature: "Temperature",
      humidity: "Humidity",
      windSpeed: "Wind Speed",
      pressure: "Pressure",
      visibility: "Visibility",
      uvIndex: "UV Index",
      sunrise: "Sunrise",
      sunset: "Sunset",
      feelsLike: "Feels Like",
      precipitation: "Precipitation",
      cloudCover: "Cloud Cover",
      day: "Day",
      night: "Night",
    today: "Today",
    tomorrow: "Tomorrow",
    thisWeek: "This Week",
    goodConditions: "Good conditions for farming activities",
    condition: "Condition",
    },
    marketPrices: {
      title: "Market Prices",
      currentPrice: "Current Price",
      msp: "MSP",
      trend: "Trend",
      change: "Change",
      market: "Market",
      state: "State",
      lastUpdated: "Last Updated",
      pricePerQuintal: "Price per Quintal",
      pricePerKg: "Price per Kg",
    up: "Up",
    down: "Down",
    stable: "Stable",
    showingPricesFor: "Showing prices for",
    tipAboveMsp: "Prices above MSP indicate good market conditions for selling",
    yourCrop: "Your Crop",
    showingPersonalizedData: "Showing personalized data for your crops",
    },
    quickActions: {
      title: "Quick Actions",
      checkWeather: "Check Weather",
      marketPrices: "Market Prices",
      fertilizerAdvice: "Fertilizer Advice",
      irrigationGuide: "Irrigation Guide",
      getForecast: "Get 7-day forecast",
      livePrices: "Live crop prices",
      nutritionTips: "Crop nutrition tips",
      waterManagement: "Water management",
    },
    fertilizerAdvice: {
      title: "Fertilizer Advice Calculator",
      description: "Get personalized fertilizer recommendations based on your crop and soil type",
      selectCrop: "Select Crop",
      selectSoil: "Soil Type",
      landSize: "Land Size (Acres)",
      organicOptions: "Organic Options",
      syntheticOptions: "Synthetic Options",
      applicationSchedule: "Application Schedule",
      totalRequirements: "Total Requirements Summary",
      costPerAcre: "Cost per acre",
      required: "Required",
      timing: "Timing",
      application: "Application",
      totalNpkRequirement: "Total NPK requirement for",
      nitrogen: "Nitrogen (N)",
      phosphorus: "Phosphorus (P)",
      potassium: "Potassium (K)",
      acres: "acre(s)",
      soilCharacteristics: "Soil Characteristics",
      recommendation: "Recommendation",
    },
    irrigationGuide: {
      title: "Irrigation Guide",
      description: "Get personalized irrigation recommendations based on your crop, weather, and soil conditions",
      selectCrop: "Select Crop",
      weatherCondition: "Weather Condition",
      soilMoisture: "Soil Moisture",
      plantCount: "Plant Count",
      waterRequirements: "Water Requirements",
      irrigationMethods: "Irrigation Methods",
      managementStrategies: "Management Strategies",
      wateringSigns: "Watering Signs",
      dailyWater: "Daily Water",
      frequency: "Frequency",
      duration: "Duration",
      perPlant: "Per Plant",
      efficiency: "Efficiency",
      suitability: "Suitability",
      advantages: "Advantages",
      disadvantages: "Disadvantages",
      recommended: "Recommended",
      criticalPeriod: "Critical Period",
      weatherAdjustment: "Weather adjustment",
    },
    cropStages: {
      nurseryStage: "Nursery Stage",
      vegetativeStage: "Vegetative Stage",
      tilleringStage: "Tillering Stage",
      panicleInitiation: "Panicle Initiation",
      floweringStage: "Flowering Stage",
      grainFillingStage: "Grain Filling Stage",
      maturityStage: "Maturity Stage",
    },
    states: {
      tamilNadu: "Tamil Nadu",
      delhi: "Delhi",
      punjab: "Punjab",
      gujarat: "Gujarat",
      up: "Uttar Pradesh",
      mp: "Madhya Pradesh",
      maharashtra: "Maharashtra",
      karnataka: "Karnataka",
      andhraPradesh: "Andhra Pradesh",
      telangana: "Telangana",
      westBengal: "West Bengal",
      bihar: "Bihar",
      rajasthan: "Rajasthan",
      haryana: "Haryana",
      uttarakhand: "Uttarakhand",
      himachalPradesh: "Himachal Pradesh",
      jammuKashmir: "Jammu & Kashmir",
      assam: "Assam",
      odisha: "Odisha",
      chhattisgarh: "Chhattisgarh",
      jharkhand: "Jharkhand",
      uttarPradesh: "Uttar Pradesh",
      madhyaPradesh: "Madhya Pradesh",
    },
    crops: {
      rice: "Rice",
      wheat: "Wheat",
      cotton: "Cotton",
      sugarcane: "Sugarcane",
      soybean: "Soybean",
      groundnut: "Groundnut",
      maize: "Maize",
      bajra: "Bajra",
      jowar: "Jowar",
      ragi: "Ragi",
      gram: "Gram",
      tur: "Tur",
      moong: "Moong",
      urad: "Urad",
      masoor: "Masoor",
      mustard: "Mustard",
      sunflower: "Sunflower",
      sesame: "Sesame",
      castor: "Castor",
      jute: "Jute",
    },
    fertilizers: {
      compost: "Compost",
      vermicompost: "Vermicompost",
      farmyardManure: "Farmyard Manure",
      urea: "UREA",
      dap: "DAP",
      mop: "MOP",
      npk: "NPK",
      nitrogen: "N",
      phosphorus: "P",
      potassium: "K",
    },
    units: {
      kgPerAcre: "kg/acre",
      perAcre: "/acre",
      quintal: "quintal",
      kg: "kg",
      days: "days",
    },
    applicationMethods: {
      atTransplanting: "At transplanting",
      mixWithSoilBeforeTransplanting: "Mix with soil before transplanting",
      applyInStandingWater: "Apply in standing water",
      applyBeforePanicleEmergence: "Apply before panicle emergence",
      twentyToTwentyFiveDaysAfterTransplanting: "20-25 days after transplanting",
      fortyToFortyFiveDaysAfterTransplanting: "40-45 days after transplanting",
      sixtyToSixtyFiveDaysAfterTransplanting: "60-65 days after transplanting",
    },
    irrigationMethods: {
      dripIrrigation: "Drip Irrigation",
      sprinklerIrrigation: "Sprinkler Irrigation",
      floodIrrigation: "Flood Irrigation",
      waterEfficient: "Water efficient",
      reducedWeedGrowth: "Reduced weed growth",
      highInitialCost: "High initial cost",
      cloggingIssues: "Clogging issues",
      uniformDistribution: "Uniform distribution",
      frostProtection: "Frost protection",
      highWaterLoss: "High water loss",
      windAffected: "Wind affected",
      traditionalMethod: "Traditional method",
      lowCost: "Low cost",
      waterWastage: "Water wastage",
      soilErosion: "Soil erosion",
    },
    managementStrategies: {
      monsoonManagementStrategies: "Monsoon Management Strategies",
      droughtManagementStrategies: "Drought Management Strategies",
      preMonsoonPreparation: "Pre-monsoon preparation: Clear drainage channels and repair bunds",
      clearDrainageChannels: "Clear drainage channels and repair bunds",
      repairBunds: "Repair bunds",
      duringMonsoon: "During monsoon: Monitor water levels and prevent waterlogging",
      monitorWaterLevels: "Monitor water levels and prevent waterlogging",
      preventWaterlogging: "Prevent waterlogging",
      postMonsoon: "Post-monsoon: Assess crop damage and plan recovery measures",
      assessCropDamage: "Assess crop damage and plan recovery measures",
      planRecoveryMeasures: "Plan recovery measures",
      drainageSystems: "Drainage systems: Install proper drainage to prevent root rot",
      installProperDrainage: "Install proper drainage to prevent root rot",
      preventRootRot: "Prevent root rot",
      cropSelection: "Crop selection: Choose flood-tolerant varieties for low-lying areas",
      chooseFloodTolerantVarieties: "Choose flood-tolerant varieties for low-lying areas",
      lowLyingAreas: "Low-lying areas",
      timing: "Timing: Adjust planting schedules to avoid peak monsoon periods",
      adjustPlantingSchedules: "Adjust planting schedules to avoid peak monsoon periods",
      avoidPeakMonsoonPeriods: "Avoid peak monsoon periods",
      soilConservation: "Soil conservation: Use mulching and cover crops to prevent erosion",
      useMulching: "Use mulching and cover crops to prevent erosion",
      coverCrops: "Cover crops",
      preventErosion: "Prevent erosion",
      emergencyMeasures: "Emergency measures: Keep pumps ready for emergency drainage",
      keepPumpsReady: "Keep pumps ready for emergency drainage",
      emergencyDrainage: "Emergency drainage",
      waterConservation: "Water conservation: Use mulching to reduce evaporation",
      reduceEvaporation: "Use mulching to reduce evaporation",
      efficientIrrigation: "Efficient irrigation: Switch to drip irrigation systems",
      switchToDripIrrigation: "Switch to drip irrigation systems",
      chooseDroughtTolerantVarieties: "Choose drought-tolerant varieties",
      soilManagement: "Soil management: Improve organic matter content",
      improveOrganicMatter: "Improve organic matter content",
      irrigateEarlyMorning: "Irrigate during early morning or evening",
      irrigateEvening: "Irrigate during early morning or evening",
      waterHarvesting: "Water harvesting: Collect and store rainwater",
      collectRainwater: "Collect and store rainwater",
      storeRainwater: "Store rainwater",
      alternativeSources: "Alternative sources: Use treated wastewater where possible",
      useTreatedWastewater: "Use treated wastewater where possible",
      prioritizeCriticalStages: "Prioritize critical growth stages",
    },
    wateringSigns: {
      signsOfOverWatering: "Signs of Over-Watering",
      signsOfUnderWatering: "Signs of Under-Watering",
      symptoms: "Symptoms",
      solutions: "Solutions",
      yellowingLeavesBottom: "Yellowing leaves starting from bottom",
      wiltingDespiteMoistSoil: "Wilting despite moist soil",
      rootRotFungalDiseases: "Root rot and fungal diseases",
      stuntedGrowthPoorYield: "Stunted growth and poor yield",
      soilCompactionPoorAeration: "Soil compaction and poor aeration",
      nutrientLeachingDeficiency: "Nutrient leaching and deficiency",
      reduceIrrigationFrequency: "Reduce irrigation frequency",
      improveSoilDrainage: "Improve soil drainage",
      checkCloggedDrainage: "Check for clogged drainage systems",
      allowSoilToDry: "Allow soil to dry between irrigations",
      useRaisedBeds: "Use raised beds for better drainage",
      applyFungicides: "Apply fungicides if root rot is present",
      wiltingDroopingLeaves: "Wilting and drooping leaves",
      dryBrittleLeaves: "Dry, brittle leaves and stems",
      reducedGrowthYield: "Reduced growth and yield",
      earlyFloweringMaturity: "Early flowering and maturity",
      crackedSoilSurface: "Cracked soil surface",
      poorFruitSeedDevelopment: "Poor fruit/seed development",
      increaseIrrigationFrequency: "Increase irrigation frequency",
      checkIrrigationEfficiency: "Check irrigation system efficiency",
      mulchSoilRetainMoisture: "Mulch soil to retain moisture",
      waterDeeplyLessFrequently: "Water deeply and less frequently",
      monitorSoilMoisture: "Monitor soil moisture regularly",
      considerDroughtTolerantVarieties: "Consider drought-tolerant varieties",
    },
    weatherConditions: {
      hotAndDry: "Hot & Dry",
      humid: "Humid",
      rainy: "Rainy",
      cold: "Cold",
      windy: "Windy",
      increaseIrrigationFrequency: "Increase irrigation frequency and amount",
      reduceIrrigationPreventWaterlogging: "Reduce irrigation to prevent waterlogging",
      suspendIrrigationMonitorDrainage: "Suspend irrigation, monitor drainage",
      reduceIrrigationProtectFromFrost: "Reduce irrigation, protect from frost",
      increaseIrrigationDueToEvaporation: "Increase irrigation due to evaporation",
    },
    soilMoistureLevels: {
      veryDry: "Very Dry",
      dry: "Dry",
      optimal: "Optimal",
      wet: "Wet",
      saturated: "Saturated",
      soilCompletelyDry: "Soil is completely dry, plants wilting",
      plantsWilting: "plants wilting",
      immediateIrrigationRequired: "Immediate irrigation required",
      soilIsDry: "Soil is dry, plants showing stress",
      plantsShowingStress: "plants showing stress",
      irrigateWithinOneToTwoDays: "Irrigate within 1-2 days",
      soilMoisturePerfect: "Soil moisture is perfect for plant growth",
      maintainCurrentIrrigationSchedule: "Maintain current irrigation schedule",
      soilMoistApproachingSaturation: "Soil is moist, approaching saturation",
      reduceIrrigationFrequency: "Reduce irrigation frequency",
      soilWaterlogged: "Soil is waterlogged, poor aeration",
      poorAeration: "poor aeration",
      stopIrrigationImproveDrainage: "Stop irrigation, improve drainage",
    },
    settings: {
      title: "Settings",
      general: "General",
      notifications: "Notifications",
      privacy: "Privacy",
      language: "Language",
      theme: "Theme",
      account: "Account",
      preferences: "Preferences",
      enableNotifications: "Enable Notifications",
      emailNotifications: "Email Notifications",
      pushNotifications: "Push Notifications",
      soundNotifications: "Sound Notifications",
      vibration: "Vibration",
      notificationFrequency: "Notification Frequency",
      dataUsage: "Data Usage",
      autoSync: "Auto Sync",
      offlineMode: "Offline Mode",
      darkMode: "Dark Mode",
      lightMode: "Light Mode",
      systemTheme: "System Theme",
      fontSize: "Font Size",
      small: "Small",
      medium: "Medium",
      large: "Large",
      saveSettings: "Save Settings",
      resetSettings: "Reset Settings",
      settingsSaved: "Settings saved successfully",
    },
    notifications: {
      title: "Notifications",
      new: "New",
      all: "All",
      markAllRead: "Mark All Read",
      clearAll: "Clear All",
      noNotifications: "No notifications yet",
      weatherAlert: "Weather Alert",
      priceAlert: "Price Alert",
      farmingTip: "Farming Tip",
      systemUpdate: "System Update",
      marketUpdate: "Market Update",
      weatherUpdate: "Weather Update",
      cropAdvice: "Crop Advice",
      irrigationReminder: "Irrigation Reminder",
      harvestTime: "Harvest Time",
      sowingTime: "Sowing Time",
    },
    errors: {
      networkError: "Network connection error",
      serverError: "Server error occurred",
      validationError: "Please check your input",
      notFound: "Resource not found",
      unauthorized: "Unauthorized access",
      forbidden: "Access forbidden",
      timeout: "Request timeout",
      unknownError: "Unknown error occurred",
      tryAgain: "Try again",
      contactSupport: "Contact support",
    },
  },
  hi: {
    common: {
      save: "सहेजें",
      cancel: "रद्द करें",
      edit: "संपादित करें",
      delete: "हटाएं",
      confirm: "पुष्टि करें",
      loading: "लोड हो रहा है...",
      error: "त्रुटि",
      success: "सफलता",
      close: "बंद करें",
      back: "वापस",
      next: "अगला",
      previous: "पिछला",
      search: "खोजें",
      filter: "फिल्टर",
      clear: "साफ करें",
      refresh: "रिफ्रेश करें",
      settings: "सेटिंग्स",
      profile: "प्रोफाइल",
      logout: "लॉगआउट",
      notifications: "सूचनाएं",
    help: "सहायता",
    about: "के बारे में",
    tip: "सुझाव",
    },
    navigation: {
      dashboard: "डैशबोर्ड",
      chat: "चैट",
      weather: "मौसम",
      marketPrices: "बाजार मूल्य",
      quickActions: "त्वरित कार्य",
      aiChat: "AI चैट",
    },
    profile: {
      title: "प्रोफाइल",
      editProfile: "प्रोफाइल संपादित करें",
      personalInfo: "व्यक्तिगत जानकारी",
      farmingInfo: "कृषि जानकारी",
      name: "नाम",
      location: "स्थान",
      phone: "फोन",
      landSize: "जमीन का आकार",
      landUnit: "जमीन की इकाई",
      crops: "फसलें",
      addCrop: "फसल जोड़ें",
      removeCrop: "फसल हटाएं",
      latitude: "अक्षांश",
      longitude: "देशांतर",
      updateProfile: "प्रोफाइल अपडेट करें",
      profileUpdated: "प्रोफाइल सफलतापूर्वक अपडेट हो गया",
      selectCrops: "अपनी फसलें चुनें",
      enterLocation: "अपना स्थान दर्ज करें",
      enterPhone: "अपना फोन नंबर दर्ज करें",
      enterLandSize: "जमीन का आकार दर्ज करें",
      selectLandUnit: "जमीन की इकाई चुनें",
    },
    chat: {
      title: "कृषि AI सहायक",
      placeholder: "अपना कृषि प्रश्न टाइप करें...",
      send: "भेजें",
      voiceInput: "आवाज इनपुट",
      attachImage: "छवि संलग्न करें",
      typing: "टाइप कर रहे हैं...",
      offline: "ऑफलाइन",
      error: "प्रतिक्रिया प्राप्त करने में विफल",
      retry: "पुनः प्रयास करें",
      imageUploaded: "छवि अपलोड की गई",
      analyzingImage: "छवि का विश्लेषण कर रहे हैं...",
      tryWeather: "मौसम के बारे में पूछने की कोशिश करें!",
    },
    weather: {
      title: "मौसम पूर्वानुमान",
      currentWeather: "वर्तमान मौसम",
      forecast: "7-दिन का पूर्वानुमान",
      temperature: "तापमान",
      humidity: "आर्द्रता",
      windSpeed: "हवा की गति",
      pressure: "दबाव",
      visibility: "दृश्यता",
      uvIndex: "UV सूचकांक",
      sunrise: "सूर्योदय",
      sunset: "सूर्यास्त",
      feelsLike: "महसूस होता है",
      precipitation: "वर्षा",
      cloudCover: "बादल आवरण",
      day: "दिन",
      night: "रात",
      today: "आज",
      tomorrow: "कल",
      thisWeek: "इस सप्ताह",
      goodConditions: "कृषि गतिविधियों के लिए अच्छी स्थिति",
      condition: "स्थिति",
    },
    marketPrices: {
      title: "बाजार मूल्य",
      currentPrice: "वर्तमान मूल्य",
      msp: "MSP",
      trend: "रुझान",
      change: "परिवर्तन",
      market: "बाजार",
      state: "राज्य",
      lastUpdated: "अंतिम अपडेट",
      pricePerQuintal: "प्रति क्विंटल मूल्य",
      pricePerKg: "प्रति किलो मूल्य",
    up: "ऊपर",
    down: "नीचे",
    stable: "स्थिर",
    showingPricesFor: "के लिए मूल्य दिखा रहे हैं",
    tipAboveMsp: "MSP से ऊपर कीमतें बेचने के लिए अच्छी बाजार स्थिति का संकेत देती हैं",
    yourCrop: "आपकी फसल",
    showingPersonalizedData: "आपकी फसलों के लिए व्यक्तिगत डेटा दिखा रहे हैं",
    },
    quickActions: {
      title: "त्वरित कार्य",
      checkWeather: "मौसम जांचें",
      marketPrices: "बाजार मूल्य",
      fertilizerAdvice: "उर्वरक सलाह",
      irrigationGuide: "सिंचाई गाइड",
      getForecast: "7-दिन का पूर्वानुमान प्राप्त करें",
      livePrices: "लाइव फसल मूल्य",
      nutritionTips: "फसल पोषण सुझाव",
      waterManagement: "जल प्रबंधन",
    },
    fertilizerAdvice: {
      title: "उर्वरक सलाह कैलकुलेटर",
      description: "अपनी फसल और मिट्टी के प्रकार के आधार पर व्यक्तिगत उर्वरक सिफारिशें प्राप्त करें",
      selectCrop: "फसल चुनें",
      selectSoil: "मिट्टी का प्रकार",
      landSize: "भूमि का आकार (एकड़)",
      organicOptions: "जैविक विकल्प",
      syntheticOptions: "सिंथेटिक विकल्प",
      applicationSchedule: "आवेदन कार्यक्रम",
      totalRequirements: "कुल आवश्यकताएं सारांश",
      costPerAcre: "प्रति एकड़ लागत",
      required: "आवश्यक",
      timing: "समय",
      application: "आवेदन",
      totalNpkRequirement: "के लिए कुल NPK आवश्यकता",
      nitrogen: "नाइट्रोजन (N)",
      phosphorus: "फॉस्फोरस (P)",
      potassium: "पोटेशियम (K)",
      acres: "एकड़",
      soilCharacteristics: "मिट्टी की विशेषताएं",
      recommendation: "सिफारिश",
    },
    irrigationGuide: {
      title: "सिंचाई गाइड",
      description: "अपनी फसल, मौसम और मिट्टी की स्थिति के आधार पर व्यक्तिगत सिंचाई सिफारिशें प्राप्त करें",
      selectCrop: "फसल चुनें",
      weatherCondition: "मौसम की स्थिति",
      soilMoisture: "मिट्टी की नमी",
      plantCount: "पौधों की संख्या",
      waterRequirements: "पानी की आवश्यकता",
      irrigationMethods: "सिंचाई के तरीके",
      managementStrategies: "प्रबंधन रणनीतियां",
      wateringSigns: "पानी देने के संकेत",
      dailyWater: "दैनिक पानी",
      frequency: "आवृत्ति",
      duration: "अवधि",
      perPlant: "प्रति पौधा",
      efficiency: "दक्षता",
      suitability: "उपयुक्तता",
      advantages: "फायदे",
      disadvantages: "नुकसान",
      recommended: "अनुशंसित",
      criticalPeriod: "महत्वपूर्ण अवधि",
      weatherAdjustment: "मौसम समायोजन",
    },
    cropStages: {
      nurseryStage: "नर्सरी अवस्था",
      vegetativeStage: "वानस्पतिक अवस्था",
      tilleringStage: "कल्ले निकलने की अवस्था",
      panicleInitiation: "पुष्पगुच्छ प्रारंभ",
      floweringStage: "फूल आने की अवस्था",
      grainFillingStage: "दाना भरने की अवस्था",
      maturityStage: "पकने की अवस्था",
    },
    states: {
      tamilNadu: "तमिलनाडु",
      delhi: "दिल्ली",
      punjab: "पंजाब",
      gujarat: "गुजरात",
      up: "उत्तर प्रदेश",
      mp: "मध्य प्रदेश",
      maharashtra: "महाराष्ट्र",
      karnataka: "कर्नाटक",
      andhraPradesh: "आंध्र प्रदेश",
      telangana: "तेलंगाना",
      westBengal: "पश्चिम बंगाल",
      bihar: "बिहार",
      rajasthan: "राजस्थान",
      haryana: "हरियाणा",
      uttarakhand: "उत्तराखंड",
      himachalPradesh: "हिमाचल प्रदेश",
      jammuKashmir: "जम्मू और कश्मीर",
      assam: "असम",
      odisha: "ओडिशा",
      chhattisgarh: "छत्तीसगढ़",
      jharkhand: "झारखंड",
      uttarPradesh: "उत्तर प्रदेश",
      madhyaPradesh: "मध्य प्रदेश",
    },
    crops: {
      rice: "चावल",
      wheat: "गेहूं",
      cotton: "कपास",
      sugarcane: "गन्ना",
      soybean: "सोयाबीन",
      groundnut: "मूंगफली",
      maize: "मक्का",
      bajra: "बाजरा",
      jowar: "ज्वार",
      ragi: "रागी",
      gram: "चना",
      tur: "तूर",
      moong: "मूंग",
      urad: "उड़द",
      masoor: "मसूर",
      mustard: "सरसों",
      sunflower: "सूरजमुखी",
      sesame: "तिल",
      castor: "अरंडी",
      jute: "जूट",
    },
    fertilizers: {
      compost: "कंपोस्ट",
      vermicompost: "वर्मीकंपोस्ट",
      farmyardManure: "गोबर की खाद",
      urea: "यूरिया",
      dap: "डीएपी",
      mop: "एमओपी",
      npk: "एनपीके",
      nitrogen: "N",
      phosphorus: "P",
      potassium: "K",
    },
    units: {
      kgPerAcre: "किलो/एकड़",
      perAcre: "/एकड़",
      quintal: "क्विंटल",
      kg: "किलो",
      days: "दिन",
    },
    applicationMethods: {
      atTransplanting: "रोपाई के समय",
      mixWithSoilBeforeTransplanting: "रोपाई से पहले मिट्टी में मिलाएं",
      applyInStandingWater: "खड़े पानी में डालें",
      applyBeforePanicleEmergence: "पुष्पगुच्छ निकलने से पहले डालें",
      twentyToTwentyFiveDaysAfterTransplanting: "रोपाई के 20-25 दिन बाद",
      fortyToFortyFiveDaysAfterTransplanting: "रोपाई के 40-45 दिन बाद",
      sixtyToSixtyFiveDaysAfterTransplanting: "रोपाई के 60-65 दिन बाद",
    },
    irrigationMethods: {
      dripIrrigation: "ड्रिप सिंचाई",
      sprinklerIrrigation: "स्प्रिंकलर सिंचाई",
      floodIrrigation: "बाढ़ सिंचाई",
      waterEfficient: "पानी की बचत",
      reducedWeedGrowth: "खरपतवार कम बढ़ना",
      highInitialCost: "उच्च प्रारंभिक लागत",
      cloggingIssues: "अवरोध की समस्या",
      uniformDistribution: "समान वितरण",
      frostProtection: "पाला सुरक्षा",
      highWaterLoss: "अधिक पानी की हानि",
      windAffected: "हवा से प्रभावित",
      traditionalMethod: "पारंपरिक विधि",
      lowCost: "कम लागत",
      waterWastage: "पानी की बर्बादी",
      soilErosion: "मिट्टी का कटाव",
    },
    managementStrategies: {
      monsoonManagementStrategies: "मानसून प्रबंधन रणनीतियां",
      droughtManagementStrategies: "सूखा प्रबंधन रणनीतियां",
      preMonsoonPreparation: "मानसून पूर्व तैयारी: जल निकासी नालियों को साफ करें और बांधों की मरम्मत करें",
      clearDrainageChannels: "जल निकासी नालियों को साफ करें और बांधों की मरम्मत करें",
      repairBunds: "बांधों की मरम्मत करें",
      duringMonsoon: "मानसून के दौरान: जल स्तर की निगरानी करें और जलभराव को रोकें",
      monitorWaterLevels: "जल स्तर की निगरानी करें और जलभराव को रोकें",
      preventWaterlogging: "जलभराव को रोकें",
      postMonsoon: "मानसून के बाद: फसल क्षति का आकलन करें और पुनर्प्राप्ति उपायों की योजना बनाएं",
      assessCropDamage: "फसल क्षति का आकलन करें और पुनर्प्राप्ति उपायों की योजना बनाएं",
      planRecoveryMeasures: "पुनर्प्राप्ति उपायों की योजना बनाएं",
      drainageSystems: "जल निकासी प्रणाली: जड़ सड़न को रोकने के लिए उचित जल निकासी स्थापित करें",
      installProperDrainage: "जड़ सड़न को रोकने के लिए उचित जल निकासी स्थापित करें",
      preventRootRot: "जड़ सड़न को रोकें",
      cropSelection: "फसल चयन: निचले क्षेत्रों के लिए बाढ़-सहिष्णु किस्में चुनें",
      chooseFloodTolerantVarieties: "निचले क्षेत्रों के लिए बाढ़-सहिष्णु किस्में चुनें",
      lowLyingAreas: "निचले क्षेत्र",
      timing: "समय: चरम मानसून अवधि से बचने के लिए रोपण कार्यक्रम समायोजित करें",
      adjustPlantingSchedules: "चरम मानसून अवधि से बचने के लिए रोपण कार्यक्रम समायोजित करें",
      avoidPeakMonsoonPeriods: "चरम मानसून अवधि से बचें",
      soilConservation: "मिट्टी संरक्षण: कटाव को रोकने के लिए मल्चिंग और कवर फसलों का उपयोग करें",
      useMulching: "कटाव को रोकने के लिए मल्चिंग और कवर फसलों का उपयोग करें",
      coverCrops: "कवर फसलें",
      preventErosion: "कटाव को रोकें",
      emergencyMeasures: "आपातकालीन उपाय: आपातकालीन जल निकासी के लिए पंप तैयार रखें",
      keepPumpsReady: "आपातकालीन जल निकासी के लिए पंप तैयार रखें",
      emergencyDrainage: "आपातकालीन जल निकासी",
      waterConservation: "जल संरक्षण: वाष्पीकरण कम करने के लिए मल्चिंग का उपयोग करें",
      reduceEvaporation: "वाष्पीकरण कम करने के लिए मल्चिंग का उपयोग करें",
      efficientIrrigation: "कुशल सिंचाई: ड्रिप सिंचाई प्रणाली में स्विच करें",
      switchToDripIrrigation: "ड्रिप सिंचाई प्रणाली में स्विच करें",
      chooseDroughtTolerantVarieties: "सूखा-सहिष्णु किस्में चुनें",
      soilManagement: "मिट्टी प्रबंधन: कार्बनिक पदार्थ की मात्रा बढ़ाएं",
      improveOrganicMatter: "कार्बनिक पदार्थ की मात्रा बढ़ाएं",
      irrigateEarlyMorning: "सुबह जल्दी या शाम को सिंचाई करें",
      irrigateEvening: "सुबह जल्दी या शाम को सिंचाई करें",
      waterHarvesting: "जल संचयन: वर्षा जल एकत्र करें और संग्रहित करें",
      collectRainwater: "वर्षा जल एकत्र करें और संग्रहित करें",
      storeRainwater: "वर्षा जल संग्रहित करें",
      alternativeSources: "वैकल्पिक स्रोत: जहां संभव हो उपचारित अपशिष्ट जल का उपयोग करें",
      useTreatedWastewater: "जहां संभव हो उपचारित अपशिष्ट जल का उपयोग करें",
      prioritizeCriticalStages: "महत्वपूर्ण वृद्धि चरणों को प्राथमिकता दें",
    },
    wateringSigns: {
      signsOfOverWatering: "अधिक पानी देने के संकेत",
      signsOfUnderWatering: "कम पानी देने के संकेत",
      symptoms: "लक्षण",
      solutions: "समाधान",
      yellowingLeavesBottom: "नीचे से पत्तियों का पीला पड़ना",
      wiltingDespiteMoistSoil: "नम मिट्टी के बावजूद मुरझाना",
      rootRotFungalDiseases: "जड़ सड़न और फंगल रोग",
      stuntedGrowthPoorYield: "अवरुद्ध वृद्धि और खराब उपज",
      soilCompactionPoorAeration: "मिट्टी का संघनन और खराब वायु संचार",
      nutrientLeachingDeficiency: "पोषक तत्वों का निक्षालन और कमी",
      reduceIrrigationFrequency: "सिंचाई की आवृत्ति कम करें",
      improveSoilDrainage: "मिट्टी की जल निकासी में सुधार करें",
      checkCloggedDrainage: "अवरुद्ध जल निकासी प्रणाली की जांच करें",
      allowSoilToDry: "सिंचाई के बीच मिट्टी को सूखने दें",
      useRaisedBeds: "बेहतर जल निकासी के लिए उठे हुए बेड का उपयोग करें",
      applyFungicides: "यदि जड़ सड़न है तो फंगीसाइड लगाएं",
      wiltingDroopingLeaves: "मुरझाने और झुकने वाले पत्ते",
      dryBrittleLeaves: "सूखे, भंगुर पत्ते और तने",
      reducedGrowthYield: "कम वृद्धि और उपज",
      earlyFloweringMaturity: "जल्दी फूल आना और परिपक्वता",
      crackedSoilSurface: "दरार वाली मिट्टी की सतह",
      poorFruitSeedDevelopment: "खराब फल/बीज विकास",
      increaseIrrigationFrequency: "सिंचाई की आवृत्ति बढ़ाएं",
      checkIrrigationEfficiency: "सिंचाई प्रणाली की दक्षता जांचें",
      mulchSoilRetainMoisture: "नमी बनाए रखने के लिए मिट्टी में मल्चिंग करें",
      waterDeeplyLessFrequently: "गहराई से और कम बार पानी दें",
      monitorSoilMoisture: "मिट्टी की नमी की नियमित निगरानी करें",
      considerDroughtTolerantVarieties: "सूखा-सहिष्णु किस्मों पर विचार करें",
    },
    weatherConditions: {
      hotAndDry: "गर्म और सूखा",
      humid: "नम",
      rainy: "बरसाती",
      cold: "ठंडा",
      windy: "हवादार",
      increaseIrrigationFrequency: "सिंचाई की आवृत्ति और मात्रा बढ़ाएं",
      reduceIrrigationPreventWaterlogging: "जलभराव को रोकने के लिए सिंचाई कम करें",
      suspendIrrigationMonitorDrainage: "सिंचाई निलंबित करें, जल निकासी की निगरानी करें",
      reduceIrrigationProtectFromFrost: "सिंचाई कम करें, पाला से बचाएं",
      increaseIrrigationDueToEvaporation: "वाष्पीकरण के कारण सिंचाई बढ़ाएं",
    },
    soilMoistureLevels: {
      veryDry: "बहुत सूखा",
      dry: "सूखा",
      optimal: "इष्टतम",
      wet: "गीला",
      saturated: "संतृप्त",
      soilCompletelyDry: "मिट्टी पूरी तरह सूखी है, पौधे मुरझा रहे हैं",
      plantsWilting: "पौधे मुरझा रहे हैं",
      immediateIrrigationRequired: "तत्काल सिंचाई आवश्यक",
      soilIsDry: "मिट्टी सूखी है, पौधे तनाव दिखा रहे हैं",
      plantsShowingStress: "पौधे तनाव दिखा रहे हैं",
      irrigateWithinOneToTwoDays: "1-2 दिनों के भीतर सिंचाई करें",
      soilMoisturePerfect: "पौधों की वृद्धि के लिए मिट्टी की नमी सही है",
      maintainCurrentIrrigationSchedule: "वर्तमान सिंचाई कार्यक्रम बनाए रखें",
      soilMoistApproachingSaturation: "मिट्टी नम है, संतृप्ति के करीब",
      reduceIrrigationFrequency: "सिंचाई की आवृत्ति कम करें",
      soilWaterlogged: "मिट्टी जलभराव है, खराब वायु संचार",
      poorAeration: "खराब वायु संचार",
      stopIrrigationImproveDrainage: "सिंचाई बंद करें, जल निकासी में सुधार करें",
    },
    settings: {
      title: "सेटिंग्स",
      general: "सामान्य",
      notifications: "सूचनाएं",
      privacy: "गोपनीयता",
      language: "भाषा",
      theme: "थीम",
      account: "खाता",
      preferences: "प्राथमिकताएं",
      enableNotifications: "सूचनाएं सक्षम करें",
      emailNotifications: "ईमेल सूचनाएं",
      pushNotifications: "पुश सूचनाएं",
      soundNotifications: "ध्वनि सूचनाएं",
      vibration: "कंपन",
      notificationFrequency: "सूचना आवृत्ति",
      dataUsage: "डेटा उपयोग",
      autoSync: "ऑटो सिंक",
      offlineMode: "ऑफलाइन मोड",
      darkMode: "डार्क मोड",
      lightMode: "लाइट मोड",
      systemTheme: "सिस्टम थीम",
      fontSize: "फॉन्ट आकार",
      small: "छोटा",
      medium: "मध्यम",
      large: "बड़ा",
      saveSettings: "सेटिंग्स सहेजें",
      resetSettings: "सेटिंग्स रीसेट करें",
      settingsSaved: "सेटिंग्स सफलतापूर्वक सहेजी गईं",
    },
    notifications: {
      title: "सूचनाएं",
      new: "नई",
      all: "सभी",
      markAllRead: "सभी पढ़ा हुआ मार्क करें",
      clearAll: "सभी साफ करें",
      noNotifications: "अभी तक कोई सूचना नहीं",
      weatherAlert: "मौसम चेतावनी",
      priceAlert: "मूल्य चेतावनी",
      farmingTip: "कृषि सुझाव",
      systemUpdate: "सिस्टम अपडेट",
      marketUpdate: "बाजार अपडेट",
      weatherUpdate: "मौसम अपडेट",
      cropAdvice: "फसल सलाह",
      irrigationReminder: "सिंचाई अनुस्मारक",
      harvestTime: "कटाई का समय",
      sowingTime: "बुवाई का समय",
    },
    errors: {
      networkError: "नेटवर्क कनेक्शन त्रुटि",
      serverError: "सर्वर त्रुटि हुई",
      validationError: "कृपया अपना इनपुट जांचें",
      notFound: "संसाधन नहीं मिला",
      unauthorized: "अनधिकृत पहुंच",
      forbidden: "पहुंच वर्जित",
      timeout: "अनुरोध समय सीमा समाप्त",
      unknownError: "अज्ञात त्रुटि हुई",
      tryAgain: "पुनः प्रयास करें",
      contactSupport: "सहायता से संपर्क करें",
    },
  },
  ta: {
    common: {
      save: "சேமி",
      cancel: "ரத்து செய்",
      edit: "திருத்து",
      delete: "நீக்கு",
      confirm: "உறுதிப்படுத்து",
      loading: "ஏற்றுகிறது...",
      error: "பிழை",
      success: "வெற்றி",
      close: "மூடு",
      back: "திரும்பு",
      next: "அடுத்து",
      previous: "முந்தைய",
      search: "தேடு",
      filter: "வடிகட்டு",
      clear: "அழி",
      refresh: "புதுப்பி",
      settings: "அமைப்புகள்",
      profile: "சுயவிவரம்",
      logout: "வெளியேறு",
      notifications: "அறிவிப்புகள்",
      help: "உதவி",
      about: "பற்றி",
      tip: "குறிப்பு",
    },
    navigation: {
      dashboard: "டாஷ்போர்டு",
      chat: "அரட்டை",
      weather: "வானிலை",
      marketPrices: "சந்தை விலைகள்",
      quickActions: "விரைவு செயல்கள்",
      aiChat: "AI அரட்டை",
    },
    profile: {
      title: "சுயவிவரம்",
      editProfile: "சுயவிவரத்தை திருத்து",
      personalInfo: "தனிப்பட்ட தகவல்",
      farmingInfo: "விவசாய தகவல்",
      name: "பெயர்",
      location: "இடம்",
      phone: "தொலைபேசி",
      landSize: "நில அளவு",
      landUnit: "நில அலகு",
      crops: "பயிர்கள்",
      addCrop: "பயிர் சேர்",
      removeCrop: "பயிர் நீக்கு",
      latitude: "அட்சரேகை",
      longitude: "தீர்க்கரேகை",
      updateProfile: "சுயவிவரத்தை புதுப்பி",
      profileUpdated: "சுயவிவரம் வெற்றிகரமாக புதுப்பிக்கப்பட்டது",
      selectCrops: "உங்கள் பயிர்களை தேர்ந்தெடுக்கவும்",
      enterLocation: "உங்கள் இடத்தை உள்ளிடவும்",
      enterPhone: "உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்",
      enterLandSize: "நில அளவை உள்ளிடவும்",
      selectLandUnit: "நில அலகை தேர்ந்தெடுக்கவும்",
    },
    chat: {
      title: "கிரிஷி AI உதவியாளர்",
      placeholder: "உங்கள் விவசாய கேள்வியை தட்டச்சு செய்யவும்...",
      send: "அனுப்பு",
      voiceInput: "குரல் உள்ளீடு",
      attachImage: "படத்தை இணைக்கவும்",
      typing: "தட்டச்சு செய்கிறது...",
      offline: "ஆஃப்லைன்",
      error: "பதிலை பெற முடியவில்லை",
      retry: "மீண்டும் முயற்சி",
      imageUploaded: "படம் பதிவேற்றப்பட்டது",
      analyzingImage: "படத்தை பகுப்பாய்வு செய்கிறது...",
      tryWeather: "வானிலை பற்றி கேட்க முயற்சிக்கவும்!",
    },
    weather: {
      title: "வானிலை முன்னறிவிப்பு",
      currentWeather: "தற்போதைய வானிலை",
      forecast: "7-நாள் முன்னறிவிப்பு",
      temperature: "வெப்பநிலை",
      humidity: "ஈரப்பதம்",
      windSpeed: "காற்றின் வேகம்",
      pressure: "அழுத்தம்",
      visibility: "பார்வை",
      uvIndex: "UV குறியீடு",
      sunrise: "சூரிய உதயம்",
      sunset: "சூரிய அஸ்தமனம்",
      feelsLike: "எப்படி உணர்கிறது",
      precipitation: "மழை",
      cloudCover: "மேக மூடல்",
      day: "பகல்",
      night: "இரவு",
      today: "இன்று",
      tomorrow: "நாளை",
      thisWeek: "இந்த வாரம்",
      goodConditions: "விவசாய நடவடிக்கைகளுக்கு நல்ல நிலைமைகள்",
      condition: "நிலை",
    },
    marketPrices: {
      title: "சந்தை விலைகள்",
      currentPrice: "தற்போதைய விலை",
      msp: "MSP",
      trend: "போக்கு",
      change: "மாற்றம்",
      market: "சந்தை",
      state: "மாநிலம்",
      lastUpdated: "கடைசியாக புதுப்பிக்கப்பட்டது",
      pricePerQuintal: "ஒரு குவிண்டலுக்கு விலை",
      pricePerKg: "ஒரு கிலோவுக்கு விலை",
      up: "மேலே",
      down: "கீழே",
      stable: "நிலையான",
      showingPricesFor: "க்கான விலைகளைக் காட்டுகிறது",
      tipAboveMsp: "MSP-க்கு மேல் விலைகள் விற்பனைக்கு நல்ல சந்தை நிலைமைகளைக் குறிக்கின்றன",
      yourCrop: "உங்கள் பயிர்",
      showingPersonalizedData: "உங்கள் பயிர்களுக்கான தனிப்பட்ட தரவைக் காட்டுகிறது",
    },
    quickActions: {
      title: "விரைவு செயல்கள்",
      checkWeather: "வானிலையை சரிபார்",
      marketPrices: "சந்தை விலைகள்",
      fertilizerAdvice: "உர அறிவுரை",
      irrigationGuide: "பாசன வழிகாட்டி",
      getForecast: "7-நாள் முன்னறிவிப்பை பெறவும்",
      livePrices: "நேரடி பயிர் விலைகள்",
      nutritionTips: "பயிர் ஊட்டச்சத்து குறிப்புகள்",
      waterManagement: "நீர் மேலாண்மை",
    },
    fertilizerAdvice: {
      title: "உர அறிவுரை கணிப்பான்",
      description: "உங்கள் பயிர் மற்றும் மண் வகையின் அடிப்படையில் தனிப்பட்ட உர பரிந்துரைகளைப் பெறவும்",
      selectCrop: "பயிர் தேர்ந்தெடுக்கவும்",
      selectSoil: "மண் வகை",
      landSize: "நில அளவு (ஏக்கர்)",
      organicOptions: "இயற்கை விருப்பங்கள்",
      syntheticOptions: "செயற்கை விருப்பங்கள்",
      applicationSchedule: "பயன்பாட்டு அட்டவணை",
      totalRequirements: "மொத்த தேவைகள் சுருக்கம்",
      costPerAcre: "ஏக்கருக்கு செலவு",
      required: "தேவை",
      timing: "நேரம்",
      application: "பயன்பாடு",
      totalNpkRequirement: "க்கான மொத்த NPK தேவை",
      nitrogen: "நைட்ரஜன் (N)",
      phosphorus: "பாஸ்பரஸ் (P)",
      potassium: "பொட்டாசியம் (K)",
      acres: "ஏக்கர்",
      soilCharacteristics: "மண் பண்புகள்",
      recommendation: "பரிந்துரை",
    },
    irrigationGuide: {
      title: "பாசன வழிகாட்டி",
      description: "உங்கள் பயிர், வானிலை மற்றும் மண் நிலைமைகளின் அடிப்படையில் தனிப்பட்ட பாசன பரிந்துரைகளைப் பெறவும்",
      selectCrop: "பயிர் தேர்ந்தெடுக்கவும்",
      weatherCondition: "வானிலை நிலை",
      soilMoisture: "மண் ஈரப்பதம்",
      plantCount: "தாவர எண்ணிக்கை",
      waterRequirements: "நீர் தேவைகள்",
      irrigationMethods: "பாசன முறைகள்",
      managementStrategies: "மேலாண்மை உத்திகள்",
      wateringSigns: "நீர்ப்பாசன அறிகுறிகள்",
      dailyWater: "தினசரி நீர்",
      frequency: "அதிர்வெண்",
      duration: "காலம்",
      perPlant: "ஒரு தாவரத்திற்கு",
      efficiency: "திறன்",
      suitability: "பொருத்தம்",
      advantages: "நன்மைகள்",
      disadvantages: "குறைபாடுகள்",
      recommended: "பரிந்துரைக்கப்பட்டது",
      criticalPeriod: "முக்கிய காலம்",
      weatherAdjustment: "வானிலை சரிசெய்தல்",
    },
    cropStages: {
      nurseryStage: "நர்சரி நிலை",
      vegetativeStage: "தாவர வளர்ச்சி நிலை",
      tilleringStage: "கதிர் வளர்ச்சி நிலை",
      panicleInitiation: "கதிர் தொடக்கம்",
      floweringStage: "மலர்ச்சி நிலை",
      grainFillingStage: "விதை நிரப்புதல் நிலை",
      maturityStage: "பக்குவமடைதல் நிலை",
    },
    states: {
      tamilNadu: "தமிழ்நாடு",
      delhi: "டெல்லி",
      punjab: "பஞ்சாப்",
      gujarat: "குஜராத்",
      up: "உத்தரப் பிரதேசம்",
      mp: "மத்தியப் பிரதேசம்",
      maharashtra: "மகாராஷ்டிரா",
      karnataka: "கர்நாடகா",
      andhraPradesh: "ஆந்திரப் பிரதேசம்",
      telangana: "தெலங்காணா",
      westBengal: "மேற்கு வங்காளம்",
      bihar: "பீகார்",
      rajasthan: "ராஜஸ்தான்",
      haryana: "ஹரியானா",
      uttarakhand: "உத்தராகண்ட்",
      himachalPradesh: "இமாச்சலப் பிரதேசம்",
      jammuKashmir: "ஜம்மு காஷ்மீர்",
      assam: "அசாம்",
      odisha: "ஒடிசா",
      chhattisgarh: "சத்தீஸ்கர்",
      jharkhand: "ஜார்கண்ட்",
      uttarPradesh: "உத்தரப் பிரதேசம்",
      madhyaPradesh: "மத்தியப் பிரதேசம்",
    },
    crops: {
      rice: "அரிசி",
      wheat: "கோதுமை",
      cotton: "பருத்தி",
      sugarcane: "கரும்பு",
      soybean: "சோயாபீன்",
      groundnut: "வேர்க்கடலை",
      maize: "சோளம்",
      bajra: "பஜ்ரா",
      jowar: "சோளம்",
      ragi: "ராகி",
      gram: "கடலை",
      tur: "துவரம் பருப்பு",
      moong: "பச்சை பருப்பு",
      urad: "உளுந்து",
      masoor: "மசூர்",
      mustard: "கடுகு",
      sunflower: "சூரியகாந்தி",
      sesame: "எள்",
      castor: "ஆமணக்கு",
      jute: "சணல்",
    },
    fertilizers: {
      compost: "கூட்டு உரம்",
      vermicompost: "வெர்மிகம்போஸ்ட்",
      farmyardManure: "கால்நடை உரம்",
      urea: "யூரியா",
      dap: "டிஏபி",
      mop: "எம்ஓபி",
      npk: "என்பிகே",
      nitrogen: "N",
      phosphorus: "P",
      potassium: "K",
    },
    units: {
      kgPerAcre: "கிலோ/ஏக்கர்",
      perAcre: "/ஏக்கர்",
      quintal: "குவிண்டல்",
      kg: "கிலோ",
      days: "நாட்கள்",
    },
    applicationMethods: {
      atTransplanting: "நடவு செய்யும்போது",
      mixWithSoilBeforeTransplanting: "நடவு செய்வதற்கு முன் மண்ணுடன் கலக்கவும்",
      applyInStandingWater: "நிற்கும் நீரில் பயன்படுத்தவும்",
      applyBeforePanicleEmergence: "கதிர் வெளிவருவதற்கு முன் பயன்படுத்தவும்",
      twentyToTwentyFiveDaysAfterTransplanting: "நடவு செய்த 20-25 நாட்களுக்குப் பிறகு",
      fortyToFortyFiveDaysAfterTransplanting: "நடவு செய்த 40-45 நாட்களுக்குப் பிறகு",
      sixtyToSixtyFiveDaysAfterTransplanting: "நடவு செய்த 60-65 நாட்களுக்குப் பிறகு",
    },
    irrigationMethods: {
      dripIrrigation: "டிரிப் பாசனம்",
      sprinklerIrrigation: "ஸ்ப்ரிங்க்லர் பாசனம்",
      floodIrrigation: "வெள்ளப் பாசனம்",
      waterEfficient: "நீர் சேமிப்பு",
      reducedWeedGrowth: "களை வளர்ச்சி குறைவு",
      highInitialCost: "அதிக ஆரம்ப செலவு",
      cloggingIssues: "தடுப்பு பிரச்சினைகள்",
      uniformDistribution: "சீரான விநியோகம்",
      frostProtection: "பனி பாதுகாப்பு",
      highWaterLoss: "அதிக நீர் இழப்பு",
      windAffected: "காற்றால் பாதிக்கப்படும்",
      traditionalMethod: "பாரம்பரிய முறை",
      lowCost: "குறைந்த செலவு",
      waterWastage: "நீர் வீணடிப்பு",
      soilErosion: "மண் அரிப்பு",
    },
    managementStrategies: {
      monsoonManagementStrategies: "மழைக்கால மேலாண்மை உத்திகள்",
      droughtManagementStrategies: "வறட்சி மேலாண்மை உத்திகள்",
      preMonsoonPreparation: "மழைக்காலத்திற்கு முன் தயாரிப்பு: வடிகால் கால்வாய்களை சுத்தம் செய்து கரைகளை சரி செய்யவும்",
      clearDrainageChannels: "வடிகால் கால்வாய்களை சுத்தம் செய்து கரைகளை சரி செய்யவும்",
      repairBunds: "கரைகளை சரி செய்யவும்",
      duringMonsoon: "மழைக்காலத்தில்: நீர் மட்டத்தை கண்காணித்து நீர் தேங்குதலை தடுக்கவும்",
      monitorWaterLevels: "நீர் மட்டத்தை கண்காணித்து நீர் தேங்குதலை தடுக்கவும்",
      preventWaterlogging: "நீர் தேங்குதலை தடுக்கவும்",
      postMonsoon: "மழைக்காலத்திற்குப் பிறகு: பயிர் சேதத்தை மதிப்பிடுங்கள் மற்றும் மீட்பு நடவடிக்கைகளை திட்டமிடுங்கள்",
      assessCropDamage: "பயிர் சேதத்தை மதிப்பிடுங்கள் மற்றும் மீட்பு நடவடிக்கைகளை திட்டமிடுங்கள்",
      planRecoveryMeasures: "மீட்பு நடவடிக்கைகளை திட்டமிடுங்கள்",
      drainageSystems: "வடிகால் அமைப்புகள்: வேர் அழுகலை தடுக்க சரியான வடிகால் நிறுவவும்",
      installProperDrainage: "வேர் அழுகலை தடுக்க சரியான வடிகால் நிறுவவும்",
      preventRootRot: "வேர் அழுகலை தடுக்கவும்",
      cropSelection: "பயிர் தேர்வு: தாழ்ந்த பகுதிகளுக்கு வெள்ளத்தை தாங்கும் வகைகளை தேர்ந்தெடுக்கவும்",
      chooseFloodTolerantVarieties: "தாழ்ந்த பகுதிகளுக்கு வெள்ளத்தை தாங்கும் வகைகளை தேர்ந்தெடுக்கவும்",
      lowLyingAreas: "தாழ்ந்த பகுதிகள்",
      timing: "நேரம்: உச்ச மழைக்கால காலத்தை தவிர்க்க நடவு அட்டவணையை சரிசெய்யவும்",
      adjustPlantingSchedules: "உச்ச மழைக்கால காலத்தை தவிர்க்க நடவு அட்டவணையை சரிசெய்யவும்",
      avoidPeakMonsoonPeriods: "உச்ச மழைக்கால காலத்தை தவிர்க்கவும்",
      soilConservation: "மண் பாதுகாப்பு: அரிப்பை தடுக்க மல்ச்சிங் மற்றும் கவர் பயிர்களை பயன்படுத்தவும்",
      useMulching: "அரிப்பை தடுக்க மல்ச்சிங் மற்றும் கவர் பயிர்களை பயன்படுத்தவும்",
      coverCrops: "கவர் பயிர்கள்",
      preventErosion: "அரிப்பை தடுக்கவும்",
      emergencyMeasures: "அவசர நடவடிக்கைகள்: அவசர வடிகாலுக்கு பம்புகளை தயாராக வைத்திருங்கள்",
      keepPumpsReady: "அவசர வடிகாலுக்கு பம்புகளை தயாராக வைத்திருங்கள்",
      emergencyDrainage: "அவசர வடிகால்",
      waterConservation: "நீர் சேமிப்பு: ஆவியாதலை குறைக்க மல்ச்சிங் பயன்படுத்தவும்",
      reduceEvaporation: "ஆவியாதலை குறைக்க மல்ச்சிங் பயன்படுத்தவும்",
      efficientIrrigation: "திறமையான பாசனம்: டிரிப் பாசன அமைப்புக்கு மாறவும்",
      switchToDripIrrigation: "டிரிப் பாசன அமைப்புக்கு மாறவும்",
      chooseDroughtTolerantVarieties: "வறட்சியை தாங்கும் வகைகளை தேர்ந்தெடுக்கவும்",
      soilManagement: "மண் மேலாண்மை: கரிமப் பொருளின் உள்ளடக்கத்தை மேம்படுத்தவும்",
      improveOrganicMatter: "கரிமப் பொருளின் உள்ளடக்கத்தை மேம்படுத்தவும்",
      irrigateEarlyMorning: "அதிகாலை அல்லது மாலையில் பாசனம் செய்யவும்",
      irrigateEvening: "அதிகாலை அல்லது மாலையில் பாசனம் செய்யவும்",
      waterHarvesting: "நீர் சேகரிப்பு: மழைநீரை சேகரித்து சேமிக்கவும்",
      collectRainwater: "மழைநீரை சேகரித்து சேமிக்கவும்",
      storeRainwater: "மழைநீரை சேமிக்கவும்",
      alternativeSources: "மாற்று ஆதாரங்கள்: சாத்தியமான இடங்களில் சுத்திகரிக்கப்பட்ட கழிவுநீரை பயன்படுத்தவும்",
      useTreatedWastewater: "சாத்தியமான இடங்களில் சுத்திகரிக்கப்பட்ட கழிவுநீரை பயன்படுத்தவும்",
      prioritizeCriticalStages: "முக்கியமான வளர்ச்சி நிலைகளுக்கு முன்னுரிமை கொடுக்கவும்",
    },
    wateringSigns: {
      signsOfOverWatering: "அதிக நீர்ப்பாசன அறிகுறிகள்",
      signsOfUnderWatering: "குறைவான நீர்ப்பாசன அறிகுறிகள்",
      symptoms: "அறிகுறிகள்",
      solutions: "தீர்வுகள்",
      yellowingLeavesBottom: "கீழே இருந்து இலைகள் மஞ்சளாகுதல்",
      wiltingDespiteMoistSoil: "ஈரமான மண்ணுக்கு இருந்தும் வாடுதல்",
      rootRotFungalDiseases: "வேர் அழுகல் மற்றும் பூஞ்சை நோய்கள்",
      stuntedGrowthPoorYield: "வளர்ச்சி தடை மற்றும் மோசமான விளைச்சல்",
      soilCompactionPoorAeration: "மண் அழுத்தம் மற்றும் மோசமான காற்று பரிமாற்றம்",
      nutrientLeachingDeficiency: "ஊட்டச்சத்து கழிவு மற்றும் குறைபாடு",
      reduceIrrigationFrequency: "பாசன அதிர்வெண்ணை குறைக்கவும்",
      improveSoilDrainage: "மண் வடிகாலை மேம்படுத்தவும்",
      checkCloggedDrainage: "தடுக்கப்பட்ட வடிகால் அமைப்புகளை சரிபார்க்கவும்",
      allowSoilToDry: "பாசனங்களுக்கு இடையில் மண்ணை உலர விடவும்",
      useRaisedBeds: "சிறந்த வடிகாலுக்கு உயர்த்தப்பட்ட படுக்கைகளை பயன்படுத்தவும்",
      applyFungicides: "வேர் அழுகல் இருந்தால் பூஞ்சைக்கொல்லிகள் பயன்படுத்தவும்",
      wiltingDroopingLeaves: "வாடுதல் மற்றும் தொங்கும் இலைகள்",
      dryBrittleLeaves: "உலர்ந்த, நொறுங்கும் இலைகள் மற்றும் தண்டுகள்",
      reducedGrowthYield: "குறைந்த வளர்ச்சி மற்றும் விளைச்சல்",
      earlyFloweringMaturity: "ஆரம்ப பூப்பு மற்றும் முதிர்ச்சி",
      crackedSoilSurface: "விரிசல் மண் மேற்பரப்பு",
      poorFruitSeedDevelopment: "மோசமான பழம்/விதை வளர்ச்சி",
      increaseIrrigationFrequency: "பாசன அதிர்வெண்ணை அதிகரிக்கவும்",
      checkIrrigationEfficiency: "பாசன அமைப்பு திறனை சரிபார்க்கவும்",
      mulchSoilRetainMoisture: "ஈரப்பதத்தை தக்கவைக்க மண்ணில் மல்ச்சிங் செய்யவும்",
      waterDeeplyLessFrequently: "ஆழமாக மற்றும் குறைவாக நீர்ப்பாசனம் செய்யவும்",
      monitorSoilMoisture: "மண் ஈரப்பதத்தை தவறாமல் கண்காணிக்கவும்",
      considerDroughtTolerantVarieties: "வறட்சியை தாங்கும் வகைகளை கருத்தில் கொள்ளவும்",
    },
    weatherConditions: {
      hotAndDry: "சூடான மற்றும் வறண்ட",
      humid: "ஈரப்பதமான",
      rainy: "மழை",
      cold: "குளிரான",
      windy: "காற்று",
      increaseIrrigationFrequency: "பாசன அதிர்வெண் மற்றும் அளவை அதிகரிக்கவும்",
      reduceIrrigationPreventWaterlogging: "நீர் தேங்குதலை தடுக்க பாசனத்தை குறைக்கவும்",
      suspendIrrigationMonitorDrainage: "பாசனத்தை நிறுத்தவும், வடிகாலை கண்காணிக்கவும்",
      reduceIrrigationProtectFromFrost: "பாசனத்தை குறைக்கவும், பனியிலிருந்து பாதுகாக்கவும்",
      increaseIrrigationDueToEvaporation: "ஆவியாதல் காரணமாக பாசனத்தை அதிகரிக்கவும்",
    },
    soilMoistureLevels: {
      veryDry: "மிகவும் வறண்ட",
      dry: "வறண்ட",
      optimal: "உகந்த",
      wet: "ஈரமான",
      saturated: "நிறைவுற்ற",
      soilCompletelyDry: "மண் முழுவதும் வறண்டு, தாவரங்கள் வாடுகின்றன",
      plantsWilting: "தாவரங்கள் வாடுகின்றன",
      immediateIrrigationRequired: "உடனடி பாசனம் தேவை",
      soilIsDry: "மண் வறண்டு, தாவரங்கள் மன அழுத்தத்தை காட்டுகின்றன",
      plantsShowingStress: "தாவரங்கள் மன அழுத்தத்தை காட்டுகின்றன",
      irrigateWithinOneToTwoDays: "1-2 நாட்களுக்குள் பாசனம் செய்யவும்",
      soilMoisturePerfect: "தாவர வளர்ச்சிக்கு மண் ஈரப்பதம் சரியானது",
      maintainCurrentIrrigationSchedule: "தற்போதைய பாசன அட்டவணையை பராமரிக்கவும்",
      soilMoistApproachingSaturation: "மண் ஈரமானது, நிறைவுறுதலை நெருங்குகிறது",
      reduceIrrigationFrequency: "பாசன அதிர்வெண்ணை குறைக்கவும்",
      soilWaterlogged: "மண் நீர் தேங்கியுள்ளது, மோசமான காற்று பரிமாற்றம்",
      poorAeration: "மோசமான காற்று பரிமாற்றம்",
      stopIrrigationImproveDrainage: "பாசனத்தை நிறுத்தவும், வடிகாலை மேம்படுத்தவும்",
    },
    settings: {
      title: "அமைப்புகள்",
      general: "பொது",
      notifications: "அறிவிப்புகள்",
      privacy: "தனியுரிமை",
      language: "மொழி",
      theme: "தீம்",
      account: "கணக்கு",
      preferences: "விருப்பத்தேர்வுகள்",
      enableNotifications: "அறிவிப்புகளை இயக்கு",
      emailNotifications: "மின்னஞ்சல் அறிவிப்புகள்",
      pushNotifications: "புஷ் அறிவிப்புகள்",
      soundNotifications: "ஒலி அறிவிப்புகள்",
      vibration: "துடிப்பு",
      notificationFrequency: "அறிவிப்பு அதிர்வெண்",
      dataUsage: "தரவு பயன்பாடு",
      autoSync: "ஆட்டோ சிங்க்",
      offlineMode: "ஆஃப்லைன் முறை",
      darkMode: "இருண்ட முறை",
      lightMode: "வெளிச்ச முறை",
      systemTheme: "கணினி தீம்",
      fontSize: "எழுத்துரு அளவு",
      small: "சிறிய",
      medium: "நடுத்தர",
      large: "பெரிய",
      saveSettings: "அமைப்புகளை சேமி",
      resetSettings: "அமைப்புகளை மீட்டமை",
      settingsSaved: "அமைப்புகள் வெற்றிகரமாக சேமிக்கப்பட்டன",
    },
    notifications: {
      title: "அறிவிப்புகள்",
      new: "புதிய",
      all: "அனைத்தும்",
      markAllRead: "அனைத்தையும் படித்ததாக குறி",
      clearAll: "அனைத்தையும் அழி",
      noNotifications: "இன்னும் அறிவிப்புகள் இல்லை",
      weatherAlert: "வானிலை எச்சரிக்கை",
      priceAlert: "விலை எச்சரிக்கை",
      farmingTip: "விவசாய குறிப்பு",
      systemUpdate: "கணினி புதுப்பிப்பு",
      marketUpdate: "சந்தை புதுப்பிப்பு",
      weatherUpdate: "வானிலை புதுப்பிப்பு",
      cropAdvice: "பயிர் அறிவுரை",
      irrigationReminder: "பாசன நினைவூட்டல்",
      harvestTime: "அறுவடை நேரம்",
      sowingTime: "விதைத்தல் நேரம்",
    },
    errors: {
      networkError: "நெட்வொர்க் இணைப்பு பிழை",
      serverError: "சர்வர் பிழை ஏற்பட்டது",
      validationError: "உங்கள் உள்ளீட்டை சரிபார்க்கவும்",
      notFound: "வளம் கிடைக்கவில்லை",
      unauthorized: "அங்கீகரிக்கப்படாத அணுகல்",
      forbidden: "அணுகல் தடைசெய்யப்பட்டது",
      timeout: "கோரிக்கை நேரம் முடிந்தது",
      unknownError: "அறியப்படாத பிழை ஏற்பட்டது",
      tryAgain: "மீண்டும் முயற்சி செய்",
      contactSupport: "ஆதரவை தொடர்பு கொள்ளுங்கள்",
    },
  },
};

export const getTranslation = (language: string, key: string): string => {
  const keys = key.split('.');
  let value: any = translations[language] || translations.en;
  
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) {
      // Fallback to English
      value = translations.en;
      for (const fallbackKey of keys) {
        value = value?.[fallbackKey];
        if (value === undefined) return key;
      }
      return value;
    }
  }
  
  return value || key;
};

export const useTranslation = (language: string) => {
  return (key: string) => getTranslation(language, key);
};

// Helper function to translate stage names
export const translateStageName = (stageName: string, language: string): string => {
  const stageMap: Record<string, string> = {
    'Nursery Stage': 'cropStages.nurseryStage',
    'Vegetative Stage': 'cropStages.vegetativeStage',
    'Tillering Stage': 'cropStages.tilleringStage',
    'Panicle Initiation': 'cropStages.panicleInitiation',
    'Flowering Stage': 'cropStages.floweringStage',
    'Grain Filling Stage': 'cropStages.grainFillingStage',
    'Maturity Stage': 'cropStages.maturityStage',
  };
  
  const translationKey = stageMap[stageName];
  return translationKey ? getTranslation(language, translationKey) : stageName;
};

// Helper function to translate state names
export const translateStateName = (stateName: string, language: string): string => {
  const stateMap: Record<string, string> = {
    'Tamil Nadu': 'states.tamilNadu',
    'Delhi': 'states.delhi',
    'Punjab': 'states.punjab',
    'Gujarat': 'states.gujarat',
    'UP': 'states.up',
    'MP': 'states.mp',
    'Maharashtra': 'states.maharashtra',
    'Karnataka': 'states.karnataka',
    'Andhra Pradesh': 'states.andhraPradesh',
    'Telangana': 'states.telangana',
    'West Bengal': 'states.westBengal',
    'Bihar': 'states.bihar',
    'Rajasthan': 'states.rajasthan',
    'Haryana': 'states.haryana',
    'Uttarakhand': 'states.uttarakhand',
    'Himachal Pradesh': 'states.himachalPradesh',
    'Jammu & Kashmir': 'states.jammuKashmir',
    'Assam': 'states.assam',
    'Odisha': 'states.odisha',
    'Chhattisgarh': 'states.chhattisgarh',
    'Jharkhand': 'states.jharkhand',
    'Uttar Pradesh': 'states.uttarPradesh',
    'Madhya Pradesh': 'states.madhyaPradesh',
  };
  
  const translationKey = stateMap[stateName];
  return translationKey ? getTranslation(language, translationKey) : stateName;
};

// Helper function to translate crop names
export const translateCropName = (cropName: string, language: string): string => {
  const cropMap: Record<string, string> = {
    'Rice': 'crops.rice',
    'Wheat': 'crops.wheat',
    'Cotton': 'crops.cotton',
    'Sugarcane': 'crops.sugarcane',
    'Soybean': 'crops.soybean',
    'Groundnut': 'crops.groundnut',
    'Maize': 'crops.maize',
    'Bajra': 'crops.bajra',
    'Jowar': 'crops.jowar',
    'Ragi': 'crops.ragi',
    'Gram': 'crops.gram',
    'Tur': 'crops.tur',
    'Moong': 'crops.moong',
    'Urad': 'crops.urad',
    'Masoor': 'crops.masoor',
    'Mustard': 'crops.mustard',
    'Sunflower': 'crops.sunflower',
    'Sesame': 'crops.sesame',
    'Castor': 'crops.castor',
    'Jute': 'crops.jute',
  };
  
  const translationKey = cropMap[cropName];
  return translationKey ? getTranslation(language, translationKey) : cropName;
};

// Helper function to translate fertilizer names
export const translateFertilizerName = (fertilizerName: string, language: string): string => {
  const fertilizerMap: Record<string, string> = {
    'Compost': 'fertilizers.compost',
    'Vermicompost': 'fertilizers.vermicompost',
    'Farmyard Manure': 'fertilizers.farmyardManure',
    'UREA': 'fertilizers.urea',
    'DAP': 'fertilizers.dap',
    'MOP': 'fertilizers.mop',
    'NPK': 'fertilizers.npk',
  };
  
  const translationKey = fertilizerMap[fertilizerName];
  return translationKey ? getTranslation(language, translationKey) : fertilizerName;
};

// Helper function to translate units
export const translateUnit = (unit: string, language: string): string => {
  const unitMap: Record<string, string> = {
    'kg/acre': 'units.kgPerAcre',
    '/acre': 'units.perAcre',
    'quintal': 'units.quintal',
    'kg': 'units.kg',
    'days': 'units.days',
  };
  
  const translationKey = unitMap[unit];
  return translationKey ? getTranslation(language, translationKey) : unit;
};

// Helper function to translate application methods
export const translateApplicationMethod = (method: string, language: string): string => {
  const methodMap: Record<string, string> = {
    'At transplanting': 'applicationMethods.atTransplanting',
    'Mix with soil before transplanting': 'applicationMethods.mixWithSoilBeforeTransplanting',
    'Apply in standing water': 'applicationMethods.applyInStandingWater',
    'Apply before panicle emergence': 'applicationMethods.applyBeforePanicleEmergence',
    '20-25 days after transplanting': 'applicationMethods.twentyToTwentyFiveDaysAfterTransplanting',
    '40-45 days after transplanting': 'applicationMethods.fortyToFortyFiveDaysAfterTransplanting',
    '60-65 days after transplanting': 'applicationMethods.sixtyToSixtyFiveDaysAfterTransplanting',
  };
  
  const translationKey = methodMap[method];
  return translationKey ? getTranslation(language, translationKey) : method;
};

// Helper function to translate irrigation method names
export const translateIrrigationMethodName = (methodName: string, language: string): string => {
  const methodMap: Record<string, string> = {
    'drip': 'irrigationMethods.dripIrrigation',
    'sprinkler': 'irrigationMethods.sprinklerIrrigation',
    'flood': 'irrigationMethods.floodIrrigation',
  };
  
  const translationKey = methodMap[methodName];
  return translationKey ? getTranslation(language, translationKey) : methodName;
};

// Helper function to translate irrigation advantages/disadvantages
export const translateIrrigationText = (text: string, language: string): string => {
  const textMap: Record<string, string> = {
    'Water efficient': 'irrigationMethods.waterEfficient',
    'Reduced weed growth': 'irrigationMethods.reducedWeedGrowth',
    'High initial cost': 'irrigationMethods.highInitialCost',
    'Clogging issues': 'irrigationMethods.cloggingIssues',
    'Uniform distribution': 'irrigationMethods.uniformDistribution',
    'Frost protection': 'irrigationMethods.frostProtection',
    'High water loss': 'irrigationMethods.highWaterLoss',
    'Wind affected': 'irrigationMethods.windAffected',
    'Traditional method': 'irrigationMethods.traditionalMethod',
    'Low cost': 'irrigationMethods.lowCost',
    'Water wastage': 'irrigationMethods.waterWastage',
    'Soil erosion': 'irrigationMethods.soilErosion',
  };
  
  const translationKey = textMap[text];
  return translationKey ? getTranslation(language, translationKey) : text;
};

// Helper function to translate management strategy content
export const translateManagementStrategyText = (text: string, language: string): string => {
  const textMap: Record<string, string> = {
    'Pre-monsoon preparation: Clear drainage channels and repair bunds': 'managementStrategies.preMonsoonPreparation',
    'During monsoon: Monitor water levels and prevent waterlogging': 'managementStrategies.duringMonsoon',
    'Post-monsoon: Assess crop damage and plan recovery measures': 'managementStrategies.postMonsoon',
    'Drainage systems: Install proper drainage to prevent root rot': 'managementStrategies.drainageSystems',
    'Crop selection: Choose flood-tolerant varieties for low-lying areas': 'managementStrategies.cropSelection',
    'Timing: Adjust planting schedules to avoid peak monsoon periods': 'managementStrategies.timing',
    'Soil conservation: Use mulching and cover crops to prevent erosion': 'managementStrategies.soilConservation',
    'Emergency measures: Keep pumps ready for emergency drainage': 'managementStrategies.emergencyMeasures',
    'Water conservation: Use mulching to reduce evaporation': 'managementStrategies.waterConservation',
    'Efficient irrigation: Switch to drip irrigation systems': 'managementStrategies.efficientIrrigation',
    'Soil management: Improve organic matter content': 'managementStrategies.soilManagement',
    'Water harvesting: Collect and store rainwater': 'managementStrategies.waterHarvesting',
    'Alternative sources: Use treated wastewater where possible': 'managementStrategies.alternativeSources',
  };
  
  const translationKey = textMap[text];
  return translationKey ? getTranslation(language, translationKey) : text;
};

// Helper function to translate watering signs content
export const translateWateringSignsText = (text: string, language: string): string => {
  const textMap: Record<string, string> = {
    'Yellowing leaves starting from bottom': 'wateringSigns.yellowingLeavesBottom',
    'Wilting despite moist soil': 'wateringSigns.wiltingDespiteMoistSoil',
    'Root rot and fungal diseases': 'wateringSigns.rootRotFungalDiseases',
    'Stunted growth and poor yield': 'wateringSigns.stuntedGrowthPoorYield',
    'Soil compaction and poor aeration': 'wateringSigns.soilCompactionPoorAeration',
    'Nutrient leaching and deficiency': 'wateringSigns.nutrientLeachingDeficiency',
    'Reduce irrigation frequency': 'wateringSigns.reduceIrrigationFrequency',
    'Improve soil drainage': 'wateringSigns.improveSoilDrainage',
    'Check for clogged drainage systems': 'wateringSigns.checkCloggedDrainage',
    'Allow soil to dry between irrigations': 'wateringSigns.allowSoilToDry',
    'Use raised beds for better drainage': 'wateringSigns.useRaisedBeds',
    'Apply fungicides if root rot is present': 'wateringSigns.applyFungicides',
    'Wilting and drooping leaves': 'wateringSigns.wiltingDroopingLeaves',
    'Dry, brittle leaves and stems': 'wateringSigns.dryBrittleLeaves',
    'Reduced growth and yield': 'wateringSigns.reducedGrowthYield',
    'Early flowering and maturity': 'wateringSigns.earlyFloweringMaturity',
    'Cracked soil surface': 'wateringSigns.crackedSoilSurface',
    'Poor fruit/seed development': 'wateringSigns.poorFruitSeedDevelopment',
    'Increase irrigation frequency': 'wateringSigns.increaseIrrigationFrequency',
    'Check irrigation system efficiency': 'wateringSigns.checkIrrigationEfficiency',
    'Mulch soil to retain moisture': 'wateringSigns.mulchSoilRetainMoisture',
    'Water deeply and less frequently': 'wateringSigns.waterDeeplyLessFrequently',
    'Monitor soil moisture regularly': 'wateringSigns.monitorSoilMoisture',
    'Consider drought-tolerant varieties': 'wateringSigns.considerDroughtTolerantVarieties',
  };
  
  const translationKey = textMap[text];
  return translationKey ? getTranslation(language, translationKey) : text;
};

// Helper function to translate weather condition names
export const translateWeatherCondition = (condition: string, language: string): string => {
  const conditionMap: Record<string, string> = {
    'Hot & Dry': 'weatherConditions.hotAndDry',
    'Humid': 'weatherConditions.humid',
    'Rainy': 'weatherConditions.rainy',
    'Cold': 'weatherConditions.cold',
    'Windy': 'weatherConditions.windy',
  };
  
  const translationKey = conditionMap[condition];
  return translationKey ? getTranslation(language, translationKey) : condition;
};

// Helper function to translate weather condition recommendations
export const translateWeatherRecommendation = (recommendation: string, language: string): string => {
  const recommendationMap: Record<string, string> = {
    'Increase irrigation frequency and amount': 'weatherConditions.increaseIrrigationFrequency',
    'Reduce irrigation to prevent waterlogging': 'weatherConditions.reduceIrrigationPreventWaterlogging',
    'Suspend irrigation, monitor drainage': 'weatherConditions.suspendIrrigationMonitorDrainage',
    'Reduce irrigation, protect from frost': 'weatherConditions.reduceIrrigationProtectFromFrost',
    'Increase irrigation due to evaporation': 'weatherConditions.increaseIrrigationDueToEvaporation',
  };
  
  const translationKey = recommendationMap[recommendation];
  return translationKey ? getTranslation(language, translationKey) : recommendation;
};

// Helper function to translate soil moisture level names
export const translateSoilMoistureLevel = (level: string, language: string): string => {
  const levelMap: Record<string, string> = {
    'Very Dry': 'soilMoistureLevels.veryDry',
    'Dry': 'soilMoistureLevels.dry',
    'Optimal': 'soilMoistureLevels.optimal',
    'Wet': 'soilMoistureLevels.wet',
    'Saturated': 'soilMoistureLevels.saturated',
  };
  
  const translationKey = levelMap[level];
  return translationKey ? getTranslation(language, translationKey) : level;
};

// Helper function to translate soil moisture descriptions
export const translateSoilMoistureDescription = (description: string, language: string): string => {
  const descriptionMap: Record<string, string> = {
    'Soil is completely dry, plants wilting': 'soilMoistureLevels.soilCompletelyDry',
    'Soil is dry, plants showing stress': 'soilMoistureLevels.soilIsDry',
    'Soil moisture is perfect for plant growth': 'soilMoistureLevels.soilMoisturePerfect',
    'Soil is moist, approaching saturation': 'soilMoistureLevels.soilMoistApproachingSaturation',
    'Soil is waterlogged, poor aeration': 'soilMoistureLevels.soilWaterlogged',
  };
  
  const translationKey = descriptionMap[description];
  return translationKey ? getTranslation(language, translationKey) : description;
};

// Helper function to translate soil moisture actions
export const translateSoilMoistureAction = (action: string, language: string): string => {
  const actionMap: Record<string, string> = {
    'Immediate irrigation required': 'soilMoistureLevels.immediateIrrigationRequired',
    'Irrigate within 1-2 days': 'soilMoistureLevels.irrigateWithinOneToTwoDays',
    'Maintain current irrigation schedule': 'soilMoistureLevels.maintainCurrentIrrigationSchedule',
    'Reduce irrigation frequency': 'soilMoistureLevels.reduceIrrigationFrequency',
    'Stop irrigation, improve drainage': 'soilMoistureLevels.stopIrrigationImproveDrainage',
  };
  
  const translationKey = actionMap[action];
  return translationKey ? getTranslation(language, translationKey) : action;
};
