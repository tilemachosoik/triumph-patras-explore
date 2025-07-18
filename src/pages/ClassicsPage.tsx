import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface ClassicsPageProps {
  language?: 'en' | 'gr';
}

const ClassicsPage = ({ language = 'en' }: ClassicsPageProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'gr'>(language);
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

  const models = [
    {
      id: "scrambler-400-xc",
      name: "Scrambler 400 XC",
      price: "7.150,00 €",
      image: "https://media.triumphmotorcycles.co.uk/image/upload/q_auto:eco/SitecoreMediaLibrary/media-library/images/motorcycles/scrambler%20400%20xc%202025/scrambler-400-xc_my25_racing-yellow_rhs_1080.jpg",
      isNew: true,
      specs: currentLanguage === 'en' 
        ? ["398cc TR Engine", "16,000 km service interval"]
        : ["398 κ.εκ. TR Κινητήρας", "16.000 χλμ διάστημα σέρβις"]
    },
    {
      id: "speed-400",
      name: "Speed 400",
      price: "5.690,00 €",
      image: "https://media.triumphmotorcycles.co.uk/image/upload/q_auto:eco/SitecoreMediaLibrary/media-library/images/motorcycles/modern-classics/t%20series/speed%20400/speed%20400%20cgi/472/speed%20400_my24_carnival%20red_rhs.png",
      specs: currentLanguage === 'en' 
        ? ["398cc TR Engine", "16,000 km service interval"]
        : ["398 κ.εκ. TR Κινητήρας", "16.000 χλμ διάστημα σέρβις"]
    },
    {
      id: "scrambler-400-x",
      name: "Scrambler 400 X",
      price: "6.390,00 €",
      image: "https://media.triumphmotorcycles.co.uk/image/upload/q_auto:eco/SitecoreMediaLibrary/media-library/images/motorcycles/modern-classics/t%20series/scrambler%20400%20x/scrambler%20400%20x%20cgi/472/scrambler%20400%20x_my24_matt%20khaki%20green_rhs.png",
      specs: currentLanguage === 'en' 
        ? ["398cc TR Engine", "16,000 km service interval"]
        : ["398 κ.εκ. TR Κινητήρας", "16.000 χλμ διάστημα σέρβις"]
    },
    {
      id: "speed-twin-900",
      name: currentLanguage === 'en' ? "NEW Speed Twin 900" : "ΟΛΟΚΑΙΝΟΥΡΓΙΑ Speed Twin 900",
      price: "9.390,00 €",
      image: "https://media.triumphmotorcycles.co.uk/image/upload/q_auto:eco/SitecoreMediaLibrary/media-library/images/motorcycles/speed%20twin%20900%202025/speed%20twin%20900%20my25/speed-twin-900-my25-purewhite-rhs-1080.png",
      isNew: true,
      specs: currentLanguage === 'en' 
        ? ["900cc Engine", "80 NM Max Torque", "65 PS Max Power", "16,000 km Service Interval"]
        : ["900 Κ.ΕΚ. Κινητήρας", "80 NM Μέγιστη Ροπή", "65 PS Μέγιστη Ιπποδύναμη", "16.000 Διάστημα Σέρβις"]
    },
    {
      id: "bonneville-bobber",
      name: "Bonneville Bobber",
      price: "16.990,00 €",
      image: "https://media.triumphmotorcycles.co.uk/image/upload/q_auto:eco/SitecoreMediaLibrary/media-library/images/motorcycles/modern-classics/my25/my25%20colours/dx4%20bobber/web/472/bonneville_bobber_my25_matt_graphite-matt_baja_orange_rhs_472px.png",
      hasIconEdition: true
    },
    {
      id: "scrambler-1200",
      name: "Scrambler 1200",
      price: "14.990,00 €",
      image: "https://media.triumphmotorcycles.co.uk/image/upload/q_auto:eco/SitecoreMediaLibrary/media-library/images/motorcycles/modern-classics/my24%20scrambler%201200/cgi/web/472/scrambler%201200%20x_my24_ash%20grey_rhs.png",
      hasIconEdition: true
    },
    {
      id: "bonneville-speedmaster",
      name: "Bonneville Speedmaster",
      price: "16.990,00 €",
      image: "https://media.triumphmotorcycles.co.uk/image/upload/q_auto:eco/SitecoreMediaLibrary/media-library/images/motorcycles/modern-classics/my25/my25%20colours/dw4%20speedmaster/web/472/bonneville_speedmaster_my25_snowdonia_white_rhs_472px.png",
      hasIconEdition: true
    },
    {
      id: "speed-twin-1200",
      name: currentLanguage === 'en' ? "NEW Speed Twin 1200" : "ΝΕΑ ΣΕΙΡΑ Speed Twin 1200",
      price: "13.990,00 €",
      image: "https://media.triumphmotorcycles.co.uk/image/upload/q_auto:eco/SitecoreMediaLibrary/media-library/images/motorcycles/speed%20twin%201200_rs%202025/speed-twin-1200-rs-my25-baja-orange-rhs-472.png",
      isNew: true,
      specs: currentLanguage === 'en' 
        ? ["1200cc Bonneville 'High Power' twin engine", "Accessible custom roadster setup", "A performance-focused modern classic"]
        : ["Δικύλινδρος κινητήρας Bonneville 'High Power' 1200κ.εκ.", "Προσβάσιμη διάταξη custom roadster", "Ένα modern classic μοντέλο με έμφαση στις επιδόσεις"]
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

export default ClassicsPage;