import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MapPin } from "lucide-react";
import heroImage from "@/assets/bobber-tfc-my25-08-var-step-car-1410x793.webp";

interface HeroSectionProps {
  language: 'en' | 'gr';
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const content = {
    en: {
      title: "Official Triumph Dealer",
      subtitle: "Western Greece",
      description: "Discover the legendary British motorcycles that define freedom, adventure and craftsmanship. Experience Triumph in Patras.",
      cta1: "View Models",
      cta2: "Test Ride",
      location: "Patras, Greece",
      experience: "30+ Years of Experience"
    },
    gr: {
      title: "Επίσημος Αντιπρόσωπος Triumph",
      subtitle: "Δυτική Ελλάδα",
      description: "Ανακαλύψτε τις θρυλικές βρετανικές μοτοσικλέτες που ορίζουν την ελευθερία, την περιπέτεια και την τεχνική αρτιότητα. Ζήστε την εμπειρία Triumph στην Πάτρα.",
      cta1: "Δείτε Μοντέλα",
      cta2: "Test Ride",
      location: "Πάτρα, Ελλάδα",
      experience: "30+ Χρόνια Εμπειρίας"
    }
  };

  const t = content[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Triumph Motorcycle"
            className="w-full h-full object-cover"
          />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{t.location}</span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-sm font-medium">{t.experience}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
            {t.title}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light text-primary mb-8">
            {t.subtitle}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white drop-shadow mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="premium" 
              size="lg"
              onClick={() => scrollToSection('models')}
              className="group px-8 py-4 text-lg"
            >
              {t.cta1}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('test-ride')}
              className="px-8 py-4 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              {t.cta2}
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
