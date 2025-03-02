
import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-mithril-100 py-12">
      <div className="container-lg">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and contact */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <span className="font-display text-xl font-bold text-foreground tracking-tight">
                MITHRIL
              </span>
              <span className="ml-1.5 text-xs font-medium text-mithril-600 uppercase tracking-wider">
                HVAC
              </span>
            </div>
            
            <div className="mt-2 flex items-center justify-center md:justify-start">
              <Phone className="h-3.5 w-3.5 mr-2 text-mithril-600" />
              <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
            </div>
          </div>
          
          {/* Copyright and links */}
          <div className="text-center md:text-right">
            <div className="flex flex-wrap justify-center md:justify-end gap-4 mb-4">
              <a href="#about" className="text-sm text-muted-foreground hover:text-mithril-600 transition-colors">
                About
              </a>
              <a href="#values" className="text-sm text-muted-foreground hover:text-mithril-600 transition-colors">
                Values
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-mithril-600 transition-colors">
                Contact
              </a>
            </div>
            
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Mithril HVAC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
