import React from "react";
import { motion } from "framer-motion";
import "./style.css";
import siteCopy from "../../data/siteCopy";
import { useLanguage } from "../../context/LanguageContext";
import { resolveLocalizedValue } from "../../utils/i18n";

import {
  sectionVariants,
  containerVariants,
  cardVariants,
} from "../../utils/animations/animations";

import projectData from "../../data/projects.data";

const Projects = () => {
  const { language } = useLanguage();
  const copy = siteCopy[language].projects;

  return (
    <motion.section
      id="projects"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <header>
          <motion.h2 variants={cardVariants}>{copy.title}</motion.h2>
        </header>

        <motion.div className="content" variants={containerVariants}>
          <div className="cards">
            {projectData.map((p, i) => (
              <motion.div
                key={p.img || i}
                className="project-card"
                variants={cardVariants}
              >
                <img
                  src={p.img}
                  alt={resolveLocalizedValue(p.title, language)}
                />

                <h3>{resolveLocalizedValue(p.title, language)}</h3>

                <p>{resolveLocalizedValue(p.desc, language)}</p>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  {copy.button}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
