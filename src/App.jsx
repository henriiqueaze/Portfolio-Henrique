import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiMoon,
  FiSun,
  FiX,
} from "react-icons/fi";
import profilePhoto from "./assets/images/henrique-picture.jpg";
import cookIt from "./assets/images/projects/cook-it.jpg";
import studentProgress from "./assets/images/projects/student-progress-logo.png";
import sociau from "./assets/images/projects/sociau-logo.jpg";
import volumtarium from "./assets/images/projects/volumtarium-logo.png";
import taskManager from "./assets/images/projects/gerenciamento-de-tarefas-layout.png";
import pum from "./assets/images/projects/pum.png";

const projectAssets = [
  { image: cookIt, link: "https://cook-it-zeta.vercel.app/", fit: "cover", color: "bg-[#231f20]" },
  { image: studentProgress, link: "https://student-progress-livid.vercel.app/", fit: "contain", color: "bg-[#edf5ff]" },
  { image: sociau, link: "https://github.com/Sociau", fit: "cover", color: "bg-[#e9ded5]" },
  { image: volumtarium, link: "https://github.com/henriiqueaze/Volumtarium", fit: "contain", color: "bg-[#eef1ec]" },
  { image: taskManager, link: "https://github.com/henriiqueaze/Sistema-de-Gerenciamento-de-Tarefas", fit: "cover", color: "bg-[#dce6ef]" },
  { image: pum, link: "https://github.com/henriiqueaze/PUM", fit: "contain", color: "bg-[#f3f1ec]" },
];

const translations = {
  pt: {
    nav: [["Projetos", "work"], ["Sobre", "about"], ["Experiência", "experience"], ["Contato", "contact"]],
    status: "Disponível para projetos",
    intro: "Desenvolvedor Full-Stack",
    hero: "Construo produtos digitais completos, do primeiro componente à infraestrutura que mantém tudo funcionando.",
    explore: "Explorar trabalho",
    location: "São Paulo, Brasil",
    workEyebrow: "Trabalho selecionado",
    workTitle: "Alguns projetos.",
    projectAction: "Visitar projeto",
    projects: [
      { title: "Cook-It", type: "Aplicação web · 2026", description: "Receitas inteligentes a partir dos ingredientes disponíveis na sua casa.", tags: ["React", "Spring Boot", "PostgreSQL"] },
      { title: "StudentProgress", type: "Plataforma educacional · 2025", description: "Gestão acadêmica simples para acompanhar alunos, notas e desempenho.", tags: ["React", "Java", "REST API"] },
      { title: "Sociau", type: "Produto social · 2025", description: "Uma ponte entre ONGs de resgate animal e pessoas que desejam adotar.", tags: ["Angular", "Java", "UX"] },
      { title: "Volumtarium", type: "Plataforma social · 2024", description: "Conecta organizações e voluntários de acordo com perfil e localização.", tags: ["React", "Node.js", "Maps"] },
      { title: "Gerenciador de Tarefas", type: "Aplicação desktop · 2024", description: "Organização de atividades diárias em uma experiência simples e direta.", tags: ["Python", "Tkinter", "SQLite"] },
      { title: "PUM", type: "Plataforma acadêmica · 2024", description: "Um ecossistema para integrar alunos, monitores, cursos e atividades.", tags: ["Java", "Spring Boot", "SQL"] },
    ],
    aboutEyebrow: "Um pouco sobre mim",
    aboutTitle: "Código, produto e curiosidade.",
    aboutText: "Sou Henrique, desenvolvedor Full Stack. Gosto de entender o problema antes de abrir o editor e de acompanhar o produto por inteiro — da modelagem dos dados à experiência final.",
    aboutText2: "Trabalho com diferentes stacks e aprendo rápido quando o projeto pede algo novo. Meu foco é escrever software claro, escalável e realmente útil para quem está do outro lado da tela.",
    resume: "Abrir currículo",
    now: "Atualmente",
    currentRole: "Desenvolvedor Full-Stack na MBA Consultoria & Sistemas.",
    since: "Desde 2023",
    independent: "Construindo produtos e projetos independentes.",
    experienceNumber: "3+",
    experienceLabel: "anos criando software",
    stackLabel: "Stack que uso hoje",
    experienceEyebrow: "Trajetória",
    experienceTitle: "Experiência.",
    experience: [
      { period: "2026 — hoje", company: "MBA Consultoria & Sistemas", role: "Desenvolvedor Full-Stack", description: "Desenvolvimento e evolução de aplicações web, APIs e produtos mobile em operação.", technologies: "C# · .NET · React · SQL Server · Azure" },
      { period: "2023 — hoje", company: "Freelancer", role: "Desenvolvedor Full-Stack", description: "Projetos completos para diferentes contextos, da arquitetura à entrega da interface.", technologies: "Java · Spring Boot · React · Angular · PostgreSQL" },
    ],
    contactEyebrow: "Contato",
    contactTitle: "Vamos construir algo juntos?",
    contactText: "Estou aberto a novos projetos, oportunidades e boas conversas sobre tecnologia.",
    email: "Enviar um e-mail",
    footer: "Projetado e desenvolvido por Henrique Azevedo",
    theme: "Alternar tema", language: "Switch to English", menu: "Abrir menu", close: "Fechar menu",
  },
  en: {
    nav: [["Work", "work"], ["About", "about"], ["Experience", "experience"], ["Contact", "contact"]],
    status: "Available for projects",
    intro: "Full-Stack Developer",
    hero: "I build complete digital products, from the first component to the infrastructure that keeps everything running.",
    explore: "Explore my work",
    location: "São Paulo, Brazil",
    workEyebrow: "Selected work",
    workTitle: "A few projects.",
    projectAction: "Visit project",
    projects: [
      { title: "Cook-It", type: "Web application · 2026", description: "Smart recipes built around the ingredients already available at home.", tags: ["React", "Spring Boot", "PostgreSQL"] },
      { title: "StudentProgress", type: "Education platform · 2025", description: "Simple academic management for students, grades, and performance.", tags: ["React", "Java", "REST API"] },
      { title: "Sociau", type: "Social product · 2025", description: "A bridge between animal rescue NGOs and people looking to adopt.", tags: ["Angular", "Java", "UX"] },
      { title: "Volumtarium", type: "Social platform · 2024", description: "Connecting organizations and volunteers by profile and location.", tags: ["React", "Node.js", "Maps"] },
      { title: "Task Manager", type: "Desktop application · 2024", description: "Daily activity management through a simple, direct experience.", tags: ["Python", "Tkinter", "SQLite"] },
      { title: "PUM", type: "Academic platform · 2024", description: "An ecosystem connecting students, mentors, courses, and activities.", tags: ["Java", "Spring Boot", "SQL"] },
    ],
    aboutEyebrow: "A little about me",
    aboutTitle: "Code, product, and curiosity.",
    aboutText: "I'm Henrique, a Full Stack developer. I like to understand the problem before opening the editor and to follow the entire product — from data modeling to the final experience.",
    aboutText2: "I work across different stacks and learn quickly when a project asks for something new. My focus is writing software that is clear, scalable, and genuinely useful for the person on the other side of the screen.",
    resume: "Open résumé",
    now: "Currently",
    currentRole: "Full-Stack Developer at MBA Consulting & Systems.",
    since: "Since 2023",
    independent: "Building products and independent projects.",
    experienceNumber: "3+",
    experienceLabel: "years building software",
    stackLabel: "Stack I use today",
    experienceEyebrow: "Journey",
    experienceTitle: "Experience.",
    experience: [
      { period: "2026 — present", company: "MBA Consulting & Systems", role: "Full-Stack Developer", description: "Building and evolving web applications, APIs, and live mobile products.", technologies: "C# · .NET · React · SQL Server · Azure" },
      { period: "2023 — present", company: "Freelance", role: "Full-Stack Developer", description: "End-to-end projects for different contexts, from architecture to interface delivery.", technologies: "Java · Spring Boot · React · Angular · PostgreSQL" },
    ],
    contactEyebrow: "Contact",
    contactTitle: "Let's build something together?",
    contactText: "I'm open to new projects, opportunities, and good conversations about technology.",
    email: "Send an email",
    footer: "Designed and developed by Henrique Azevedo",
    theme: "Toggle theme", language: "Mudar para português", menu: "Open menu", close: "Close menu",
  },
};

const stack = ["Java", "Spring Boot", "C#", ".NET", "React", "Angular", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker", "Azure"];
const reveal = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-70px" }, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } };

function SectionHeader({ eyebrow, title }) {
  return <div className="section-heading"><p>{eyebrow}</p><h2>{title}</h2></div>;
}

export default function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem("portfolio-language") || "pt");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[language];

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  return (
    <div className="page-shell">
      <div className="page-grid" aria-hidden="true"><i /><i /><i /><i /><i /></div>

      <header className="topbar">
        <nav className="layout flex h-full items-center justify-between">
          <a href="#home" className="wordmark">H<span>/</span>A</a>
          <div className="hidden items-center gap-7 md:flex">{t.nav.map(([label, id]) => <a className="nav-item" key={id} href={`#${id}`}>{label}</a>)}</div>
          <div className="flex items-center gap-1">
            <button className="utility-button" onClick={() => setLanguage(language === "pt" ? "en" : "pt")} aria-label={t.language}><FiGlobe /><span>{language}</span></button>
            <button className="utility-button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={t.theme}>{theme === "dark" ? <FiSun /> : <FiMoon />}</button>
            <button className="utility-button md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.close : t.menu}>{menuOpen ? <FiX /> : <FiMenu />}</button>
          </div>
        </nav>
        {menuOpen && <div className="mobile-menu">{t.nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<FiArrowDownRight /></a>)}</div>}
      </header>

      <main>
        <section id="home" className="hero layout">
          <motion.div className="hero-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
            <div className="status-pill"><span />{t.status}</div>
            <p className="hero-role">{t.intro}</p>
            <h1>Henrique<br />Azevedo</h1>
            <p className="hero-summary">{t.hero}</p>
            <a href="#work" className="outline-button">{t.explore}<FiArrowDownRight /></a>
          </motion.div>
          <div className="hero-meta"><span>© 2026</span><span>{t.location}</span></div>
        </section>

        <section id="work" className="section layout">
          <motion.div {...reveal}><SectionHeader eyebrow={t.workEyebrow} title={t.workTitle} /></motion.div>
          <div className="project-list">
            {t.projects.map((project, index) => {
              const asset = projectAssets[index];
              return (
                <motion.a {...reveal} href={asset.link} target="_blank" rel="noreferrer" className="project" key={project.title}>
                  <div className={`project-visual ${asset.color}`}>
                    <img src={asset.image} alt={project.title} className={asset.fit === "contain" ? "object-contain p-[12%]" : "object-cover"} />
                    <span className="project-index">0{index + 1}</span>
                    <span className="project-open"><FiArrowUpRight /></span>
                  </div>
                  <div className="project-info">
                    <div><p className="project-type">{project.type}</p><h3>{project.title}</h3></div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </section>

        <section id="about" className="section layout">
          <motion.div {...reveal}><SectionHeader eyebrow={t.aboutEyebrow} title={t.aboutTitle} /></motion.div>
          <motion.div {...reveal} className="about-grid">
            <div className="about-copy tile tile-large">
              <p>{t.aboutText}</p><p>{t.aboutText2}</p>
              <a href={`${import.meta.env.BASE_URL}${language === "pt" ? "Henrique Azevedo - Currículo - Desenvolvedor - (Português).pdf" : "Henrique Azevedo - Resume - Developer - (English).pdf"}`} target="_blank" rel="noreferrer" className="text-link">{t.resume}<FiDownload /></a>
            </div>
            <div className="portrait-tile tile"><img src={profilePhoto} alt="Henrique Azevedo" /></div>
            <div className="tile small-story"><span>{t.now}</span><p>{t.currentRole}</p></div>
            <div className="tile small-story"><span>{t.since}</span><p>{t.independent}</p></div>
            <div className="tile number-tile"><strong>{t.experienceNumber}</strong><span>{t.experienceLabel}</span></div>
            <div className="tile stack-tile"><span>{t.stackLabel}</span><div>{stack.map(item => <b key={item}>{item}</b>)}</div></div>
          </motion.div>
        </section>

        <section id="experience" className="section layout">
          <motion.div {...reveal}><SectionHeader eyebrow={t.experienceEyebrow} title={t.experienceTitle} /></motion.div>
          <motion.div {...reveal} className="experience-list">
            {t.experience.map(item => <article key={item.company} className="experience-row"><p className="experience-period">{item.period}</p><div><h3>{item.company}</h3><span>{item.role}</span></div><div><p>{item.description}</p><small>{item.technologies}</small></div></article>)}
          </motion.div>
        </section>

        <section id="contact" className="contact-section layout">
          <motion.div {...reveal} className="contact-inner">
            <p className="contact-eyebrow">{t.contactEyebrow}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <a className="outline-button" href="mailto:henriquee.aze.dev@gmail.com">{t.email}<FiMail /></a>
          </motion.div>
        </section>
      </main>

      <footer className="footer layout"><p>© 2026 · {t.footer}</p><div><a href="https://github.com/henriiqueaze" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a><a href="https://www.linkedin.com/in/henrique-azevedo-b2195b2b0/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a><a href="mailto:henriquee.aze.dev@gmail.com" aria-label="E-mail"><FiMail /></a></div></footer>
    </div>
  );
}
