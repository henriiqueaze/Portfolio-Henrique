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
    desc: "Uma aplicação conecta ONGs, adotantes e voluntários de forma prática e organizada. Centraliza o cadastro, a divulgação e o processo de adoção de animais.",
    link: "https://github.com/Sociau",
  },
  {
    img: PUM,
    title: "Plataforma Universal de Monitoria",
    desc: "Sistema de monitoria acadêmica escalável que integra alunos, monitores e cursos. Facilita o gerenciamento de atividades, inscrições e acompanhamento acadêmico.",
    link: "https://github.com/henriiqueaze/PUM",
  },
  {
    img: StudentProgress,
    title: "StudentProgress",
    desc: "API em Spring Boot para gerenciar dados de alunos. Permite cadastrar informações, registrar notas e acompanhar o status acadêmico de forma simples e eficiente.",
    link: "https://github.com/henriiqueaze/StudentProgress",
  },
  {
    img: Volumtarium,
    title: "Volumtarium",
    desc: "Aplicação que conecta ONGs e voluntários com base em perfil e localização. Facilita a divulgação de oportunidades e o engajamento em ações sociais.",
    link: "https://github.com/henriiqueaze/Volumtarium",
  },
  {
    img: GerenciamentoTarefas,
    title: "Gerenciamento de Tarefas",
    desc: "Sistema desenvolvido em Python com Tkinter para organizar tarefas diárias. Permite criar, editar e acompanhar atividades de forma simples e intuitiva.",
    link: "https://github.com/henriiqueaze/Sistema-de-Gerenciamento-de-Tarefas",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -60,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 22,
    },
  },
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ amount: 0.3 }}
    >
      <div className="container">
        <header>
          <h2>Projetos</h2>
        </header>

        <div className="content">
          <div className="cards">
            {projectData.map((p) => (
              <motion.div
                key={p.title}
                className="project-card"
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.04,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 18,
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
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
