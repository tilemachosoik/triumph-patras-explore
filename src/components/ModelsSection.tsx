import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Mountain, Wrench, Bike } from "lucide-react";
import { useNavigate } from "react-router-dom";
import classicsImage from "@/assets/OE_SpeedTwin900_MY25_CW4I2117_GE.jpg";
import adventureImage from "@/assets/Triumph_Tiger_900_GTPRO__Road_Statics_2024_011.jpg";
import roadstersImage from "@/assets/Triumph_MY23_Street_Triple_RS_Static_09.jpg";

interface ModelsSectionProps {
  language: 'en' | 'gr';
}

const ModelsSection = ({ language }: ModelsSectionProps) => {
  const navigate = useNavigate();
  
  const content = {
    en: {
      title: "Triumph Model Range",
      subtitle: "Discover Our Collection",
      description: "From modern classics to adventure bikes, explore the full range of Triumph motorcycles available at our Patras dealership.",
      viewAll: "View All Models",
      testRide: "Book Test Ride",
      models: [
        {
          name: "Modern Classics",
          category: "Modern Classics",
          description: "Timeless British style meets modern engineering. The classics capture the essence of motorcycling heritage.",
          image: classicsImage,
          icon: Bike,
          features: ["Classic Styling", "Modern Performance", "Various Displacements"]
        },
        {
          name: "Adventure", 
          category: "Adventure",
          description: "Built for adventure and exploration. The Tiger series delivers capability both on and off the road.",
          image: adventureImage,
          icon: Mountain,
          features: ["Off-Road Capability", "Long Distance Comfort", "Advanced Electronics"]
        },
        {
          name: "Roadsters",
          category: "Roadster",
          description: "Pure performance and adrenaline. The roadsters represent the cutting edge of Triumph engineering.",
          image: roadstersImage,
          icon: Zap,
          features: ["High Performance", "Track Ready", "Advanced Suspension"]
        }
      ]
    },
    gr: {
      title: "Γκάμα Μοντέλων Triumph",
      subtitle: "Ανακαλύψτε τη Συλλογή μας",
      description: "Από μοντέρνα κλασικά έως adventure μοτοσικλέτες, εξερευνήστε την πλήρη γκάμα των Triumph στο κατάστημά μας στην Πάτρα.",
      viewAll: "Όλα τα Μοντέλα",
      testRide: "Κλείστε Δοκιμή",
      models: [
        {
          name: "Classics",
          category: "Μοντέρνα Κλασικά",
          description: "Διαχρονικό βρετανικό στυλ συναντά μοντέρνα μηχανική. Τα classics αποτυπώνουν την ουσία της μοτοσικλετιστικής παράδοσης.",
          image: classicsImage,
          icon: Bike,
          features: ["Κλασικό Στυλ", "Μοντέρνα Απόδοση", "Διάφοροι Κυβισμοί"]
        },
        {
          name: "Adventure",
          category: "Adventure",
          description: "Κατασκευασμένη για περιπέτεια και εξερεύνηση. Η σειρά Tiger προσφέρει δυνατότητες τόσο στο δρόμο όσο και εκτός.",
          image: adventureImage,
          icon: Mountain,
          features: ["Off-Road Ικανότητα", "Άνεση Μεγάλων Αποστάσεων", "Προηγμένα Ηλεκτρονικά"]
        },
        {
          name: "Roadsters",
          category: "Roadster",
          description: "Καθαρή απόδοση και αδρεναλίνη. Τα roadsters αντιπροσωπεύουν την αιχμή της μηχανικής Triumph.",
          image: roadstersImage,
          icon: Zap,
          features: ["Υψηλή Απόδοση", "Έτοιμη για Πίστα", "Προηγμένη Ανάρτηση"]
        }
      ]
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
    <section id="models" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.description}
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {t.models.map((model, index) => {
            const IconComponent = model.icon;
            return (
              <Card key={index} className="group bg-gradient-card border-border hover:shadow-card-premium transition-all duration-500 overflow-hidden">
                <div className="relative">
                  <img 
                    src={model.image} 
                    alt={model.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {model.category}
                  </Badge>
                  <div className="absolute top-4 right-4 p-2 bg-card/80 backdrop-blur-sm rounded-full">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {model.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {model.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {model.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group/btn"
                    onClick={() => {
                      if (index === 0) navigate('/classics');
                      else if (index === 1) navigate('/adventure');
                      else if (index === 2) navigate('/roadsters');
                    }}
                  >
                    <Wrench className="w-4 h-4 mr-2" />
                    {language === 'en' ? 'View Models' : 'Δείτε Μοντέλα'}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button 
            variant="premium" 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-4"
          >
            {t.viewAll}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
