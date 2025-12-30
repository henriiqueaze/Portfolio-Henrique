import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./style.css";
import Modal from "./modal.jsx";
import mbaLogo from "../../assets/images/experiences/mba-logo.jpg";

const experiences = [
  {
    company: "MBA Consultoria e Sistemas",
    logo: mbaLogo,
    role: "Estagiário de Desenvolvimento Full Stack",
    period: "Jan 2026 - Atualmente",
    shortDesc:
      "Desenvolvimento e manutenção de aplicações web com C#/.NET, JavaScript/React e SQL Server, atuando em backend, frontend e banco de dados.",
    responsibilities: [
      "Desenvolvimento e manutenção de APIs RESTful utilizando C# e .NET",
      "Criação e evolução de sistemas web utilizando React",
      "Desenvolvimento de aplicações mobile multiplataforma com React Native",
      "Correção de bugs, refatoração de código e melhoria contínua",
      "Versionamento de código utilizando Git",
    ],
    projects: [
      "Sistemas internos de gestão",
      "APIs REST",
      "Integrações entre sistemas",
    ],
    technologies: [
      "C#",
      "ASP.NET",
      "SQL Server",
      "React",
      "React Native",
      "Git",
    ],
  },
];

const Experience = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="experience">
      <div className="container">
        <header>
          <h2>Experiência</h2>
        </header>

        <div className="experience-list">
          {experiences.map((exp) => (
            <motion.div
              className="experience-card"
              key={exp.company}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <button
                className="info-button"
                onClick={() => setSelected(exp)}
                aria-label="Ver mais informações"
              >
                <AiOutlineInfoCircle size={24} />
              </button>

              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="company-logo"
              />

              <div className="experience-content">
                <h3>{exp.company}</h3>
                <span className="role">{exp.role}</span>
                <span className="period">{exp.period}</span>
                <p>{exp.shortDesc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal experience={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Experience;
