import React from "react";
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

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <header>
          <h2>Projetos</h2>
        </header>

        <div className="content">
          <div className="cards">
            {projectData.map((p) => (
              <div className="project-card" key={p.title}>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
