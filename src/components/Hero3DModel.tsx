
import { useEffect, useRef } from "react";

const Hero3DModel = () => {
  const modelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This is a placeholder for the 3D model
    // In a real implementation, you would integrate Three.js or model-viewer here
    console.log("3D Model container ready for integration");
  }, []);

  return (
    <div 
      ref={modelRef}
      className="relative w-full h-96 md:h-[500px] flex items-center justify-center animate-float"
    >
      {/* Placeholder for 3D Model */}
      <div className="relative">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-heritage-gold/20 via-heritage-saffron/20 to-heritage-bronze/20 rounded-full blur-3xl scale-150"></div>
        
        {/* Model placeholder - elegant silhouette */}
        <div className="relative z-10 w-64 h-80 md:w-80 md:h-96 bg-gradient-to-b from-heritage-maroon via-heritage-bronze to-heritage-gold rounded-t-full rounded-b-lg shadow-2xl flex items-center justify-center">
          <div className="text-center text-heritage-cream">
            <Crown className="h-16 w-16 mx-auto mb-4 opacity-80" />
            <p className="font-playfair text-sm opacity-70">3D Model</p>
            <p className="font-playfair text-xs opacity-50">Indian Ruler</p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-heritage-gold rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-2 -right-6 w-6 h-6 bg-heritage-saffron rounded-full opacity-40 animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default Hero3DModel;
