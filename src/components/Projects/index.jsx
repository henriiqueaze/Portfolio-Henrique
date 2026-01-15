import React from "react";
import { motion } from "framer-motion";
import "./style.css";

import {
  sectionVariants,
  containerVariants,
  cardVariants,
} from "../../utils/animations/animations";

import projectData from "../../data/projects.data";

const Projects = () => {
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
          <motion.h2 variants={cardVariants}>Projetos</motion.h2>
        </header>

        <motion.div className="content" variants={containerVariants}>
          <div className="cards">
            {projectData.map((p) => (
              <motion.div
                key={p.title}
                className="project-card"
                variants={cardVariants}
              >
                <img src={p.img} alt={p.title} />

                <h3>{p.title}</h3>

                <p>{p.desc}</p>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Ver mais
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
