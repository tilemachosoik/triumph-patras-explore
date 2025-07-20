import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ModelsSection from "@/components/ModelsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection language={language} />
      <ModelsSection language={language} />
      <AboutSection language={language} />
      <ContactSection language={language} />
    </div>
  );
};

export default Index;
