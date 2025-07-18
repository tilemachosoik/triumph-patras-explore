import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface OffRoadPageProps {
  language?: 'en' | 'gr';
}

const OffRoadPage = ({ language = 'en' }: OffRoadPageProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'gr'>(language);
  const navigate = useNavigate();

  const content = {
    en: {
      title: "Off Road",
      subtitle: "Built with world-class innovation and top-specification equipment, our off road motorcycles are designed to win at every level.",
      backButton: "Back to Models",
      configureButton: "Configure",
      detailsButton: "View Details",
      priceFrom: "From",
      newBadge: "NEW",
      priceTba: "PRICE TO BE ANNOUNCED"
    },
    gr: {
      title: "Off Road",
      subtitle: "Κατασκευασμένες με παγκόσμιας κλάσης καινοτομία και κορυφαίων προδιαγραφών εξοπλισμό, οι off road μοτοσυκλέτες μας έχουν σχεδιαστεί για να κερδίζουν σε κάθε επίπεδο.",
      backButton: "Επιστροφή στα Μοντέλα",
      configureButton: "Διαμόρφωση",
      detailsButton: "Προβολή Λεπτομερειών",
      priceFrom: "Από",
      newBadge: "ΝΕΟ",
      priceTba: "ΤΙΜΗ ΑΝΑΜΕΝΕΤΑΙ"
    }
  };

  const models = [
    {
      id: "enduro",
      name: "Enduro",
      price: "11.490,00 €",
      image: "https://media.triumphmotorcycles.co.uk/image/upload/q_auto:eco/SitecoreMediaLibrary/media-library/images/motorcycles/enduro%20tf%20250%20e%20-%20450%20e%20-%202025/cgi/tf-250-e-my25-jet-black-rhs-1080.png",
      specs: currentLanguage === 'en' 
        ? ["Lightweight Aluminium Spine Frame", "Brembo Brakes", "DID and Michelin Tyres", "Dual Engine Maps (Athena)"]
        : ["Lightweight Aluminium Spine Frame", "Brembo Brakes", "DID and Michelin Tyres", "Dual Engine Maps (Athena)"]
    },
    {
      id: "motocross",
      name: "Motocross",
      price: null,
      image: "https://media.triumphmotorcycles.co.uk/image/upload/q_auto:eco/SitecoreMediaLibrary/media-library/images/motorcycles/off-road/tf250/zb1/1080/tf250x_my24_jetblack_rhs_1080px.png",
      specs: currentLanguage === 'en' 
        ? ["Race focused", "Aluminium frame", "Top components"]
        : ["Εστιασμένη στους αγώνες", "Πλαίσιο αλουμινίου", "Κορυφαία εξαρτήματα"]
    }
  ];

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
          {models.map((model) => (
            <Card key={model.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={model.image} 
                  alt={model.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{model.name}</CardTitle>
                <div className="text-2xl font-bold text-primary">
                  {model.price ? `${content[currentLanguage].priceFrom} ${model.price}` : content[currentLanguage].priceTba}
                </div>
              </CardHeader>
              
              <CardContent>
                {model.specs && (
                  <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                    {model.specs.map((spec, index) => (
                      <li key={index}>• {spec}</li>
                    ))}
                  </ul>
                )}
                
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