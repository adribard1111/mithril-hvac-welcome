
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-navbar py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container-lg flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center">
          <span className="font-display text-xl font-bold text-foreground tracking-tight">
            MITHRIL
          </span>
          <span className="ml-1.5 text-xs font-medium text-mithril-600 uppercase tracking-wider">
            HVAC
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#about" 
            className="text-sm font-medium text-foreground/80 hover:text-mithril-600 transition-colors"
          >
            Qui sommes-nous?
          </a>
          <a 
            href="#values" 
            className="text-sm font-medium text-foreground/80 hover:text-mithril-600 transition-colors"
          >
            Nos Valeurs
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium text-foreground/80 hover:text-mithril-600 transition-colors"
          >
            Contactez-Nous
          </a>
        </nav>

        {/* Phone Number */}
        <div className="hidden md:flex items-center">
          <a 
            href="tel:+15551234567" 
            className="flex items-center text-mithril-600 hover:text-mithril-700 transition-colors"
          >
            <Phone className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">+1 (555) 123-4567</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span 
            className={cn(
              "w-6 h-0.5 bg-foreground transition-transform duration-300",
              mobileMenuOpen && "translate-y-2 rotate-45"
            )} 
          />
          <span 
            className={cn(
              "w-6 h-0.5 bg-foreground transition-opacity duration-300",
              mobileMenuOpen && "opacity-0"
            )} 
          />
          <span 
            className={cn(
              "w-6 h-0.5 bg-foreground transition-transform duration-300",
              mobileMenuOpen && "-translate-y-2 -rotate-45"
            )} 
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 border-t border-gray-100 overflow-hidden",
          mobileMenuOpen ? "max-h-80" : "max-h-0"
        )}
      >
        <div className="px-4 py-2 space-y-4">
          <a 
            href="#about" 
            className="block py-2 text-base font-medium text-foreground hover:text-mithril-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Qui sommes-nous?
          </a>
          <a 
            href="#values" 
            className="block py-2 text-base font-medium text-foreground hover:text-mithril-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Nos Valeurs
          </a>
          <a 
            href="#contact" 
            className="block py-2 text-base font-medium text-foreground hover:text-mithril-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contactez-Nous
          </a>
          <a 
            href="tel:+15551234567" 
            className="flex items-center py-2 text-mithril-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Phone className="h-4 w-4 mr-2" />
            <span className="text-base font-medium">+1 (555) 123-4567</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
