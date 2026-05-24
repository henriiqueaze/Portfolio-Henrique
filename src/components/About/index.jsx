import React from "react";
import "./style.css";
import Curriculo from "../../../public/Henrique Azevedo - Currículo - Desenvolvedor.pdf";
import siteCopy from "../../data/siteCopy";
import { useLanguage } from "../../context/LanguageContext";

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
        href={Curriculo}
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
