
import TimelineDial from "@/components/TimelineDial";
import InteractiveMap from "@/components/InteractiveMap";

const Timeline = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-heritage-cream via-background to-heritage-cream/50">
      {/* Timeline Dial at the top */}
      <div className="pt-20 pb-8">
        <TimelineDial />
      </div>
      
      {/* Interactive Map below */}
      <div className="px-6 pb-12">
        <InteractiveMap />
      </div>
    </div>
  );
};

export default Timeline;
