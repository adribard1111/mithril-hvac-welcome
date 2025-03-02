
import { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";
import { ShieldCheck, Zap, Lightbulb, Award } from "lucide-react";

const ValuesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  const values = [
    {
      id: 1,
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "We never compromise on quality. Every component we install meets the highest industry standards for durability and performance."
    },
    {
      id: 2,
      icon: Zap,
      title: "Energy Efficiency",
      description: "Our systems are designed to maximize efficiency, reducing energy consumption and environmental impact while lowering utility costs."
    },
    {
      id: 3,
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously explore new technologies and techniques to provide our clients with the most advanced HVAC solutions available."
    },
    {
      id: 4,
      icon: Award,
      title: "Customer Satisfaction",
      description: "Your comfort is our priority. We're not satisfied until you're experiencing the perfect indoor climate in your space."
    }
  ];
  
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
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
  }, []);
  
  return (
    <section
      id="values"
      ref={sectionRef}
      className="section relative overflow-hidden"
    >
      <div className="container-lg">
        {/* Section Header */}
        <div className={cn(
          "text-center max-w-2xl mx-auto mb-16 animate-on-scroll",
          isInView && "in-view"
        )}>
          <span className="tag bg-mithril-100 text-mithril-600 mb-4">Our Philosophy</span>
          <h2 className="heading-lg mb-6 text-balance">Our Core Values</h2>
          <p className="body-md text-muted-foreground text-balance">
            These principles guide every decision we make and every system we install. 
            They're the foundation of our commitment to excellence in everything we do.
          </p>
        </div>
        
        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div 
              key={value.id}
              className={cn(
                "glass-card p-8 border border-mithril-100 animate-on-scroll", 
                isInView && "in-view"
              )}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-mithril-100 flex items-center justify-center">
                    <value.icon className="h-5 w-5 text-mithril-600" />
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="heading-sm mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-balance">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
