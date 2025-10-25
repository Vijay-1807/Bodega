import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import logoImage from "@/assets/logo.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "clients" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src={logoImage} 
                alt="BOdega Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`font-bold text-lg ${scrolled ? 'text-foreground' : 'text-white'}`}>BOdega</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${scrolled ? 'text-foreground/80 hover:text-foreground' : 'text-white/80 hover:text-white'} transition-colors duration-200 font-medium`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg ${scrolled ? 'hover:bg-muted' : 'hover:bg-white/10'} transition-colors`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className={`h-6 w-6 ${scrolled ? 'text-foreground' : 'text-white'}`} /> : <Menu className={`h-6 w-6 ${scrolled ? 'text-foreground' : 'text-white'}`} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border/50 shadow-lg w-full">
            <div className="w-full px-4 py-6 space-y-4 max-w-full">
              {navItems.map((item) => (
                 <button
                   key={item.id}
                   onClick={() => scrollToSection(item.id)}
                   className={`block w-full text-left ${scrolled ? 'text-foreground/80 hover:text-foreground' : 'text-black/80 hover:text-black'} transition-colors duration-200 font-medium py-2`}
                 >
                  {item.name}
                </button>
              ))}
              <div className="pt-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-3 rounded-lg transition-all duration-200"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
