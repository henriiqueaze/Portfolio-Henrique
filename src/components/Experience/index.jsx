import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Modal from "./modal";
import "./style.css";

import mbaLogo from "../../assets/images/experiences/mba-logo.jpg";
import freelancerLogo from "../../assets/images/experiences/freelancer-logo.png";

const experiences = [
  {
    company: "MBA Consultoria & Sistemas",
    logo: mbaLogo,
    role: "Estagiário de Desenvolvimento Full-Stack",
    period: "Jan 2026 - Atualmente",
    location: "Remoto",
    shortDesc:
      "Desenvolvimento e manutenção de aplicações web com C#/.NET, JavaScript/React e SQL Server.",
    responsibilities: [
      "Desenvolvimento de APIs RESTful com C#/.NET",
      "Criação de sistemas web com React",
      "Aplicações mobile com React Native",
      "Correção de bugs e refatoração",
      "Versionamento com Git",
    ],
    projects: [
      "Sistemas internos de gestão",
      "APIs REST",
      "Integrações entre sistemas",
    ],
    technologies: ["C#", "ASP.NET", "SQL Server", "React", "Git"],
  },
  {
    company: "Freelancer",
    logo: freelancerLogo,
    role: "Desenvolvedor Full-Stack",
    period: "Jun 2023 - Atualmente",
    location: "Remoto",
    shortDesc:
      "Atuação como desenvolvedor full-stack freelancer em aplicações web completas.",
    responsibilities: [
      "Desenvolvimento de APIs REST modernas",
      "Modelagem de banco de dados escalável",
      "Interfaces com React e Angular",
      "Versionamento com Git",
      "Refatoração de código",
    ],
    projects: [
      "StudentProgress",
      "Plataforma Universal de Monitoria",
      "Volumtarium",
    ],
    technologies: ["Java", "Spring Boot", "Angular", "React", "Docker", "Git"],
  },
];

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    y: -80,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

const Experience = () => {
  const [selected, setSelected] = useState(null);

  return (
    <motion.section
      id="experience"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.1 }}
    >
      <h2>Experiência Profissional</h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
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
      </div>

      {selected && (
        <Modal experience={selected} onClose={() => setSelected(null)} />
      )}
    </motion.section>
  );
};

export default Experience;
