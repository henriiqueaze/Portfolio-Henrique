import React, { useEffect, useState, useRef } from "react";
import "./style.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  const navRef = useRef(null);

  const toggleMenu = () => setOpenMobile(!openMobile);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMobile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <nav id="navbar" className={scrolled ? "scroll" : ""} ref={navRef}>
        <div className="container">
          <a className="logo" href="#home">
            Henrique Azevedo
          </a>

          <div
            className={`hamburger ${openMobile ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={`nav-menu ${openMobile ? "open" : ""}`}>
            <ul>
              <li>
                <a
                  id="aboutNav"
                  href="#about"
                  onClick={() => setOpenMobile(false)}
                >
                  Sobre mim
                </a>
              </li>
              <li>
                <a
                  id="experienceNav"
                  href="#experience"
                  onClick={() => setOpenMobile(false)}
                >
                  Experiência
                </a>
              </li>
              <li>
                <a
                  id="projectsNav"
                  href="#projects"
                  onClick={() => setOpenMobile(false)}
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  id="knowledgeNav"
                  href="#knowledge"
                  onClick={() => setOpenMobile(false)}
                >
                  Conhecimentos
                </a>
              </li>
              <li>
                <a
                  id="contactNav"
                  href="#contact"
                  onClick={() => setOpenMobile(false)}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
