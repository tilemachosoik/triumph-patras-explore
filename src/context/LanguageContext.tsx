import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'gr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'gr'; // Default to Greek
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Auto-scroll to top on any navigation/change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}