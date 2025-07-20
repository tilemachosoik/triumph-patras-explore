import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ExternalLink } from "lucide-react";

// Import actual images
import speedTwin900SilverImage from "@/assets/speed-twin-900-my25-aluminium-silver-rhs.webp";
import speedTwin900WhiteImage from "@/assets/speed-twin-900-my25-purewhite-rhs.webp";
import speedTwin900BlackImage from "@/assets/speed-twin-900-my25-phantom-black-rhs.webp";

const ClassicsPage = () => {
  const { language: currentLanguage } = useLanguage();
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const content = {
    en: {
      title: "Modern Classics",
      subtitle: "Timeless British style meets modern engineering. Pure emotion meets cutting-edge technology.",
      backButton: "Back to Models",
      configureButton: "Configure",
      detailsButton: "View Details",
      priceFrom: "From"
    },
    gr: {
      title: "Modern Classics",
      subtitle: "Διαχρονικό βρετανικό στυλ συναντά μοντέρνα μηχανική. Καθαρό συναίσθημα συναντά τεχνολογία αιχμής.",
      backButton: "Επιστροφή στα Μοντέλα",
      configureButton: "Διαμόρφωση",
      detailsButton: "Προβολή Λεπτομερειών",
      priceFrom: "Από"
    }
  };

  const modelsByCategory = {
    "400cc": [
      {
        id: "speed-400",
        name: "Speed 400",
        price: "5.690,00 €",
        baseImage: "speed400Image",
        colors: [
          { name: "Phantom Black / Storm Grey", price: "5.690,00 €", image: "speed400BlackImage" },
          { name: "Carnival Red / Storm Grey", price: "5.690,00 €", image: "speed400RedImage" },
          { name: "Aluminium Silver", price: "5.690,00 €", image: "speed400SilverImage" }
        ],
        specs: currentLanguage === 'en' 
          ? ["398cc single-cylinder engine", "40 PS power", "Lightweight chassis"]
          : ["398κ.εκ. μονοκύλινδρος κινητήρας", "40 PS ιπποδύναμη", "Ελαφρό πλαίσιο"]
      },
      {
        id: "scrambler-400x",
        name: "Scrambler 400 X",
        price: "6.990,00 €",
        baseImage: "scrambler400xImage",
        colors: [
          { name: "Matt Khaki Green / Fusion White", price: "6.990,00 €", image: "scrambler400xGreenImage" },
          { name: "Carnival Red / Phantom Black", price: "6.990,00 €", image: "scrambler400xRedImage" }
        ],
        specs: currentLanguage === 'en' 
          ? ["398cc single-cylinder engine", "40 PS power", "Scrambler styling"]
          : ["398κ.εκ. μονοκύλινδρος κινητήρας", "40 PS ιπποδύναμη", "Scrambler στυλ"]
      },
      {
        id: "scrambler-400xc",
        name: "Scrambler 400 XC",
        price: "7.150,00 €",
        baseImage: "scrambler400xcImage",
        colors: [
          { name: "Racing Yellow", price: "7.275,00 €", image: "scrambler400xcYellowImage" },
          { name: "Storm Grey", price: "7.275,00 €", image: "scrambler400xcGreyImage" }
        ],
        specs: currentLanguage === 'en' 
          ? ["398cc single-cylinder engine", "40 PS power", "Cross-country capability"]
          : ["398κ.εκ. μονοκύλινδρος κινητήρας", "40 PS ιπποδύναμη", "Cross-country ικανότητα"]
      }
    ],
    "900cc": [
      {
        id: "speed-twin-900",
        name: "Speed Twin 900",
        price: "10.490,00 €",
        baseImage: speedTwin900SilverImage,
        isNew: true,
        colors: [
          { name: "Aluminium Silver / Carnival Red / Jet Black", price: "10.490,00 €", image: speedTwin900SilverImage },
          { name: "Pure White / Maui Blue / Tangerine Orange", price: "10.840,00 €", image: speedTwin900WhiteImage },
          { name: "Phantom Black / Aurum Gold", price: "10.840,00 €", image: speedTwin900BlackImage }
        ],
        specs: currentLanguage === 'en' 
          ? ["900cc Engine", "80 NM Max Torque", "65 PS Max Power", "16,000 km Service Interval"]
          : ["900κ.εκ. Κινητήρας", "80 NM Μέγιστη Ροπή", "65 PS Μέγιστη Ιπποδύναμη", "16.000 χλμ Διάστημα Service"]
      },
      {
        id: "scrambler-900",
        name: "Scrambler 900",
        price: "11.590,00 €",
        baseImage: "scrambler900Image",
        colors: [
          { name: "Matt Khaki", price: "11.590,00 €", image: "scrambler900KhakiImage" },
          { name: "Kingfisher Blue", price: "11.940,00 €", image: "scrambler900BlueImage" },
          { name: "Competition", price: "12.190,00 €", image: "scrambler900CompetitionImage" }
        ],
        specs: currentLanguage === 'en' 
          ? ["900cc Parallel Twin", "65 PS power", "80 NM torque"]
          : ["900κ.εκ. Παράλληλος Δίκυλινδρος", "65 PS ιπποδύναμη", "80 NM ροπή"]
      },
      {
        id: "bonneville-t100",
        name: "Bonneville T100",
        price: "11.490,00 €",
        baseImage: "bonnevilleT100Image",
        colors: [
          { name: "Jet Black", price: "11.490,00 €", image: "bonnevilleT100BlackImage" },
          { name: "Cranberry Red / Cranberry Red", price: "11.840,00 €", image: "bonnevilleT100RedImage" },
          { name: "Competition Green / Ironstone", price: "11.840,00 €", image: "bonnevilleT100GreenImage" },
          { name: "Icon Edition", price: "12.090,00 €", image: "bonnevilleT100IconImage" }
        ],
        specs: currentLanguage === 'en' 
          ? ["900cc Bonneville twin", "Classic British styling", "Modern reliability"]
          : ["900κ.εκ. Bonneville δίκυλινδρος", "Κλασικό βρετανικό στυλ", "Μοντέρνα αξιοπιστία"]
      }
    ],
    "1200cc": [
      {
        id: "speed-twin-1200",
        name: "Speed Twin 1200",
        price: "14.990,00 €",
        baseImage: "speedTwin1200Image",
        colors: [
          { name: "Aluminium Silver", price: "14.990,00 €", image: "speedTwin1200SilverImage" },
          { name: "Crystal White / Sapphire Black", price: "15.340,00 €", image: "speedTwin1200WhiteImage" },
          { name: "Carnival Red / Sapphire Black", price: "15.340,00 €", image: "speedTwin1200RedImage" }
        ],
        specs: currentLanguage === 'en' 
          ? ["1200cc Bonneville twin", "96 PS power", "112 NM torque"]
          : ["1200κ.εκ. Bonneville δίκυλινδρος", "96 PS ιπποδύναμη", "112 NM ροπή"]
      },
      {
        id: "speed-twin-1200-rs",
        name: "Speed Twin 1200 RS",
        price: "17.290,00 €",
        baseImage: "speedTwin1200RsImage",
        colors: [
          { name: "Sapphire Black", price: "17.290,00 €", image: "speedTwin1200RsBlackImage" },
          { name: "Baja Orange / Sapphire Black", price: "17.290,00 €", image: "speedTwin1200RsOrangeImage" }
        ],
        specs: currentLanguage === 'en' 
          ? ["1200cc Bonneville twin", "96 PS power", "Premium suspension"]
          : ["1200κ.εκ. Bonneville δίκυλινδρος", "96 PS ιπποδύναμη", "Premium ανάρτηση"]
      },
      {
        id: "scrambler-1200-x",
        name: "Scrambler 1200 X",
        price: "14.990,00 €",
        baseImage: "scrambler1200xImage",
        colors: [
          { name: "Sapphire Black", price: "14.990,00 €", image: "scrambler1200xBlackImage" },
          { name: "Matt Grey", price: "15.190,00 €", image: "scrambler1200xGreyImage" },
          { name: "Icon Edition", price: "15.750,00 €", image: "scrambler1200xIconImage" }
        ],
        specs: currentLanguage === 'en' 
          ? ["1200cc high power twin", "90 PS power", "Off-road capability"]
          : ["1200κ.εκ. υψηλής ισχύος δίκυλινδρος", "90 PS ιπποδύναμη", "Off-road ικανότητα"]
      },
      {
        id: "scrambler-1200-xe",
        name: "Scrambler 1200 XE",
        price: "15.990,00 €",
        baseImage: "scrambler1200xeImage",
        colors: [
          { name: "Phantom Black / Storm Grey", price: "15.990,00 €", image: "scrambler1200xeBlackImage" },
          { name: "Baja Orange / Phantom Black", price: "17.340,00 €", image: "scrambler1200xeOrangeImage" },
          { name: "Icon Edition", price: "17.250,00 €", image: "scrambler1200xeIconImage" }
        ],
        specs: currentLanguage === 'en' 
          ? ["1200cc high power twin", "90 PS power", "Extended adventure capability"]
          : ["1200κ.εκ. υψηλής ισχύος δίκυλινδρος", "90 PS ιπποδύναμη", "Εκτεταμένη adventure ικανότητα"]
      },
      {
        id: "bonneville-t120",
        name: "Bonneville T120",
        price: "14.490,00 €",
        baseImage: "bonnevilleT120Image",
        colors: [
          { name: "Jet Black", price: "14.490,00 €", image: "bonnevilleT120BlackImage" },
          { name: "Crystal White / Cranberry Red", price: "14.840,00 €", image: "bonnevilleT120WhiteImage" },
          { name: "Competition / Fusion White", price: "14.840,00 €", image: "bonnevilleT120CompetitionImage" },
          { name: "Icon Edition", price: "15.250,00 €", image: "bonnevilleT120IconImage" }
        ],
        specs: currentLanguage === 'en' 
          ? ["1200cc Bonneville twin", "80 PS power", "Classic styling"]
          : ["1200κ.εκ. Bonneville δίκυλινδρος", "80 PS ιπποδύναμη", "Κλασικό στυλ"]
      },
      {
        id: "bonneville-t120-black",
        name: "Bonneville T120 Black",
        price: "14.490,00 €",
        baseImage: "bonnevilleT120BlackImage",
        colors: [
          { name: "Jet Black", price: "14.490,00 €", image: "bonnevilleT120BlackBlackImage" },
          { name: "Graphite / Matt Graphite", price: "14.840,00 €", image: "bonnevilleT120BlackGraphiteImage" }
        ],
        specs: currentLanguage === 'en' 
          ? ["1200cc Bonneville twin", "80 PS power", "Blacked-out styling"]
          : ["1200κ.εκ. Bonneville δίκυλινδρος", "80 PS ιπποδύναμη", "Μαύρο στυλ"]
      },
      {
        id: "bonneville-bobber",
        name: "Bonneville Bobber",
        price: "15.990,00 €",
        baseImage: "bonnevilleBobberImage",
        colors: [
          { name: "Jet Black", price: "15.990,00 €", image: "bonnevilleBobberBlackImage" },
          { name: "Matt Graphite / Matt Baja Orange", price: "17.340,00 €", image: "bonnevilleBobberOrangeImage" },
          { name: "Jet Black / Ash Grey", price: "17.340,00 €", image: "bonnevilleBobberGreyImage" }
        ],
        specs: currentLanguage === 'en' 
          ? ["1200cc Bonneville twin", "77 PS power", "Bobber styling"]
          : ["1200κ.εκ. Bonneville δίκυλινδρος", "77 PS ιπποδύναμη", "Bobber στυλ"]
      },
      {
        id: "bonneville-speedmaster",
        name: "Bonneville Speedmaster",
        price: "16.990,00 €",
        baseImage: "bonnevilleSpeedmasterImage",
        colors: [
          { name: "Jet Black", price: "16.990,00 €", image: "bonnevilleSpeedmasterBlackImage" },
          { name: "Snowdonia White / Cranberry Red", price: "17.340,00 €", image: "bonnevilleSpeedmasterWhiteImage" },
          { name: "Pacific Blue / Silver Ice", price: "17.340,00 €", image: "bonnevilleSpeedmasterBlueImage" },
          { name: "Icon Edition", price: "17.790,00 €", image: "bonnevilleSpeedmasterIconImage" }
        ],
        specs: currentLanguage === 'en' 
          ? ["1200cc Bonneville twin", "77 PS power", "Cruiser comfort"]
          : ["1200κ.εκ. Bonneville δίκυλινδρος", "77 PS ιπποδύναμη", "Cruiser άνεση"]
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

        <Tabs defaultValue="400cc" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="400cc">400cc</TabsTrigger>
            <TabsTrigger value="900cc">900cc</TabsTrigger>
            <TabsTrigger value="1200cc">1200cc</TabsTrigger>
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
                      <div className="absolute top-2 right-2">
                        {model.isNew && (
                          <Badge variant="destructive">NEW</Badge>
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