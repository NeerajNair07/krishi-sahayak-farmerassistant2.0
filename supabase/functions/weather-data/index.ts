import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { latitude, longitude } = await req.json();

    if (!latitude || !longitude) {
      throw new Error('Latitude and longitude are required');
    }

    const openWeatherApiKey = Deno.env.get('OPENWEATHER_API_KEY');
    if (!openWeatherApiKey) {
      throw new Error('OpenWeather API key not configured');
    }

    console.log(`Fetching weather for coordinates: ${latitude}, ${longitude}`);

    // Get current weather
    const currentWeatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherApiKey}&units=metric`
    );

    if (!currentWeatherResponse.ok) {
      throw new Error(`Current weather API error: ${currentWeatherResponse.status}`);
    }

    const currentWeather = await currentWeatherResponse.json();

    // Get 7-day forecast
    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${openWeatherApiKey}&units=metric`
    );

    if (!forecastResponse.ok) {
      throw new Error(`Forecast API error: ${forecastResponse.status}`);
    }

    const forecast = await forecastResponse.json();

    // Process forecast data for 7 days
    const dailyForecast = [];
    const processedDates = new Set();

    for (const item of forecast.list) {
      const date = new Date(item.dt * 1000);
      const dateKey = date.toDateString();
      
      if (!processedDates.has(dateKey) && dailyForecast.length < 7) {
        processedDates.add(dateKey);
        dailyForecast.push({
          date: dateKey,
          day: date.toLocaleDateString('en-US', { weekday: 'short' }),
          temperature: Math.round(item.main.temp),
          humidity: item.main.humidity,
          rainfall: item.rain ? item.rain['3h'] || 0 : 0,
          condition: item.weather[0].description,
        });
      }
    }

    const weatherData = {
      current: {
        temperature: Math.round(currentWeather.main.temp),
        humidity: currentWeather.main.humidity,
        rainfall: currentWeather.rain ? currentWeather.rain['1h'] || 0 : 0,
        windSpeed: Math.round(currentWeather.wind.speed * 3.6), // Convert m/s to km/h
        condition: currentWeather.weather[0].description,
        location: `${currentWeather.name}, ${currentWeather.sys.country}`,
      },
      forecast: {
        labels: dailyForecast.map(day => day.day),
        temperature: dailyForecast.map(day => day.temperature),
        humidity: dailyForecast.map(day => day.humidity),
        rainfall: dailyForecast.map(day => day.rainfall),
      }
    };

    console.log('Weather data processed successfully');

    return new Response(JSON.stringify({
      weather: weatherData,
      status: 'success'
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in weather-data function:', error);
    return new Response(JSON.stringify({
      error: error.message,
      status: 'error'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});