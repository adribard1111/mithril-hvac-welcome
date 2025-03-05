
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
      title: "Assurance Qualité",
      description: "Nous ne faisons jamais de compromis sur la qualité. Chaque composant que nous installons répond aux normes industrielles les plus élevées de durabilité et de performance."
    },
    {
      id: 2,
      icon: Zap,
      title: "Efficacité Énergétique",
      description: "Nos systèmes sont conçus pour maximiser l'efficacité, réduisant la consommation d'énergie et l'impact environnemental tout en diminuant les coûts des services publics."
    },
    {
      id: 3,
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous explorons continuellement de nouvelles technologies et techniques pour offrir à nos clients les solutions CVC les plus avancées disponibles."
    },
    {
      id: 4,
      icon: Award,
      title: "Satisfaction Client",
      description: "Votre confort est notre priorité. Nous ne sommes satisfaits que lorsque vous bénéficiez du climat intérieur parfait dans votre espace."
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
          <span className="tag bg-mithril-100 text-mithril-600 mb-4">Notre Philosophie</span>
          <h2 className="heading-lg mb-6 text-balance">Nos Valeurs Fondamentales</h2>
          <p className="body-md text-muted-foreground text-balance">
            Ces principes guident chaque décision que nous prenons et chaque système que nous installons.
            Ils sont le fondement de notre engagement envers l'excellence dans tout ce que nous faisons.
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
