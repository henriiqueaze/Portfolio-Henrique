import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./modal.css";
import siteCopy from "../../data/siteCopy";
import { useLanguage } from "../../context/LanguageContext";
import { resolveLocalizedValue } from "../../utils/i18n";

import {
  backdropVariants,
  modalVariants,
} from "../../utils/animations/animations";

const Modal = ({ experience, onClose }) => {
  const { language } = useLanguage();
  const copy = siteCopy[language].experience.modal;

  useEffect(() => {
    if (experience) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, [experience]);

  return (
    <AnimatePresence>
      {experience && (
        <motion.div
          className="experience-modal"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="experience-modal-box"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div className="experience-modal-content">
              <span className="close" onClick={onClose}>
                &times;
              </span>

              <div className="modal-header">
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="modal-company-logo"
                />

                <div className="modal-header-info">
                  <h3>{experience.company}</h3>
                  <span className="period">
                    {resolveLocalizedValue(experience.period, language)}
                  </span>
                </div>
              </div>

              <hr className="modal-divider" />

              <h4>{copy.role}</h4>
              <span className="role">
                {resolveLocalizedValue(experience.role, language)}
              </span>

              <h4>{copy.responsibilities}</h4>
              <ul className="modal-list">
                {experience.responsibilities.map((item, index) => (
                  <li key={index}>
                    <span className="bullet">•</span>
                    {resolveLocalizedValue(item, language)}
                  </li>
                ))}
              </ul>

              <h4>{copy.projects}</h4>
              <ul className="modal-list">
                {experience.projects.map((project, index) => (
                  <li key={index}>
                    <span className="bullet">•</span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      {project.title}
                    </a>
                    <span className="project-description">
                      {" "} - {resolveLocalizedValue(project.description, language)}
                    </span>
                  </li>
                ))}
              </ul>

              <h4>{copy.technologies}</h4>
              <ul className="tech-list">
                {experience.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
