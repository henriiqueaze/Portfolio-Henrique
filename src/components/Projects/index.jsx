import React from "react";
import { motion } from "framer-motion";
import "./style.css";

import Sociau from "../../assets/images/projects/sociau-logo.jpg";
import PUM from "../../assets/images/projects/pum.png";
import StudentProgress from "../../assets/images/projects/student-progress-logo.png";
import Volumtarium from "../../assets/images/projects/volumtarium-logo.png";
import GerenciamentoTarefas from "../../assets/images/projects/gerenciamento-de-tarefas-layout.png";

const projectData = [
  {
    img: Sociau,
    title: "Sociau",
    desc: "A solução conecta ONGs, adotantes e voluntários de forma prática e organizada. Centraliza o cadastro, a divulgação e o processo de adoção de animais.",
    link: "https://github.com/Sociau",
  },
  {
    img: PUM,
    title: "Plataforma Universal de Monitoria",
    desc: "Sistema de monitoria acadêmica escalável, desenvolvido para integrar alunos, monitores e cursos.",
    link: "https://github.com/henriiqueaze/PUM",
  },
  {
    img: StudentProgress,
    title: "StudentProgress",
    desc: "API em Spring Boot para gerenciar dados de alunos, incluindo notas e status acadêmico. Registra, atualiza e monitora registros e calcula médias.",
    link: "https://github.com/henriiqueaze/StudentProgress",
  },
  {
    img: Volumtarium,
    title: "Volumtarium",
    desc: "Aplicação que conecta ONGs e voluntários. ONGs divulgam áreas de atuação e oportunidades e voluntários encontram vagas por perfil e localização.",
    link: "https://github.com/henriiqueaze/Volumtarium",
  },
  {
    img: GerenciamentoTarefas,
    title: "Gerenciamento de Tarefas",
    desc: "Sistema em Python/Tkinter para organizar tarefas diárias: adicionar, marcar como concluída e destacar itens na lista.",
    link: "https://github.com/henriiqueaze/Sistema-de-Gerenciamento-de-Tarefas",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <header>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4 }}
          >
            Projetos
          </motion.h2>
        </header>

        <div className="content">
          <motion.div
            className="cards"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
          >
            {projectData.map((p) => (
              <motion.div
                key={p.title}
                className="project-card"
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  y: -6,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
