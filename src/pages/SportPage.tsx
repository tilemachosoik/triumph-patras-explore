import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface SportPageProps {
  language?: 'en' | 'gr';
}

const SportPage = ({ language = 'en' }: SportPageProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'gr'>(language);
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
      id: "daytona-660",
      name: currentLanguage === 'en' ? "NEW Daytona 660" : "NEA Daytona 660",
      price: "9.990,00 €",
      image: "https://media.triumphmotorcycles.co.uk/image/upload/q_auto:eco/SitecoreMediaLibrary/media-library/images/motorcycles/roadsters-supersports/my24/lk2_lj2_daytona_660/daytona_660_fixed/web/1080/daytona%20660_my24_satin%20granite_rhs_1080px.png",
      isNew: true,
      specs: currentLanguage === 'en' 
        ? ["Triple engine", "95 PS Max Power", "12,650 RPM", "69 NM Max Torque"]
        : ["Τριπλά", "95 PS Μεγιστη Ιπποδυναμη", "12,650 ΣΑΛ", "69 NM Μεγ. Ροπη"]
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
                <div className="absolute top-2 right-2">
                  {model.isNew && (
                    <Badge variant="destructive">{content[currentLanguage].newBadge}</Badge>
                  )}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{model.name}</CardTitle>
                <div className="text-2xl font-bold text-primary">
                  {content[currentLanguage].priceFrom} {model.price}
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

export default SportPage;