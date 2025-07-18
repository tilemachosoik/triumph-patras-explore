import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Wrench, MapPin, Phone, Clock } from "lucide-react";

interface AboutSectionProps {
  language: 'en' | 'gr';
}

const AboutSection = ({ language }: AboutSectionProps) => {
  const content = {
    en: {
      title: "Triumph Patras Andriopoulos",
      subtitle: "Your Trusted Triumph Partner in Western Greece",
      description: "For over 40 years, we have been proudly serving the motorcycling community in Western Greece as the official Triumph dealer. Our family-owned dealership combines decades of experience with genuine passion for British motorcycles.",
      contact: "Get in Touch",
      stats: [
        { icon: Award, number: "40+", label: "Years of Excellence" },
        { icon: Users, number: "5000+", label: "Happy Customers" },
        { icon: Wrench, number: "100%", label: "Certified Service" }
      ],
      services: [
        {
          icon: MapPin,
          title: "Prime Location",
          description: "Conveniently located in Patras, serving all of Western Greece with easy access and ample parking."
        },
        {
          icon: Wrench,
          title: "Expert Service",
          description: "Our certified technicians provide comprehensive maintenance and repair services for all Triumph models."
        },
        {
          icon: Phone,
          title: "Customer Support",
          description: "Dedicated customer service team ready to assist with sales, parts, and service inquiries."
        }
      ],
      hours: {
        title: "Opening Hours",
        schedule: [
          { day: "Monday - Friday", time: "9:00 - 18:00" },
          { day: "Saturday", time: "9:00 - 15:00" },
          { day: "Sunday", time: "Closed" }
        ]
      }
    },
    gr: {
      title: "Triumph Πάτρα Ανδριόπουλος",
      subtitle: "Ο Έμπιστος Συνεργάτης σας για Triumph στη Δυτική Ελλάδα",
      description: "Για περισσότερα από 40 χρόνια, υπηρετούμε με περηφάνια την μοτοσικλετιστική κοινότητα της Δυτικής Ελλάδας ως επίσημος αντιπρόσωπος Triumph. Το οικογενειακό μας κατάστημα συνδυάζει δεκαετίες εμπειρίας με γνήσιο πάθος για τις βρετανικές μοτοσικλέτες.",
      contact: "Επικοινωνήστε",
      stats: [
        { icon: Award, number: "40+", label: "Χρόνια Αριστείας" },
        { icon: Users, number: "5000+", label: "Ικανοποιημένοι Πελάτες" },
        { icon: Wrench, number: "100%", label: "Πιστοποιημένο Σέρβις" }
      ],
      services: [
        {
          icon: MapPin,
          title: "Προνομιακή Τοποθεσία",
          description: "Βολικά τοποθετημένοι στην Πάτρα, εξυπηρετούμε όλη τη Δυτική Ελλάδα με εύκολη πρόσβαση και άφθονο χώρο στάθμευσης."
        },
        {
          icon: Wrench,
          title: "Εξειδικευμένο Σέρβις",
          description: "Οι πιστοποιημένοι τεχνικοί μας παρέχουν ολοκληρωμένες υπηρεσίες συντήρησης και επισκευής για όλα τα μοντέλα Triumph."
        },
        {
          icon: Phone,
          title: "Υποστήριξη Πελατών",
          description: "Αφοσιωμένη ομάδα εξυπηρέτησης πελατών έτοιμη να βοηθήσει με πωλήσεις, ανταλλακτικά και ερωτήματα σέρβις."
        }
      ],
      hours: {
        title: "Ωράριο Λειτουργίας",
        schedule: [
          { day: "Δευτέρα - Παρασκευή", time: "9:00 - 18:00" },
          { day: "Σάββατο", time: "9:00 - 15:00" },
          { day: "Κυριακή", time: "Κλειστά" }
        ]
      }
    }
  };

  const t = content[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-primary mb-6">
            {t.subtitle}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {t.stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center bg-gradient-card border-border hover:shadow-card-premium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Services and Hours */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Services */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-3 gap-6">
              {t.services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="bg-gradient-card border-border hover:shadow-card-premium transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mb-4">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card border-border h-fit">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">
                    {t.hours.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {t.hours.schedule.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.day}</span>
                      <span className="text-foreground font-medium">{item.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="premium" 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4"
          >
            {t.contact}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;