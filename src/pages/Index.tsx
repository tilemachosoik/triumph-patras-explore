import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ModelsSection from "@/components/ModelsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'gr'>('gr');

  return (
    <div className="min-h-screen bg-background">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <HeroSection language={language} />
      <ModelsSection language={language} />
      <AboutSection language={language} />
      <ContactSection language={language} />
    </div>
  );
};

export default Index;
