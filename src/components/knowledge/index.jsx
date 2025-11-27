import React, { useState } from "react";
import "./style.css";
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
  FaAngular,
} from "react-icons/fa";
import { SiTypescript, SiNodedotjs, SiTailwindcss } from "react-icons/si";
import DjangoIcon from "../../assets/images/icons/django-icon.svg?react";
import SpringBootIcon from "../../assets/images/icons/spring-boot-icon.svg?react";
import KnowledgeModal from "./Modal";

const skills = [
  {
    icon: <FaJava />,
    title: "Java",
    desc: "Java é uma linguagem de programação orientada a objetos, amplamente utilizada no desenvolvimento de aplicações corporativas...",
  },
  {
    icon: <SpringBootIcon />,
    title: "Spring Boot",
    desc: "Spring Boot é um framework Java que simplifica a criação de aplicações Spring...",
  },

  {
    icon: <FaPython />,
    title: "Python",
    desc: "Python é uma linguagem de programação de alto nível, conhecida por sua sintaxe simples e legível...",
  },
  {
    icon: <DjangoIcon />,
    title: "Django",
    desc: "Django é um framework web de alto nível para Python, focado em rapidez e segurança...",
  },

  {
    icon: <FaJsSquare />,
    title: "JavaScript",
    desc: "JavaScript é uma linguagem de programação usada para tornar páginas web interativas...",
  },
  {
    icon: <SiTypescript />,
    title: "TypeScript",
    desc: "TypeScript é um superset do JavaScript que adiciona tipagem estática opcional...",
  },
  {
    icon: <FaReact />,
    title: "React",
    desc: "React é uma biblioteca JavaScript usada para criar interfaces de usuário de forma rápida e eficiente...",
  },
  {
    icon: <FaAngular />,
    title: "Angular",
    desc: "Angular é um framework do Google escrito em TypeScript...",
  },
  {
    icon: <SiNodedotjs />,
    title: "Node.js",
    desc: "Node.js é um runtime JavaScript baseado em V8 que permite executar JavaScript no servidor...",
  },
  {
    icon: <FaDatabase />,
    title: "SQL",
    desc: "Structured Query Language (SQL) é uma linguagem usada para gerenciar bancos de dados relacionais...",
  },
  {
    icon: <FaHtml5 />,
    title: "HTML5",
    desc: "HTML5 é a versão mais recente da linguagem de marcação usada para estruturar páginas web...",
  },
  {
    icon: <FaCss3 />,
    title: "CSS3",
    desc: "CSS3 é a última evolução das folhas de estilo em cascata...",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind",
    desc: "Tailwind CSS é um framework de utilitários para CSS...",
  },
  {
    icon: <FaBootstrap />,
    title: "Bootstrap",
    desc: "Bootstrap é um framework front-end baseado em HTML, CSS e JavaScript...",
  },
  {
    icon: <FaDocker />,
    title: "Docker",
    desc: "Docker é uma plataforma para criar, empacotar e executar aplicações em containers...",
  },
  {
    icon: <FaGitAlt />,
    title: "Git",
    desc: "Git é um sistema de controle de versão distribuído, usado para gerenciar código-fonte...",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    desc: "GitHub é uma plataforma de hospedagem de repositórios Git baseada na nuvem...",
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
    <section id="knowledge">
      <div className="container">
        <header>
          <h2>Conhecimentos</h2>
        </header>

        <div className="content">
          <div className="icon-grid">
            {skills.map((s, i) => (
              <button
                key={s.title}
                className="icon-item"
                onClick={() => openSkill(i)}
              >
                <div className="icon">{s.icon}</div>
                <span>{s.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <KnowledgeModal
        selected={selected}
        show={showModal}
        onClose={closeModal}
      />
    </section>
  );
};

export default Knowledge;
