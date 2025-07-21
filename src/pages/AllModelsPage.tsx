import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronDown, ChevronUp, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";

// Import motorcycle images
import bonnevilleT100 from "@/assets/OE_SpeedTwin900_MY25_CW4I2117_GE.webp";
import tigerImage from "@/assets/Triumph_Tiger_900_GTPRO__Road_Statics_2024_011.webp";
import streetTriple from "@/assets/Triumph_MY23_Street_Triple_RS_Static_09.webp";
import offRoadImage from "@/assets/TF_250X_MY26_0004.webp";
import rocketImage from "@/assets/Rocket3R_Evel-Knievel_MY25_003.webp";
import sportImage from "@/assets/Triumph-Daytona-660-Statics37.webp";

const AllModelsPage = () => {
  const { language } = useLanguage();
  const [expandedCategories, setExpandedCategories] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const content = {
    en: {
      title: "Complete Model Range",
      subtitle: "Explore every Triumph motorcycle available at our Patras dealership",
      configure: "Configure",
      viewDetails: "View Details",
      categories: {
        classics: {
          title: "Modern Classics",
          description: "Timeless British style meets modern engineering",
          models: [
            {
              name: "Scrambler 400 X",
              price: "€6,390",
              engine: "398cc Single",
              power: "40 HP",
              image: bonnevilleT100,
              colors: ["Phantom Black/Storm Grey", "Caspian Blue/Storm Grey", "Carnival Red/Storm Grey"]
            },
            {
              name: "Scrambler 400 XC",
              price: "€6,690",
              engine: "398cc Single",
              power: "40 HP",
              image: bonnevilleT100,
              colors: ["Phantom Black/Storm Grey", "Caspian Blue/Storm Grey", "Carnival Red/Storm Grey"]
            },
            {
              name: "Speed 400",
              price: "€5,490",
              engine: "398cc Single",
              power: "40 HP",
              image: bonnevilleT100,
              colors: ["Phantom Black/Storm Grey", "Caspian Blue/Storm Grey", "Carnival Red/Storm Grey", "Aluminium Silver"]
            },
            {
              name: "Scrambler 1200 XE",
              price: "€16,990",
              engine: "1200cc Parallel Twin",
              power: "90 HP",
              image: bonnevilleT100,
              colors: ["Korosi Red/Ironstone", "Matt Khaki Green/Ironstone", "Competition White/Ironstone"]
            },
            {
              name: "Speed Twin 900",
              price: "€12,890",
              engine: "900cc Parallel Twin",
              power: "65 HP",
              image: bonnevilleT100,
              colors: ["Aluminium Silver", "Phantom Black", "Pure White"]
            },
            {
              name: "Bonneville Bobber",
              price: "€16,990",
              engine: "1200cc Parallel Twin",
              power: "77 HP",
              image: bonnevilleT100,
              colors: ["Jet Black", "Competition Green", "Cranberry Red"]
            }
          ]
        },
        adventure: {
          title: "Adventure",
          description: "Built for exploration and long-distance touring",
          models: [
            {
              name: "Tiger Sport 660",
              price: "€9,790",
              engine: "660cc Triple",
              power: "81 HP",
              image: tigerImage,
              colors: ["Lucerne Blue/Sapphire Black", "Graphite/Silver Ice", "Sapphire Black/Sapphire Black"]
            },
            {
              name: "Tiger Sport 800",
              price: "€11,990",
              engine: "800cc Triple",
              power: "95 HP",
              image: tigerImage,
              colors: ["Lucerne Blue/Sapphire Black", "Graphite/Silver Ice", "Korosi Red/Graphite"]
            },
            {
              name: "Tiger 900 GT Pro",
              price: "€16,990",
              engine: "888cc Triple",
              power: "95 HP",
              image: tigerImage,
              colors: ["Lucerne Blue/Sapphire Black", "Graphite/Silver Ice", "Korosi Red/Graphite"]
            },
            {
              name: "Tiger 900 Rally Pro",
              price: "€18,790",
              engine: "888cc Triple",
              power: "95 HP",
              image: tigerImage,
              colors: ["Sandstorm/Sapphire Black", "Graphite/Silver Ice", "Korosi Red/Graphite"]
            },
            {
              name: "Tiger 1200 GT Explorer",
              price: "€20,990",
              engine: "1160cc Triple",
              power: "141 HP",
              image: tigerImage,
              colors: ["Lucerne Blue/Sapphire Black", "Jet Black/Silver Ice", "Matt Khaki Green/Ironstone"]
            },
            {
              name: "Tiger 1200 Rally Explorer",
              price: "€23,390",
              engine: "1160cc Triple",
              power: "141 HP",
              image: tigerImage,
              colors: ["Sandstorm/Sapphire Black", "Jet Black/Silver Ice", "Matt Khaki Green/Ironstone"]
            }
          ]
        },
        roadsters: {
          title: "Roadsters",
          description: "Pure performance and aggressive styling",
          models: [
            {
              name: "Trident 660",
              price: "€9,290",
              engine: "660cc Triple",
              power: "81 HP",
              image: streetTriple,
              colors: ["Sapphire Black", "Silver Ice/Diablo Red", "Matt Jet Black/Matt Storm Grey"]
            },
            {
              name: "Street Triple R",
              price: "€11,990",
              engine: "765cc Triple",
              power: "118 HP",
              image: streetTriple,
              colors: ["Sapphire Black", "Crystal White/Storm Grey", "Matt Jet Black/Matt Storm Grey"]
            },
            {
              name: "Street Triple RS",
              price: "€13,990",
              engine: "765cc Triple", 
              power: "123 HP",
              image: streetTriple,
              colors: ["Sapphire Black", "Crystal White/Storm Grey", "Matt Jet Black/Matt Storm Grey"]
            },
            {
              name: "Speed Triple 1200 RS",
              price: "€21,990",
              engine: "1160cc Triple",
              power: "180 HP",
              image: streetTriple,
              colors: ["Sapphire Black", "Silver Ice", "Matt Jet Black"]
            },
            {
              name: "Speed Triple 1200 RR",
              price: "€23,990",
              engine: "1160cc Triple",
              power: "180 HP",
              image: streetTriple,
              colors: ["Sapphire Black", "Silver Ice", "Crystal White/Storm Grey"]
            }
          ]
        },
        offroad: {
          title: "Off-Road",
          description: "Purpose-built for dirt and motocross",
          models: [
            {
              name: "TF 250-E",
              price: "€11,490",
              engine: "249cc Single",
              power: "40 HP",
              image: offRoadImage,
              colors: ["Triumph Racing Yellow/Black/White"]
            },
            {
              name: "TF 450-E",
              price: "€12,390",
              engine: "449cc Single",
              power: "50 HP",
              image: offRoadImage,
              colors: ["Triumph Racing Yellow/Black/White"]
            }
          ]
        },
        rocket: {
          title: "Rocket 3",
          description: "The world's largest production motorcycle engine",
          models: [
            {
              name: "Rocket III R Storm",
              price: "€28,290",
              engine: "2500cc Triple",
              power: "180 NM Torque",
              image: rocketImage,
              colors: ["Sapphire Black/Granite", "Satin Pacific Blue/Matt Sapphire Black", "Carnival Red/Sapphire Black", "Granite/Sapphire Black"]
            },
            {
              name: "Rocket III GT Storm",
              price: "€28,990",
              engine: "2500cc Triple",
              power: "180 NM Torque",
              image: rocketImage,
              colors: ["Matt Sapphire Black/Satin Pacific Blue", "Sapphire Black/Carnival Red"]
            }
          ]
        },
        sport: {
          title: "Sport",
          description: "Track-inspired performance and aerodynamics",
          models: [
            {
              name: "Daytona 660",
              price: "€9,990",
              engine: "660cc Triple",
              power: "95 HP",
              image: sportImage,
              colors: ["Snowdonia White/Sapphire Black", "Satin Granite/Matt Jet Black", "Carnival Red/Sapphire Black"]
            }
          ]
        }
      }
    },
    gr: {
      title: "Πλήρης Γκάμα Μοντέλων",
      subtitle: "Εξερευνήστε κάθε μοτοσικλέτα Triumph που διαθέτει το κατάστημά μας στην Πάτρα",
      configure: "Διαμόρφωση",
      viewDetails: "Λεπτομέρειες",
      categories: {
        classics: {
          title: "Modern Classics",
          description: "Διαχρονικό βρετανικό στυλ συναντά μοντέρνα μηχανική",
          models: [
            {
              name: "Scrambler 400 X",
              price: "€6,390",
              engine: "398cc Μονοκύλινδρος",
              power: "40 HP",
              image: bonnevilleT100,
              colors: ["Phantom Black/Storm Grey", "Caspian Blue/Storm Grey", "Carnival Red/Storm Grey"]
            },
            {
              name: "Scrambler 400 XC",
              price: "€6,690",
              engine: "398cc Μονοκύλινδρος",
              power: "40 HP",
              image: bonnevilleT100,
              colors: ["Phantom Black/Storm Grey", "Caspian Blue/Storm Grey", "Carnival Red/Storm Grey"]
            },
            {
              name: "Speed 400",
              price: "€5,490",
              engine: "398cc Μονοκύλινδρος",
              power: "40 HP",
              image: bonnevilleT100,
              colors: ["Phantom Black/Storm Grey", "Caspian Blue/Storm Grey", "Carnival Red/Storm Grey", "Aluminium Silver"]
            },
            {
              name: "Scrambler 1200 XE",
              price: "€16,990",
              engine: "1200cc Παράλληλος Δίκυλος",
              power: "90 HP",
              image: bonnevilleT100,
              colors: ["Korosi Red/Ironstone", "Matt Khaki Green/Ironstone", "Competition White/Ironstone"]
            },
            {
              name: "Speed Twin 900",
              price: "€12,890",
              engine: "900cc Παράλληλος Δίκυλος",
              power: "65 HP",
              image: bonnevilleT100,
              colors: ["Aluminium Silver", "Phantom Black", "Pure White"]
            },
            {
              name: "Bonneville Bobber",
              price: "€16,990",
              engine: "1200cc Παράλληλος Δίκυλος",
              power: "77 HP",
              image: bonnevilleT100,
              colors: ["Jet Black", "Competition Green", "Cranberry Red"]
            }
          ]
        },
        adventure: {
          title: "Adventure",
          description: "Κατασκευασμένες για εξερεύνηση και ταξίδια μεγάλων αποστάσεων",
          models: [
            {
              name: "Tiger Sport 660",
              price: "€9,790",
              engine: "660cc Τρικύλινδρος",
              power: "81 HP",
              image: tigerImage,
              colors: ["Lucerne Blue/Sapphire Black", "Graphite/Silver Ice", "Sapphire Black/Sapphire Black"]
            },
            {
              name: "Tiger Sport 800",
              price: "€11,990",
              engine: "800cc Τρικύλινδρος",
              power: "95 HP",
              image: tigerImage,
              colors: ["Lucerne Blue/Sapphire Black", "Graphite/Silver Ice", "Korosi Red/Graphite"]
            },
            {
              name: "Tiger 900 GT Pro",
              price: "€16,990",
              engine: "888cc Τρικύλινδρος",
              power: "95 HP",
              image: tigerImage,
              colors: ["Lucerne Blue/Sapphire Black", "Graphite/Silver Ice", "Korosi Red/Graphite"]
            },
            {
              name: "Tiger 900 Rally Pro",
              price: "€18,790",
              engine: "888cc Τρικύλινδρος",
              power: "95 HP",
              image: tigerImage,
              colors: ["Sandstorm/Sapphire Black", "Graphite/Silver Ice", "Korosi Red/Graphite"]
            },
            {
              name: "Tiger 1200 GT Explorer",
              price: "€20,990",
              engine: "1160cc Τρικύλινδρος",
              power: "141 HP",
              image: tigerImage,
              colors: ["Lucerne Blue/Sapphire Black", "Jet Black/Silver Ice", "Matt Khaki Green/Ironstone"]
            },
            {
              name: "Tiger 1200 Rally Explorer",
              price: "€23,390",
              engine: "1160cc Τρικύλινδρος",
              power: "141 HP",
              image: tigerImage,
              colors: ["Sandstorm/Sapphire Black", "Jet Black/Silver Ice", "Matt Khaki Green/Ironstone"]
            }
          ]
        },
        roadsters: {
          title: "Roadsters",
          description: "Καθαρή απόδοση και επιθετικό στυλ",
          models: [
            {
              name: "Trident 660",
              price: "€9,290",
              engine: "660cc Τρικύλινδρος",
              power: "81 HP",
              image: streetTriple,
              colors: ["Sapphire Black", "Silver Ice/Diablo Red", "Matt Jet Black/Matt Storm Grey"]
            },
            {
              name: "Street Triple R",
              price: "€11,990",
              engine: "765cc Τρικύλινδρος",
              power: "118 HP",
              image: streetTriple,
              colors: ["Sapphire Black", "Crystal White/Storm Grey", "Matt Jet Black/Matt Storm Grey"]
            },
            {
              name: "Street Triple RS",
              price: "€13,990",
              engine: "765cc Τρικύλινδρος", 
              power: "123 HP",
              image: streetTriple,
              colors: ["Sapphire Black", "Crystal White/Storm Grey", "Matt Jet Black/Matt Storm Grey"]
            },
            {
              name: "Speed Triple 1200 RS",
              price: "€21,990",
              engine: "1160cc Τρικύλινδρος",
              power: "180 HP",
              image: streetTriple,
              colors: ["Sapphire Black", "Silver Ice", "Matt Jet Black"]
            },
            {
              name: "Speed Triple 1200 RR",
              price: "€23,990",
              engine: "1160cc Τρικύλινδρος",
              power: "180 HP",
              image: streetTriple,
              colors: ["Sapphire Black", "Silver Ice", "Crystal White/Storm Grey"]
            }
          ]
        },
        offroad: {
          title: "Off-Road",
          description: "Σχεδιασμένες ειδικά για χώμα και motocross",
          models: [
            {
              name: "TF 250-E",
              price: "€11,490",
              engine: "249cc Μονοκύλινδρος",
              power: "40 HP",
              image: offRoadImage,
              colors: ["Triumph Racing Yellow/Black/White"]
            },
            {
              name: "TF 450-E",
              price: "€12,390",
              engine: "449cc Μονοκύλινδρος",
              power: "50 HP",
              image: offRoadImage,
              colors: ["Triumph Racing Yellow/Black/White"]
            }
          ]
        },
        rocket: {
          title: "Rocket 3",
          description: "Ο μεγαλύτερος κινητήρας παραγωγής μοτοσικλέτας στον κόσμο",
          models: [
            {
              name: "Rocket III R Storm",
              price: "€28,290",
              engine: "2500cc Τρικύλινδρος",
              power: "180 NM Ροπή",
              image: rocketImage,
              colors: ["Sapphire Black/Granite", "Satin Pacific Blue/Matt Sapphire Black", "Carnival Red/Sapphire Black", "Granite/Sapphire Black"]
            },
            {
              name: "Rocket III GT Storm",
              price: "€28,990",
              engine: "2500cc Τρικύλινδρος",
              power: "180 NM Ροπή",
              image: rocketImage,
              colors: ["Matt Sapphire Black/Satin Pacific Blue", "Sapphire Black/Carnival Red"]
            }
          ]
        },
        sport: {
          title: "Sport",
          description: "Επιδόσεις εμπνευσμένες από την πίστα και αεροδυναμική",
          models: [
            {
              name: "Daytona 660",
              price: "€9,990",
              engine: "660cc Τρικύλινδρος",
              power: "95 HP",
              image: sportImage,
              colors: ["Snowdonia White/Sapphire Black", "Satin Granite/Matt Jet Black", "Carnival Red/Sapphire Black"]
            }
          ]
        }
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
        </section>

        {/* Models by Category */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {Object.entries(t.categories).map(([categoryKey, category]) => (
              <div key={categoryKey} className="mb-12">
                {/* Category Header */}
                <div 
                  className="flex items-center justify-between p-6 bg-gradient-card border border-border rounded-lg cursor-pointer hover:shadow-card-premium transition-all duration-300 mb-6"
                  onClick={() => toggleCategory(categoryKey)}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge variant="secondary" className="px-3 py-1">
                      {category.models.length} models
                    </Badge>
                    {expandedCategories.includes(categoryKey) ? (
                      <ChevronUp className="w-6 h-6 text-primary" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-primary" />
                    )}
                  </div>
                </div>

                {/* Models Grid */}
                {expandedCategories.includes(categoryKey) && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                    {category.models.map((model, index) => (
                      <Card key={index} className="group bg-gradient-card border-border hover:shadow-card-premium transition-all duration-500 overflow-hidden">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={model.image} 
                            alt={model.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                            {model.price}
                          </Badge>
                        </div>
                        
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {model.name}
                          </h3>
                          
                          <div className="space-y-2 mb-4">
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Engine:</span>
                              <span className="text-sm text-foreground">{model.engine}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Power:</span>
                              <span className="text-sm text-foreground">{model.power}</span>
                            </div>
                          </div>

                          <div className="mb-4">
                            <span className="text-sm text-muted-foreground mb-2 block">Available Colors:</span>
                            <div className="flex flex-wrap gap-1">
                              {model.colors.map((color, colorIndex) => (
                                <Badge key={colorIndex} variant="outline" className="text-xs">
                                  {color}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex space-x-2">
                            <Button 
                              variant="outline" 
                              className="flex-1"
                              onClick={() => {/* TODO: Open configurator modal */}}
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              {t.configure}
                            </Button>
                            <Button 
                              variant="premium" 
                              className="flex-1"
                              onClick={() => navigate('/contact')}
                            >
                              {t.viewDetails}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AllModelsPage;
