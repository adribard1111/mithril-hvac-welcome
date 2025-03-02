
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      heroRef.current.style.setProperty('--move-x', `${moveX}px`);
      heroRef.current.style.setProperty('--move-y', `${moveY}px`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="top" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      style={{ 
        '--move-x': '0px',
        '--move-y': '0px'
      } as React.CSSProperties}
    >
      {/* Background elements */}
      <div className="blur-dot w-64 h-64 -top-32 left-1/4 opacity-20" />
      <div className="blur-dot w-96 h-96 top-1/3 -right-48 opacity-10" />
      
      {/* Hero content */}
      <div className="container-md text-center px-4 relative z-10">
        <span className="tag bg-mithril-100 text-mithril-600 mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Professional HVAC Solutions
        </span>
        
        <h1 className="heading-xl mb-6 max-w-4xl mx-auto animate-fade-in text-balance" style={{ animationDelay: '0.3s' }}>
          Premium climate solutions<br className="hidden md:block" /> 
          for ultimate comfort
        </h1>
        
        <p className="body-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in text-balance" style={{ animationDelay: '0.5s' }}>
          Delivering exceptional heating, ventilation, and air conditioning 
          systems with precision engineering and superior craftsmanship.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <a 
            href="#contact"
            className="rounded-full bg-mithril-600 hover:bg-mithril-700 text-white px-8 py-3.5 text-sm font-medium transition-all shadow hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Contact Us
          </a>
          <a 
            href="#about"
            className="rounded-full bg-white border border-mithril-200 hover:border-mithril-300 px-8 py-3.5 text-sm font-medium text-mithril-800 transition-all"
          >
            Learn More
          </a>
        </div>
      </div>
      
      {/* Floating shapes */}
      <div 
        className="absolute bottom-20 left-10 md:left-20 lg:left-40 w-24 h-24 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 shadow-sm rotate-12 animate-float"
        style={{ 
          transform: 'rotate(12deg) translate(calc(var(--move-x) * -0.2), calc(var(--move-y) * -0.2))',
          animationDelay: '0.2s' 
        }}
      />
      
      <div 
        className="absolute bottom-40 right-10 md:right-20 lg:right-40 w-16 h-16 rounded-full bg-mithril-100/40 backdrop-blur-md border border-white/40 shadow-sm animate-float"
        style={{ 
          transform: 'translate(calc(var(--move-x) * -0.3), calc(var(--move-y) * -0.3))',
          animationDelay: '0.4s' 
        }}
      />
      
      <div 
        className="absolute bottom-10 right-20 md:right-40 lg:right-80 w-20 h-20 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 shadow-sm -rotate-6 animate-float"
        style={{ 
          transform: 'rotate(-6deg) translate(calc(var(--move-x) * -0.1), calc(var(--move-y) * -0.1))',
          animationDelay: '0.6s' 
        }}
      />
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse-slow">
        <div className="flex flex-col items-center">
          <span className="text-xs font-medium text-muted-foreground mb-2">Scroll to explore</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2"/>
            <circle className="animate-float" cx="8" cy="8" r="3" fill="currentColor" fillOpacity="0.3"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
