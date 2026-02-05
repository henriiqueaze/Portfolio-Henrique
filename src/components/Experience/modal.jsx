import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./modal.css";

import {
  backdropVariants,
  modalVariants,
} from "../../utils/animations/animations";

const Modal = ({ experience, onClose }) => {
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
                  <span className="period">{experience.period}</span>
                </div>
              </div>

              <hr className="modal-divider" />

              <h4>Cargo</h4>
              <span className="role">{experience.role}</span>

              <h4>Responsabilidades</h4>
              <ul className="modal-list">
                {experience.responsibilities.map((item, index) => (
                  <li key={index}>
                    <span className="bullet">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <h4>Principais projetos</h4>
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
                      {" "}
                      - {project.description}
                    </span>
                  </li>
                ))}
              </ul>

              <h4>Tecnologias</h4>
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
