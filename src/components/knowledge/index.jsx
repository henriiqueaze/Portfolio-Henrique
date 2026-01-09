import React, { useState } from "react";
import "./style.css";
import { motion } from "framer-motion";

import {
  containerVariants,
  itemVariants,
  sectionVariants,
} from "../../utils/animations/animations";

import {
  FaJava,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiTypescript, SiNodedotjs, SiTailwindcss } from "react-icons/si";
import { DiDotnet } from "react-icons/di";

import CSharpIcon from "../../assets/images/icons/c-sharp-logo.svg?react";
import DjangoIcon from "../../assets/images/icons/django-icon.svg?react";
import SpringBootIcon from "../../assets/images/icons/spring-boot-icon.svg?react";
import AngularIcon from "../../assets/images/icons/angular-icon.svg?react";

import KnowledgeModal from "./Modal";

const skills = [
  {
    icon: <FaJava />,
    title: "Java",
    desc: "Java é uma linguagem de programação orientada a objetos, amplamente utilizada no desenvolvimento de aplicações corporativas. Funciona na máquina virtual Java (JVM), o que permite portabilidade entre sistemas. É conhecida por sua robustez, segurança e grande ecossistema de bibliotecas.",
  },
  {
    icon: <SpringBootIcon />,
    title: "Spring Boot",
    desc: "Spring Boot é um framework Java que simplifica a criação de aplicações Spring. Ele facilita a configuração e o deployment, eliminando a necessidade de configuração manual extensa. Ideal para construir microsserviços e aplicações web rapidamente.",
  },
  {
    icon: <CSharpIcon />,
    title: "C#",
    desc: "C# é uma linguagem de programação moderna e orientada a objetos, desenvolvida pela Microsoft. É amplamente usada no desenvolvimento de aplicações desktop, web, APIs e jogos, especialmente no ecossistema .NET.",
  },
  {
    icon: <DiDotnet />,
    title: "ASP.NET",
    desc: "ASP.NET é um framework de desenvolvimento web da Microsoft usado para criar aplicações web modernas, APIs e serviços. Ele funciona sobre a plataforma .NET e oferece alto desempenho, segurança e escalabilidade.",
  },
  {
    icon: <FaPython />,
    title: "Python",
    desc: "Python é uma linguagem de programação de alto nível, conhecida por sua sintaxe simples e legível. É usada em diversas áreas, como desenvolvimento web, ciência de dados, automação e IA. Possui vasta comunidade e bibliotecas como Flask, NumPy e Pandas.",
  },
  {
    icon: <DjangoIcon />,
    title: "Django",
    desc: "Django é um framework web de alto nível para Python, focado em rapidez e segurança. Segue o princípio (Don’t Repeat Yourself) e facilita o desenvolvimento com menos código.",
  },
  {
    icon: <FaJsSquare />,
    title: "JavaScript",
    desc: "JavaScript é uma linguagem de programação usada para tornar páginas web interativas. É executada no navegador e também no back-end com Node.js.",
  },
  {
    icon: <SiTypescript />,
    title: "TypeScript",
    desc: "TypeScript adiciona tipagem estática ao JavaScript, ajudando a prevenir bugs e melhorar a manutenção do código.",
  },
  {
    icon: <FaReact />,
    title: "React",
    desc: "React é uma biblioteca JavaScript para criação de interfaces de usuário baseadas em componentes reutilizáveis.",
  },
  {
    icon: <AngularIcon />,
    title: "Angular",
    desc: "Angular é um framework do Google escrito em TypeScript, com estrutura robusta para aplicações escaláveis.",
  },
  {
    icon: <SiNodedotjs />,
    title: "Node.js",
    desc: "Node.js é um runtime JavaScript baseado em V8 que permite executar JavaScript no servidor.",
  },
  {
    icon: <FaDatabase />,
    title: "SQL",
    desc: "SQL é uma linguagem usada para gerenciar bancos de dados relacionais como MySQL e PostgreSQL.",
  },
  {
    icon: <FaHtml5 />,
    title: "HTML5",
    desc: "HTML5 estrutura páginas web e introduz novos elementos semânticos e APIs modernas.",
  },
  {
    icon: <FaCss3 />,
    title: "CSS3",
    desc: "CSS3 é usado para estilizar páginas HTML, incluindo animações, layouts responsivos e media queries.",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind",
    desc: "Tailwind CSS é um framework utilitário para construção rápida de interfaces modernas.",
  },
  {
    icon: <FaBootstrap />,
    title: "Bootstrap",
    desc: "Bootstrap fornece componentes prontos e grid responsivo para acelerar o desenvolvimento front-end.",
  },
  {
    icon: <FaDocker />,
    title: "Docker",
    desc: "Docker permite empacotar aplicações em containers para execução consistente em qualquer ambiente.",
  },
  {
    icon: <FaGitAlt />,
    title: "Git",
    desc: "Git é um sistema de controle de versão distribuído essencial para o desenvolvimento moderno.",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    desc: "GitHub é uma plataforma para hospedagem e colaboração em projetos Git.",
  },
];

const Knowledge = () => {
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function openSkill(index) {
    setSelected(skills[index]);
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
    setTimeout(() => setSelected(null), 250);
  }

  return (
    <motion.section
      id="knowledge"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ amount: 0.3 }}
    >
      <div className="container">
        <header>
          <h2>Conhecimentos</h2>
        </header>

        <motion.div
          className="icon-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((s, i) => (
            <motion.button
              key={s.title}
              className="icon-item"
              variants={itemVariants}
              whileHover={{
                scale: 1.08,
                y: -6,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openSkill(i)}
            >
              <div className="icon">{s.icon}</div>
              <span>{s.title}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <KnowledgeModal
        selected={selected}
        show={showModal}
        onClose={closeModal}
      />
    </motion.section>
  );
};

export default Knowledge;
