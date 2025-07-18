import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface AdventurePageProps {
  language?: 'en' | 'gr';
}

const AdventurePage = ({ language = 'en' }: AdventurePageProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'gr'>(language);
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
      name: currentLanguage === 'en' ? "NEW Tiger Sport 660" : "ΝΕΑ Tiger Sport 660",
      price: "9.790,00 €",
      image: "https://media.triumphmotorcycles.co.uk/image/upload/q_auto:eco/SitecoreMediaLibrary/media-library/images/motorcycles/tiger%20sport%20660%202025/cgis/tiger-sport-660-my25-roulette-green-rhs-1080.png",
      isNew: true,
      specs: currentLanguage === 'en' 
        ? ["660cc triple engine", "Class-leading capabilities and road behavior", "Showa remote-adjustment suspension"]
        : ["660cc triple engine", "Κορυφαίες για την κατηγορία δυνατότητες και οδική συμπεριφορά", "ανάρτησης Showa απομακρυσμένης ρύθμισης"]
    },
    {
      id: "tiger-sport-800",
      name: currentLanguage === 'en' ? "BRAND NEW Tiger Sport 800" : "ΟΛΟΚΑΙΝΟΥΡΓΙΑ Tiger Sport 800",
      price: "11.990,00 €",
      image: "https://media.triumphmotorcycles.co.uk/image/upload/q_auto:eco/SitecoreMediaLibrary/media-library/images/motorcycles/tiger%20sport%20800%20-%202025/tiger%20sport%20800%20my25/tiger-sport-800-my25-cosmic-yellow-rhs-1080.png",
      isNew: true,
      specs: currentLanguage === 'en' 
        ? ["800cc Engine", "Road, Rain and Sport riding modes", "Over 40 Genuine Triumph Accessories"]
        : ["800κ.εκ. Κυβισμοσ κινητηρα", "Προγράμματα οδήγησης Δρόμου, Βροχής και Σπορ", "Περισσότερα από 40 Γνήσια Αξεσουάρ Triumph"]
    },
    {
      id: "tiger-900",
      name: currentLanguage === 'en' ? "NEW Tiger 900 Series" : "ΝΈΑ ΣΕΙΡΆ Tiger 900",
      price: "14.490,00 €",
      image: "https://media.triumphmotorcycles.co.uk/image/upload/q_auto:eco/SitecoreMediaLibrary/media-library/images/motorcycles/adventure-touring/my24/tiger%20900%202024/tigrer%20900%20cgi%20web/1080/tiger%20900%20gt_my24_graphite_rhs_1080px.png",
      isNew: true,
      specs: currentLanguage === 'en' 
        ? ["Brand new, exciting 900cc triple engine", "Road setup for urban adventures", "Comfortable and agile riding", "High-level rider-focused technology"]
        : ["Ολοκαίνουριος, συναρπαστικός τρικύλινδρος κινητήρας 900 κ.εκ.", "Στήσιμο για άσφαλτο, για αστικές περιπέτειες", "Άνετη και ευέλικτη οδήγηση", "Υψηλού επιπέδου τεχνολογία εστιασμένη στον αναβάτη"]
    },
    {
      id: "tiger-1200",
      name: currentLanguage === 'en' ? "NEW Tiger 1200" : "NEA Tiger 1200",
      price: "20.990,00 €",
      image: "https://media.triumphmotorcycles.co.uk/image/upload/q_auto:eco/SitecoreMediaLibrary/media-library/images/motorcycles/adventure-touring/my24/tiger%201200%20update/tiger_1200%20_my24_web/1080/tiger%201200%20gt%20pro_my24_carnival%20red_rhs.png",
      isNew: true,
      specs: currentLanguage === 'en' 
        ? ["1,160cc T-plane triple engine", "High-performance dual-purpose motorcycles", "3 Year Warranty"]
        : ["1.160 κ.εκ T-plane triple κινητηρασ", "Μοτοσικλέτες υψηλών επιδόσεων για διπλή χρήση", "3 Χρονια Εγγυηση"]
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

export default AdventurePage;