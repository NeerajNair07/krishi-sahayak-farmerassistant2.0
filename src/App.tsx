import React, { useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { FarmerRegistration } from './components/FarmerRegistration';
import { Dashboard } from './components/Dashboard';
import { Auth } from './pages/Auth';
import { HomePage } from './components/HomePage';
import { supabase } from '@/integrations/supabase/client';

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

const AppContent = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [farmerData, setFarmerData] = useState<FarmerData | null>(null);
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(true);
  const [showHomePage, setShowHomePage] = useState(true);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          // Check if user has a farmer profile
          setTimeout(async () => {
            try {
              const { data, error } = await supabase
                .from('farmer_profiles')
                .select('*')
                .eq('user_id', session.user.id)
                .maybeSingle();

              if (data && !error) {
                setFarmerData({
                  name: data.name,
                  location: data.location,
                  crops: data.crops,
                  landSize: data.land_size,
                  landUnit: data.land_unit as 'acres' | 'hectares',
                  phone: data.phone,
                  latitude: data.latitude,
                  longitude: data.longitude
                });
                setIsRegistered(true);
              } else {
                setIsRegistered(false);
                setFarmerData(null);
              }
            } catch (error) {
              console.error('Error fetching farmer profile:', error);
              setIsRegistered(false);
              setFarmerData(null);
            }
          }, 0);
        } else {
          setUser(null);
          setFarmerData(null);
          setIsRegistered(false);
          setShowHomePage(true); // Show homepage when no user
        }
        setLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (!session) {
        setLoading(false);
        setShowHomePage(true); // Show homepage if no session
      } else {
        setShowHomePage(false); // Hide homepage if user is already logged in
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleRegistrationComplete = (data: FarmerData) => {
    setFarmerData(data);
    setIsRegistered(true);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setIsRegistered(false);
    setFarmerData(null);
  };

  const handleAuthSuccess = () => {
    // Auth state change will handle the rest
  };

  const handleNavigateToAuth = () => {
    setShowHomePage(false);
  };

  const handleBackToHome = () => {
    setShowHomePage(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (showHomePage) {
    return <HomePage onNavigateToAuth={handleNavigateToAuth} />;
  }

  if (!user) {
    return <Auth onAuthSuccess={handleAuthSuccess} onBackToHome={handleBackToHome} />;
  }

  if (!isRegistered) {
    return <FarmerRegistration onRegistrationComplete={handleRegistrationComplete} />;
  }

  return (
    <Dashboard 
      farmerData={farmerData!} 
      language={language}
      onLanguageChange={setLanguage}
      onLogout={handleLogout}
    />
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppContent />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
