import React from "react";
import "./style.css";
import siteCopy from "../../data/siteCopy";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  const copy = siteCopy[language].footer;

  return (
    <footer>
      <div className="container">
        <div className="left-column">
          <a className="logo" href="#home">
            Henrique Azevedo
          </a>
          <p>{copy.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
