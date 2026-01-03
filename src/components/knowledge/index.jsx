import React, { useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
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
    desc: "Django é um framework web de alto nível para Python, focado em rapidez e segurança. Segue o princípio (Don’t Repeat Yourself) e facilita o desenvolvimento com menos código. Inclui admin automático, ORM e diversas ferramentas integradas.",
  },
  {
    icon: <FaJsSquare />,
    title: "JavaScript",
    desc: "JavaScript é uma linguagem de programação usada para tornar páginas web interativas. É executada no navegador, controlando eventos, DOM e chamadas assíncronas. Também é usada no back-end com Node.js e possui vasta comunidade.",
  },
  {
    icon: <SiTypescript />,
    title: "TypeScript",
    desc: "TypeScript é um superset do JavaScript que adiciona tipagem estática opcional. Ajuda a prevenir bugs em tempo de desenvolvimento e melhora a manutenção de código em projetos grandes. Transpila para JavaScript compatível com navegadores e Node.js.",
  },
  {
    icon: <FaReact />,
    title: "React",
    desc: "React é uma biblioteca JavaScript usada para criar interfaces de usuário de forma rápida e eficiente. Baseia-se em componentes reutilizáveis e atualiza a interface com desempenho usando o Virtual DOM.",
  },
  {
    icon: <AngularIcon />,
    title: "Angular",
    desc: "Angular é um framework do Google escrito em TypeScript, com recursos nativos como rotas, injeção de dependência e formulários, facilitando a criação de aplicações web estruturadas e escaláveis.",
  },
  {
    icon: <SiNodedotjs />,
    title: "Node.js",
    desc: "Node.js é um runtime JavaScript baseado em V8 que permite executar JavaScript no servidor. É ideal para construir APIs, servidores em tempo real e ferramentas de linha de comando. Ecosistema rico com npm e muitos frameworks (Express, Fastify, Nest).",
  },
  {
    icon: <FaDatabase />,
    title: "SQL",
    desc: "Structured Query Language (SQL) é uma linguagem usada para gerenciar bancos de dados relacionais. Permite consultar, inserir, atualizar e deletar dados de forma estruturada. É padrão em sistemas como MySQL, PostgreSQL, Oracle e SQL Server.",
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
    icon: <SiTailwindcss />,
    title: "Tailwind",
    desc: "Tailwind CSS é um framework de utilitários para CSS que permite construir interfaces rapidamente usando classes atômicas. Facilita layouts responsivos, consistência visual e reduz a necessidade de CSS personalizado.",
  },
  {
    icon: <FaBootstrap />,
    title: "Bootstrap",
    desc: "Bootstrap é um framework front-end baseado em HTML, CSS e JavaScript. Fornece componentes prontos, como botões, menus e grids responsivos. É amplamente usado para criar interfaces modernas e responsivas rapidamente.",
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

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    y: -60,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 18,
    },
  },
};

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

        <div className="content">
          <motion.div className="icon-grid">
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
