import { useEffect, useState } from "react";

export function usePortfolioPreferences() {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("portfolio-language") || "pt",
  );
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark",
  );

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return {
    language,
    theme,
    toggleLanguage: () => setLanguage((current) => (current === "pt" ? "en" : "pt")),
    toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
  };
}
