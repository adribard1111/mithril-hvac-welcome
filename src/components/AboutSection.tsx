
import { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";
import { MapPin, Users, Buildings, Award } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [countersStarted, setCountersStarted] = useState(false);
  
  // Values to count up to
  const counters = [
    { id: 1, value: 15, label: "Years of experience", icon: Award },
    { id: 2, value: 1200, label: "Projects completed", icon: Buildings },
    { id: 3, value: 24, label: "Expert technicians", icon: Users },
  ];
  
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (!countersStarted) {
            setCountersStarted(true);
          }
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [countersStarted]);
  
  // Counter animation
  const [counts, setCounts] = useState(counters.map(() => 0));
  
  useEffect(() => {
    if (!countersStarted) return;
    
    const duration = 2000; // ms
    const frameRate = 1000 / 60; // 60 fps
    const totalFrames = Math.floor(duration / frameRate);
    
    let frame = 0;
    
    const interval = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      
      // Apply easing
      const easedProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease out
      
      setCounts(
        counters.map((counter) => Math.floor(counter.value * easedProgress))
      );
      
      if (frame === totalFrames) {
        clearInterval(interval);
      }
    }, frameRate);
    
    return () => clearInterval(interval);
  }, [countersStarted, counters]);
  
  return (
    <section
      id="about"
      ref={sectionRef}
      className="section bg-mithril-50/50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="blur-dot w-96 h-96 -left-48 top-20 opacity-20" />
      <div className="blur-dot w-72 h-72 right-0 bottom-0 opacity-10" />
      
      <div className="container-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className={cn(
            "animate-on-scroll", 
            isInView && "in-view"
          )}>
            <span className="tag bg-mithril-100 text-mithril-600 mb-4">About Mithril</span>
            <h2 className="heading-lg mb-6 text-balance">Who are we?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="body-md">
                Founded in 2008, Mithril has established itself as a premier provider of heating, 
                ventilation, and air conditioning solutions. Our journey began with a simple mission: 
                to deliver unparalleled comfort with systems that are efficient, reliable, and built to last.
              </p>
              <p className="body-md">
                What sets us apart is our commitment to precision engineering and exceptional 
                customer service. Every installation we complete is a reflection of our dedication 
                to excellence and our passion for creating comfortable environments.
              </p>
              <p className="body-md">
                Today, we're proud to serve residential and commercial clients throughout the region, 
                bringing comfort and efficiency to homes and businesses with our expert team and 
                cutting-edge technology.
              </p>
            </div>
            
            {/* Location */}
            <div className="mt-8 flex items-center text-mithril-700">
              <MapPin className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Headquartered in San Francisco, CA</span>
            </div>
          </div>
          
          {/* Key Numbers */}
          <div className={cn(
            "glass-card p-8 md:p-10 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-on-scroll",
            isInView && "in-view"
          )}>
            {counters.map((counter, index) => (
              <div key={counter.id} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-mithril-100 flex items-center justify-center mb-4">
                  <counter.icon className="h-6 w-6 text-mithril-600" />
                </div>
                <div 
                  className="value-counter"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <span className="text-3xl font-bold text-foreground">
                    {countersStarted ? counts[index] : 0}
                    {counter.id === 1 && "+"}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">{counter.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
