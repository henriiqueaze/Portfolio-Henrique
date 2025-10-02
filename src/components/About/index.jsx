import React from "react";
import "./style.css";
import Curriculo from "../../../public/docs/Henrique Azevedo Dutra.pdf";

const AboutComponent = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="left-column">
          <header>
            <h2>Sobre mim</h2>
          </header>
          <div className="content">
            <p>
              Sou desenvolvedor Full Stack com experiência em múltiplas
              linguagens, frameworks e bancos de dados. Tenho facilidade em
              aprender novas tecnologias e me adaptar rapidamente a diferentes
              stacks, sempre focando em performance, escalabilidade e boas
              práticas de desenvolvimento.
            </p>
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
        Currículo
      </a>
    </section>
  );
}

export default AboutComponent;
