import React, { useState, useEffect } from "react";
import "./style.css";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {
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
        aria-label="Mudar tema"
      />
      <label htmlFor="sw-checkbox" title="Mudar tema">
        <BsSunFill className="sun" />
        <BsMoonFill className="moon" />
      </label>
    </div>
  );
};

export default ThemeToggle;
