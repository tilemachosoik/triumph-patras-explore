import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ExternalLink } from "lucide-react";

// Placeholder images - to be replaced with actual images
import classicsImage from "@/assets/bonneville.jpg";
import speedTwin900SilverImage from "@/assets/speed-twin-900-my25-aluminium-silver-rhs.webp";
import speedTwin900WhiteImage from "@/assets/speed-twin-900-my25-purewhite-rhs.webp";
import speedTwin900BlackImage from "@/assets/speed-twin-900-my25-phantom-black-rhs.webp";

interface ClassicsPageProps {
  language?: 'en' | 'gr';
}

const ClassicsPage = ({ language = 'en' }: ClassicsPageProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'gr'>(language);
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const content = {
    en: {
      title: "Modern Classics",
      subtitle: "The legendary Bonneville philosophy is built into our Modern Classic models, with unparalleled history, racing success and cultural impact.",
      backButton: "Back to Models",
      configureButton: "Configure",
      detailsButton: "View Details",
      priceFrom: "From",
      newBadge: "NEW",
      iconBadge: "Icon Edition Available"
    },
    gr: {
      title: "Modern Classics",
      subtitle: "Η θρυλική φιλοσοφία Bonneville είναι ενσωματωμένη στα Modern Classic μοντέλα μας, με ασύγκριτη ιστορία, αγωνιστική επιτυχία και πολιτιστικό αντίκτυπο.",
      backButton: "Επιστροφή στα Μοντέλα",
      configureButton: "Διαμόρφωση",
      detailsButton: "Προβολή Λεπτομερειών",
      priceFrom: "Από",
      newBadge: "ΝΕΟ",
      iconBadge: "Διαθέσιμη Icon Edition"
    }
  };

  const modelsByCategory = {
    400: [
      {
        id: "speed-400",
        name: "Speed 400",
        price: "5.690,00 €",
        baseImage: "speed400Image",
        colors: [
          { name: "Carnival Red", price: "5.690,00 €", image: "speed400RedImage" },
          { name: "Racing Yellow", price: "5.690,00 €", image: "speed400YellowImage" },
          { name: "Matt Khaki Green", price: "5.690,00 €", image: "speed400GreenImage" }
        ],
        specs: currentLanguage === 'en' 
          ? ["398cc TR Engine", "16,000 km service interval"]
          : ["398 κ.εκ. TR Κινητήρας", "16.000 χλμ διάστημα σέρβις"]
      },
      {
        id: "scrambler-400x",
        name: "Scrambler 400 X",
        price: "6.390,00 €",
        baseImage: "scrambler400xImage",
        colors: [
          { name: "Matt Khaki Green", price: "6.390,00 €", image: "scrambler400xGreenImage" },
          { name: "Racing Yellow", price: "6.390,00 €", image: "scrambler400xYellowImage" }
        ],
        specs: currentLanguage === 'en' 
          ? ["398cc TR Engine", "16,000 km service interval"]
          : ["398 κ.εκ. TR Κινητήρας", "16.000 χλμ διάστημα σέρβις"]
      },
      {
        id: "scrambler-400xc",
        name: "Scrambler 400 XC",
        price: "7.150,00 €",
        baseImage: "scrambler400xcImage",
        isNew: true,
        colors: [
          { name: "Racing Yellow", price: "7.150,00 €", image: "scrambler400xcYellowImage" },
          { name: "Matt Khaki Green", price: "7.150,00 €", image: "scrambler400xcGreenImage" }
        ],
        specs: currentLanguage === 'en' 
          ? ["398cc TR Engine", "16,000 km service interval"]
          : ["398 κ.εκ. TR Κινητήρας", "16.000 χλμ διάστημα σέρβις"]
      }
    ],
    900: [
      {
        id: "speed-twin-900",
        name: currentLanguage === 'en' ? "Speed Twin 900" : "Speed Twin 900",
        price: "10.490,00 €",
        baseImage: "speedTwin900Image",
        isNew: true,
        colors: [
          { name: "Aluminium Silver / Carnival Red / Jet Black", price: "10.490,00 €", image: "speedTwin900SilverImage" },
          { name: "Pure White / Maui Blue / Tangerine Orange", price: "10.840,00 €", image: "speedTwin900WhiteImage" },
          { name: "Phantom Black / Aurum Gold", price: "10.840,00 €", image: "speedTwin900BlackImage" }
        ],
        specs: currentLanguage === 'en' 
          ? ["900cc Engine", "80 NM Max Torque", "65 PS Max Power", "16,000 km Service Interval"]
          : ["900 Κ.ΕΚ. Κινητήρας", "80 NM Μέγιστη Ροπή", "65 PS Μέγιστη Ιπποδύναμη", "16.000 Διάστημα Σέρβις"]
      },
      {
        id: "scrambler-900",
        name: "Scrambler 900",
        price: "11.990,00 €",
        baseImage: "scrambler900Image",
        colors: [
          { name: "Matt Khaki Green", price: "11.990,00 €", image: "scrambler900GreenImage" },
          { name: "Pure White", price: "11.990,00 €", image: "scrambler900WhiteImage" }
        ]
      },
      {
        id: "bonneville-t100",
        name: "Bonneville T100",
        price: "12.990,00 €",
        baseImage: "bonnevilleT100Image",
        colors: [
          { name: "Jet Black", price: "12.990,00 €", image: "bonnevilleT100BlackImage" },
          { name: "Pure White", price: "12.990,00 €", image: "bonnevilleT100WhiteImage" }
        ]
      }
    ],
    1200: [
      {
        id: "speed-twin-1200",
        name: "Speed Twin 1200",
        price: "13.990,00 €",
        baseImage: "speedTwin1200Image",
        isNew: true,
        colors: [
          { name: "Baja Orange", price: "13.990,00 €", image: "speedTwin1200OrangeImage" },
          { name: "Matt Graphite", price: "13.990,00 €", image: "speedTwin1200GraphiteImage" }
        ]
      },
      {
        id: "speed-twin-1200-rs",
        name: "Speed Twin 1200 RS",
        price: "15.990,00 €",
        baseImage: "speedTwin1200RsImage",
        colors: [
          { name: "Baja Orange", price: "15.990,00 €", image: "speedTwin1200RsOrangeImage" },
          { name: "Matt Graphite", price: "15.990,00 €", image: "speedTwin1200RsGraphiteImage" }
        ]
      },
      {
        id: "scrambler-1200-x",
        name: "Scrambler 1200 X",
        price: "14.990,00 €",
        baseImage: "scrambler1200xImage",
        hasIconEdition: true,
        colors: [
          { name: "Ash Grey", price: "14.990,00 €", image: "scrambler1200xGreyImage" },
          { name: "Icon Edition Gold", price: "16.990,00 €", image: "scrambler1200xIconImage" }
        ]
      },
      {
        id: "scrambler-1200-xe",
        name: "Scrambler 1200 XE",
        price: "16.990,00 €",
        baseImage: "scrambler1200xeImage",
        colors: [
          { name: "Matt Khaki Green", price: "16.990,00 €", image: "scrambler1200xeGreenImage" },
          { name: "Pure White", price: "16.990,00 €", image: "scrambler1200xeWhiteImage" }
        ]
      },
      {
        id: "bonneville-t120",
        name: "Bonneville T120",
        price: "14.990,00 €",
        baseImage: "bonnevilleT120Image",
        colors: [
          { name: "Jet Black", price: "14.990,00 €", image: "bonnevilleT120BlackImage" },
          { name: "Pure White", price: "14.990,00 €", image: "bonnevilleT120WhiteImage" }
        ]
      },
      {
        id: "bonneville-t120-black",
        name: "Bonneville T120 Black",
        price: "15.990,00 €",
        baseImage: "bonnevilleT120BlackImage",
        colors: [
          { name: "Jet Black", price: "15.990,00 €", image: "bonnevilleT120BlackJetImage" }
        ]
      },
      {
        id: "bonneville-bobber",
        name: "Bonneville Bobber",
        price: "16.990,00 €",
        baseImage: "bonneBobberImage",
        hasIconEdition: true,
        colors: [
          { name: "Matt Graphite", price: "16.990,00 €", image: "bonneBobberGraphiteImage" },
          { name: "Icon Edition", price: "18.990,00 €", image: "bonneBobberIconImage" }
        ]
      },
      {
        id: "bonneville-speedmaster",
        name: "Bonneville Speedmaster",
        price: "16.990,00 €",
        baseImage: "bonneSpeedmasterImage",
        hasIconEdition: true,
        colors: [
          { name: "Snowdonia White", price: "16.990,00 €", image: "bonneSpeedmasterWhiteImage" },
          { name: "Icon Edition", price: "18.990,00 €", image: "bonneSpeedmasterIconImage" }
        ]
      }
    ]
  };

  const handleColorSelect = (modelId: string, color: any) => {
    setSelectedColors(prev => ({
      ...prev,
      [modelId]: color.name
    }));
  };

  const getModelImage = (model: any) => {
    const selectedColor = selectedColors[model.id];
    if (selectedColor) {
      const colorOption = model.colors.find((c: any) => c.name === selectedColor);
      if (colorOption) return colorOption.image;
    }
    return model.baseImage || classicsImage;
  };

  const getModelPrice = (model: any) => {
    const selectedColor = selectedColors[model.id];
    if (selectedColor) {
      const colorOption = model.colors.find((c: any) => c.name === selectedColor);
      if (colorOption) return colorOption.price;
    }
    return model.price;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar language={currentLanguage} onLanguageChange={setCurrentLanguage} />
      
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {content[currentLanguage].backButton}
          </Button>
          
          <h1 className="text-4xl font-bold mb-4">{content[currentLanguage].title}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {content[currentLanguage].subtitle}
          </p>
        </div>

        <Tabs defaultValue="400" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="400">400cc</TabsTrigger>
            <TabsTrigger value="900">900cc</TabsTrigger>
            <TabsTrigger value="1200">1200cc</TabsTrigger>
          </TabsList>
          
          {Object.entries(modelsByCategory).map(([category, models]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {models.map((model: any) => (
                  <Card key={model.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={getModelImage(model) as string} 
                        alt={model.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 flex gap-2">
                        {model.isNew && (
                          <Badge variant="destructive">{content[currentLanguage].newBadge}</Badge>
                        )}
                        {model.hasIconEdition && (
                          <Badge variant="secondary">{content[currentLanguage].iconBadge}</Badge>
                        )}
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl">{model.name}</CardTitle>
                      <div className="text-2xl font-bold text-primary">
                        {content[currentLanguage].priceFrom} {getModelPrice(model)}
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      {model.specs && (
                        <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                          {model.specs.map((spec: string, index: number) => (
                            <li key={index}>• {spec}</li>
                          ))}
                        </ul>
                      )}
                      
                      {/* Color Selection */}
                      <div className="mb-4">
                        <p className="text-sm font-medium mb-2">Available Colors:</p>
                        <div className="flex flex-wrap gap-2">
                          {model.colors.map((color: any, index: number) => (
                            <Button
                              key={index}
                              variant={selectedColors[model.id] === color.name ? "default" : "outline"}
                              size="sm"
                              onClick={() => handleColorSelect(model.id, color)}
                              className="text-xs"
                            >
                              {color.name}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 flex-wrap">
                        <Button size="sm" className="flex-1">
                          {content[currentLanguage].configureButton}
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ClassicsPage;