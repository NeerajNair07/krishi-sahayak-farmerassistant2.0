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
