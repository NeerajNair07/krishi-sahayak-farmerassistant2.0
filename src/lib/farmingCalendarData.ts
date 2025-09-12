// Farming Calendar Data for different crops
export interface CropActivity {
  id: string;
  name: string;
  description: string;
  type: 'sowing' | 'fertilizing' | 'irrigation' | 'pest_control' | 'harvesting' | 'procurement' | 'other';
  priority: 'high' | 'medium' | 'low';
  duration: number; // days
  weatherDependent: boolean;
  month: number; // 1-12
  week: number; // 1-4
  inputs?: string[];
  notes?: string;
}

export interface CropCalendar {
  cropName: string;
  activities: CropActivity[];
  totalDuration: number; // days from sowing to harvest
  season: 'kharif' | 'rabi' | 'zaid' | 'year_round';
}

export interface UserCalendarEntry {
  id: string;
  userId: string;
  cropName: string;
  activityId: string;
  scheduledDate: string;
  completedDate?: string;
  status: 'pending' | 'completed' | 'cancelled';
  notes?: string;
  weatherAdjusted?: boolean;
  createdAt: string;
  updatedAt: string;
}

// Comprehensive farming calendar data for all crops
export const farmingCalendarData: Record<string, CropCalendar> = {
  rice: {
    cropName: 'Rice',
    season: 'kharif',
    totalDuration: 120,
    activities: [
      {
        id: 'rice_seed_procurement',
        name: 'Seed Procurement',
        description: 'Purchase certified rice seeds (variety suitable for your region)',
        type: 'procurement',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 5,
        week: 3,
        inputs: ['Certified seeds (25-30 kg/acre)', 'Seed treatment chemicals'],
        notes: 'Choose varieties based on your region and soil type'
      },
      {
        id: 'rice_nursery_preparation',
        name: 'Nursery Preparation',
        description: 'Prepare nursery bed for rice seedlings',
        type: 'sowing',
        priority: 'high',
        duration: 3,
        weatherDependent: true,
        month: 6,
        week: 1,
        inputs: ['Organic manure', 'Fertilizers', 'Pesticides'],
        notes: 'Ensure proper drainage and water management'
      },
      {
        id: 'rice_nursery_sowing',
        name: 'Nursery Sowing',
        description: 'Sow rice seeds in nursery bed',
        type: 'sowing',
        priority: 'high',
        duration: 1,
        weatherDependent: true,
        month: 6,
        week: 2,
        inputs: ['Pre-treated seeds'],
        notes: 'Optimal temperature: 25-30°C'
      },
      {
        id: 'rice_field_preparation',
        name: 'Field Preparation',
        description: 'Prepare main field for transplanting',
        type: 'other',
        priority: 'high',
        duration: 5,
        weatherDependent: true,
        month: 6,
        week: 4,
        inputs: ['Tractor/plow', 'Organic manure', 'Fertilizers'],
        notes: 'Ensure proper leveling and water management'
      },
      {
        id: 'rice_transplanting',
        name: 'Transplanting',
        description: 'Transplant rice seedlings to main field',
        type: 'sowing',
        priority: 'high',
        duration: 3,
        weatherDependent: true,
        month: 7,
        week: 1,
        inputs: ['Seedlings (25-30 days old)'],
        notes: 'Transplant when seedlings are 4-5 inches tall'
      },
      {
        id: 'rice_basal_fertilizer',
        name: 'Basal Fertilizer Application',
        description: 'Apply basal dose of NPK fertilizers',
        type: 'fertilizing',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 7,
        week: 2,
        inputs: ['Urea', 'DAP', 'MOP'],
        notes: 'Apply before transplanting or immediately after'
      },
      {
        id: 'rice_first_top_dressing',
        name: 'First Top Dressing',
        description: 'Apply first dose of nitrogen fertilizer',
        type: 'fertilizing',
        priority: 'medium',
        duration: 1,
        weatherDependent: false,
        month: 7,
        week: 4,
        inputs: ['Urea'],
        notes: 'Apply 20-25 days after transplanting'
      },
      {
        id: 'rice_pest_control_1',
        name: 'Pest Control - Early Stage',
        description: 'Monitor and control early season pests',
        type: 'pest_control',
        priority: 'medium',
        duration: 2,
        weatherDependent: true,
        month: 8,
        week: 1,
        inputs: ['Insecticides', 'Pesticides'],
        notes: 'Watch for stem borer, leaf folder, and brown planthopper'
      },
      {
        id: 'rice_second_top_dressing',
        name: 'Second Top Dressing',
        description: 'Apply second dose of nitrogen fertilizer',
        type: 'fertilizing',
        priority: 'medium',
        duration: 1,
        weatherDependent: false,
        month: 8,
        week: 2,
        inputs: ['Urea'],
        notes: 'Apply 40-45 days after transplanting'
      },
      {
        id: 'rice_panicile_initiation',
        name: 'Panicle Initiation Fertilizer',
        description: 'Apply fertilizer for panicle development',
        type: 'fertilizing',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 8,
        week: 4,
        inputs: ['Urea', 'MOP'],
        notes: 'Critical stage for grain formation'
      },
      {
        id: 'rice_flowering_pest_control',
        name: 'Flowering Stage Pest Control',
        description: 'Control pests during flowering stage',
        type: 'pest_control',
        priority: 'high',
        duration: 2,
        weatherDependent: true,
        month: 9,
        week: 1,
        inputs: ['Insecticides', 'Fungicides'],
        notes: 'Critical for grain development'
      },
      {
        id: 'rice_harvest_preparation',
        name: 'Harvest Preparation',
        description: 'Prepare for rice harvesting',
        type: 'other',
        priority: 'medium',
        duration: 3,
        weatherDependent: true,
        month: 10,
        week: 2,
        inputs: ['Harvesting equipment', 'Storage bags'],
        notes: 'Monitor grain moisture content (18-20%)'
      },
      {
        id: 'rice_harvesting',
        name: 'Harvesting',
        description: 'Harvest mature rice crop',
        type: 'harvesting',
        priority: 'high',
        duration: 5,
        weatherDependent: true,
        month: 10,
        week: 3,
        inputs: ['Harvesting equipment', 'Transport'],
        notes: 'Harvest when 80% of grains are mature'
      }
    ]
  },
  wheat: {
    cropName: 'Wheat',
    season: 'rabi',
    totalDuration: 120,
    activities: [
      {
        id: 'wheat_seed_procurement',
        name: 'Seed Procurement',
        description: 'Purchase certified wheat seeds',
        type: 'procurement',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 9,
        week: 3,
        inputs: ['Certified seeds (40-50 kg/acre)', 'Seed treatment chemicals'],
        notes: 'Choose varieties based on your region and soil type'
      },
      {
        id: 'wheat_field_preparation',
        name: 'Field Preparation',
        description: 'Prepare field for wheat sowing',
        type: 'other',
        priority: 'high',
        duration: 5,
        weatherDependent: true,
        month: 10,
        week: 1,
        inputs: ['Tractor/plow', 'Organic manure', 'Fertilizers'],
        notes: 'Ensure proper soil moisture and leveling'
      },
      {
        id: 'wheat_sowing',
        name: 'Sowing',
        description: 'Sow wheat seeds in prepared field',
        type: 'sowing',
        priority: 'high',
        duration: 2,
        weatherDependent: true,
        month: 10,
        week: 3,
        inputs: ['Pre-treated seeds'],
        notes: 'Optimal temperature: 15-20°C'
      },
      {
        id: 'wheat_basal_fertilizer',
        name: 'Basal Fertilizer Application',
        description: 'Apply basal dose of NPK fertilizers',
        type: 'fertilizing',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 10,
        week: 4,
        inputs: ['Urea', 'DAP', 'MOP'],
        notes: 'Apply at sowing or immediately after'
      },
      {
        id: 'wheat_first_irrigation',
        name: 'First Irrigation',
        description: 'Apply first irrigation after sowing',
        type: 'irrigation',
        priority: 'high',
        duration: 1,
        weatherDependent: true,
        month: 11,
        week: 1,
        inputs: ['Water', 'Irrigation equipment'],
        notes: 'Apply 20-25 days after sowing'
      },
      {
        id: 'wheat_tillering_fertilizer',
        name: 'Tillering Stage Fertilizer',
        description: 'Apply fertilizer during tillering stage',
        type: 'fertilizing',
        priority: 'medium',
        duration: 1,
        weatherDependent: false,
        month: 11,
        week: 4,
        inputs: ['Urea'],
        notes: 'Apply 25-30 days after sowing'
      },
      {
        id: 'wheat_pest_control_1',
        name: 'Early Pest Control',
        description: 'Monitor and control early season pests',
        type: 'pest_control',
        priority: 'medium',
        duration: 2,
        weatherDependent: true,
        month: 12,
        week: 1,
        inputs: ['Insecticides', 'Pesticides'],
        notes: 'Watch for aphids, termites, and armyworm'
      },
      {
        id: 'wheat_flowering_fertilizer',
        name: 'Flowering Stage Fertilizer',
        description: 'Apply fertilizer during flowering',
        type: 'fertilizing',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 1,
        week: 2,
        inputs: ['Urea', 'MOP'],
        notes: 'Critical stage for grain formation'
      },
      {
        id: 'wheat_flowering_pest_control',
        name: 'Flowering Stage Pest Control',
        description: 'Control pests during flowering stage',
        type: 'pest_control',
        priority: 'high',
        duration: 2,
        weatherDependent: true,
        month: 1,
        week: 3,
        inputs: ['Insecticides', 'Fungicides'],
        notes: 'Critical for grain development'
      },
      {
        id: 'wheat_harvest_preparation',
        name: 'Harvest Preparation',
        description: 'Prepare for wheat harvesting',
        type: 'other',
        priority: 'medium',
        duration: 3,
        weatherDependent: true,
        month: 3,
        week: 2,
        inputs: ['Harvesting equipment', 'Storage bags'],
        notes: 'Monitor grain moisture content (12-14%)'
      },
      {
        id: 'wheat_harvesting',
        name: 'Harvesting',
        description: 'Harvest mature wheat crop',
        type: 'harvesting',
        priority: 'high',
        duration: 5,
        weatherDependent: true,
        month: 3,
        week: 4,
        inputs: ['Harvesting equipment', 'Transport'],
        notes: 'Harvest when grains are hard and dry'
      }
    ]
  },
  cotton: {
    cropName: 'Cotton',
    season: 'kharif',
    totalDuration: 180,
    activities: [
      {
        id: 'cotton_seed_procurement',
        name: 'Seed Procurement',
        description: 'Purchase certified cotton seeds',
        type: 'procurement',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 3,
        week: 3,
        inputs: ['Certified seeds (2-3 kg/acre)', 'Seed treatment chemicals'],
        notes: 'Choose Bt cotton varieties for better pest resistance'
      },
      {
        id: 'cotton_field_preparation',
        name: 'Field Preparation',
        description: 'Prepare field for cotton sowing',
        type: 'other',
        priority: 'high',
        duration: 5,
        weatherDependent: true,
        month: 4,
        week: 2,
        inputs: ['Tractor/plow', 'Organic manure', 'Fertilizers'],
        notes: 'Ensure proper soil moisture and leveling'
      },
      {
        id: 'cotton_sowing',
        name: 'Sowing',
        description: 'Sow cotton seeds in prepared field',
        type: 'sowing',
        priority: 'high',
        duration: 2,
        weatherDependent: true,
        month: 4,
        week: 4,
        inputs: ['Pre-treated seeds'],
        notes: 'Optimal temperature: 25-30°C'
      },
      {
        id: 'cotton_basal_fertilizer',
        name: 'Basal Fertilizer Application',
        description: 'Apply basal dose of NPK fertilizers',
        type: 'fertilizing',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 5,
        week: 1,
        inputs: ['Urea', 'DAP', 'MOP'],
        notes: 'Apply at sowing or immediately after'
      },
      {
        id: 'cotton_vegetative_fertilizer',
        name: 'Vegetative Stage Fertilizer',
        description: 'Apply fertilizer during vegetative growth',
        type: 'fertilizing',
        priority: 'medium',
        duration: 1,
        weatherDependent: false,
        month: 6,
        week: 2,
        inputs: ['Urea'],
        notes: 'Apply 30-40 days after sowing'
      },
      {
        id: 'cotton_flowering_fertilizer',
        name: 'Flowering Stage Fertilizer',
        description: 'Apply fertilizer during flowering',
        type: 'fertilizing',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 7,
        week: 2,
        inputs: ['Urea', 'MOP'],
        notes: 'Critical stage for boll development'
      },
      {
        id: 'cotton_pest_control_1',
        name: 'Early Pest Control',
        description: 'Monitor and control early season pests',
        type: 'pest_control',
        priority: 'medium',
        duration: 2,
        weatherDependent: true,
        month: 6,
        week: 1,
        inputs: ['Insecticides', 'Pesticides'],
        notes: 'Watch for aphids, whitefly, and jassids'
      },
      {
        id: 'cotton_boll_development',
        name: 'Boll Development Fertilizer',
        description: 'Apply fertilizer during boll development',
        type: 'fertilizing',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 8,
        week: 1,
        inputs: ['Urea', 'MOP'],
        notes: 'Critical for boll size and quality'
      },
      {
        id: 'cotton_harvest_preparation',
        name: 'Harvest Preparation',
        description: 'Prepare for cotton harvesting',
        type: 'other',
        priority: 'medium',
        duration: 3,
        weatherDependent: true,
        month: 9,
        week: 3,
        inputs: ['Harvesting equipment', 'Storage bags'],
        notes: 'Monitor boll maturity and weather conditions'
      },
      {
        id: 'cotton_harvesting',
        name: 'Harvesting',
        description: 'Harvest mature cotton bolls',
        type: 'harvesting',
        priority: 'high',
        duration: 10,
        weatherDependent: true,
        month: 10,
        week: 1,
        inputs: ['Harvesting equipment', 'Transport'],
        notes: 'Harvest when bolls are fully mature and open'
      }
    ]
  },
  sugarcane: {
    cropName: 'Sugarcane',
    season: 'year_round',
    totalDuration: 365,
    activities: [
      {
        id: 'sugarcane_seed_procurement',
        name: 'Seed Procurement',
        description: 'Purchase certified sugarcane setts',
        type: 'procurement',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 1,
        week: 3,
        inputs: ['Certified setts (25,000-30,000/acre)', 'Seed treatment chemicals'],
        notes: 'Choose varieties based on your region and soil type'
      },
      {
        id: 'sugarcane_field_preparation',
        name: 'Field Preparation',
        description: 'Prepare field for sugarcane planting',
        type: 'other',
        priority: 'high',
        duration: 7,
        weatherDependent: true,
        month: 2,
        week: 1,
        inputs: ['Tractor/plow', 'Organic manure', 'Fertilizers'],
        notes: 'Ensure proper soil moisture and leveling'
      },
      {
        id: 'sugarcane_planting',
        name: 'Planting',
        description: 'Plant sugarcane setts in prepared field',
        type: 'sowing',
        priority: 'high',
        duration: 3,
        weatherDependent: true,
        month: 2,
        week: 4,
        inputs: ['Pre-treated setts'],
        notes: 'Optimal temperature: 25-30°C'
      },
      {
        id: 'sugarcane_basal_fertilizer',
        name: 'Basal Fertilizer Application',
        description: 'Apply basal dose of NPK fertilizers',
        type: 'fertilizing',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 3,
        week: 1,
        inputs: ['Urea', 'DAP', 'MOP'],
        notes: 'Apply at planting or immediately after'
      },
      {
        id: 'sugarcane_tillering_fertilizer',
        name: 'Tillering Stage Fertilizer',
        description: 'Apply fertilizer during tillering',
        type: 'fertilizing',
        priority: 'medium',
        duration: 1,
        weatherDependent: false,
        month: 4,
        week: 2,
        inputs: ['Urea'],
        notes: 'Apply 60-75 days after planting'
      },
      {
        id: 'sugarcane_grand_growth_fertilizer',
        name: 'Grand Growth Fertilizer',
        description: 'Apply fertilizer during grand growth stage',
        type: 'fertilizing',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 6,
        week: 1,
        inputs: ['Urea', 'MOP'],
        notes: 'Critical stage for cane development'
      },
      {
        id: 'sugarcane_harvest_preparation',
        name: 'Harvest Preparation',
        description: 'Prepare for sugarcane harvesting',
        type: 'other',
        priority: 'medium',
        duration: 5,
        weatherDependent: true,
        month: 11,
        week: 2,
        inputs: ['Harvesting equipment', 'Transport'],
        notes: 'Monitor cane maturity and sugar content'
      },
      {
        id: 'sugarcane_harvesting',
        name: 'Harvesting',
        description: 'Harvest mature sugarcane',
        type: 'harvesting',
        priority: 'high',
        duration: 15,
        weatherDependent: true,
        month: 12,
        week: 1,
        inputs: ['Harvesting equipment', 'Transport'],
        notes: 'Harvest when sugar content is optimal'
      }
    ]
  },
  maize: {
    cropName: 'Maize',
    season: 'kharif',
    totalDuration: 90,
    activities: [
      {
        id: 'maize_seed_procurement',
        name: 'Seed Procurement',
        description: 'Purchase certified maize seeds',
        type: 'procurement',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 5,
        week: 3,
        inputs: ['Certified seeds (15-20 kg/acre)', 'Seed treatment chemicals'],
        notes: 'Choose hybrid varieties for better yield'
      },
      {
        id: 'maize_field_preparation',
        name: 'Field Preparation',
        description: 'Prepare field for maize sowing',
        type: 'other',
        priority: 'high',
        duration: 3,
        weatherDependent: true,
        month: 6,
        week: 1,
        inputs: ['Tractor/plow', 'Organic manure', 'Fertilizers'],
        notes: 'Ensure proper soil moisture and leveling'
      },
      {
        id: 'maize_sowing',
        name: 'Sowing',
        description: 'Sow maize seeds in prepared field',
        type: 'sowing',
        priority: 'high',
        duration: 2,
        weatherDependent: true,
        month: 6,
        week: 2,
        inputs: ['Pre-treated seeds'],
        notes: 'Optimal temperature: 25-30°C'
      },
      {
        id: 'maize_basal_fertilizer',
        name: 'Basal Fertilizer Application',
        description: 'Apply basal dose of NPK fertilizers',
        type: 'fertilizing',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 6,
        week: 3,
        inputs: ['Urea', 'DAP', 'MOP'],
        notes: 'Apply at sowing or immediately after'
      },
      {
        id: 'maize_vegetative_fertilizer',
        name: 'Vegetative Stage Fertilizer',
        description: 'Apply fertilizer during vegetative growth',
        type: 'fertilizing',
        priority: 'medium',
        duration: 1,
        weatherDependent: false,
        month: 7,
        week: 1,
        inputs: ['Urea'],
        notes: 'Apply 25-30 days after sowing'
      },
      {
        id: 'maize_tasseling_fertilizer',
        name: 'Tasseling Stage Fertilizer',
        description: 'Apply fertilizer during tasseling',
        type: 'fertilizing',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 7,
        week: 4,
        inputs: ['Urea', 'MOP'],
        notes: 'Critical stage for grain formation'
      },
      {
        id: 'maize_harvest_preparation',
        name: 'Harvest Preparation',
        description: 'Prepare for maize harvesting',
        type: 'other',
        priority: 'medium',
        duration: 3,
        weatherDependent: true,
        month: 9,
        week: 1,
        inputs: ['Harvesting equipment', 'Storage bags'],
        notes: 'Monitor grain moisture content (20-25%)'
      },
      {
        id: 'maize_harvesting',
        name: 'Harvesting',
        description: 'Harvest mature maize crop',
        type: 'harvesting',
        priority: 'high',
        duration: 5,
        weatherDependent: true,
        month: 9,
        week: 2,
        inputs: ['Harvesting equipment', 'Transport'],
        notes: 'Harvest when grains are hard and dry'
      }
    ]
  },
  potato: {
    cropName: 'Potato',
    season: 'rabi',
    totalDuration: 120,
    activities: [
      {
        id: 'potato_seed_procurement',
        name: 'Seed Procurement',
        description: 'Purchase certified potato seeds (tubers)',
        type: 'procurement',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 10,
        week: 2,
        inputs: ['Certified seed tubers (15-20 quintals/acre)', 'Seed treatment chemicals'],
        notes: 'Choose disease-free tubers with good sprouting capacity'
      },
      {
        id: 'potato_field_preparation',
        name: 'Field Preparation',
        description: 'Prepare field for potato planting',
        type: 'other',
        priority: 'high',
        duration: 5,
        weatherDependent: true,
        month: 10,
        week: 4,
        inputs: ['Tractor/plow', 'Organic manure', 'Fertilizers'],
        notes: 'Ensure proper soil moisture and good drainage'
      },
      {
        id: 'potato_planting',
        name: 'Planting',
        description: 'Plant potato tubers in prepared field',
        type: 'sowing',
        priority: 'high',
        duration: 3,
        weatherDependent: true,
        month: 11,
        week: 1,
        inputs: ['Pre-treated seed tubers'],
        notes: 'Optimal temperature: 15-20°C'
      },
      {
        id: 'potato_basal_fertilizer',
        name: 'Basal Fertilizer Application',
        description: 'Apply basal dose of NPK fertilizers',
        type: 'fertilizing',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 11,
        week: 2,
        inputs: ['Urea', 'DAP', 'MOP'],
        notes: 'Apply at planting or immediately after'
      },
      {
        id: 'potato_earthing_up',
        name: 'Earthing Up',
        description: 'First earthing up operation',
        type: 'other',
        priority: 'medium',
        duration: 2,
        weatherDependent: true,
        month: 12,
        week: 1,
        inputs: ['Hoe', 'Spade'],
        notes: 'Apply 25-30 days after planting'
      },
      {
        id: 'potato_second_earthing',
        name: 'Second Earthing Up',
        description: 'Second earthing up operation',
        type: 'other',
        priority: 'medium',
        duration: 2,
        weatherDependent: true,
        month: 12,
        week: 4,
        inputs: ['Hoe', 'Spade'],
        notes: 'Apply 45-50 days after planting'
      },
      {
        id: 'potato_pest_control',
        name: 'Pest Control',
        description: 'Monitor and control potato pests',
        type: 'pest_control',
        priority: 'high',
        duration: 2,
        weatherDependent: true,
        month: 1,
        week: 2,
        inputs: ['Insecticides', 'Pesticides'],
        notes: 'Watch for Colorado beetle, aphids, and cutworms'
      },
      {
        id: 'potato_harvest_preparation',
        name: 'Harvest Preparation',
        description: 'Prepare for potato harvesting',
        type: 'other',
        priority: 'medium',
        duration: 3,
        weatherDependent: true,
        month: 2,
        week: 3,
        inputs: ['Harvesting equipment', 'Storage bags'],
        notes: 'Monitor tuber maturity and skin set'
      },
      {
        id: 'potato_harvesting',
        name: 'Harvesting',
        description: 'Harvest mature potato crop',
        type: 'harvesting',
        priority: 'high',
        duration: 5,
        weatherDependent: true,
        month: 3,
        week: 1,
        inputs: ['Harvesting equipment', 'Transport'],
        notes: 'Harvest when vines start drying and tubers are mature'
      }
    ]
  },
  sunflower: {
    cropName: 'Sunflower',
    season: 'kharif',
    totalDuration: 100,
    activities: [
      {
        id: 'sunflower_seed_procurement',
        name: 'Seed Procurement',
        description: 'Purchase certified sunflower seeds',
        type: 'procurement',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 5,
        week: 4,
        inputs: ['Certified seeds (2-3 kg/acre)', 'Seed treatment chemicals'],
        notes: 'Choose hybrid varieties for better yield'
      },
      {
        id: 'sunflower_field_preparation',
        name: 'Field Preparation',
        description: 'Prepare field for sunflower sowing',
        type: 'other',
        priority: 'high',
        duration: 3,
        weatherDependent: true,
        month: 6,
        week: 1,
        inputs: ['Tractor/plow', 'Organic manure', 'Fertilizers'],
        notes: 'Ensure proper soil moisture and leveling'
      },
      {
        id: 'sunflower_sowing',
        name: 'Sowing',
        description: 'Sow sunflower seeds in prepared field',
        type: 'sowing',
        priority: 'high',
        duration: 2,
        weatherDependent: true,
        month: 6,
        week: 2,
        inputs: ['Pre-treated seeds'],
        notes: 'Optimal temperature: 20-25°C'
      },
      {
        id: 'sunflower_basal_fertilizer',
        name: 'Basal Fertilizer Application',
        description: 'Apply basal dose of NPK fertilizers',
        type: 'fertilizing',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 6,
        week: 3,
        inputs: ['Urea', 'DAP', 'MOP'],
        notes: 'Apply at sowing or immediately after'
      },
      {
        id: 'sunflower_thinning',
        name: 'Thinning',
        description: 'Thin sunflower plants to optimal spacing',
        type: 'other',
        priority: 'medium',
        duration: 2,
        weatherDependent: false,
        month: 7,
        week: 1,
        inputs: ['Hand tools'],
        notes: 'Maintain 45-60 cm spacing between plants'
      },
      {
        id: 'sunflower_flowering_fertilizer',
        name: 'Flowering Stage Fertilizer',
        description: 'Apply fertilizer during flowering',
        type: 'fertilizing',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 8,
        week: 1,
        inputs: ['Urea', 'MOP'],
        notes: 'Critical stage for seed development'
      },
      {
        id: 'sunflower_pest_control',
        name: 'Pest Control',
        description: 'Monitor and control sunflower pests',
        type: 'pest_control',
        priority: 'high',
        duration: 2,
        weatherDependent: true,
        month: 8,
        week: 2,
        inputs: ['Insecticides', 'Pesticides'],
        notes: 'Watch for head borer, aphids, and thrips'
      },
      {
        id: 'sunflower_harvest_preparation',
        name: 'Harvest Preparation',
        description: 'Prepare for sunflower harvesting',
        type: 'other',
        priority: 'medium',
        duration: 3,
        weatherDependent: true,
        month: 9,
        week: 3,
        inputs: ['Harvesting equipment', 'Storage bags'],
        notes: 'Monitor head maturity and seed moisture'
      },
      {
        id: 'sunflower_harvesting',
        name: 'Harvesting',
        description: 'Harvest mature sunflower crop',
        type: 'harvesting',
        priority: 'high',
        duration: 5,
        weatherDependent: true,
        month: 10,
        week: 1,
        inputs: ['Harvesting equipment', 'Transport'],
        notes: 'Harvest when back of head turns yellow and seeds are hard'
      }
    ]
  },
  chili: {
    cropName: 'Chili',
    season: 'kharif',
    totalDuration: 150,
    activities: [
      {
        id: 'chili_seed_procurement',
        name: 'Seed Procurement',
        description: 'Purchase certified chili seeds',
        type: 'procurement',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 4,
        week: 3,
        inputs: ['Certified seeds (200-300 g/acre)', 'Seed treatment chemicals'],
        notes: 'Choose varieties based on market demand and disease resistance'
      },
      {
        id: 'chili_nursery_preparation',
        name: 'Nursery Preparation',
        description: 'Prepare nursery bed for chili seedlings',
        type: 'sowing',
        priority: 'high',
        duration: 3,
        weatherDependent: true,
        month: 5,
        week: 1,
        inputs: ['Organic manure', 'Fertilizers', 'Pesticides'],
        notes: 'Ensure proper drainage and water management'
      },
      {
        id: 'chili_nursery_sowing',
        name: 'Nursery Sowing',
        description: 'Sow chili seeds in nursery bed',
        type: 'sowing',
        priority: 'high',
        duration: 1,
        weatherDependent: true,
        month: 5,
        week: 2,
        inputs: ['Pre-treated seeds'],
        notes: 'Optimal temperature: 25-30°C'
      },
      {
        id: 'chili_field_preparation',
        name: 'Field Preparation',
        description: 'Prepare main field for transplanting',
        type: 'other',
        priority: 'high',
        duration: 5,
        weatherDependent: true,
        month: 6,
        week: 1,
        inputs: ['Tractor/plow', 'Organic manure', 'Fertilizers'],
        notes: 'Ensure proper leveling and water management'
      },
      {
        id: 'chili_transplanting',
        name: 'Transplanting',
        description: 'Transplant chili seedlings to main field',
        type: 'sowing',
        priority: 'high',
        duration: 3,
        weatherDependent: true,
        month: 6,
        week: 3,
        inputs: ['Seedlings (30-35 days old)'],
        notes: 'Transplant when seedlings are 4-5 inches tall'
      },
      {
        id: 'chili_basal_fertilizer',
        name: 'Basal Fertilizer Application',
        description: 'Apply basal dose of NPK fertilizers',
        type: 'fertilizing',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 6,
        week: 4,
        inputs: ['Urea', 'DAP', 'MOP'],
        notes: 'Apply before transplanting or immediately after'
      },
      {
        id: 'chili_first_fertilizer',
        name: 'First Fertilizer Application',
        description: 'Apply first dose of nitrogen fertilizer',
        type: 'fertilizing',
        priority: 'medium',
        duration: 1,
        weatherDependent: false,
        month: 7,
        week: 2,
        inputs: ['Urea'],
        notes: 'Apply 20-25 days after transplanting'
      },
      {
        id: 'chili_flowering_fertilizer',
        name: 'Flowering Stage Fertilizer',
        description: 'Apply fertilizer during flowering',
        type: 'fertilizing',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 8,
        week: 1,
        inputs: ['Urea', 'MOP'],
        notes: 'Critical stage for fruit development'
      },
      {
        id: 'chili_pest_control',
        name: 'Pest Control',
        description: 'Monitor and control chili pests',
        type: 'pest_control',
        priority: 'high',
        duration: 2,
        weatherDependent: true,
        month: 8,
        week: 2,
        inputs: ['Insecticides', 'Pesticides'],
        notes: 'Watch for fruit borer, thrips, and mites'
      },
      {
        id: 'chili_harvest_preparation',
        name: 'Harvest Preparation',
        description: 'Prepare for chili harvesting',
        type: 'other',
        priority: 'medium',
        duration: 3,
        weatherDependent: true,
        month: 9,
        week: 2,
        inputs: ['Harvesting equipment', 'Storage bags'],
        notes: 'Monitor fruit maturity and color development'
      },
      {
        id: 'chili_harvesting',
        name: 'Harvesting',
        description: 'Harvest mature chili crop',
        type: 'harvesting',
        priority: 'high',
        duration: 10,
        weatherDependent: true,
        month: 9,
        week: 3,
        inputs: ['Harvesting equipment', 'Transport'],
        notes: 'Harvest when fruits are fully mature and red'
      }
    ]
  },
  cumin: {
    cropName: 'Cumin',
    season: 'rabi',
    totalDuration: 120,
    activities: [
      {
        id: 'cumin_seed_procurement',
        name: 'Seed Procurement',
        description: 'Purchase certified cumin seeds',
        type: 'procurement',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 10,
        week: 3,
        inputs: ['Certified seeds (8-10 kg/acre)', 'Seed treatment chemicals'],
        notes: 'Choose varieties based on your region and soil type'
      },
      {
        id: 'cumin_field_preparation',
        name: 'Field Preparation',
        description: 'Prepare field for cumin sowing',
        type: 'other',
        priority: 'high',
        duration: 3,
        weatherDependent: true,
        month: 11,
        week: 1,
        inputs: ['Tractor/plow', 'Organic manure', 'Fertilizers'],
        notes: 'Ensure proper soil moisture and leveling'
      },
      {
        id: 'cumin_sowing',
        name: 'Sowing',
        description: 'Sow cumin seeds in prepared field',
        type: 'sowing',
        priority: 'high',
        duration: 2,
        weatherDependent: true,
        month: 11,
        week: 2,
        inputs: ['Pre-treated seeds'],
        notes: 'Optimal temperature: 15-20°C'
      },
      {
        id: 'cumin_basal_fertilizer',
        name: 'Basal Fertilizer Application',
        description: 'Apply basal dose of NPK fertilizers',
        type: 'fertilizing',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 11,
        week: 3,
        inputs: ['Urea', 'DAP', 'MOP'],
        notes: 'Apply at sowing or immediately after'
      },
      {
        id: 'cumin_thinning',
        name: 'Thinning',
        description: 'Thin cumin plants to optimal spacing',
        type: 'other',
        priority: 'medium',
        duration: 2,
        weatherDependent: false,
        month: 12,
        week: 1,
        inputs: ['Hand tools'],
        notes: 'Maintain 15-20 cm spacing between plants'
      },
      {
        id: 'cumin_vegetative_fertilizer',
        name: 'Vegetative Stage Fertilizer',
        description: 'Apply fertilizer during vegetative growth',
        type: 'fertilizing',
        priority: 'medium',
        duration: 1,
        weatherDependent: false,
        month: 12,
        week: 3,
        inputs: ['Urea'],
        notes: 'Apply 30-35 days after sowing'
      },
      {
        id: 'cumin_flowering_fertilizer',
        name: 'Flowering Stage Fertilizer',
        description: 'Apply fertilizer during flowering',
        type: 'fertilizing',
        priority: 'high',
        duration: 1,
        weatherDependent: false,
        month: 1,
        week: 2,
        inputs: ['Urea', 'MOP'],
        notes: 'Critical stage for seed development'
      },
      {
        id: 'cumin_pest_control',
        name: 'Pest Control',
        description: 'Monitor and control cumin pests',
        type: 'pest_control',
        priority: 'high',
        duration: 2,
        weatherDependent: true,
        month: 1,
        week: 3,
        inputs: ['Insecticides', 'Pesticides'],
        notes: 'Watch for aphids, thrips, and powdery mildew'
      },
      {
        id: 'cumin_harvest_preparation',
        name: 'Harvest Preparation',
        description: 'Prepare for cumin harvesting',
        type: 'other',
        priority: 'medium',
        duration: 3,
        weatherDependent: true,
        month: 2,
        week: 3,
        inputs: ['Harvesting equipment', 'Storage bags'],
        notes: 'Monitor seed maturity and moisture content'
      },
      {
        id: 'cumin_harvesting',
        name: 'Harvesting',
        description: 'Harvest mature cumin crop',
        type: 'harvesting',
        priority: 'high',
        duration: 5,
        weatherDependent: true,
        month: 3,
        week: 1,
        inputs: ['Harvesting equipment', 'Transport'],
        notes: 'Harvest when seeds are fully mature and dry'
      }
    ]
  }
};

// Helper function to get calendar data for a crop
export const getCropCalendar = (cropName: string): CropCalendar | null => {
  const normalizedName = cropName.toLowerCase();
  return farmingCalendarData[normalizedName] || null;
};

// Helper function to get all available crop calendars for user
export const getUserCropCalendars = (userCrops: string[]): CropCalendar[] => {
  return userCrops
    .map(crop => getCropCalendar(crop))
    .filter((calendar): calendar is CropCalendar => calendar !== null);
};

// Helper function to get activities for a specific month
export const getActivitiesForMonth = (calendars: CropCalendar[], month: number): CropActivity[] => {
  const activities: CropActivity[] = [];
  calendars.forEach(calendar => {
    calendar.activities.forEach(activity => {
      if (activity.month === month) {
        activities.push(activity);
      }
    });
  });
  return activities.sort((a, b) => a.week - b.week);
};

// Helper function to get activities for a specific week
export const getActivitiesForWeek = (calendars: CropCalendar[], month: number, week: number): CropActivity[] => {
  const activities: CropActivity[] = [];
  calendars.forEach(calendar => {
    calendar.activities.forEach(activity => {
      if (activity.month === month && activity.week === week) {
        activities.push(activity);
      }
    });
  });
  return activities.sort((a, b) => a.priority === 'high' ? -1 : 1);
};
