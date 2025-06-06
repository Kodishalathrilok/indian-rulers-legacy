
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Crown, Info } from "lucide-react";

interface Kingdom {
  id: string;
  name: string;
  ruler: string;
  period: string;
  x: number;
  y: number;
  color: string;
}

const kingdoms: Kingdom[] = [
  {
    id: "maurya",
    name: "Mauryan Empire",
    ruler: "Ashoka the Great",
    period: "Ancient",
    x: 45,
    y: 35,
    color: "heritage-gold"
  },
  {
    id: "gupta",
    name: "Gupta Empire",
    ruler: "Chandragupta II",
    period: "Ancient",
    x: 50,
    y: 30,
    color: "heritage-gold"
  },
  {
    id: "mughal",
    name: "Mughal Empire",
    ruler: "Akbar",
    period: "Medieval",
    x: 40,
    y: 25,
    color: "heritage-saffron"
  },
  {
    id: "maratha",
    name: "Maratha Empire",
    ruler: "Shivaji",
    period: "Medieval",
    x: 35,
    y: 50,
    color: "heritage-saffron"
  },
  {
    id: "mysore",
    name: "Kingdom of Mysore",
    ruler: "Tipu Sultan",
    period: "Modern",
    x: 30,
    y: 75,
    color: "heritage-bronze"
  }
];

const InteractiveMap = () => {
  const [selectedKingdom, setSelectedKingdom] = useState<Kingdom | null>(null);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
          <span className="heritage-text-gradient">Interactive Map</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Explore the kingdoms and empires across the Indian subcontinent
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map Section */}
        <div className="lg:col-span-2">
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-heritage-gold/20">
            <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-br from-heritage-cream/30 to-heritage-gold/10 rounded-lg overflow-hidden">
              {/* Map Background */}
              <div className="absolute inset-0 bg-subtle-pattern opacity-20"></div>
              
              {/* India Outline Placeholder */}
              <div className="absolute inset-4 border-2 border-heritage-gold/30 rounded-lg bg-heritage-cream/20">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-heritage-gold/50 text-sm font-medium">
                  Indian Subcontinent
                </div>
              </div>

              {/* Kingdom Markers */}
              {kingdoms.map((kingdom) => (
                <button
                  key={kingdom.id}
                  onClick={() => setSelectedKingdom(kingdom)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
                    selectedKingdom?.id === kingdom.id
                      ? `bg-heritage-${kingdom.color} border-heritage-${kingdom.color} text-heritage-maroon`
                      : `bg-heritage-${kingdom.color}/20 border-heritage-${kingdom.color} text-heritage-${kingdom.color} hover:bg-heritage-${kingdom.color}/40`
                  }`}
                  style={{
                    left: `${kingdom.x}%`,
                    top: `${kingdom.y}%`
                  }}
                >
                  <Crown className="h-4 w-4" />
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* Information Panel */}
        <div className="space-y-4">
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-heritage-gold/20">
            <div className="flex items-center gap-2 mb-4">
              <Info className="h-5 w-5 text-heritage-gold" />
              <h3 className="font-playfair font-semibold">Kingdom Details</h3>
            </div>
            
            {selectedKingdom ? (
              <div className="space-y-4">
                <div>
                  <h4 className={`font-playfair font-semibold text-lg text-heritage-${selectedKingdom.color}`}>
                    {selectedKingdom.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {selectedKingdom.period} Period
                  </p>
                </div>
                
                <div>
                  <h5 className="font-medium mb-1">Notable Ruler:</h5>
                  <p className="text-muted-foreground">
                    {selectedKingdom.ruler}
                  </p>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-heritage-gold/30 hover:bg-heritage-gold/10"
                >
                  Learn More
                </Button>
              </div>
            ) : (
              <div className="text-center text-muted-foreground py-8">
                <MapPin className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>Click on a kingdom marker to explore</p>
              </div>
            )}
          </Card>

          {/* Legend */}
          <Card className="p-4 bg-card/80 backdrop-blur-sm border-heritage-gold/20">
            <h4 className="font-playfair font-semibold mb-3">Legend</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-heritage-gold rounded-full"></div>
                <span>Ancient Period</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-heritage-saffron rounded-full"></div>
                <span>Medieval Period</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-heritage-bronze rounded-full"></div>
                <span>Modern Period</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
