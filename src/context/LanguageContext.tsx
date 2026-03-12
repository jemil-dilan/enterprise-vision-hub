import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { Language } from "@/i18n/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("dc_lang");
    return (saved === "en" || saved === "fr") ? saved : "fr";
  });

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    localStorage.setItem("dc_lang", l);
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "fr" ? "en" : "fr");
  }, [lang, setLang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

/** Helper to pick the right translation */
export const t = <T,>(obj: { fr: T; en: T }, lang: Language): T => obj[lang];
