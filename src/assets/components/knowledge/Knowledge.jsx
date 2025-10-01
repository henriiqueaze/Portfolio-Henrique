import React, { useState } from "react";
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
import DjangoIcon from "../../images/icons/dark-theme/django-icon.svg?react";
import SpringBootIcon from "../../images/icons/dark-theme/spring-boot-icon.svg?react";

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
    icon: <FaDatabase />,
    title: "SQL",
    desc: "Structured Query Language (SQL) é uma linguagem usada para gerenciar bancos de dados relacionais. Permite consultar, inserir, atualizar e deletar dados de forma estruturada. É padrão em sistemas como MySQL, PostgreSQL, Oracle e SQL Server.",
  },
  {
    icon: <FaPython />,
    title: "Python",
    desc: "Python é uma linguagem de programação de alto nível, conhecida por sua sintaxe simples e legível. É usada em diversas áreas, como desenvolvimento web, ciência de dados, automação e IA. Possui vasta comunidade e bibliotecas como Django, Flask, NumPy e Pandas.",
  },
  {
    icon: <DjangoIcon/>,
    title: "Django",
    desc: "Django é um framework web de alto nível para Python, focado em rapidez e segurança. Segue o princípio (Don’t Repeat Yourself) e facilita o desenvolvimento com menos código. Inclui admin automático, ORM e diversas ferramentas integradas.",
  },
  {
    icon: <FaHtml5 />,
    title: "HTML5",
    desc: "HTML5 é a versão mais recente da linguagem de marcação usada para estruturar páginas web. Introduz novos elementos semânticos, suporte a multimídia e APIs modernas. É base para o desenvolvimento web, junto com CSS e JavaScript.",
  },
  {
    icon: <FaCss3 />,
    title: "CSS3",
    desc: "CSS3 é a última evolução das folhas de estilo em cascata, usadas para estilizar páginas HTML. Inclui recursos como animações, transições, media queries e layouts avançados. Permite adaptar o design para diferentes dispositivos e tamanhos de tela.",
  },
  {
    icon: <FaBootstrap />,
    title: "Bootstrap",
    desc: "Bootstrap é um framework front-end baseado em HTML, CSS e JavaScript. Fornece componentes prontos, como botões, menus e grids responsivos. É amplamente usado para criar interfaces modernas e responsivas rapidamente.",
  },
  {
    icon: <FaJsSquare />,
    title: "JavaScript",
    desc: "JavaScript é uma linguagem de programação usada para tornar páginas web interativas. É executada no navegador, controlando eventos, DOM e chamadas assíncronas. Também é usada no back-end com Node.js e possui vasta comunidade.",
  },
  {
    icon: <FaReact />,
    title: "React",
    desc: "React é uma biblioteca JavaScript usada para criar interfaces de usuário de forma rápida e eficiente. Baseia-se em componentes reutilizáveis e atualiza a interface com desempenho usando o Virtual DOM.",
  },
  {
    icon: <FaDocker />,
    title: "Docker",
    desc: "Docker é uma plataforma para criar, empacotar e executar aplicações em containers. Os containers garantem que o software funcione de forma consistente em qualquer ambiente. Facilita o desenvolvimento, testes e deploy contínuo de aplicações.",
  },
  {
    icon: <FaGitAlt />,
    title: "Git",
    desc: "Git é um sistema de controle de versão distribuído, usado para gerenciar código-fonte. Permite rastrear mudanças, colaborar com equipes e reverter versões anteriores. É essencial para workflows modernos de desenvolvimento de software.",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    desc: "GitHub é uma plataforma de hospedagem de repositórios Git baseada na nuvem. Oferece ferramentas para colaboração, revisão de código e integração contínua. É amplamente usado por desenvolvedores para compartilhar e versionar projetos.",
  },
];

export default function Knowledge() {
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

      <div
        id="knowledge-modal"
        className={`modal ${showModal ? "show" : "hide"}`}
        onClick={(e) => {
          if (e.target.id === "knowledge-modal") closeModal();
        }}
      >
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          {selected && <div id="modal-icon">{selected.icon}</div>}
          <h3 id="modal-title">{selected ? selected.title : ""}</h3>
          <p id="modal-desc">{selected ? selected.desc : ""}</p>
        </div>
      </div>
    </section>
  );
}
