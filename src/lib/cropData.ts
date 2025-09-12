// Comprehensive crop data for fertilizer and irrigation advice
export interface CropStage {
  npk: { N: number; P: number; K: number };
  timing: string;
  application: string;
  waterRequirement: number; // liters per day per plant
  frequency: string;
  duration: string;
  criticalPeriod: boolean;
}

export interface CropData {
  name: string;
  stages: { [key: string]: CropStage };
  organicAlternatives: {
    compost: { npk: { N: number; P: number; K: number }; cost: number };
    vermicompost: { npk: { N: number; P: number; K: number }; cost: number };
    farmyardManure: { npk: { N: number; P: number; K: number }; cost: number };
  };
  syntheticOptions: {
    urea: { npk: { N: number; P: number; K: number }; cost: number };
    dap: { npk: { N: number; P: number; K: number }; cost: number };
    mop: { npk: { N: number; P: number; K: number }; cost: number };
    npk: { npk: { N: number; P: number; K: number }; cost: number };
  };
  irrigationMethods: {
    drip: { efficiency: number; suitability: string; pros: string[]; cons: string[] };
    sprinkler: { efficiency: number; suitability: string; pros: string[]; cons: string[] };
    flood: { efficiency: number; suitability: string; pros: string[]; cons: string[] };
  };
  totalWaterRequirement: number;
}

// Common fertilizer and irrigation data
const commonOrganicAlternatives = {
  compost: { npk: { N: 1.5, P: 0.8, K: 1.2 }, cost: 2.5 },
  vermicompost: { npk: { N: 2.0, P: 1.0, K: 1.5 }, cost: 4.0 },
  farmyardManure: { npk: { N: 0.5, P: 0.2, K: 0.5 }, cost: 1.5 }
};

const commonSyntheticOptions = {
  urea: { npk: { N: 46, P: 0, K: 0 }, cost: 5.5 },
  dap: { npk: { N: 18, P: 46, K: 0 }, cost: 12.0 },
  mop: { npk: { N: 0, P: 0, K: 60 }, cost: 8.0 },
  npk: { npk: { N: 19, P: 19, K: 19 }, cost: 15.0 }
};

// Comprehensive crop data
export const cropData: Record<string, CropData> = {
  rice: {
    name: 'Rice',
    stages: {
      'Nursery Stage': {
        npk: { N: 60, P: 30, K: 30 },
        timing: 'At transplanting',
        application: 'Mix with soil before transplanting',
        waterRequirement: 2.5,
        frequency: 'Daily',
        duration: '15-20 days',
        criticalPeriod: false
      },
      'Vegetative Stage': {
        npk: { N: 40, P: 0, K: 0 },
        timing: '20-25 days after transplanting',
        application: 'Apply in standing water',
        waterRequirement: 4.0,
        frequency: 'Every 2-3 days',
        duration: '30-40 days',
        criticalPeriod: false
      },
      'Tillering Stage': {
        npk: { N: 30, P: 0, K: 0 },
        timing: '40-45 days after transplanting',
        application: 'Apply in standing water',
        waterRequirement: 5.5,
        frequency: 'Every 2-3 days',
        duration: '20-25 days',
        criticalPeriod: true
      },
      'Panicle Initiation': {
        npk: { N: 20, P: 0, K: 20 },
        timing: '60-65 days after transplanting',
        application: 'Apply before panicle emergence',
        waterRequirement: 6.0,
        frequency: 'Every 2-3 days',
        duration: '15-20 days',
        criticalPeriod: true
      }
    },
    organicAlternatives: commonOrganicAlternatives,
    syntheticOptions: commonSyntheticOptions,
    irrigationMethods: {
      drip: { efficiency: 85, suitability: 'Moderate', pros: ['Water efficient', 'Reduced weed growth'], cons: ['High initial cost', 'Clogging issues'] },
      sprinkler: { efficiency: 70, suitability: 'Low', pros: ['Uniform distribution', 'Frost protection'], cons: ['High water loss', 'Wind affected'] },
      flood: { efficiency: 60, suitability: 'High', pros: ['Traditional method', 'Low cost'], cons: ['Water wastage', 'Soil erosion'] }
    },
    totalWaterRequirement: 1200
  },
  wheat: {
    name: 'Wheat',
    stages: {
      'Sowing': {
        npk: { N: 50, P: 25, K: 25 },
        timing: 'At sowing',
        application: 'Mix with soil in seed rows',
        waterRequirement: 2.0,
        frequency: 'Every 3-4 days',
        duration: '10-15 days',
        criticalPeriod: true
      },
      'Tillering': {
        npk: { N: 40, P: 0, K: 0 },
        timing: '25-30 days after sowing',
        application: 'Apply near plant base',
        waterRequirement: 3.5,
        frequency: 'Every 4-5 days',
        duration: '20-25 days',
        criticalPeriod: true
      },
      'Flowering': {
        npk: { N: 30, P: 0, K: 20 },
        timing: '60-70 days after sowing',
        application: 'Apply during flowering',
        waterRequirement: 4.0,
        frequency: 'Every 3-4 days',
        duration: '10-15 days',
        criticalPeriod: true
      },
      'Grain Filling': {
        npk: { N: 20, P: 0, K: 0 },
        timing: '80-90 days after sowing',
        application: 'Apply before grain filling',
        waterRequirement: 3.0,
        frequency: 'Every 5-7 days',
        duration: '20-25 days',
        criticalPeriod: false
      }
    },
    organicAlternatives: commonOrganicAlternatives,
    syntheticOptions: commonSyntheticOptions,
    irrigationMethods: {
      drip: { efficiency: 88, suitability: 'High', pros: ['Water efficient', 'Better yield'], cons: ['Initial cost', 'Maintenance'] },
      sprinkler: { efficiency: 75, suitability: 'Moderate', pros: ['Good coverage', 'Frost protection'], cons: ['Water loss', 'Wind affected'] },
      flood: { efficiency: 65, suitability: 'Low', pros: ['Low cost', 'Simple method'], cons: ['Water wastage', 'Soil erosion'] }
    },
    totalWaterRequirement: 600
  },
  cotton: {
    name: 'Cotton',
    stages: {
      'Sowing': {
        npk: { N: 40, P: 20, K: 20 },
        timing: 'At sowing',
        application: 'Mix with soil in seed rows',
        waterRequirement: 2.5,
        frequency: 'Every 3-4 days',
        duration: '15-20 days',
        criticalPeriod: true
      },
      'Vegetative': {
        npk: { N: 50, P: 0, K: 0 },
        timing: '30-40 days after sowing',
        application: 'Apply near plant base',
        waterRequirement: 4.0,
        frequency: 'Every 4-5 days',
        duration: '40-50 days',
        criticalPeriod: false
      },
      'Flowering': {
        npk: { N: 30, P: 0, K: 30 },
        timing: '70-80 days after sowing',
        application: 'Apply during flowering',
        waterRequirement: 5.0,
        frequency: 'Every 3-4 days',
        duration: '20-25 days',
        criticalPeriod: true
      },
      'Boll Development': {
        npk: { N: 20, P: 0, K: 20 },
        timing: '90-100 days after sowing',
        application: 'Apply during boll development',
        waterRequirement: 4.5,
        frequency: 'Every 4-5 days',
        duration: '30-40 days',
        criticalPeriod: true
      }
    },
    organicAlternatives: commonOrganicAlternatives,
    syntheticOptions: commonSyntheticOptions,
    irrigationMethods: {
      drip: { efficiency: 90, suitability: 'High', pros: ['Very water efficient', 'Higher yield'], cons: ['High initial cost', 'Maintenance required'] },
      sprinkler: { efficiency: 72, suitability: 'Moderate', pros: ['Good coverage', 'Flexible timing'], cons: ['Water loss', 'Wind affected'] },
      flood: { efficiency: 60, suitability: 'Low', pros: ['Traditional method', 'Low cost'], cons: ['Water wastage', 'Soil compaction'] }
    },
    totalWaterRequirement: 1000
  },
  sugarcane: {
    name: 'Sugarcane',
    stages: {
      'Planting': {
        npk: { N: 80, P: 40, K: 40 },
        timing: 'At planting',
        application: 'Mix with soil in furrows',
        waterRequirement: 3.0,
        frequency: 'Every 2-3 days',
        duration: '10-15 days',
        criticalPeriod: true
      },
      'Tillering': {
        npk: { N: 60, P: 0, K: 0 },
        timing: '60-75 days after planting',
        application: 'Apply in furrows and cover',
        waterRequirement: 6.0,
        frequency: 'Every 3-4 days',
        duration: '60-80 days',
        criticalPeriod: false
      },
      'Grand Growth': {
        npk: { N: 40, P: 0, K: 0 },
        timing: '120-135 days after planting',
        application: 'Apply in furrows and cover',
        waterRequirement: 8.0,
        frequency: 'Every 3-4 days',
        duration: '120-150 days',
        criticalPeriod: true
      },
      'Maturity': {
        npk: { N: 20, P: 0, K: 20 },
        timing: '180-200 days after planting',
        application: 'Apply before monsoon',
        waterRequirement: 4.0,
        frequency: 'Every 5-7 days',
        duration: '60-90 days',
        criticalPeriod: false
      }
    },
    organicAlternatives: commonOrganicAlternatives,
    syntheticOptions: commonSyntheticOptions,
    irrigationMethods: {
      drip: { efficiency: 90, suitability: 'High', pros: ['Very water efficient', 'Higher yield'], cons: ['High initial cost', 'Maintenance required'] },
      sprinkler: { efficiency: 75, suitability: 'Moderate', pros: ['Good coverage', 'Frost protection'], cons: ['Water loss', 'Wind affected'] },
      flood: { efficiency: 65, suitability: 'Moderate', pros: ['Traditional method', 'Low cost'], cons: ['Water wastage', 'Soil compaction'] }
    },
    totalWaterRequirement: 2000
  },
  maize: {
    name: 'Maize',
    stages: {
      'Sowing': {
        npk: { N: 60, P: 30, K: 30 },
        timing: 'At sowing',
        application: 'Mix with soil in seed rows',
        waterRequirement: 2.0,
        frequency: 'Every 3-4 days',
        duration: '10-15 days',
        criticalPeriod: true
      },
      'Vegetative': {
        npk: { N: 40, P: 0, K: 0 },
        timing: '25-30 days after sowing',
        application: 'Apply near plant base',
        waterRequirement: 3.5,
        frequency: 'Every 4-5 days',
        duration: '30-40 days',
        criticalPeriod: false
      },
      'Tasseling': {
        npk: { N: 30, P: 0, K: 20 },
        timing: '50-60 days after sowing',
        application: 'Apply during tasseling',
        waterRequirement: 4.5,
        frequency: 'Every 3-4 days',
        duration: '10-15 days',
        criticalPeriod: true
      },
      'Grain Filling': {
        npk: { N: 20, P: 0, K: 0 },
        timing: '70-80 days after sowing',
        application: 'Apply during grain filling',
        waterRequirement: 3.0,
        frequency: 'Every 5-7 days',
        duration: '20-25 days',
        criticalPeriod: true
      }
    },
    organicAlternatives: commonOrganicAlternatives,
    syntheticOptions: commonSyntheticOptions,
    irrigationMethods: {
      drip: { efficiency: 85, suitability: 'High', pros: ['Water efficient', 'Better yield'], cons: ['Initial cost', 'Maintenance'] },
      sprinkler: { efficiency: 70, suitability: 'Moderate', pros: ['Good coverage', 'Easy operation'], cons: ['Water loss', 'Wind affected'] },
      flood: { efficiency: 55, suitability: 'Low', pros: ['Low cost', 'Simple method'], cons: ['Water wastage', 'Soil erosion'] }
    },
    totalWaterRequirement: 800
  },
  soybean: {
    name: 'Soybean',
    stages: {
      'Sowing': {
        npk: { N: 20, P: 40, K: 20 },
        timing: 'At sowing',
        application: 'Mix with soil in seed rows',
        waterRequirement: 1.5,
        frequency: 'Every 3-4 days',
        duration: '10-15 days',
        criticalPeriod: true
      },
      'Vegetative': {
        npk: { N: 30, P: 0, K: 0 },
        timing: '25-30 days after sowing',
        application: 'Apply near plant base',
        waterRequirement: 2.5,
        frequency: 'Every 4-5 days',
        duration: '30-40 days',
        criticalPeriod: false
      },
      'Flowering': {
        npk: { N: 20, P: 0, K: 20 },
        timing: '45-50 days after sowing',
        application: 'Apply during flowering',
        waterRequirement: 3.0,
        frequency: 'Every 3-4 days',
        duration: '15-20 days',
        criticalPeriod: true
      },
      'Pod Development': {
        npk: { N: 10, P: 0, K: 10 },
        timing: '60-70 days after sowing',
        application: 'Apply during pod development',
        waterRequirement: 2.5,
        frequency: 'Every 4-5 days',
        duration: '20-25 days',
        criticalPeriod: true
      }
    },
    organicAlternatives: commonOrganicAlternatives,
    syntheticOptions: commonSyntheticOptions,
    irrigationMethods: {
      drip: { efficiency: 88, suitability: 'High', pros: ['Water efficient', 'Better yield'], cons: ['Initial cost', 'Maintenance'] },
      sprinkler: { efficiency: 72, suitability: 'Moderate', pros: ['Good coverage', 'Easy operation'], cons: ['Water loss', 'Wind affected'] },
      flood: { efficiency: 60, suitability: 'Low', pros: ['Low cost', 'Simple method'], cons: ['Water wastage', 'Soil erosion'] }
    },
    totalWaterRequirement: 500
  },
  groundnut: {
    name: 'Groundnut',
    stages: {
      'Sowing': {
        npk: { N: 20, P: 30, K: 20 },
        timing: 'At sowing',
        application: 'Mix with soil in seed rows',
        waterRequirement: 1.0,
        frequency: 'Every 4-5 days',
        duration: '10-15 days',
        criticalPeriod: true
      },
      'Vegetative': {
        npk: { N: 30, P: 0, K: 0 },
        timing: '25-30 days after sowing',
        application: 'Apply near plant base',
        waterRequirement: 2.0,
        frequency: 'Every 5-6 days',
        duration: '30-40 days',
        criticalPeriod: false
      },
      'Flowering': {
        npk: { N: 20, P: 0, K: 20 },
        timing: '40-45 days after sowing',
        application: 'Apply during flowering',
        waterRequirement: 2.5,
        frequency: 'Every 4-5 days',
        duration: '15-20 days',
        criticalPeriod: true
      },
      'Pod Development': {
        npk: { N: 10, P: 0, K: 10 },
        timing: '60-70 days after sowing',
        application: 'Apply during pod development',
        waterRequirement: 2.0,
        frequency: 'Every 5-6 days',
        duration: '30-40 days',
        criticalPeriod: true
      }
    },
    organicAlternatives: commonOrganicAlternatives,
    syntheticOptions: commonSyntheticOptions,
    irrigationMethods: {
      drip: { efficiency: 90, suitability: 'High', pros: ['Very water efficient', 'Better yield'], cons: ['Initial cost', 'Maintenance'] },
      sprinkler: { efficiency: 75, suitability: 'Moderate', pros: ['Good coverage', 'Easy operation'], cons: ['Water loss', 'Wind affected'] },
      flood: { efficiency: 50, suitability: 'Low', pros: ['Low cost', 'Simple method'], cons: ['Water wastage', 'Soil erosion'] }
    },
    totalWaterRequirement: 400
  },
  sunflower: {
    name: 'Sunflower',
    stages: {
      'Germination': {
        npk: { N: 40, P: 20, K: 20 },
        timing: 'At sowing',
        application: 'Mix with soil in seed rows',
        waterRequirement: 1.5,
        frequency: 'Every 2-3 days',
        duration: '7-10 days',
        criticalPeriod: true
      },
      'Vegetative': {
        npk: { N: 30, P: 0, K: 0 },
        timing: '25-30 days after sowing',
        application: 'Apply near plant base',
        waterRequirement: 3.5,
        frequency: 'Every 4-5 days',
        duration: '30-40 days',
        criticalPeriod: false
      },
      'Flowering': {
        npk: { N: 20, P: 0, K: 0 },
        timing: '45-50 days after sowing',
        application: 'Apply before flowering',
        waterRequirement: 5.0,
        frequency: 'Every 3-4 days',
        duration: '15-20 days',
        criticalPeriod: true
      },
      'Seed Development': {
        npk: { N: 10, P: 0, K: 10 },
        timing: '60-65 days after sowing',
        application: 'Apply during flowering',
        waterRequirement: 4.0,
        frequency: 'Every 4-5 days',
        duration: '25-30 days',
        criticalPeriod: true
      }
    },
    organicAlternatives: commonOrganicAlternatives,
    syntheticOptions: commonSyntheticOptions,
    irrigationMethods: {
      drip: { efficiency: 88, suitability: 'High', pros: ['Water efficient', 'Better yield'], cons: ['Initial cost', 'Maintenance'] },
      sprinkler: { efficiency: 72, suitability: 'Moderate', pros: ['Good coverage', 'Frost protection'], cons: ['Water loss', 'Wind affected'] },
      flood: { efficiency: 55, suitability: 'Low', pros: ['Low cost', 'Simple method'], cons: ['Water wastage', 'Soil erosion'] }
    },
    totalWaterRequirement: 800
  },
  onion: {
    name: 'Onion',
    stages: {
      'Transplanting': {
        npk: { N: 30, P: 20, K: 20 },
        timing: 'At transplanting',
        application: 'Mix with soil before transplanting',
        waterRequirement: 1.5,
        frequency: 'Every 2-3 days',
        duration: '10-15 days',
        criticalPeriod: true
      },
      'Vegetative': {
        npk: { N: 40, P: 0, K: 0 },
        timing: '20-25 days after transplanting',
        application: 'Apply near plant base',
        waterRequirement: 2.5,
        frequency: 'Every 3-4 days',
        duration: '40-50 days',
        criticalPeriod: false
      },
      'Bulb Formation': {
        npk: { N: 20, P: 0, K: 20 },
        timing: '60-70 days after transplanting',
        application: 'Apply during bulb formation',
        waterRequirement: 3.0,
        frequency: 'Every 3-4 days',
        duration: '30-40 days',
        criticalPeriod: true
      },
      'Maturity': {
        npk: { N: 10, P: 0, K: 0 },
        timing: '90-100 days after transplanting',
        application: 'Apply before maturity',
        waterRequirement: 1.5,
        frequency: 'Every 5-7 days',
        duration: '15-20 days',
        criticalPeriod: false
      }
    },
    organicAlternatives: commonOrganicAlternatives,
    syntheticOptions: commonSyntheticOptions,
    irrigationMethods: {
      drip: { efficiency: 85, suitability: 'High', pros: ['Water efficient', 'Better yield'], cons: ['Initial cost', 'Maintenance'] },
      sprinkler: { efficiency: 70, suitability: 'Moderate', pros: ['Good coverage', 'Easy operation'], cons: ['Water loss', 'Wind affected'] },
      flood: { efficiency: 60, suitability: 'Low', pros: ['Low cost', 'Simple method'], cons: ['Water wastage', 'Soil erosion'] }
    },
    totalWaterRequirement: 600
  },
  potato: {
    name: 'Potato',
    stages: {
      'Planting': {
        npk: { N: 50, P: 30, K: 30 },
        timing: 'At planting',
        application: 'Mix with soil in furrows',
        waterRequirement: 2.0,
        frequency: 'Every 3-4 days',
        duration: '15-20 days',
        criticalPeriod: true
      },
      'Vegetative': {
        npk: { N: 40, P: 0, K: 0 },
        timing: '25-30 days after planting',
        application: 'Apply near plant base',
        waterRequirement: 3.0,
        frequency: 'Every 4-5 days',
        duration: '30-40 days',
        criticalPeriod: false
      },
      'Tuber Initiation': {
        npk: { N: 30, P: 0, K: 20 },
        timing: '50-60 days after planting',
        application: 'Apply during tuber initiation',
        waterRequirement: 3.5,
        frequency: 'Every 3-4 days',
        duration: '20-25 days',
        criticalPeriod: true
      },
      'Tuber Development': {
        npk: { N: 20, P: 0, K: 20 },
        timing: '70-80 days after planting',
        application: 'Apply during tuber development',
        waterRequirement: 3.0,
        frequency: 'Every 4-5 days',
        duration: '30-40 days',
        criticalPeriod: true
      }
    },
    organicAlternatives: commonOrganicAlternatives,
    syntheticOptions: commonSyntheticOptions,
    irrigationMethods: {
      drip: { efficiency: 90, suitability: 'High', pros: ['Very water efficient', 'Better yield'], cons: ['Initial cost', 'Maintenance'] },
      sprinkler: { efficiency: 75, suitability: 'Moderate', pros: ['Good coverage', 'Easy operation'], cons: ['Water loss', 'Wind affected'] },
      flood: { efficiency: 65, suitability: 'Low', pros: ['Low cost', 'Simple method'], cons: ['Water wastage', 'Soil erosion'] }
    },
    totalWaterRequirement: 700
  },
  tomato: {
    name: 'Tomato',
    stages: {
      'Transplanting': {
        npk: { N: 40, P: 25, K: 25 },
        timing: 'At transplanting',
        application: 'Mix with soil before transplanting',
        waterRequirement: 2.0,
        frequency: 'Every 2-3 days',
        duration: '10-15 days',
        criticalPeriod: true
      },
      'Vegetative': {
        npk: { N: 30, P: 0, K: 0 },
        timing: '20-25 days after transplanting',
        application: 'Apply near plant base',
        waterRequirement: 3.0,
        frequency: 'Every 3-4 days',
        duration: '30-40 days',
        criticalPeriod: false
      },
      'Flowering': {
        npk: { N: 20, P: 0, K: 20 },
        timing: '45-50 days after transplanting',
        application: 'Apply during flowering',
        waterRequirement: 3.5,
        frequency: 'Every 3-4 days',
        duration: '15-20 days',
        criticalPeriod: true
      },
      'Fruit Development': {
        npk: { N: 20, P: 0, K: 20 },
        timing: '60-70 days after transplanting',
        application: 'Apply during fruit development',
        waterRequirement: 3.0,
        frequency: 'Every 4-5 days',
        duration: '40-50 days',
        criticalPeriod: true
      }
    },
    organicAlternatives: commonOrganicAlternatives,
    syntheticOptions: commonSyntheticOptions,
    irrigationMethods: {
      drip: { efficiency: 90, suitability: 'High', pros: ['Very water efficient', 'Better yield'], cons: ['Initial cost', 'Maintenance'] },
      sprinkler: { efficiency: 70, suitability: 'Low', pros: ['Good coverage', 'Easy operation'], cons: ['Water loss', 'Disease risk'] },
      flood: { efficiency: 55, suitability: 'Low', pros: ['Low cost', 'Simple method'], cons: ['Water wastage', 'Soil erosion'] }
    },
    totalWaterRequirement: 800
  },
  chili: {
    name: 'Chili',
    stages: {
      'Transplanting': {
        npk: { N: 30, P: 20, K: 20 },
        timing: 'At transplanting',
        application: 'Mix with soil before transplanting',
        waterRequirement: 1.5,
        frequency: 'Every 2-3 days',
        duration: '10-15 days',
        criticalPeriod: true
      },
      'Vegetative': {
        npk: { N: 25, P: 0, K: 0 },
        timing: '20-25 days after transplanting',
        application: 'Apply near plant base',
        waterRequirement: 2.5,
        frequency: 'Every 3-4 days',
        duration: '30-40 days',
        criticalPeriod: false
      },
      'Flowering': {
        npk: { N: 20, P: 0, K: 15 },
        timing: '45-50 days after transplanting',
        application: 'Apply during flowering',
        waterRequirement: 3.0,
        frequency: 'Every 3-4 days',
        duration: '15-20 days',
        criticalPeriod: true
      },
      'Fruit Development': {
        npk: { N: 15, P: 0, K: 15 },
        timing: '60-70 days after transplanting',
        application: 'Apply during fruit development',
        waterRequirement: 2.5,
        frequency: 'Every 4-5 days',
        duration: '40-50 days',
        criticalPeriod: true
      }
    },
    organicAlternatives: commonOrganicAlternatives,
    syntheticOptions: commonSyntheticOptions,
    irrigationMethods: {
      drip: { efficiency: 88, suitability: 'High', pros: ['Water efficient', 'Better yield'], cons: ['Initial cost', 'Maintenance'] },
      sprinkler: { efficiency: 70, suitability: 'Moderate', pros: ['Good coverage', 'Easy operation'], cons: ['Water loss', 'Wind affected'] },
      flood: { efficiency: 60, suitability: 'Low', pros: ['Low cost', 'Simple method'], cons: ['Water wastage', 'Soil erosion'] }
    },
    totalWaterRequirement: 600
  },
  turmeric: {
    name: 'Turmeric',
    stages: {
      'Planting': {
        npk: { N: 40, P: 30, K: 30 },
        timing: 'At planting',
        application: 'Mix with soil in furrows',
        waterRequirement: 2.0,
        frequency: 'Every 3-4 days',
        duration: '15-20 days',
        criticalPeriod: true
      },
      'Vegetative': {
        npk: { N: 30, P: 0, K: 0 },
        timing: '30-40 days after planting',
        application: 'Apply near plant base',
        waterRequirement: 3.0,
        frequency: 'Every 4-5 days',
        duration: '60-80 days',
        criticalPeriod: false
      },
      'Rhizome Development': {
        npk: { N: 20, P: 0, K: 20 },
        timing: '100-120 days after planting',
        application: 'Apply during rhizome development',
        waterRequirement: 3.5,
        frequency: 'Every 3-4 days',
        duration: '60-80 days',
        criticalPeriod: true
      },
      'Maturity': {
        npk: { N: 10, P: 0, K: 10 },
        timing: '180-200 days after planting',
        application: 'Apply before maturity',
        waterRequirement: 2.0,
        frequency: 'Every 5-7 days',
        duration: '30-40 days',
        criticalPeriod: false
      }
    },
    organicAlternatives: commonOrganicAlternatives,
    syntheticOptions: commonSyntheticOptions,
    irrigationMethods: {
      drip: { efficiency: 85, suitability: 'High', pros: ['Water efficient', 'Better yield'], cons: ['Initial cost', 'Maintenance'] },
      sprinkler: { efficiency: 70, suitability: 'Moderate', pros: ['Good coverage', 'Easy operation'], cons: ['Water loss', 'Wind affected'] },
      flood: { efficiency: 65, suitability: 'Low', pros: ['Low cost', 'Simple method'], cons: ['Water wastage', 'Soil erosion'] }
    },
    totalWaterRequirement: 1000
  },
  coriander: {
    name: 'Coriander',
    stages: {
      'Sowing': {
        npk: { N: 20, P: 15, K: 15 },
        timing: 'At sowing',
        application: 'Mix with soil in seed rows',
        waterRequirement: 1.0,
        frequency: 'Every 2-3 days',
        duration: '7-10 days',
        criticalPeriod: true
      },
      'Vegetative': {
        npk: { N: 15, P: 0, K: 0 },
        timing: '15-20 days after sowing',
        application: 'Apply near plant base',
        waterRequirement: 1.5,
        frequency: 'Every 3-4 days',
        duration: '20-25 days',
        criticalPeriod: false
      },
      'Flowering': {
        npk: { N: 10, P: 0, K: 10 },
        timing: '35-40 days after sowing',
        application: 'Apply during flowering',
        waterRequirement: 2.0,
        frequency: 'Every 3-4 days',
        duration: '10-15 days',
        criticalPeriod: true
      },
      'Seed Development': {
        npk: { N: 5, P: 0, K: 5 },
        timing: '45-50 days after sowing',
        application: 'Apply during seed development',
        waterRequirement: 1.5,
        frequency: 'Every 4-5 days',
        duration: '15-20 days',
        criticalPeriod: true
      }
    },
    organicAlternatives: commonOrganicAlternatives,
    syntheticOptions: commonSyntheticOptions,
    irrigationMethods: {
      drip: { efficiency: 85, suitability: 'High', pros: ['Water efficient', 'Better yield'], cons: ['Initial cost', 'Maintenance'] },
      sprinkler: { efficiency: 70, suitability: 'Moderate', pros: ['Good coverage', 'Easy operation'], cons: ['Water loss', 'Wind affected'] },
      flood: { efficiency: 60, suitability: 'Low', pros: ['Low cost', 'Simple method'], cons: ['Water wastage', 'Soil erosion'] }
    },
    totalWaterRequirement: 300
  },
  cumin: {
    name: 'Cumin',
    stages: {
      'Sowing': {
        npk: { N: 25, P: 20, K: 20 },
        timing: 'At sowing',
        application: 'Mix with soil in seed rows',
        waterRequirement: 1.0,
        frequency: 'Every 3-4 days',
        duration: '10-15 days',
        criticalPeriod: true
      },
      'Vegetative': {
        npk: { N: 20, P: 0, K: 0 },
        timing: '20-25 days after sowing',
        application: 'Apply near plant base',
        waterRequirement: 1.5,
        frequency: 'Every 4-5 days',
        duration: '30-40 days',
        criticalPeriod: false
      },
      'Flowering': {
        npk: { N: 15, P: 0, K: 15 },
        timing: '60-70 days after sowing',
        application: 'Apply during flowering',
        waterRequirement: 2.0,
        frequency: 'Every 3-4 days',
        duration: '15-20 days',
        criticalPeriod: true
      },
      'Seed Development': {
        npk: { N: 10, P: 0, K: 10 },
        timing: '80-90 days after sowing',
        application: 'Apply during seed development',
        waterRequirement: 1.5,
        frequency: 'Every 4-5 days',
        duration: '20-25 days',
        criticalPeriod: true
      }
    },
    organicAlternatives: commonOrganicAlternatives,
    syntheticOptions: commonSyntheticOptions,
    irrigationMethods: {
      drip: { efficiency: 88, suitability: 'High', pros: ['Water efficient', 'Better yield'], cons: ['Initial cost', 'Maintenance'] },
      sprinkler: { efficiency: 72, suitability: 'Moderate', pros: ['Good coverage', 'Easy operation'], cons: ['Water loss', 'Wind affected'] },
      flood: { efficiency: 60, suitability: 'Low', pros: ['Low cost', 'Simple method'], cons: ['Water wastage', 'Soil erosion'] }
    },
    totalWaterRequirement: 400
  }
};

// Helper function to get crop data by name (case-insensitive)
export const getCropData = (cropName: string): CropData | null => {
  const normalizedName = cropName.toLowerCase();
  return cropData[normalizedName] || null;
};

// Helper function to get available crops for user
export const getAvailableCrops = (userCrops: string[]): CropData[] => {
  return userCrops
    .map(crop => getCropData(crop))
    .filter((crop): crop is CropData => crop !== null);
};
