
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";

const Rocket3Page = () => {
  const { language: currentLanguage } = useLanguage();
  const navigate = useNavigate();

  const content = {
    en: {
      title: "Rocket 3",
      subtitle: "Equipped with the world's largest production engine and featuring the highest torque, this is the ultimate high-performance muscle roadster motorcycle.",
      backButton: "Back to Models",
      configureButton: "Configure",
      detailsButton: "View Details",
      priceFrom: "From"
    },
    gr: {
      title: "Rocket 3",
      subtitle: "Εξοπλισμένη με τον μεγαλύτερο κινητήρα παραγωγής στον κόσμο και διαθέτοντας την υψηλότερη ροπή,αυτή είναι η απόλυτη μοτοσικλέτα muscle roadster υψηλών επιδόσεων.",
      backButton: "Επιστροφή στα Μοντέλα",
      configureButton: "Διαμόρφωση",
      detailsButton: "Προβολή Λεπτομερειών",
      priceFrom: "Από"
    }
  };

  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});

  const models = [
    {
      id: "rocket-3-r-storm",
      name: "Rocket III R Storm",
      price: "28.290,00 €",
      baseImage: "rocket3RStormSapphireBlackImage",
      colors: [
        { name: "Sapphire Black / Granite", price: "28.290,00 €", image: "rocket3RStormSapphireBlackImage" },
        { name: "Satin Pacific Blue / Matt Sapphire Black", price: "28.590,00 €", image: "rocket3RStormSatinPacificBlueImage" },
        { name: "Carnival Red / Sapphire Black", price: "28.590,00 €", image: "rocket3RStormCarnivalRedImage" },
        { name: "Granite / Sapphire Black", price: "28.590,00 €", image: "rocket3RStormGraniteImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["2500cc Rocket triple engine", "Ultimate high performance roadster", "180 NM Max Torque"]
        : ["2500cc Rocket triple engine", "Ultimate high performance roadster", "180 NM Μέγιστη Ροπή"]
    },
    {
      id: "rocket-3-gt-storm",
      name: "Rocket III GT Storm",
      price: "28.990,00 €",
      baseImage: "rocket3GTStormMattSapphireBlackImage",
      colors: [
        { name: "Matt Sapphire Black / Satin Pacific Blue", price: "28.990,00 €", image: "rocket3GTStormMattSapphireBlackImage" },
        { name: "Sapphire Black / Carnival Red", price: "29.290,00 €", image: "rocket3GTStormSapphireBlackImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["2500cc Rocket triple engine", "Grand touring comfort", "180 NM Max Torque", "Premium touring features"]
        : ["2500cc Rocket triple engine", "Grand touring άνεση", "180 NM Μέγιστη Ροπή", "Premium touring χαρακτηριστικά"]
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

export default Rocket3Page;
