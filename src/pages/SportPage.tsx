import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";

// Placeholder images - to be replaced with actual images
import sportImage from "@/assets/speed-triple.jpg";

interface SportPageProps {
  language?: 'en' | 'gr';
}

const SportPage = ({ language = 'en' }: SportPageProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'gr'>(language);
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const content = {
    en: {
      title: "Sport",
      subtitle: "Performance-focused motorcycles designed for the track and spirited road riding.",
      backButton: "Back to Models",
      configureButton: "Configure",
      detailsButton: "View Details",
      priceFrom: "From",
      newBadge: "NEW"
    },
    gr: {
      title: "Sport",
      subtitle: "Μοτοσικλέτες εστιασμένες στις επιδόσεις, σχεδιασμένες για την πίστα και τη δυναμική οδήγηση.",
      backButton: "Επιστροφή στα Μοντέλα",
      configureButton: "Διαμόρφωση",
      detailsButton: "Προβολή Λεπτομερειών",
      priceFrom: "Από",
      newBadge: "ΝΕΟ"
    }
  };

  const models = [
    {
      id: "trident-660",
      name: "Trident 660",
      price: "8.990,00 €",
      baseImage: "trident660Image",
      colors: [
        { name: "Sapphire Black", price: "8.990,00 €", image: "trident660BlackImage" },
        { name: "Crystal White", price: "8.990,00 €", image: "trident660WhiteImage" },
        { name: "Silver Ice", price: "8.990,00 €", image: "trident660SilverImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["660cc triple engine", "81 PS Max Power", "64 NM Max Torque"]
        : ["660κ.εκ. τρικύλινδρος κινητήρας", "81 PS Μέγιστη Ιπποδύναμη", "64 NM Μέγιστη Ροπή"]
    },
    {
      id: "street-triple-765-r",
      name: "Street Triple 765 R",
      price: "12.990,00 €",
      baseImage: "streetTriple765RImage",
      colors: [
        { name: "Jet Black", price: "12.990,00 €", image: "streetTriple765RBlackImage" },
        { name: "Racing Yellow", price: "12.990,00 €", image: "streetTriple765RYellowImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["765cc triple engine", "118 PS Max Power", "77 NM Max Torque"]
        : ["765κ.εκ. τρικύλινδρος κινητήρας", "118 PS Μέγιστη Ιπποδύναμη", "77 NM Μέγιστη Ροπή"]
    },
    {
      id: "street-triple-765-rs",
      name: "Street Triple 765 RS",
      price: "14.990,00 €",
      baseImage: "streetTriple765RsImage",
      colors: [
        { name: "Jet Black", price: "14.990,00 €", image: "streetTriple765RsBlackImage" },
        { name: "Racing Yellow", price: "14.990,00 €", image: "streetTriple765RsYellowImage" },
        { name: "Crystal White", price: "14.990,00 €", image: "streetTriple765RsWhiteImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["765cc triple engine", "121 PS Max Power", "79 NM Max Torque", "Öhlins suspension"]
        : ["765κ.εκ. τρικύλινδρος κινητήρας", "121 PS Μέγιστη Ιπποδύναμη", "79 NM Μέγιστη Ροπή", "Ανάρτηση Öhlins"]
    },
    {
      id: "speed-triple-1200-rs",
      name: "Speed Triple 1200 RS",
      price: "18.990,00 €",
      baseImage: "speedTriple1200RsImage",
      colors: [
        { name: "Jet Black", price: "18.990,00 €", image: "speedTriple1200RsBlackImage" },
        { name: "Racing Yellow", price: "18.990,00 €", image: "speedTriple1200RsYellowImage" },
        { name: "Crystal White", price: "18.990,00 €", image: "speedTriple1200RsWhiteImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["1160cc triple engine", "180 PS Max Power", "125 NM Max Torque", "Carbon bodywork"]
        : ["1160κ.εκ. τρικύλινδρος κινητήρας", "180 PS Μέγιστη Ιπποδύναμη", "125 NM Μέγιστη Ροπή", "Αμάξωμα από carbon"]
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
    return model.baseImage || sportImage;
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <Badge variant="destructive">{content[currentLanguage].newBadge}</Badge>
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
      </div>
    </div>
  );
};

export default SportPage;