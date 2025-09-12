import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Map user locations to states for market data
const getStateFromLocation = (location: string): string => {
  const locationLower = location.toLowerCase();
  
  if (locationLower.includes('punjab')) return 'Punjab';
  if (locationLower.includes('haryana')) return 'Haryana';
  if (locationLower.includes('uttar pradesh') || locationLower.includes('up')) return 'Uttar Pradesh';
  if (locationLower.includes('bihar')) return 'Bihar';
  if (locationLower.includes('west bengal') || locationLower.includes('kolkata')) return 'West Bengal';
  if (locationLower.includes('maharashtra') || locationLower.includes('mumbai') || locationLower.includes('pune')) return 'Maharashtra';
  if (locationLower.includes('gujarat') || locationLower.includes('ahmedabad')) return 'Gujarat';
  if (locationLower.includes('rajasthan') || locationLower.includes('jaipur')) return 'Rajasthan';
  if (locationLower.includes('madhya pradesh') || locationLower.includes('mp') || locationLower.includes('bhopal')) return 'Madhya Pradesh';
  if (locationLower.includes('karnataka') || locationLower.includes('bangalore') || locationLower.includes('bengaluru')) return 'Karnataka';
  if (locationLower.includes('andhra pradesh') || locationLower.includes('hyderabad')) return 'Andhra Pradesh';
  if (locationLower.includes('telangana')) return 'Telangana';
  if (locationLower.includes('tamil nadu') || locationLower.includes('chennai')) return 'Tamil Nadu';
  if (locationLower.includes('kerala') || locationLower.includes('kochi')) return 'Kerala';
  if (locationLower.includes('odisha') || locationLower.includes('bhubaneswar')) return 'Odisha';
  if (locationLower.includes('assam') || locationLower.includes('guwahati')) return 'Assam';
  
  // Default fallback based on region detection
  if (locationLower.includes('delhi') || locationLower.includes('ncr')) return 'Delhi';
  
  return 'Maharashtra'; // Default state
};

// Generate realistic market prices based on state and crop
const generateMarketData = (state: string, userCrops: string[] = []) => {
  const stateMultipliers: { [key: string]: number } = {
    'Punjab': 1.1,
    'Haryana': 1.05,
    'Maharashtra': 1.0,
    'Gujarat': 0.95,
    'Tamil Nadu': 0.9,
    'Karnataka': 0.88,
    'Andhra Pradesh': 0.85,
    'Uttar Pradesh': 0.92,
    'Bihar': 0.8,
    'West Bengal': 0.87,
    'Rajasthan': 0.93,
    'Madhya Pradesh': 0.91,
    'Kerala': 1.15,
    'Odisha': 0.82,
    'Telangana': 0.86,
    'Assam': 0.84,
    'Delhi': 1.2
  };

  const baseData = [
    { crop: 'Rice', basePrice: 2850, msp: 2700, volatility: 0.1 },
    { crop: 'Wheat', basePrice: 2450, msp: 2425, volatility: 0.08 },
    { crop: 'Cotton', basePrice: 6800, msp: 6620, volatility: 0.15 },
    { crop: 'Sugarcane', basePrice: 385, msp: 375, volatility: 0.05 },
    { crop: 'Soybean', basePrice: 4200, msp: 4300, volatility: 0.12 },
    { crop: 'Groundnut', basePrice: 5850, msp: 5850, volatility: 0.14 },
    { crop: 'Maize', basePrice: 2100, msp: 2090, volatility: 0.09 },
    { crop: 'Bajra', basePrice: 2500, msp: 2350, volatility: 0.11 },
    { crop: 'Jowar', basePrice: 3180, msp: 3225, volatility: 0.10 },
    { crop: 'Barley', basePrice: 1735, msp: 1850, volatility: 0.08 }
  ];

  const multiplier = stateMultipliers[state] || 1.0;
  
  // Prioritize user crops
  const prioritizedCrops = userCrops.length > 0 
    ? baseData.filter(crop => userCrops.some(userCrop => 
        userCrop.toLowerCase().includes(crop.crop.toLowerCase()) || 
        crop.crop.toLowerCase().includes(userCrop.toLowerCase())
      ))
    : [];

  const otherCrops = baseData.filter(crop => 
    !prioritizedCrops.some(pc => pc.crop === crop.crop)
  );

  const selectedCrops = [
    ...prioritizedCrops,
    ...otherCrops.slice(0, Math.max(0, 6 - prioritizedCrops.length))
  ];

  return selectedCrops.map(item => {
    const randomFactor = 1 + (Math.random() - 0.5) * item.volatility;
    const currentPrice = Math.round(item.basePrice * multiplier * randomFactor);
    const change = ((currentPrice - item.basePrice) / item.basePrice * 100);
    
    let trend = 'stable';
    if (change > 1) trend = 'up';
    else if (change < -1) trend = 'down';

    return {
      crop: item.crop,
      currentPrice,
      msp: Math.round(item.msp * multiplier),
      trend,
      change: `${change >= 0 ? '+' : ''}${change.toFixed(1)}%`,
      market: state,
    };
  });
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { location, crops } = await req.json();

    if (!location) {
      throw new Error('Location is required');
    }

    console.log(`Fetching market data for location: ${location}, crops: ${crops}`);

    const state = getStateFromLocation(location);

    // Try AGMARKNET (data.gov.in) first if key is present
    const agmarkKey = Deno.env.get('AGMARKNET_API_KEY');
    if (agmarkKey) {
      try {
        // data.gov.in AGMARKNET resource id (wholesale market prices)
        const RESOURCE_ID = '9ef84268-d588-465a-a308-a864a43d0070';
        const baseUrl = `https://api.data.gov.in/resource/${RESOURCE_ID}`;
        // Build query: state filter, optional commodity filter if user crops provided
        const params = new URLSearchParams();
        params.set('api-key', agmarkKey);
        params.set('format', 'json');
        params.set('limit', '500');
        // Filters per data.gov.in patterns
        params.set('filters[state]', state);
        // Optionally narrow by commodity
        // Do not filter by commodity to maximize chances of records

        const url = `${baseUrl}?${params.toString()}`;
        console.log('Calling AGMARKNET:', url);
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error(`AGMARKNET API error: ${resp.status}`);
        }
        const json = await resp.json();
        const records: any[] = json?.records || [];

        // If no records, fallback
        if (records.length > 0) {
          // Normalize and pick a small set
          const normalizeName = (s: string) => (s || '').trim();
          const userCrops = Array.isArray(crops) ? crops : [];

          // Group by commodity and compute a representative price (median/modal_price)
          const byCommodity = new Map<string, number[]>();
          for (const r of records) {
            const commodity = normalizeName(r.commodity);
            const modal = Number(r.modal_price);
            if (!commodity || isNaN(modal)) continue;
            if (!byCommodity.has(commodity)) byCommodity.set(commodity, []);
            byCommodity.get(commodity)!.push(modal);
          }

          const computeMedian = (arr: number[]) => {
            const a = [...arr].sort((x, y) => x - y);
            const mid = Math.floor(a.length / 2);
            return a.length % 2 ? a[mid] : Math.round((a[mid - 1] + a[mid]) / 2);
          };

          // Prioritize user crops
          const prioritized: any[] = [];
          const others: any[] = [];
          for (const [commodity, prices] of byCommodity.entries()) {
            const median = computeMedian(prices);
            const item = { commodity, price: median };
            if (userCrops.some(c => c.toLowerCase().includes(commodity.toLowerCase()) || commodity.toLowerCase().includes(c.toLowerCase()))) {
              prioritized.push(item);
            } else {
              others.push(item);
            }
          }

          const selected = [...prioritized, ...others].slice(0, 6);
          const basePriceMap = new Map<string, number>();
          // Build response in your UI shape
          const marketData = selected.map((it) => {
            const base = basePriceMap.get(it.commodity) ?? it.price;
            const change = base ? ((it.price - base) / base) * 100 : 0;
            const trend = change > 1 ? 'up' : change < -1 ? 'down' : 'stable';
            return {
              crop: it.commodity,
              currentPrice: it.price,
              msp: it.price, // AGMARKNET doesn’t provide MSP; use price as placeholder
              trend,
              change: `${change >= 0 ? '+' : ''}${change.toFixed(1)}%`,
              market: state,
            };
          });

          console.log(`AGMARKNET data prepared for state: ${state}, items: ${marketData.length}`);
          return new Response(JSON.stringify({ marketData, state, status: 'success', source: 'agmarknet' }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }
      } catch (agErr) {
        console.error('AGMARKNET fetch failed, falling back:', agErr);
      }
    }

    // Fallback to generated sample data
    const marketData = generateMarketData(state, crops);
    console.log(`Generated fallback market data for state: ${state}`);

    return new Response(JSON.stringify({
      marketData,
      state,
      status: 'success',
      source: agmarkKey ? 'fallback' : 'mock'
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in market-data function:', error);
    return new Response(JSON.stringify({
      error: error.message,
      status: 'error'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});