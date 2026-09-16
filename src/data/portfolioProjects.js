import cookIt from "../assets/images/projects/cook-it.jpg";
import studentProgress from "../assets/images/projects/student-progress-logo.png";
import sociau from "../assets/images/projects/sociau-logo.jpg";
import volumtarium from "../assets/images/projects/volumtarium-logo.png";
import taskManager from "../assets/images/projects/task-manager-layout.png";
import pum from "../assets/images/projects/pum.png";
import cookItVideo from "../assets/videos/projects/Cook-It.mp4";
import studentProgressVideo from "../assets/videos/projects/StudentProgress.mp4";
import taskManagerVideo from "../assets/videos/projects/task-manager.mp4";
import sociauVideo from "../assets/videos/projects/Sociau.mp4";
import pumVideo from "../assets/videos/projects/PUM.mp4";
import volumtariumVideo from "../assets/videos/projects/Volumtarium.mp4";

export const projects = [
  {
    slug: "cook-it",
    title: "Cook—It",
    image: cookIt,
    video: cookItVideo,
    year: "2026",
    category: { pt: "Produto web", en: "Web product" },
    description: {
      pt: "Uma plataforma que transforma os ingredientes disponíveis em casa em sugestões inteligentes de receitas.",
      en: "A platform that turns ingredients available at home into smart recipe suggestions.",
    },
    details: {
      pt: "O produto reduz a fricção entre decidir o que cozinhar e encontrar uma receita possível, com buscas rápidas, leitura clara e resultados úteis.",
      en: "The product reduces the friction between deciding what to cook and finding a feasible recipe, with fast searches, clear reading and useful results.",
    },
    caseStudy: {
      pt: {
        challenge: "Reduzir o tempo entre olhar os ingredientes disponíveis e decidir uma receita realmente possível de preparar.",
        solution: "Uma experiência de busca orientada por ingredientes, com resultados objetivos e uma arquitetura que separa interface, regras de negócio e persistência.",
        contribution: "Concepção do produto, arquitetura full-stack, modelagem dos dados, API REST e desenvolvimento da interface.",
        outcome: "Um fluxo direto que transforma uma decisão cotidiana em uma busca rápida, clara e preparada para receber novas regras e fontes de receita.",
      },
      en: {
        challenge: "Reduce the time between checking the available ingredients and choosing a recipe that can actually be prepared.",
        solution: "An ingredient-led search experience with focused results and an architecture that separates interface, business rules and persistence.",
        contribution: "Product definition, full-stack architecture, data modeling, REST API and interface development.",
        outcome: "A direct flow that turns an everyday decision into a fast, clear search designed to support new rules and recipe sources.",
      },
    },
    tech: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "JWT"],
    url: "https://cook-it-zeta.vercel.app/",
    accent: "#1481B8",
    fit: "cover",
  },
  {
    slug: "student-progress",
    title: "StudentProgress",
    image: studentProgress,
    video: studentProgressVideo,
    year: "2025",
    category: { pt: "Educação", en: "Education" },
    description: {
      pt: "Gestão acadêmica para cadastrar alunos, registrar notas e acompanhar sua evolução.",
      en: "Academic management to register students, record grades and follow their progress.",
    },
    details: {
      pt: "Uma interface operacional enxuta para transformar dados acadêmicos em acompanhamento prático, com fluxos simples e arquitetura preparada para evoluir.",
      en: "A lean operational interface that turns academic data into practical tracking, with simple flows and an architecture ready to evolve.",
    },
    caseStudy: {
      pt: {
        challenge: "Organizar cadastro, notas e evolução acadêmica sem transformar a rotina de acompanhamento em uma sequência de telas complexas.",
        solution: "Um painel operacional compacto, estruturado em torno das ações mais frequentes e de uma leitura rápida do histórico de cada aluno.",
        contribution: "Arquitetura da aplicação, API, persistência, fluxos de interface e integração entre front-end e back-end.",
        outcome: "Uma base coerente para acompanhar alunos e ampliar o produto com novos indicadores, turmas e regras acadêmicas.",
      },
      en: {
        challenge: "Organize enrollment, grades and academic progress without turning daily tracking into a sequence of complex screens.",
        solution: "A compact operational dashboard centered on frequent actions and a quick reading of each student's history.",
        contribution: "Application architecture, API, persistence, interface flows and front-end/back-end integration.",
        outcome: "A coherent foundation for tracking students and expanding the product with new indicators, classes and academic rules.",
      },
    },
    tech: ["Java", "Spring Boot", "MySQL", "Hibernate", "Docker", "Flyway"],
    url: "https://student-progress-livid.vercel.app/",
    accent: "#5f9fbe",
    fit: "contain",
  },
  {
    slug: "sociau",
    title: "Sociau",
    image: sociau,
    video: sociauVideo,
    year: "2025",
    category: { pt: "Impacto social", en: "Social impact" },
    description: {
      pt: "Conecta organizações de resgate animal a pessoas interessadas em adoção responsável.",
      en: "Connects animal rescue organizations with people interested in responsible adoption.",
    },
    details: {
      pt: "Centraliza divulgação, cadastro e adoção de animais, aproximando instituições e adotantes em uma experiência organizada e acessível.",
      en: "Centralizes animal listings, registration and adoption, bringing institutions and adopters together through an organized experience.",
    },
    caseStudy: {
      pt: {
        challenge: "Aproximar instituições de resgate e possíveis adotantes sem dispersar informações importantes sobre cada animal.",
        solution: "Uma jornada centralizada para publicação, descoberta e adoção responsável, com organização clara dos dados e das etapas do processo.",
        contribution: "Definição dos fluxos, construção do aplicativo em React Native e TypeScript, integração com a API Flask e decisões de experiência do usuário.",
        outcome: "Uma experiência mais organizada para divulgar animais e iniciar conexões entre instituições e adotantes.",
      },
      en: {
        challenge: "Connect rescue organizations and potential adopters without scattering important information about each animal.",
        solution: "A centralized journey for publishing, discovery and responsible adoption, with clear organization of data and process stages.",
        contribution: "Flow definition, React Native and TypeScript app development, Flask API integration and user-experience decisions.",
        outcome: "A more organized experience for promoting animals and starting connections between institutions and adopters.",
      },
    },
    tech: ["React Native", "TypeScript", "Python", "Flask", "MySQL"],
    url: "https://github.com/Sociau",
    accent: "#397f9f",
    fit: "cover",
  },
  {
    slug: "volumtarium",
    title: "Volumtarium",
    image: volumtarium,
    video: volumtariumVideo,
    year: "2024",
    category: { pt: "Voluntariado", en: "Volunteering" },
    description: {
      pt: "Oportunidades sociais encontradas por perfil, interesses e localização.",
      en: "Social opportunities discovered by profile, interests and location.",
    },
    details: {
      pt: "Uma rede para facilitar o encontro entre quem precisa de ajuda e quem deseja contribuir.",
      en: "A network that helps those who need support meet those who want to contribute.",
    },
    caseStudy: {
      pt: {
        challenge: "Facilitar o encontro entre oportunidades sociais e pessoas disponíveis para contribuir de acordo com seus interesses e localização.",
        solution: "Uma rede de descoberta orientada por perfil, contexto e proximidade, reduzindo a fricção para encontrar iniciativas relevantes.",
        contribution: "Pesquisa do produto, modelagem das entidades, interface desktop em JavaFX e definição dos fluxos de descoberta.",
        outcome: "Uma proposta de plataforma capaz de organizar oportunidades e tornar o voluntariado mais fácil de encontrar e iniciar.",
      },
      en: {
        challenge: "Help social opportunities reach people who can contribute according to their interests and location.",
        solution: "A profile, context and proximity-led discovery network that reduces the friction of finding relevant initiatives.",
        contribution: "Product research, entity modeling, JavaFX desktop interface and discovery-flow definition.",
        outcome: "A platform concept designed to organize opportunities and make volunteering easier to discover and begin.",
      },
    },
    tech: ["Java", "JavaFX", "Scene Builder", "JUnit"],
    url: "https://github.com/henriiqueaze/Volumtarium",
    accent: "#2476a0",
    fit: "contain",
  },
  {
    slug: "task-manager",
    title: "Task Manager",
    image: taskManager,
    video: taskManagerVideo,
    year: "2024",
    category: { pt: "Aplicação desktop", en: "Desktop application" },
    description: {
      pt: "Uma ferramenta direta para organizar e acompanhar atividades diárias.",
      en: "A direct tool to organize and track daily activities.",
    },
    details: {
      pt: "Aplicação desktop focada em produtividade cotidiana, com criação, edição e acompanhamento de tarefas.",
      en: "A desktop app focused on everyday productivity, with task creation, editing and tracking.",
    },
    caseStudy: {
      pt: {
        challenge: "Criar uma ferramenta desktop simples o suficiente para o uso diário, mantendo os dados organizados e persistentes.",
        solution: "Uma interface focada nas ações essenciais de criar, editar, concluir e consultar tarefas em uma aplicação desktop empacotável.",
        contribution: "Estrutura da aplicação, interface com Tkinter, regras de gerenciamento e empacotamento com PyInstaller.",
        outcome: "Uma aplicação leve que consolidou fundamentos de produto desktop, persistência e organização de código em Python.",
      },
      en: {
        challenge: "Create a desktop tool simple enough for daily use while keeping task data organized and persistent.",
        solution: "An interface focused on the essential actions of creating, editing, completing and reviewing tasks in a distributable desktop application.",
        contribution: "Application structure, Tkinter interface, management rules and packaging with PyInstaller.",
        outcome: "A lightweight application that consolidated desktop product, persistence and Python code-organization fundamentals.",
      },
    },
    tech: ["Python", "Tkinter", "PyInstaller"],
    url: "https://github.com/henriiqueaze/Sistema-de-Gerenciamento-de-Tarefas",
    accent: "#0f6f9f",
    fit: "cover",
  },
  {
    slug: "pum",
    title: "P.U.M.",
    image: pum,
    video: pumVideo,
    year: "2024",
    category: { pt: "Ecossistema acadêmico", en: "Academic ecosystem" },
    description: {
      pt: "Plataforma de monitoria que integra alunos, monitores, atividades e cursos.",
      en: "A mentoring platform connecting students, tutors, activities and courses.",
    },
    details: {
      pt: "Um sistema acadêmico escalável para organizar inscrições e atendimentos.",
      en: "A scalable academic system for organizing registrations and sessions.",
    },
    caseStudy: {
      pt: {
        challenge: "Organizar alunos, monitores, cursos, atividades e atendimentos dentro de um único fluxo acadêmico.",
        solution: "Uma arquitetura orientada a domínio, com API REST e módulos preparados para evoluir conforme novas regras de monitoria.",
        contribution: "Modelagem do domínio, arquitetura do back-end, API, persistência SQL e estruturação dos principais fluxos.",
        outcome: "Uma base escalável para centralizar inscrições e atendimentos, reduzindo a fragmentação do processo de monitoria.",
      },
      en: {
        challenge: "Organize students, tutors, courses, activities and sessions within a single academic workflow.",
        solution: "A domain-oriented architecture with a REST API and modules designed to evolve with new tutoring rules.",
        contribution: "Domain modeling, back-end architecture, API, SQL persistence and core workflow structure.",
        outcome: "A scalable foundation for centralizing registrations and sessions while reducing fragmentation in the tutoring process.",
      },
    },
    tech: ["React", "TypeScript", "React Native", "Spring Boot", "PostgreSQL"],
    url: "https://github.com/henriiqueaze/PUM",
    accent: "#1481B8",
    fit: "contain",
  },
];
