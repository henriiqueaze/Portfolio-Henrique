import React, { useState, useEffect } from "react";
import "./style.css";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import siteCopy from "../../data/siteCopy";
import { useLanguage } from "../../context/LanguageContext";

const ThemeToggle = () => {
  const { language } = useLanguage();
  const copy = siteCopy[language].theme;
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      setChecked(saved === "light");
      return;
    }

    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "dark" || attr === "light") {
      setChecked(attr === "light");
      return;
    }

    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)"
    ).matches;
    setChecked(!prefersDark);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const newTheme = checked ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch {}
  }, [checked]);

  return (
    <div id="toggle">
      <input
        type="checkbox"
        id="sw-checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        aria-label={copy.label}
      />
      <label htmlFor="sw-checkbox" title={copy.label}>
        <BsSunFill className="sun" />
        <BsMoonFill className="moon" />
      </label>
    </div>
  );
};

export default ThemeToggle;
