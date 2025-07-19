import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";

// Placeholder images - to be replaced with actual images
import adventureImage from "@/assets/tiger.jpg";

interface AdventurePageProps {
  language?: 'en' | 'gr';
}

const AdventurePage = ({ language = 'en' }: AdventurePageProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'gr'>(language);
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const content = {
    en: {
      title: "Adventure",
      subtitle: "Explore a world of adventure, with motorcycles built to always reach the end of the road, ready to go anywhere and achieve anything.",
      backButton: "Back to Models",
      configureButton: "Configure",
      detailsButton: "View Details",
      priceFrom: "From",
      newBadge: "NEW"
    },
    gr: {
      title: "Adventure",
      subtitle: "Εξερευνήστε έναν κόσμο περιπέτειας, με μοτοσικλέτες κατασκευασμένες ώστε να φτάνουν πάντα στο τέλος της διαδρομής, έτοιμες να φτάσουν παντού και να καταφέρουν τα πάντα.",
      backButton: "Επιστροφή στα Μοντέλα",
      configureButton: "Διαμόρφωση",
      detailsButton: "Προβολή Λεπτομερειών",
      priceFrom: "Από",
      newBadge: "ΝΕΟ"
    }
  };

  const models = [
    {
      id: "tiger-sport-660",
      name: "Tiger Sport 660",
      price: "9.790,00 €",
      baseImage: "tigerSport660Image",
      isNew: true,
      colors: [
        { name: "Roulette Green", price: "9.790,00 €", image: "tigerSport660GreenImage" },
        { name: "Jet Black", price: "9.790,00 €", image: "tigerSport660BlackImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["660cc triple engine", "Class-leading capabilities and road behavior", "Showa remote-adjustment suspension"]
        : ["660cc triple engine", "Κορυφαίες για την κατηγορία δυνατότητες και οδική συμπεριφορά", "ανάρτησης Showa απομακρυσμένης ρύθμισης"]
    },
    {
      id: "tiger-sport-800",
      name: "Tiger Sport 800",
      price: "11.990,00 €",
      baseImage: "tigerSport800Image",
      isNew: true,
      colors: [
        { name: "Cosmic Yellow", price: "11.990,00 €", image: "tigerSport800YellowImage" },
        { name: "Jet Black", price: "11.990,00 €", image: "tigerSport800BlackImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["800cc Engine", "Road, Rain and Sport riding modes", "Over 40 Genuine Triumph Accessories"]
        : ["800κ.εκ. Κυβισμοσ κινητηρα", "Προγράμματα οδήγησης Δρόμου, Βροχής και Σπορ", "Περισσότερα από 40 Γνήσια Αξεσουάρ Triumph"]
    },
    {
      id: "tiger-900-gt",
      name: "Tiger 900 GT",
      price: "14.490,00 €",
      baseImage: "tiger900GtImage",
      colors: [
        { name: "Graphite", price: "14.490,00 €", image: "tiger900GtGraphiteImage" },
        { name: "Sandstorm", price: "14.490,00 €", image: "tiger900GtSandstormImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["900cc triple engine", "Road setup for urban adventures", "Comfortable and agile riding"]
        : ["900κ.εκ. τρικύλινδρος κινητήρας", "Στήσιμο για άσφαλτο, για αστικές περιπέτειες", "Άνετη και ευέλικτη οδήγηση"]
    },
    {
      id: "tiger-900-gt-pro",
      name: "Tiger 900 GT Pro",
      price: "16.490,00 €",
      baseImage: "tiger900GtProImage",
      colors: [
        { name: "Graphite", price: "16.490,00 €", image: "tiger900GtProGraphiteImage" },
        { name: "Sandstorm", price: "16.490,00 €", image: "tiger900GtProSandstormImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["900cc triple engine", "Advanced electronics", "Premium touring setup"]
        : ["900κ.εκ. τρικύλινδρος κινητήρας", "Προηγμένα ηλεκτρονικά", "Premium touring εξοπλισμός"]
    },
    {
      id: "tiger-900-rally-pro",
      name: "Tiger 900 Rally Pro",
      price: "18.490,00 €",
      baseImage: "tiger900RallyProImage",
      colors: [
        { name: "Sandstorm", price: "18.490,00 €", image: "tiger900RallyProSandstormImage" },
        { name: "Graphite", price: "18.490,00 €", image: "tiger900RallyProGraphiteImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["900cc triple engine", "21\" front wheel", "Off-road suspension setup"]
        : ["900κ.εκ. τρικύλινδρος κινητήρας", "21\" μπροστινός τροχός", "Off-road εξοπλισμός ανάρτησης"]
    },
    {
      id: "tiger-1200-gt-pro",
      name: "Tiger 1200 GT Pro",
      price: "20.990,00 €",
      baseImage: "tiger1200GtProImage",
      colors: [
        { name: "Carnival Red", price: "20.990,00 €", image: "tiger1200GtProRedImage" },
        { name: "Graphite", price: "20.990,00 €", image: "tiger1200GtProGraphiteImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["1,160cc T-plane triple engine", "Premium road touring", "3 Year Warranty"]
        : ["1.160 κ.εκ T-plane triple κινητηρασ", "Premium road touring", "3 Χρονια Εγγυηση"]
    },
    {
      id: "tiger-1200-rally-pro",
      name: "Tiger 1200 Rally Pro",
      price: "22.990,00 €",
      baseImage: "tiger1200RallyProImage",
      colors: [
        { name: "Sandstorm", price: "22.990,00 €", image: "tiger1200RallyProSandstormImage" },
        { name: "Graphite", price: "22.990,00 €", image: "tiger1200RallyProGraphiteImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["1,160cc T-plane triple engine", "21\" front wheel", "Rally suspension"]
        : ["1.160 κ.εκ T-plane triple κινητηρασ", "21\" μπροστινός τροχός", "Rally ανάρτηση"]
    },
    {
      id: "tiger-1200-gt-explorer",
      name: "Tiger 1200 GT Explorer",
      price: "24.990,00 €",
      baseImage: "tiger1200GtExplorerImage",
      colors: [
        { name: "Sandstorm", price: "24.990,00 €", image: "tiger1200GtExplorerSandstormImage" },
        { name: "Graphite", price: "24.990,00 €", image: "tiger1200GtExplorerGraphiteImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["1,160cc T-plane triple engine", "Full adventure touring setup", "Premium accessories included"]
        : ["1.160 κ.εκ T-plane triple κινητηρασ", "Πλήρης adventure touring εξοπλισμός", "Premium αξεσουάρ περιλαμβάνονται"]
    },
    {
      id: "tiger-1200-rally-explorer",
      name: "Tiger 1200 Rally Explorer",
      price: "26.990,00 €",
      baseImage: "tiger1200RallyExplorerImage",
      colors: [
        { name: "Sandstorm", price: "26.990,00 €", image: "tiger1200RallyExplorerSandstormImage" },
        { name: "Graphite", price: "26.990,00 €", image: "tiger1200RallyExplorerGraphiteImage" }
      ],
      specs: currentLanguage === 'en' 
        ? ["1,160cc T-plane triple engine", "21\" front wheel", "Full rally setup with accessories"]
        : ["1.160 κ.εκ T-plane triple κινητηρασ", "21\" μπροστινός τροχός", "Πλήρης rally εξοπλισμός με αξεσουάρ"]
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
    return model.baseImage || adventureImage;
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

export default AdventurePage;