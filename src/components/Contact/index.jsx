import React from "react";
import "./style.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import siteCopy from "../../data/siteCopy";
import { useLanguage } from "../../context/LanguageContext";

const ContactComponent = () => {
  const { language } = useLanguage();
  const copy = siteCopy[language].contact;

  return (
    <section id="contact">
      <div className="container">
        <div className="left-column">
          <header>
            <h2>{copy.title}</h2>
          </header>
          <div className="content">
            <ul>
              <li>
                <a
                  href="mailto:henriquee.aze.dev@gmail.com"
                  title={copy.emailTitle}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaEnvelope />
                  henriquee.aze.dev@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/henrique-azevedo-b2195b2b0/"
                  title={copy.linkedinTitle}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                  www.linkedin.com/henrique-azevedo
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/henriiqueaze"
                  title={copy.githubTitle}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  www.github.com/henriiqueaze
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="right-column">
          <p>{copy.message}</p>
        </div>
      </div>
    </section>
  );
}

export default ContactComponent;
