import mbaLogo from "../assets/images/experiences/mba-logo.jpg";
import freelancerLogo from "../assets/images/experiences/freelancer-logo.png";

const experiences = [
  {
    company: "MBA Consultoria & Sistemas",
    logo: mbaLogo,
    role: {
      pt: "Estagiário de Desenvolvimento Full-Stack",
      en: "Full-Stack Development Intern",
    },
    period: {
      pt: "Jan 2026 - Atualmente",
      en: "Jan 2026 - Present",
    },
    location: {
      pt: "Remoto",
      en: "Remote",
    },
    shortDesc: {
      pt: "Desenvolvimento e manutenção de aplicações web com C#/.NET, JavaScript/React e SQL Server.",
      en: "Development and maintenance of web applications using C#/.NET, JavaScript/React, and SQL Server.",
    },
    responsibilities: [
      {
        pt: "Desenvolvimento de APIs RESTful com C#/.NET",
        en: "Building RESTful APIs with C#/.NET",
      },
      {
        pt: "Criação de sistemas web com React",
        en: "Creating web systems with React",
      },
      {
        pt: "Aplicações mobile com React Native",
        en: "Mobile applications with React Native",
      },
      {
        pt: "Correção de bugs e refatoração",
        en: "Bug fixing and refactoring",
      },
      {
        pt: "Versionamento com Git",
        en: "Version control with Git",
      },
    ],
    projects: [
      {
        title: "ERP Wiizi",
        description: {
          pt: "Sistema de gestão empresarial",
          en: "Business management system",
        },
        link: "https://wiizi.com.br/",
      },
      {
        title: "Integralmed Delivery",
        description: {
          pt: "Farmácia online",
          en: "Online pharmacy",
        },
        link: "https://integralmed.com.br/",
      },
      {
        title: "Wiizi Atendimento",
        description: {
          pt: "Sistema para atendimento de empresas",
          en: "Business support system",
        },
        link: "https://atendimento.wiizi2.com.br/",
      },
    ],
    technologies: [
      "C#",
      "ASP.NET",
      "SQL Server",
      "React",
      "Bootstrap",
      "Git",
      "Azure",
    ],
  },
  {
    company: "Freelancer",
    logo: freelancerLogo,
    role: {
      pt: "Desenvolvedor Full-Stack",
      en: "Full-Stack Developer",
    },
    period: {
      pt: "Jun 2023 - Atualmente",
      en: "Jun 2023 - Present",
    },
    location: {
      pt: "Remoto",
      en: "Remote",
    },
    shortDesc: {
      pt: "Atuação como desenvolvedor full-stack freelancer em aplicações web completas.",
      en: "Working as a freelance full-stack developer on complete web applications.",
    },
    responsibilities: [
      {
        pt: "Desenvolvimento de APIs REST modernas",
        en: "Developing modern REST APIs",
      },
      {
        pt: "Modelagem de banco de dados escalável",
        en: "Designing scalable database models",
      },
      {
        pt: "Interfaces com React e Angular",
        en: "Building interfaces with React and Angular",
      },
      {
        pt: "Versionamento com Git",
        en: "Version control with Git",
      },
      {
        pt: "Refatoração de código",
        en: "Code refactoring",
      },
    ],
    projects: [
      {
        title: "Cook-It",
        description: {
          pt: "Busca por receitas com ingredientes disponíveis na sua casa",
          en: "Recipe search using ingredients available at home",
        },
        link: "https://cook-it-zeta.vercel.app/",
      },
      {
        title: "Sociau",
        description: {
          pt: "Aplicação que conecta ONGs de resgate de animais com adotantes",
          en: "Application that connects animal rescue NGOs with adopters",
        },
        link: "https://github.com/orgs/Sociau/repositories",
      },
      {
        title: "StudentProgress",
        description: {
          pt: "Aplicação para gerenciar e acompanhar dados acadêmicos",
          en: "Application to manage and track academic data",
        },
        link: "https://github.com/henriiqueaze/StudentProgress",
      },
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "JavaScript",
      "TypeScript",
      "NodeJS",
      "Angular",
      "React",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "Git",
    ],
  },
];

export default experiences;
