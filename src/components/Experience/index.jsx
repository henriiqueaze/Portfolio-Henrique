import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Modal from "./modal";
import "./style.css";
import siteCopy from "../../data/siteCopy";
import { useLanguage } from "../../context/LanguageContext";
import { resolveLocalizedValue } from "../../utils/i18n";

import {
  sectionVariants,
  containerVariants,
  itemVariants,
} from "../../utils/animations/animations";

import experiences from "../../data/experiences.data";

const Experience = () => {
  const { language } = useLanguage();
  const copy = siteCopy[language].experience;
  const [selected, setSelected] = useState(null);

  return (
    <motion.section
      id="experience"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.15 }}
    >
      <motion.h2 variants={itemVariants}>{copy.title}</motion.h2>

      <motion.div className="timeline" variants={containerVariants}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            variants={itemVariants}
          >
            <span className="timeline-dot" />

            <div className="timeline-card">
              <button
                className="info-button"
                onClick={() => setSelected(exp)}
                aria-label={copy.infoLabel}
                type="button"
              >
                <AiOutlineInfoCircle size={22} />
              </button>

              <div className="experience-header">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="experience-logo"
                />

                <p className="company">{exp.company}</p>

                <div className="meta">
                  <span>{resolveLocalizedValue(exp.period, language)}</span>
                  <span>•</span>
                  <span>{resolveLocalizedValue(exp.location, language)}</span>
                </div>
              </div>

              <h3>{resolveLocalizedValue(exp.role, language)}</h3>

              <p className="description">
                {resolveLocalizedValue(exp.shortDesc, language)}
              </p>

              <h4>{copy.responsibilities}</h4>
              <ul>
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{resolveLocalizedValue(item, language)}</li>
                ))}
              </ul>

              <h4>{copy.technologies}</h4>
              <div className="techs">
                {exp.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selected && (
        <Modal experience={selected} onClose={() => setSelected(null)} />
      )}
    </motion.section>
  );
};

export default Experience;
