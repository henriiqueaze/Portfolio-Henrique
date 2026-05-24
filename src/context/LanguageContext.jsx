import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

const STORAGE_KEY = "portfolio-language";

const getInitialLanguage = () => {
  if (typeof window === "undefined") return "en";

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "pt" || saved === "en") {
      return saved;
    }
  } catch {}

  const browserLanguage = window.navigator?.language?.toLowerCase() || "";
  return browserLanguage.startsWith("pt") ? "pt" : "en";
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    if (typeof document === "undefined") return;

    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";

    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {}
  }, [language]);

  const value = useMemo(() => {
    return {
      language,
      isEnglish: language === "en",
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === "en" ? "pt" : "en")),
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};