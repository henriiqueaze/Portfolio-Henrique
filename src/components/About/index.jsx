import React from "react";
import "./style.css";
import siteCopy from "../../data/siteCopy";
import { useLanguage } from "../../context/LanguageContext";

const resumePaths = {
  pt: `${import.meta.env.BASE_URL}Henrique Azevedo - Currículo - Desenvolvedor - (Português).pdf`,
  en: `${import.meta.env.BASE_URL}Henrique Azevedo - Resume - Developer - (English).pdf`,
};

const AboutComponent = () => {
  const { language } = useLanguage();
  const copy = siteCopy[language].about;

  return (
    <section id="about">
      <div className="container">
        <div className="left-column">
          <header>
            <h2>{copy.title}</h2>
          </header>
          <div className="content">
            <p>{copy.body}</p>
          </div>
        </div>
      </div>
      <a
        href={resumePaths[language]}
        target="_blank"
        rel="noreferrer"
        id="resume"
        className="button"
      >
        {copy.resume}
      </a>
    </section>
  );
}

export default AboutComponent;
