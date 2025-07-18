import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface RoadstersPageProps {
  language?: 'en' | 'gr';
}

const RoadstersPage = ({ language = 'en' }: RoadstersPageProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'gr'>(language);
  const navigate = useNavigate();

  const content = {
    en: {
      title: "Roadsters",
      subtitle: "Triumph builds pioneering motorcycles and incredible triple engines with emphasis on power, torque and instant response.",
      backButton: "Back to Models",
      configureButton: "Configure",
      detailsButton: "View Details",
      priceFrom: "From",
      newBadge: "NEW"
    },
    gr: {
      title: "Roadsters",
      subtitle: "Η Triumph κατασκευάζει πρωτοποριακές μοτοσικλέτες και απίστευτους τρικύλινδρους κινητήρες με έμφαση στην ισχύ, τη ροπή και την άμεση απόκριση.",
      backButton: "Επιστροφή στα Μοντέλα",
      configureButton: "Διαμόρφωση",
      detailsButton: "Προβολή Λεπτομερειών",
      priceFrom: "Από",
      newBadge: "ΝΕΟ"
    }
  };

  const models = [
    {
      id: "speed-triple-1200",
      name: currentLanguage === 'en' ? "THE NEW Speed Triple 1200" : "Η ΝΕΑ Speed Triple 1200",
      price: "21.990,00 €",
      image: "https://media.triumphmotorcycles.co.uk/image/upload/q_auto:eco/SitecoreMediaLibrary/media-library/images/motorcycles/speed%20triple%201200%20rx%202025/speed-triple-1200-rx-my25-triumph-performance-yellow-rhs-1080.png",
      isNew: true,
      specs: currentLanguage === 'en' 
        ? ["High precision handling", "Advanced rider assistance technology", "Iconic design"]
        : ["Χειρισμός υψηλής ακρίβειας", "Προηγμένη τεχνολογία υποστήριξης αναβάτη", "Εμβληματική σχεδίαση"]
    },
    {
      id: "street-triple-765",
      name: "Street Triple 765",
      price: "11.990,00 €",
      image: "https://media.triumphmotorcycles.co.uk/image/upload/q_auto:eco/SitecoreMediaLibrary/media-library/images/motorcycles/roadsters-supersports/my25/my25%20colours/street%20triple%20765%20r/web/1080/street%20triple%20r_my25_matt%20baja%20orange_rhs_1080px.png",
      specs: currentLanguage === 'en' 
        ? ["765cc Engine", "120-130 PS max power", "10,000 km service interval"]
        : ["765 κ.εκ. Κινητηρα", "120-130 ps μεγιστησ ιπποδυναμησ", "10000 χλμ διαστημα σερβισ"]
    },
    {
      id: "trident-660",
      name: "NEW Trident 660",
      price: "9.290,00 €",
      image: "https://media.triumphmotorcycles.co.uk/image/upload/q_auto:eco/SitecoreMediaLibrary/media-library/images/motorcycles/roadsters-supersports/my23%20colours/trident/trident_my23_matt-baja-orange_rhs_1080px.png",
      isNew: true,
      specs: currentLanguage === 'en' 
        ? ["660cc triple engine (Euro 5 compliant)", "2 riding modes (Road and Rain)", "10,000 miles/12 months service interval"]
        : ["660cc triple engine (Euro 5 compliant)", "2 riding modes (Road and Rain)", "10,000 miles/12 months service interval"]
    },
    {
      id: "speed-triple-1200-rs",
      name: "Speed Triple 1200 RS",
      price: "18.990,00 €",
      image: "https://media.triumphmotorcycles.co.uk/image/upload/q_auto:eco/SitecoreMediaLibrary/media-library/images/motorcycles/roadsters-supersports/my25/my25%20colours/speed%20triple%20rs%20pb1/web/1080/speed%20triple%20rs_my25_cosmic%20yellow_rhs_1080px.png",
      specs: currentLanguage === 'en' 
        ? ["All-new 1160cc triple engine with 180PS", "198kg wet weight and track spec. equipment", "State-of-the-art rider focussed technology"]
        : ["All-new 1160cc triple engine with 180PS", "198kg wet weight and track spec. equipment", "State-of-the-art rider focussed technology"]
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

export default RoadstersPage;