
import Hero3DModel from "./Hero3DModel";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const handleExploreClick = () => {
    console.log("Explore button clicked");
    // Future implementation: scroll to timeline or navigate to explore page
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-heritage-cream via-background to-heritage-cream/50">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-subtle-pattern opacity-30"></div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-heritage-gold/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-heritage-saffron/5 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-12">
        {/* 3D Model */}
        <div className="animate-fade-in">
          <Hero3DModel />
        </div>
        
        {/* Title */}
        <div className="text-center mt-8 mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-4 leading-tight">
            <span className="heritage-text-gradient">Chronology</span>
            <br />
            <span className="text-foreground">of Indian Rulers</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-inter leading-relaxed">
            Journey through the magnificent history of India's greatest rulers, 
            from ancient kingdoms to medieval empires
          </p>
        </div>
        
        {/* Explore Button */}
        <div className="animate-scale-in">
          <Button 
            onClick={handleExploreClick}
            className="heritage-button text-lg px-10 py-4 rounded-full"
          >
            Explore
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        {/* Future section placeholders */}
        <div className="mt-20 text-center space-y-4 opacity-60 animate-fade-in">
          <p className="text-sm font-inter text-muted-foreground">Coming Soon</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
            <span className="hover:text-heritage-gold transition-colors cursor-pointer">Ancient</span>
            <span className="hover:text-heritage-gold transition-colors cursor-pointer">Medieval</span>
            <span className="hover:text-heritage-gold transition-colors cursor-pointer">Modern</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
