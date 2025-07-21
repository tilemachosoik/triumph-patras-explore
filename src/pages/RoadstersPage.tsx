import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";

const RoadstersPage = () => {
  const { language: currentLanguage } = useLanguage();
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const content = {
    en: {
      title: "Roadsters",
      subtitle: "Pure performance machines delivering adrenaline-pumping power and precision handling.",
      backButton: "Back to Models",
      configureButton: "Configure",
      detailsButton: "View Details", 
      priceFrom: "From"
    },
    gr: {
      title: "Roadsters",
      subtitle: "Καθαρές μηχανές απόδοσης που προσφέρουν δύναμη που κόβει την ανάσα και ακριβή χειρισμό.",
      backButton: "Επιστροφή στα Μοντέλα",
      configureButton: "Διαμόρφωση",
      detailsButton: "Προβολή Λεπτομερειών",
      priceFrom: "Από"
    }
  };

  const models = [
    {
      id: "trident-660",
      name: "Trident 660",
      price: "9.290,00 €",
      baseImage: "trident660JetBlackImage",
      colors: [
        { name: "Jet Black", price: "9.290,00 €", image: "trident660JetBlackImage" },
        { name: "Diablo Red / Sapphire Black", price: "9.490,00 €", image: "trident660DiabloRedImage" },
        { name: "Cosmic Yellow / Sapphire Black", price: "9.490,00 €", image: "trident660CosmicYellowImage" },
        { name: "Cobalt Blue / Sapphire Black", price: "9.490,00 €", image: "trident660CobaltBlueImage" },
        { name: "Matt Baja Orange", price: "9.490,00 €", image: "trident660MattBajaOrangeImage" },
        { name: "Pure White", price: "9.490,00 €", image: "trident660PureWhiteImage" },
        { name: "Crystal White", price: "9.490,00 €", image: "trident660CrystalWhiteImage" },
        { name: "Silver Ice", price: "9.590,00 €", image: "trident660SilverIceImage" },
        { name: "Phantom Black", price: "9.590,00 €", image: "trident660PhantomBlackImage" },
        { name: "Cosmic Yellow", price: "9.590,00 €", image: "trident660CosmicYellowSolidImage" },
        { name: "Carnival Red", price: "9.590,00 €", image: "trident660CarnivalRedImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["675cc triple engine", "81 PS power", "64 NM torque"]
        : ["675κ.εκ. τρικύλινδρος κινητήρας", "81 PS ιπποδύναμη", "64 NM ροπή"]
    },
    {
      id: "street-triple-r",
      name: "Street Triple R",
      price: "11.990,00 €",
      baseImage: "streetTripleRJetBlackImage", 
      colors: [
        { name: "Jet Black", price: "11.990,00 €", image: "streetTripleRJetBlackImage" },
        { name: "Crystal White", price: "12.190,00 €", image: "streetTripleRCrystalWhiteImage" },
        { name: "Silver Ice", price: "12.190,00 €", image: "streetTripleRSilverIceImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["765cc triple engine", "118 PS power", "77 NM torque"] 
        : ["765κ.εκ. τρικύλινδρος κινητήρας", "118 PS ιπποδύναμη", "77 NM ροπή"]
    },
    {
      id: "street-triple-rs",
      name: "Street Triple RS",
      price: "13.990,00 €",
      baseImage: "streetTripleRsPhantomBlackImage",
      colors: [
        { name: "Phantom Black", price: "13.990,00 €", image: "streetTripleRsPhantomBlackImage" },
        { name: "Cosmic Yellow", price: "14.190,00 €", image: "streetTripleRsCosmicYellowImage" },
        { name: "Carnival Red", price: "14.190,00 €", image: "streetTripleRsCarnivalRedImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["765cc triple engine", "121 PS power", "79 NM torque", "Premium Öhlins suspension"]
        : ["765κ.εκ. τρικύλινδρος κινητήρας", "121 PS ιπποδύναμη", "79 NM ροπή", "Premium Öhlins ανάρτηση"]
    },
    {
      id: "speed-triple-1200-rs",
      name: "Speed Triple 1200 RS",
      price: "21.990,00 €",
      baseImage: "speedTriple1200RsJetBlackImage",
      colors: [
        { name: "Jet Black", price: "21.990,00 €", image: "speedTriple1200RsJetBlackImage" },
        { name: "Granite / Diablo Red", price: "22.290,00 €", image: "speedTriple1200RsGraniteRedImage" },
        { name: "Granite / Triumph Racing Yellow", price: "22.290,00 €", image: "speedTriple1200RsGraniteYellowImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["1160cc triple engine", "177 PS power", "125 NM torque", "Carbon fiber bodywork"]
        : ["1160κ.εκ. τρικύλινδρος κινητήρας", "177 PS ιπποδύναμη", "125 NM ροπή", "Αμάξωμα carbon fiber"]
    },
    {
      id: "speed-triple-1200-rr",
      name: "Speed Triple 1200 RR", 
      price: "23.990,00 €",
      baseImage: "speedTriple1200RrTriumphPerformanceYellowImage",
      colors: [
        { name: "Triumph Performance Yellow", price: "23.990,00 €", image: "speedTriple1200RrTriumphPerformanceYellowImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["1160cc triple engine", "177 PS power", "125 NM torque", "Track-focused setup"]
        : ["1160κ.εκ. τρικύλινδρος κινητήρας", "177 PS ιπποδύναμη", "125 NM ροπή", "Εστίαση στην πίστα"]
    }
  ];

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
    return model.baseImage;
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
      <Navbar />
      
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model: any) => (
            <Card key={model.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={getModelImage(model) as string} 
                  alt={model.name}
                  className="w-full h-48 object-cover"
                />
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
      </div>
    </div>
  );
};

export default RoadstersPage;
