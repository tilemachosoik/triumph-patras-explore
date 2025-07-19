import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Languages, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import triumphLogo from "@/assets/logo.png";

interface NavbarProps {
  language: 'en' | 'gr';
  onLanguageChange: (lang: 'en' | 'gr') => void;
}

const Navbar = ({ language, onLanguageChange }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const content = {
    en: {
      home: "Home",
      models: "Models", 
      about: "About",
      contact: "Contact",
      testRide: "Test Ride",
      phone: "Call Us"
    },
    gr: {
      home: "Αρχική",
      models: "Μοντέλα",
      about: "Σχετικά",
      contact: "Επικοινωνία", 
      testRide: "Δοκιμαστική Βόλτα",
      phone: "Τηλέφωνο"
    }
  };

  const t = content[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src={triumphLogo} 
            alt="Triumph Logo" 
            className="h-5 md:h-6 object-contain"
          />
          <span className="text-sm font-medium text-[#ab3137]">Patras Andriopoulos</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t.home}
          </button>
          <button 
            onClick={() => scrollToSection('models')}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t.models}
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t.about}
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t.contact}
          </button>
        </div>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Switcher */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onLanguageChange(language === 'en' ? 'gr' : 'en')}
            className="flex items-center space-x-1"
          >
            <Languages className="w-4 h-4" />
            <span>{language === 'en' ? 'GR' : 'EN'}</span>
          </Button>

          {/* Phone */}
          <Button variant="outline" size="sm" asChild>
            <a href="tel:+302610123456" className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">{t.phone}</span>
            </a>
          </Button>

          {/* Test Ride CTA */}
          <Button variant="premium" size="sm" onClick={() => scrollToSection('test-ride')}>
            {t.testRide}
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-card border-border">
            <div className="flex flex-col space-y-6 mt-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-lg text-foreground hover:text-primary transition-colors"
              >
                {t.home}
              </button>
              <button 
                onClick={() => scrollToSection('models')}
                className="text-left text-lg text-foreground hover:text-primary transition-colors"
              >
                {t.models}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-lg text-foreground hover:text-primary transition-colors"
              >
                {t.about}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-lg text-foreground hover:text-primary transition-colors"
              >
                {t.contact}
              </button>
              
              <div className="border-t border-border pt-6 space-y-4">
                <Button
                  variant="outline"
                  onClick={() => onLanguageChange(language === 'en' ? 'gr' : 'en')}
                  className="w-full justify-start"
                >
                  <Languages className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Ελληνικά' : 'English'}
                </Button>
                
                <Button variant="outline" asChild className="w-full justify-start">
                  <a href="tel:+302610123456">
                    <Phone className="w-4 h-4 mr-2" />
                    {t.phone}
                  </a>
                </Button>
                
                <Button 
                  variant="premium" 
                  onClick={() => scrollToSection('test-ride')}
                  className="w-full"
                >
                  {t.testRide}
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
