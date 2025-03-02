
import { useState, useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const { toast } = useToast();
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [submitting, setSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    }, 1500);
  };
  
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
      id="contact"
      ref={sectionRef}
      className="section bg-mithril-50/50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="blur-dot w-96 h-96 -right-48 top-20 opacity-20" />
      <div className="blur-dot w-72 h-72 left-0 bottom-0 opacity-10" />
      
      <div className="container-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className={cn(
            "animate-on-scroll", 
            isInView && "in-view"
          )}>
            <span className="tag bg-mithril-100 text-mithril-600 mb-4">Get In Touch</span>
            <h2 className="heading-lg mb-6 text-balance">Contact Us</h2>
            <p className="body-md text-muted-foreground mb-10 text-balance">
              Have questions about our services or ready to start your next HVAC project?
              Our team is here to help. Reach out to us using any of the methods below.
            </p>
            
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-mithril-100 flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-mithril-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold text-foreground">Phone</h3>
                  <a href="tel:+15551234567" className="text-mithril-600 hover:text-mithril-700 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-mithril-100 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-mithril-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold text-foreground">Email</h3>
                  <a href="mailto:info@mithrilhvac.com" className="text-mithril-600 hover:text-mithril-700 transition-colors">
                    info@mithrilhvac.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-mithril-100 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-mithril-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold text-foreground">Office</h3>
                  <p className="text-muted-foreground">
                    123 Innovation Way<br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="mt-10 p-6 bg-white rounded-xl border border-mithril-100">
              <h3 className="text-base font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={cn(
            "animate-on-scroll", 
            isInView && "in-view"
          )}>
            <div className="glass-card p-8 md:p-10 border border-mithril-100">
              <h3 className="heading-sm mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-mithril-200 focus:border-mithril-300 focus:ring focus:ring-mithril-200 focus:ring-opacity-50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-mithril-200 focus:border-mithril-300 focus:ring focus:ring-mithril-200 focus:ring-opacity-50 transition-all"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-mithril-200 focus:border-mithril-300 focus:ring focus:ring-mithril-200 focus:ring-opacity-50 transition-all"
                      placeholder="Your phone (optional)"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-mithril-200 focus:border-mithril-300 focus:ring focus:ring-mithril-200 focus:ring-opacity-50 transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-lg bg-mithril-600 hover:bg-mithril-700 text-white py-3.5 font-medium transition-all shadow hover:shadow-lg flex items-center justify-center space-x-2 relative overflow-hidden"
                >
                  <span className={cn(
                    "transition-transform",
                    submitting && "translate-y-10 opacity-0"
                  )}>
                    Send Message
                  </span>
                  <Send className={cn(
                    "h-4 w-4 transition-transform",
                    submitting && "translate-y-10 opacity-0"
                  )} />
                  
                  {submitting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
