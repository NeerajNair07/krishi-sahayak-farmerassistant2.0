import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout, Wheat, Tractor, Sun, Cloud, Droplets, ArrowRight, Leaf, TreePine, Carrot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HomePageProps {
  onNavigateToAuth: () => void;
}

const LoaderAnimation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          {/* Animated Sprout Icon */}
          <div className="animate-bounce">
            <Sprout className="h-16 w-16 text-primary mx-auto" />
          </div>
          {/* Rotating Ring */}
          <div className="absolute inset-0 animate-spin">
            <div className="h-20 w-20 border-4 border-primary/20 border-t-primary rounded-full mx-auto"></div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Krishi Sahayak</h2>
        <p className="text-muted-foreground">Preparing your farming companion...</p>
        <div className="mt-4 flex justify-center space-x-1">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

const FloatingIcon = ({ Icon, delay, className }: { Icon: any; delay: number; className: string }) => {
  return (
    <div 
      className={`absolute animate-float pointer-events-none ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: '3s'
      }}
    >
      <Icon className="h-8 w-8 text-primary/60" />
    </div>
  );
};

export const HomePage: React.FC<HomePageProps> = ({ onNavigateToAuth }) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Show loader for 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoaderAnimation />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-earth-light/30 to-secondary/20 relative overflow-hidden">
      {/* Floating Background Icons */}
      <FloatingIcon Icon={Wheat} delay={0} className="top-20 left-10" />
      <FloatingIcon Icon={Tractor} delay={1} className="top-32 right-16" />
      <FloatingIcon Icon={Sun} delay={2} className="top-40 left-1/4" />
      <FloatingIcon Icon={Cloud} delay={0.5} className="top-60 right-1/4" />
      <FloatingIcon Icon={Droplets} delay={1.5} className="top-80 left-16" />
      <FloatingIcon Icon={Leaf} delay={2.5} className="top-96 right-32" />
      <FloatingIcon Icon={TreePine} delay={1.8} className="top-72 left-1/3" />
      <FloatingIcon Icon={Carrot} delay={0.8} className="top-52 right-1/3" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12 max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative">
              <Sprout className="h-16 w-16 text-primary" />
              <div className="absolute -top-1 -right-1 h-4 w-4 bg-accent rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-gradient-primary">
              Krishi Sahayak
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Your Intelligent Farming Companion
          </p>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Empowering farmers with AI-driven insights, weather forecasts, market prices, 
            and personalized agricultural guidance for better yields and sustainable farming.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl w-full">
          <Card className="group hover:shadow-agricultural transition-agricultural border-primary/20 hover:border-primary/40">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Cloud className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Weather Intelligence</h3>
              <p className="text-muted-foreground">
                Get accurate weather forecasts and farming recommendations based on local conditions.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-agricultural transition-agricultural border-primary/20 hover:border-primary/40">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Wheat className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Crop Management</h3>
              <p className="text-muted-foreground">
                AI-powered crop advice, disease detection, and personalized farming schedules.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-agricultural transition-agricultural border-primary/20 hover:border-primary/40">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Tractor className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Market Insights</h3>
              <p className="text-muted-foreground">
                Real-time market prices, MSP information, and selling recommendations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center relative z-20">
          <Button 
            onClick={onNavigateToAuth}
            size="lg" 
            variant="default"
            className="px-8 py-4 text-lg font-semibold relative z-20 cursor-pointer"
          >
            Start Your Farming Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Join thousands of farmers already using Krishi Sahayak
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/5 to-transparent"></div>
      </div>
    </div>
  );
};

export default HomePage;
