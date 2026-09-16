import mbaLogo from "../assets/images/experiences/mba-logo.jpg";
import freelancerLogo from "../assets/images/experiences/freelancer-logo.png";

export const experiences = [
  {
    period: { pt: "Jan 2026 — Hoje", en: "Jan 2026 — Present" },
    company: { pt: "MBA Consultoria & Sistemas", en: "MBA Consultoria & Sistemas" },
    role: { pt: "Desenvolvedor Full-Stack", en: "Full-Stack Developer" },
    logo: mbaLogo,
    location: { pt: "Remoto", en: "Remote" },
    summary: {
      pt: "Desenvolvimento e manutenção de aplicações utilizadas em operações reais, conectando regras de negócio, interfaces, APIs e dados.",
      en: "Development and maintenance of applications used in real operations, connecting business rules, interfaces, APIs and data.",
    },
    items: {
      pt: [
        "APIs RESTful com C# e .NET",
        "Sistemas web com React",
        "Aplicações mobile com React Native",
        "SQL Server, Git, Azure, correção de bugs e refatoração",
      ],
      en: [
        "RESTful APIs with C# and .NET",
        "Web systems with React",
        "Mobile applications with React Native",
        "SQL Server, Git, Azure, bug fixing and refactoring",
      ],
    },
    products: [
      { name: "ERP Wiizi", url: "https://wiizi.com.br/" },
      { name: "Integralmed Delivery", url: "https://integralmed.com.br/" },
      {
        name: "Wiizi Atendimento",
        url: "https://atendimento.wiizi2.com.br/",
      },
    ],
    tech: [
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
    period: { pt: "Jun 2023 — Hoje", en: "Jun 2023 — Present" },
    company: { pt: "Independente / Freelancer", en: "Independent / Freelance" },
    role: { pt: "Desenvolvedor Full-Stack", en: "Full-Stack Developer" },
    logo: freelancerLogo,
    location: { pt: "Remoto", en: "Remote" },
    summary: {
      pt: "Criação de aplicações web completas, da descoberta e arquitetura à interface, publicação e evolução contínua.",
      en: "Building complete web applications, from discovery and architecture to interface, deployment and continuous evolution.",
    },
    items: {
      pt: [
        "APIs REST modernas e autenticação",
        "Modelagem de bancos de dados escaláveis",
        "Interfaces com React e Angular",
        "Deploy, Git e refatoração contínua",
      ],
      en: [
        "Modern REST APIs and authentication",
        "Scalable database modeling",
        "Interfaces with React and Angular",
        "Deployment, Git and continuous refactoring",
      ],
    },
    products: [
      { name: "Cook—It", url: "https://cook-it-zeta.vercel.app/" },
      {
        name: "Sociau",
        url: "https://github.com/orgs/Sociau/repositories",
      },
      {
        name: "StudentProgress",
        url: "https://github.com/henriiqueaze/StudentProgress",
      },
    ],
    tech: [
      "Java",
      "Spring Boot",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Angular",
      "React",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "Git",
    ],
  },
];
