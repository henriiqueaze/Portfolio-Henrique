import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Modal from "./modal";
import "./style.css";

import {
  sectionVariants,
  containerVariants,
  itemVariants,
} from "../../utils/animations/animations";

import experiences from "../../data/experiences.data";

const Experience = () => {
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
      <motion.h2 variants={itemVariants}>Experiência Profissional</motion.h2>

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
                aria-label="Ver mais informações"
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
                  <span>{exp.period}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              <h3>{exp.role}</h3>

              <p className="description">{exp.shortDesc}</p>

              <h4>Principais Responsabilidades:</h4>
              <ul>
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h4>Tecnologias Utilizadas:</h4>
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
