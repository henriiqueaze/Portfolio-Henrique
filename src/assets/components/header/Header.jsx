import React, { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="navbar" className={scrolled ? "scroll" : ""}>
      <div className="container">
        <a className="logo" href="#home">
          Henrique Azevedo
        </a>

        <div className={`nav-menu ${openMobile ? "open" : ""}`}>
          <ul>
            <li>
              <a id="aboutNav" href="#about">
                Sobre mim
              </a>
            </li>
            <li>
              <a id="projectsNav" href="#projects">
                Projetos
              </a>
            </li>
            <li>
              <a id="knowledgeNav" href="#knowledge">
                Conhecimentos
              </a>
            </li>
            <li>
              <a id="contactNav" href="#contact">
                Contato
              </a>
            </li>
          </ul>
        </div>  
      </div>
    </nav>
  );
}
