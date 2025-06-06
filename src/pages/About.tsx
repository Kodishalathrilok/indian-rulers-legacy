
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="relative">
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-heritage-cream via-background to-heritage-cream/50 pt-24">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              <span className="heritage-text-gradient">About Our Project</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover the rich tapestry of Indian history through our comprehensive chronological journey
            </p>
          </div>
          
          <div className="prose prose-lg mx-auto text-center animate-scale-in">
            <p className="text-muted-foreground leading-relaxed mb-8">
              This educational website is dedicated to preserving and presenting the magnificent history 
              of Indian rulers across different eras. From the ancient kingdoms that laid the foundation 
              of Indian civilization to the medieval empires that shaped cultural heritage, and the modern 
              period that led to independence.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-12">
              Our mission is to make history accessible, engaging, and visually appealing through 
              interactive timelines, detailed biographies, and immersive experiences that bring 
              the past to life.
            </p>
            
            <Link to="/">
              <Button className="heritage-button">
                <ArrowDown className="mr-2 h-5 w-5 rotate-180" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
