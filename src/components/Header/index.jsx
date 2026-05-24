import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import { GiBrazilFlag, GiUnionJack } from "react-icons/gi";
import siteCopy from "../../data/siteCopy";
import { useLanguage } from "../../context/LanguageContext";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  const navRef = useRef(null);
  const copy = siteCopy[language];

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

          <button
            className="language-toggle"
            type="button"
            onClick={toggleLanguage}
            data-tooltip={
              language === "en"
                ? copy.language.switchToPortuguese
                : copy.language.switchToEnglish
            }
            aria-label={
              language === "en"
                ? copy.language.switchToPortuguese
                : copy.language.switchToEnglish
            }
            title={
              language === "en"
                ? copy.language.switchToPortuguese
                : copy.language.switchToEnglish
            }
          >
            {language === "pt" ? (
              <GiBrazilFlag aria-hidden="true" className="language-icon" />
            ) : (
              <GiUnionJack aria-hidden="true" className="language-icon" />
            )}
          </button>

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
                  {copy.nav.about}
                </a>
              </li>
              <li>
                <a
                  id="experienceNav"
                  href="#experience"
                  onClick={() => setOpenMobile(false)}
                >
                  {copy.nav.experience}
                </a>
              </li>
              <li>
                <a
                  id="projectsNav"
                  href="#projects"
                  onClick={() => setOpenMobile(false)}
                >
                  {copy.nav.projects}
                </a>
              </li>
              <li>
                <a
                  id="knowledgeNav"
                  href="#knowledge"
                  onClick={() => setOpenMobile(false)}
                >
                  {copy.nav.knowledge}
                </a>
              </li>
              <li>
                <a
                  id="contactNav"
                  href="#contact"
                  onClick={() => setOpenMobile(false)}
                >
                  {copy.nav.contact}
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
