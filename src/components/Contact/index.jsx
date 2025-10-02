import React from "react";
import "./style.css"
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactComponent = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="left-column">
          <header>
            <h2>Entre em contato!</h2>
          </header>
          <div className="content">
            <ul>
              <li>
                <a
                  href="mailto:henriquee.aze.dev@gmail.com"
                  title="Send email"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <FaEnvelope/>
                  henriquee.aze.dev@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/henrique-azevedo-b2195b2b0/"
                  title="LinkedIn profile"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <FaLinkedin/>
                  https://www.linkedin.com/in/henrique-azevedo-b2195b2b0/
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/henriiqueaze"
                  title="GitHub page"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub/>
                  https://github.com/henriiqueaze
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="right-column">
          <p>
            Adoro novas ideias! Vou responder assim que possível e juntos vamos
            criar algo extraordinário!
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactComponent;
