import mbaLogo from "../assets/images/experiences/mba-logo.jpg";
import freelancerLogo from "../assets/images/experiences/freelancer-logo.png";

const experiences = [
  {
    company: "MBA Consultoria & Sistemas",
    logo: mbaLogo,
    role: "Estagiário de Desenvolvimento Full-Stack",
    period: "Jan 2026 - Atualmente",
    location: "Remoto",
    shortDesc:
      "Desenvolvimento e manutenção de aplicações web com C#/.NET, JavaScript/React e SQL Server.",
    responsibilities: [
      "Desenvolvimento de APIs RESTful com C#/.NET",
      "Criação de sistemas web com React",
      "Aplicações mobile com React Native",
      "Correção de bugs e refatoração",
      "Versionamento com Git",
    ],
    projects: [
      {
        title: "ERP Wiizi",
        description: "Sistema de gestão empresarial",
        link: "https://wiizi.com.br/",
      },
      {
        title: "Wiizi Vendas",
        description: "Aplicativo para gestão empresarial",
        link: "https://wiizi.com.br/",
      },
      {
        title: "Integralmed Delivery",
        description: "Farmácia online",
        link: "https://integralmed.com.br/",
      },
    ],
    technologies: ["C#", "ASP.NET", "SQL Server", "React", "Git"],
  },
  {
    company: "Freelancer",
    logo: freelancerLogo,
    role: "Desenvolvedor Full-Stack",
    period: "Jun 2023 - Atualmente",
    location: "Remoto",
    shortDesc:
      "Atuação como desenvolvedor full-stack freelancer em aplicações web completas.",
    responsibilities: [
      "Desenvolvimento de APIs REST modernas",
      "Modelagem de banco de dados escalável",
      "Interfaces com React e Angular",
      "Versionamento com Git",
      "Refatoração de código",
    ],
    projects: [
      {
        title: "Sociau",
        description:
          "Aplicação que conecta ONGs de resgate de animais com adotantes",
        link: "https://github.com/orgs/Sociau/repositories",
      },
      {
        title: "Plataforma Universal de Monitoria",
        description: "Gerenciamento de monitorias acadêmicas",
        link: "https://github.com/henriiqueaze/PUM",
      },
      {
        title: "StudentProgress",
        description: "Aplicação para gerenciar e acompanhar dados acadêmicos",
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
