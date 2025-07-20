import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";

const AdventurePage = () => {
  const { language: currentLanguage } = useLanguage();
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const content = {
    en: {
      title: "Adventure",
      subtitle: "Built for exploration and long-distance touring, engineered to conquer any terrain.",
      backButton: "Back to Models",
      configureButton: "Configure",
      detailsButton: "View Details",
      priceFrom: "From"
    },
    gr: {
      title: "Adventure",
      subtitle: "Κατασκευασμένες για εξερεύνηση και ταξίδια μεγάλων αποστάσεων, σχεδιασμένες για να κατακτήσουν κάθε έδαφος.",
      backButton: "Επιστροφή στα Μοντέλα",
      configureButton: "Διαμόρφωση",
      detailsButton: "Προβολή Λεπτομερειών",
      priceFrom: "Από"
    }
  };

  const models = [
    {
      id: "tiger-sport-660",
      name: "Tiger Sport 660",
      price: "9.790,00 €",
      baseImage: "tigerSport660Image",
      colors: [
        { name: "Sapphire Black", price: "9.790,00 €", image: "tigerSport660BlackImage" },
        { name: "Crystal White", price: "9.990,00 €", image: "tigerSport660WhiteImage" },
        { name: "Carnival Red", price: "9.990,00 €", image: "tigerSport660RedImage" },
        { name: "Roulette Green", price: "9.990,00 €", image: "tigerSport660GreenImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["675cc triple engine", "81 PS power", "Sport-touring comfort"]
        : ["675κ.εκ. τρικύλινδρος κινητήρας", "81 PS ιπποδύναμη", "Sport-touring άνεση"]
    },
    {
      id: "tiger-sport-800",
      name: "Tiger Sport 800",
      price: "11.990,00 €",
      baseImage: "tigerSport800Image",
      colors: [
        { name: "Graphite / Sapphire Black", price: "11.990,00 €", image: "tigerSport800GraphiteImage" },
        { name: "Cosmic Yellow / Sapphire Black", price: "12.190,00 €", image: "tigerSport800YellowImage" },
        { name: "Caspian Blue / Sapphire Black", price: "12.190,00 €", image: "tigerSport800BlueImage" },
        { name: "Sapphire Black", price: "12.190,00 €", image: "tigerSport800BlackImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["800cc triple engine", "95 PS power", "Enhanced touring capability"]
        : ["800κ.εκ. τρικύλινδρος κινητήρας", "95 PS ιπποδύναμη", "Βελτιωμένη touring ικανότητα"]
    },
    {
      id: "tiger-900-gt",
      name: "Tiger 900 GT",
      price: "14.490,00 €",
      baseImage: "tiger900GtImage",
      colors: [
        { name: "Sapphire Black", price: "14.490,00 €", image: "tiger900GtBlackImage" },
        { name: "Carnival Red / Sapphire Black", price: "14.650,00 €", image: "tiger900GtRedImage" },
        { name: "Snowdonia White / Sapphire Black", price: "14.650,00 €", image: "tiger900GtWhiteImage" },
        { name: "Ash Grey/Intense Orange", price: "17.250,00 €", image: "tiger900GtGreyImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["888cc triple engine", "95 PS power", "GT comfort and touring"]
        : ["888κ.εκ. τρικύλινδρος κινητήρας", "95 PS ιπποδύναμη", "GT άνεση και touring"]
    },
    {
      id: "tiger-900-gt-pro",
      name: "Tiger 900 GT Pro",
      price: "16.490,00 €",
      baseImage: "tiger900GtProImage",
      colors: [
        { name: "Carnival Red / Sapphire Black", price: "16.490,00 €", image: "tiger900GtProRedImage" },
        { name: "Graphite / Sapphire Black", price: "16.650,00 €", image: "tiger900GtProGraphiteImage" },
        { name: "Snowdonia White / Sapphire Black", price: "16.490,00 €", image: "tiger900GtProWhiteImage" },
        { name: "Ash Grey/Intense Orange", price: "17.490,00 €", image: "tiger900GtProGreyImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["888cc triple engine", "95 PS power", "Premium GT features"]
        : ["888κ.εκ. τρικύλινδρος κινητήρας", "95 PS ιπποδύναμη", "Premium GT χαρακτηριστικά"]
    },
    {
      id: "tiger-900-rally-pro",
      name: "Tiger 900 Rally Pro",
      price: "17.290,00 €",
      baseImage: "tiger900RallyProImage",
      colors: [
        { name: "Matt Khaki Green / Matt Phantom Black", price: "17.290,00 €", image: "tiger900RallyProKhakiImage" },
        { name: "Carbón Black / Sapphire Black", price: "21.550,00 €", image: "tiger900RallyProBlackImage" },
        { name: "Matt Sandstorm", price: "21.290,00 €", image: "tiger900RallyProSandstormImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["888cc triple engine", "95 PS power", "Rally-tuned suspension"]
        : ["888κ.εκ. τρικύλινδρος κινητήρας", "95 PS ιπποδύναμη", "Rally-tuned ανάρτηση"]
    },
    {
      id: "tiger-1200-gt-pro",
      name: "Tiger 1200 GT Pro",
      price: "20.990,00 €",
      baseImage: "tiger1200GtProImage",
      colors: [
        { name: "Sapphire Black", price: "20.990,00 €", image: "tiger1200GtProBlackImage" },
        { name: "Carnival Red", price: "21.190,00 €", image: "tiger1200GtProRedImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["1160cc triple engine", "141 PS power", "Premium adventure touring"]
        : ["1160κ.εκ. τρικύλινδρος κινητήρας", "141 PS ιπποδύναμη", "Premium adventure touring"]
    },
    {
      id: "tiger-1200-rally-pro",
      name: "Tiger 1200 Rally Pro",
      price: "21.990,00 €",
      baseImage: "tiger1200RallyProImage",
      colors: [
        { name: "Matt Sandstorm", price: "21.990,00 €", image: "tiger1200RallyProSandstormImage" },
        { name: "Jet Black", price: "21.990,00 €", image: "tiger1200RallyProBlackImage" },
        { name: "Matt Khaki", price: "22.290,00 €", image: "tiger1200RallyProKhakiImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["1160cc triple engine", "141 PS power", "Off-road focused rally setup"]
        : ["1160κ.εκ. τρικύλινδρος κινητήρας", "141 PS ιπποδύναμη", "Off-road εστιασμένο rally setup"]
    },
    {
      id: "tiger-1200-gt-explorer",
      name: "Tiger 1200 GT Explorer MY25",
      price: "22.990,00 €",
      baseImage: "tiger1200GtExplorerImage",
      colors: [
        { name: "Snowdonia White", price: "22.990,00 €", image: "tiger1200GtExplorerWhiteImage" },
        { name: "Sapphire Black", price: "23.190,00 €", image: "tiger1200GtExplorerBlackImage" },
        { name: "Carnival Red", price: "23.290,00 €", image: "tiger1200GtExplorerRedImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["1160cc triple engine", "141 PS power", "Maximum touring capacity"]
        : ["1160κ.εκ. τρικύλινδρος κινητήρας", "141 PS ιπποδύναμη", "Μέγιστη touring χωρητικότητα"]
    },
    {
      id: "tiger-1200-rally-explorer",
      name: "Tiger 1200 Rally Explorer MY25",
      price: "23.990,00 €",
      baseImage: "tiger1200RallyExplorerImage",
      colors: [
        { name: "Matt Sandstorm", price: "23.990,00 €", image: "tiger1200RallyExplorerSandstormImage" },
        { name: "Jet Black", price: "23.990,00 €", image: "tiger1200RallyExplorerBlackImage" },
        { name: "Matt Khaki", price: "24.290,00 €", image: "tiger1200RallyExplorerKhakiImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["1160cc triple engine", "141 PS power", "Ultimate adventure capability"]
        : ["1160κ.εκ. τρικύλινδρος κινητήρας", "141 PS ιπποδύναμη", "Απόλυτη adventure ικανότητα"]
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
      </div>
    </div>
  );
};

export default AdventurePage;