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

import CSharpIcon from "../assets/images/icons/c-sharp-logo.svg?react";
import DjangoIcon from "../assets/images/icons/django-icon.svg?react";
import SpringBootIcon from "../assets/images/icons/spring-boot-icon.svg?react";
import AngularIcon from "../assets/images/icons/angular-icon.svg?react";
import AzureIcon from "../assets/images/icons/azure-icon.svg?react";


const skills = [
  {
    icon: FaJava,
    title: "Java",
    desc: {
      pt: "Java é uma linguagem de programação orientada a objetos, amplamente utilizada no desenvolvimento de aplicações corporativas. Funciona na máquina virtual Java (JVM), o que permite portabilidade entre sistemas. É conhecida por sua robustez, segurança e grande ecossistema de bibliotecas.",
      en: "Java is an object-oriented programming language widely used to build enterprise applications. It runs on the Java Virtual Machine (JVM), which makes it portable across systems. It is known for its robustness, security, and large library ecosystem.",
    },
  },
  {
    icon: SpringBootIcon,
    title: "Spring Boot",
    desc: {
      pt: "Spring Boot é um framework Java que simplifica a criação de aplicações Spring. Ele facilita a configuração e o deployment, eliminando a necessidade de configuração manual extensa. Ideal para construir microsserviços e aplicações web rapidamente.",
      en: "Spring Boot is a Java framework that simplifies building Spring applications. It streamlines configuration and deployment, removing the need for extensive manual setup. It is ideal for building microservices and web applications quickly.",
    },
  },
  {
    icon: CSharpIcon,
    title: "C#",
    desc: {
      pt: "C# é uma linguagem de programação moderna e orientada a objetos, desenvolvida pela Microsoft. É amplamente usada no desenvolvimento de aplicações desktop, web, APIs e jogos, especialmente no ecossistema .NET.",
      en: "C# is a modern object-oriented programming language developed by Microsoft. It is widely used to build desktop apps, web apps, APIs, and games, especially in the .NET ecosystem.",
    },
  },
  {
    icon: DiDotnet,
    title: "ASP.NET",
    desc: {
      pt: "ASP.NET é um framework de desenvolvimento web da Microsoft usado para criar aplicações web modernas, APIs e serviços. Ele funciona sobre a plataforma .NET e oferece alto desempenho, segurança e escalabilidade.",
      en: "ASP.NET is Microsoft's web development framework used to build modern web applications, APIs, and services. It runs on the .NET platform and offers high performance, security, and scalability.",
    },
  },
  {
    icon: FaPython,
    title: "Python",
    desc: {
      pt: "Python é uma linguagem de programação de alto nível, conhecida por sua sintaxe simples e legível. É usada em diversas áreas, como desenvolvimento web, ciência de dados, automação e IA. Possui vasta comunidade e bibliotecas como Flask, NumPy e Pandas.",
      en: "Python is a high-level programming language known for its simple and readable syntax. It is used in many areas such as web development, data science, automation, and AI. It has a large community and libraries like Flask, NumPy, and Pandas.",
    },
  },
  {
    icon: DjangoIcon,
    title: "Django",
    desc: {
      pt: "Django é um framework web de alto nível para Python, focado em rapidez e segurança. Segue o princípio (Don’t Repeat Yourself) e facilita o desenvolvimento com menos código. Inclui admin automático, ORM e diversas ferramentas integradas.",
      en: "Django is a high-level Python web framework focused on speed and security. It follows the Don't Repeat Yourself principle and makes development easier with less code. It includes an automatic admin, ORM, and several built-in tools.",
    },
  },
  {
    icon: FaJsSquare,
    title: "JavaScript",
    desc: {
      pt: "JavaScript é uma linguagem de programação usada para tornar páginas web interativas. É executada no navegador, controlando eventos, DOM e chamadas assíncronas. Também é usada no back-end com Node.js e possui vasta comunidade.",
      en: "JavaScript is a programming language used to make web pages interactive. It runs in the browser, handling events, the DOM, and asynchronous calls. It is also used on the back end with Node.js and has a large community.",
    },
  },
  {
    icon: SiTypescript,
    title: "TypeScript",
    desc: {
      pt: "TypeScript é um superset do JavaScript que adiciona tipagem estática opcional. Ajuda a prevenir bugs em tempo de desenvolvimento e melhora a manutenção de código em projetos grandes. Transpila para JavaScript compatível com navegadores e Node.js.",
      en: "TypeScript is a superset of JavaScript that adds optional static typing. It helps prevent bugs during development and improves maintainability in large projects. It compiles to JavaScript compatible with browsers and Node.js.",
    },
  },
  {
    icon: FaReact,
    title: "React",
    desc: {
      pt: "React é uma biblioteca JavaScript usada para criar interfaces de usuário de forma rápida e eficiente. Baseia-se em componentes reutilizáveis e atualiza a interface com desempenho usando o Virtual DOM.",
      en: "React is a JavaScript library used to build user interfaces quickly and efficiently. It is based on reusable components and updates the UI efficiently using the Virtual DOM.",
    },
  },
  {
    icon: AngularIcon,
    title: "Angular",
    desc: {
      pt: "Angular é um framework do Google escrito em TypeScript, com recursos nativos como rotas, injeção de dependência e formulários, facilitando a criação de aplicações web estruturadas e escaláveis.",
      en: "Angular is a Google framework written in TypeScript with built-in features like routing, dependency injection, and forms, making it easier to build structured and scalable web applications.",
    },
  },
  {
    icon: SiNodedotjs,
    title: "Node.js",
    desc: {
      pt: "Node.js é um runtime JavaScript baseado em V8 que permite executar JavaScript no servidor. É ideal para construir APIs, servidores em tempo real e ferramentas de linha de comando. Ecosistema rico com npm e muitos frameworks (Express, Fastify, Nest).",
      en: "Node.js is a V8-based JavaScript runtime that lets JavaScript run on the server. It is ideal for building APIs, real-time servers, and command-line tools. It has a rich ecosystem with npm and many frameworks (Express, Fastify, Nest).",
    },
  },
  {
    icon: FaDatabase,
    title: "SQL",
    desc: {
      pt: "Structured Query Language (SQL) é uma linguagem usada para gerenciar bancos de dados relacionais. Permite consultar, inserir, atualizar e deletar dados de forma estruturada. É padrão em sistemas como MySQL, PostgreSQL, Oracle e SQL Server.",
      en: "Structured Query Language (SQL) is a language used to manage relational databases. It allows you to query, insert, update, and delete data in a structured way. It is standard in systems like MySQL, PostgreSQL, Oracle, and SQL Server.",
    },
  },
  {
    icon: FaHtml5,
    title: "HTML5",
    desc: {
      pt: "HTML5 é a versão mais recente da linguagem de marcação usada para estruturar páginas web. Introduz novos elementos semânticos, suporte a multimídia e APIs modernas. É base para o desenvolvimento web, junto com CSS e JavaScript.",
      en: "HTML5 is the latest version of the markup language used to structure web pages. It introduces new semantic elements, multimedia support, and modern APIs. It is the foundation of web development alongside CSS and JavaScript.",
    },
  },
  {
    icon: FaCss3,
    title: "CSS3",
    desc: {
      pt: "CSS3 é a última evolução das folhas de estilo em cascata, usadas para estilizar páginas HTML. Inclui recursos como animações, transições, media queries e layouts avançados. Permite adaptar o design para diferentes dispositivos e tamanhos de tela.",
      en: "CSS3 is the latest evolution of cascading style sheets used to style HTML pages. It includes features like animations, transitions, media queries, and advanced layouts. It makes it possible to adapt designs for different devices and screen sizes.",
    },
  },
  {
    icon: SiTailwindcss,
    title: "Tailwind",
    desc: {
      pt: "Tailwind CSS é um framework de utilitários para CSS que permite construir interfaces rapidamente usando classes atômicas. Facilita layouts responsivos, consistência visual e reduz a necessidade de CSS personalizado.",
      en: "Tailwind CSS is a utility-first CSS framework that lets you build interfaces quickly using atomic classes. It helps with responsive layouts, visual consistency, and reduces the need for custom CSS.",
    },
  },
  {
    icon: FaBootstrap,
    title: "Bootstrap",
    desc: {
      pt: "Bootstrap é um framework front-end baseado em HTML, CSS e JavaScript. Fornece componentes prontos, como botões, menus e grids responsivos. É amplamente usado para criar interfaces modernas e responsivas rapidamente.",
      en: "Bootstrap is a front-end framework based on HTML, CSS, and JavaScript. It provides ready-made components such as buttons, menus, and responsive grids. It is widely used to build modern, responsive interfaces quickly.",
    },
  },
  {
    icon: FaDocker,
    title: "Docker",
    desc: {
      pt: "Docker é uma plataforma para criar, empacotar e executar aplicações em containers. Os containers garantem que o software funcione de forma consistente em qualquer ambiente. Facilita o desenvolvimento, testes e deploy contínuo de aplicações.",
      en: "Docker is a platform for creating, packaging, and running applications in containers. Containers ensure software runs consistently in any environment. It makes development, testing, and continuous deployment easier.",
    },
  },
  {
    icon: FaGitAlt,
    title: "Git",
    desc: {
      pt: "Git é um sistema de controle de versão distribuído, usado para gerenciar código-fonte. Permite rastrear mudanças, colaborar com equipes e reverter versões anteriores. É essencial para workflows modernos de desenvolvimento de software.",
      en: "Git is a distributed version control system used to manage source code. It lets you track changes, collaborate with teams, and revert to previous versions. It is essential for modern software development workflows.",
    },
  },
  {
    icon: FaGithub,
    title: "GitHub",
    desc: {
      pt: "GitHub é uma plataforma de hospedagem de repositórios Git baseada na nuvem. Oferece ferramentas para colaboração, revisão de código e integração contínua. É amplamente usado por desenvolvedores para compartilhar e versionar projetos.",
      en: "GitHub is a cloud-based Git repository hosting platform. It offers tools for collaboration, code review, and continuous integration. It is widely used by developers to share and version projects.",
    },
  },
  {
    icon: AzureIcon,
    title: "Azure",
    desc: {
      pt: "Azure é a plataforma de computação em nuvem da Microsoft. Oferece serviços como hospedagem de aplicações, bancos de dados, máquinas virtuais, DevOps, IA e integração contínua. É amplamente utilizada para criar, implantar e gerenciar soluções em nuvem de forma escalável e segura.",
      en: "Azure is Microsoft's cloud computing platform. It offers services such as application hosting, databases, virtual machines, DevOps, AI, and continuous integration. It is widely used to build, deploy, and manage cloud solutions in a scalable and secure way.",
    },
  },

];

export default skills;
