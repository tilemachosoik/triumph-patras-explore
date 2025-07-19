import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar, Bike } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

interface ContactSectionProps {
  language: 'en' | 'gr';
}

const ContactSection = ({ language }: ContactSectionProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const content = {
    en: {
      title: "Get in Touch",
      subtitle: "Visit Our Showroom or Book a Test Ride",
      location: {
        title: "Visit Our Showroom",
        address: "Notara 10",
        city: "Patra 264 41, Greece",
        phone: "+30 261 600 8888",
        whatsapp: "+30 694 382 0418",
        email: "triumphandriopoulos@gmail.com"
      },
      contact: {
        title: "Contact Information",
        hours: "Monday: 9:00 - 15:00\nTuesday: 9:00 - 14:00, 17:30 - 21:00\nWednesday: 9:00 - 15:00\nThursday: 9:00 - 14:00, 17:30 - 21:00\nFriday: 9:00 - 14:00, 17:30 - 21:00\nSaturday: 9:00 - 15:00\nSunday: Closed"
      },
      form: {
        title: "Send us a Message",
        name: "Full Name",
        email: "Email Address", 
        phone: "Phone Number",
        subject: "Subject",
        message: "Message",
        send: "Send Message",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again."
      },
      testRide: {
        title: "Book a Test Ride",
        model: "Select Model",
        date: "Preferred Date",
        time: "Preferred Time",
        experience: "Riding Experience",
        book: "Book Test Ride",
        success: "Test ride booked successfully!",
        modelOptions: [
          "Bonneville T100",
          "Bonneville T120", 
          "Tiger 900",
          "Tiger 1200",
          "Speed Triple",
          "Speed Twin",
          "Other Model"
        ],
        experienceOptions: [
          "Beginner (0-2 years)",
          "Intermediate (2-5 years)",
          "Advanced (5+ years)",
          "Professional"
        ]
      }
    },
    gr: {
      title: "Επικοινωνήστε μαζί μας",
      subtitle: "Επισκεφθείτε την Έκθεση μας ή Κλείστε Test Ride",
      location: {
        title: "Επισκεφθείτε το Showroom μας",
        address: "Νοταρά 10",
        city: "Πάτρα 264 41, Ελλάδα",
        phone: "+30 261 600 8888",
        whatsapp: "+30 694 382 0418",
        email: "triumphandriopoulos@gmail.com"
      },
      contact: {
        title: "Στοιχεία Επικοινωνίας",
        hours: "Δευτέρα: 9:00 - 15:00\nΤρίτη: 9:00 - 14:00, 17:30 - 21:00\nΤετάρτη: 9:00 - 15:00\nΠέμπτη: 9:00 - 14:00, 17:30 - 21:00\nΠαρασκευή: 9:00 - 14:00, 17:30 - 21:00\nΣάββατο: 9:00 - 15:00\nΚυριακή: Κλειστά"
      },
      form: {
        title: "Στείλτε μας Μήνυμα",
        name: "Ονοματεπώνυμο",
        email: "Email",
        phone: "Τηλέφωνο", 
        subject: "Θέμα",
        message: "Μήνυμα",
        send: "Αποστολή Μηνύματος",
        success: "Το μήνυμα στάλθηκε επιτυχώς!",
        error: "Αποτυχία αποστολής. Παρακαλώ προσπαθήστε ξανά."
      },
      testRide: {
        title: "Κλείστε Test Ride",
        model: "Επιλέξτε Μοντέλο",
        date: "Προτιμώμενη Ημερομηνία",
        time: "Προτιμώμενη Ώρα",
        experience: "Εμπειρία Οδήγησης",
        book: "Κλείστε Δοκιμή",
        success: "Το αίτημά σας έχει σταλεί επιτυχώς!",
        modelOptions: [
          "Bonneville T100",
          "Bonneville T120",
          "Tiger 900", 
          "Tiger 1200",
          "Speed Triple",
          "Speed Twin",
          "Άλλο Μοντέλο"
        ],
        experienceOptions: [
          "Αρχάριος (0-2 χρόνια)",
          "Μεσαίος (2-5 χρόνια)",
          "Προχωρημένος (5+ χρόνια)",
          "Επαγγελματίας"
        ]
      }
    }
  };

  const t = content[language];

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const templateParams = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      to_email: 'triumphandriopoulos@gmail.com'
    };

    try {
      // Initialize EmailJS with your public key
      emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key
      
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams
      );
      
      toast({
        title: t.form.success,
        description: "We'll get back to you as soon as possible."
      });
      
      form.reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: t.form.error,
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    }
    
    setIsSubmitting(false);
  };

  const handleTestRideSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const templateParams = {
      from_name: formData.get('test-name'),
      from_email: formData.get('test-email'),
      phone: formData.get('test-phone'),
      model: formData.get('model'),
      date: formData.get('test-date'),
      experience: formData.get('experience'),
      message: `Test ride request for ${formData.get('model')} on ${formData.get('test-date')}. Riding experience: ${formData.get('experience')}`,
      to_email: 'triumphandriopoulos@gmail.com'
    };

    try {
      // Initialize EmailJS with your public key
      emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key
      
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEST_RIDE_TEMPLATE_ID', // Replace with your EmailJS test ride template ID
        templateParams
      );
      
      toast({
        title: t.testRide.success,
        description: "We'll contact you to confirm the details."
      });
      
      form.reset();
    } catch (error) {
      console.error('Test ride booking failed:', error);
      toast({
        title: t.form.error,
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t.subtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Location Card */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{t.location.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-foreground font-medium">{t.location.address}</p>
                  <p className="text-muted-foreground">{t.location.city}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <a href={`tel:${t.location.phone}`} className="text-foreground hover:text-primary transition-colors">
                      {t.location.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4 text-green-500" />
                    <a 
                      href={`https://wa.me/${t.location.whatsapp.replace(/\s+/g, '')}`}
                      className="text-foreground hover:text-green-500 transition-colors"
                    >
                      WhatsApp: {t.location.whatsapp}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href={`mailto:${t.location.email}`} className="text-foreground hover:text-primary transition-colors">
                      {t.location.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>{t.contact.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm text-muted-foreground whitespace-pre-line">
                  {t.contact.hours}
                </pre>
              </CardContent>
            </Card>
          </div>

          {/* Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>{t.form.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">{t.form.name}</Label>
                      <Input id="name" name="name" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">{t.form.email}</Label>
                      <Input id="email" name="email" type="email" required className="mt-1" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">{t.form.phone}</Label>
                      <Input id="phone" name="phone" type="tel" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="subject">{t.form.subject}</Label>
                      <Input id="subject" name="subject" required className="mt-1" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">{t.form.message}</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      required 
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="premium" 
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? "Sending..." : t.form.send}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Test Ride Form */}
            <Card id="test-ride" className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bike className="w-5 h-5 text-primary" />
                  <span>{t.testRide.title}</span>
                  <Badge variant="secondary" className="ml-2">Popular</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTestRideSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="test-name">{t.form.name}</Label>
                      <Input id="test-name" name="test-name" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="test-email">{t.form.email}</Label>
                      <Input id="test-email" name="test-email" type="email" required className="mt-1" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="test-phone">{t.form.phone}</Label>
                      <Input id="test-phone" name="test-phone" type="tel" required className="mt-1" />
                    </div>
                    <div>
                      <Label>{t.testRide.model}</Label>
                      <Select name="model" required>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder={t.testRide.model} />
                        </SelectTrigger>
                        <SelectContent>
                          {t.testRide.modelOptions.map((model) => (
                            <SelectItem key={model} value={model}>{model}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="test-date">{t.testRide.date}</Label>
                      <Input id="test-date" name="test-date" type="date" required className="mt-1" />
                    </div>
                    <div>
                      <Label>{t.testRide.experience}</Label>
                      <Select name="experience" required>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder={t.testRide.experience} />
                        </SelectTrigger>
                        <SelectContent>
                          {t.testRide.experienceOptions.map((exp) => (
                            <SelectItem key={exp} value={exp}>{exp}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="premium" 
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Booking..." : t.testRide.book}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
