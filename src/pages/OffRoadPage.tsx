import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";

const OffRoadPage = () => {
  const { language: currentLanguage } = useLanguage();
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const content = {
    en: {
      title: "Off Road",
      subtitle: "Built with world-class innovation and top-specification equipment, our off road motorcycles are designed to win at every level.",
      backButton: "Back to Models",
      configureButton: "Configure",
      detailsButton: "View Details",
      priceFrom: "From"
    },
    gr: {
      title: "Off Road",
      subtitle: "Κατασκευασμένες με παγκόσμιας κλάσης καινοτομία και κορυφαίων προδιαγραφών εξοπλισμό, οι off road μοτοσυκλέτες μας έχουν σχεδιαστεί για να κερδίζουν σε κάθε επίπεδο.",
      backButton: "Επιστροφή στα Μοντέλα",
      configureButton: "Διαμόρφωση",
      detailsButton: "Προβολή Λεπτομερειών",
      priceFrom: "Από"
    }
  };

  const models = [
    {
      id: "tf-250-e",
      name: "TF 250-E",
      price: "11.490,00 €",
      baseImage: "tf250eTriumphRacingYellowImage",
      colors: [
        { name: "Triumph Racing Yellow / Black / White", price: "11.490,00 €", image: "tf250eTriumphRacingYellowImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["250cc 4-stroke engine", "Lightweight Aluminium Frame", "Brembo Brakes", "Electric start"]
        : ["250κ.εκ. 4-χρονος κινητήρας", "Ελαφρό πλαίσιο αλουμινίου", "Φρένα Brembo", "Ηλεκτρική εκκίνηση"]
    },
    {
      id: "tf-450-e",
      name: "TF 450-E",
      price: "12.390,00 €",
      baseImage: "tf450eTriumphRacingYellowImage", 
      colors: [
        { name: "Triumph Racing Yellow / Black / White", price: "12.390,00 €", image: "tf450eTriumphRacingYellowImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["450cc 4-stroke engine", "Lightweight Aluminium Frame", "Brembo Brakes", "Electric start"]
        : ["450κ.εκ. 4-χρονος κινητήρας", "Ελαφρό πλαίσιο αλουμινίου", "Φρένα Brembo", "Ηλεκτρική εκκίνηση"]
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

export default OffRoadPage;
