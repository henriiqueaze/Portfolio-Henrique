import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiExternalLink,
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

const content = {
  pt: {
    nav: [["Sobre", "about"], ["Experiência", "experience"], ["Projetos", "projects"], ["Conhecimentos", "skills"], ["Contato", "contact"]],
    available: "Disponível para novos projetos",
    greeting: "Olá, eu sou",
    role: "Desenvolvedor Full-Stack",
    heroText: "Desenvolvo aplicações web completas, unindo interfaces intuitivas, APIs robustas e soluções que resolvem problemas reais.",
    projectsButton: "Ver projetos",
    contactButton: "Entrar em contato",
    aboutTitle: "Sobre mim",
    aboutText: "Sou desenvolvedor Full Stack com experiência em diferentes linguagens, frameworks e bancos de dados. Tenho facilidade em aprender novas tecnologias e me adaptar a diferentes stacks, sempre com foco em performance, escalabilidade e boas práticas.",
    aboutText2: "Gosto de participar de todo o processo de desenvolvimento — da modelagem e arquitetura à construção da interface — buscando sempre entregar produtos claros, confiáveis e agradáveis de usar.",
    resume: "Baixar currículo",
    stats: [["3+", "Anos de experiência"], ["6", "Projetos em destaque"], ["12+", "Tecnologias"]],
    experienceTitle: "Experiência profissional",
    experiences: [
      { period: "Jan 2026 — Atual", company: "MBA Consultoria & Sistemas", role: "Desenvolvedor Full-Stack", description: "Desenvolvimento e manutenção de aplicações web, APIs e soluções mobile para produtos em operação.", tags: ["C#", ".NET", "React", "SQL Server", "Azure"] },
      { period: "Jun 2023 — Atual", company: "Freelancer", role: "Desenvolvedor Full-Stack", description: "Desenvolvimento de aplicações completas, desde a modelagem do banco de dados até a experiência final do usuário.", tags: ["Java", "Spring Boot", "React", "Angular", "PostgreSQL"] },
    ],
    projectsTitle: "Projetos",
    projectsIntro: "Alguns dos projetos que desenvolvi para transformar ideias em soluções funcionais.",
    visit: "Ver projeto",
    projectData: [
      { title: "Cook-It", description: "Sistema de receitas baseado nos ingredientes disponíveis em casa.", image: cookIt, link: "https://cook-it-zeta.vercel.app/", tags: ["React", "Spring Boot", "PostgreSQL"] },
      { title: "StudentProgress", description: "Plataforma para cadastrar alunos, registrar notas e acompanhar o desempenho acadêmico.", image: studentProgress, link: "https://student-progress-livid.vercel.app/", tags: ["React", "Java", "API REST"] },
      { title: "Sociau", description: "Aplicação que conecta ONGs de resgate de animais com pessoas interessadas em adoção.", image: sociau, link: "https://github.com/Sociau", tags: ["Angular", "Java", "UX"] },
      { title: "Volumtarium", description: "Plataforma que conecta organizações e voluntários por perfil e localização.", image: volumtarium, link: "https://github.com/henriiqueaze/Volumtarium", tags: ["React", "Node.js", "Maps"] },
      { title: "Gerenciador de Tarefas", description: "Aplicação desktop simples e intuitiva para organizar atividades diárias.", image: taskManager, link: "https://github.com/henriiqueaze/Sistema-de-Gerenciamento-de-Tarefas", tags: ["Python", "Tkinter", "SQLite"] },
      { title: "PUM", description: "Plataforma acadêmica para integrar alunos, monitores, cursos e atividades.", image: pum, link: "https://github.com/henriiqueaze/PUM", tags: ["Java", "Spring Boot", "SQL"] },
    ],
    skillsTitle: "Conhecimentos",
    skillsText: "Tecnologias que utilizo para construir soluções completas e escaláveis.",
    contactTitle: "Vamos trabalhar juntos?",
    contactText: "Se você tem um projeto, uma oportunidade ou apenas quer conversar sobre tecnologia, será um prazer falar com você.",
    sendEmail: "Enviar e-mail",
    footer: "Desenvolvido por Henrique Azevedo",
    theme: "Alternar tema", language: "Switch to English", menu: "Abrir menu", close: "Fechar menu",
  },
  en: {
    nav: [["About", "about"], ["Experience", "experience"], ["Projects", "projects"], ["Skills", "skills"], ["Contact", "contact"]],
    available: "Available for new projects",
    greeting: "Hello, I'm",
    role: "Full-Stack Developer",
    heroText: "I build complete web applications, combining intuitive interfaces, robust APIs, and solutions that solve real problems.",
    projectsButton: "View projects",
    contactButton: "Get in touch",
    aboutTitle: "About me",
    aboutText: "I'm a Full Stack developer experienced across languages, frameworks, and databases. I learn new technologies quickly and adapt to different stacks, always focusing on performance, scalability, and good practices.",
    aboutText2: "I enjoy taking part in the whole development process — from modeling and architecture to the interface — always aiming to deliver clear, reliable, and pleasant products.",
    resume: "Download résumé",
    stats: [["3+", "Years of experience"], ["6", "Featured projects"], ["12+", "Technologies"]],
    experienceTitle: "Professional experience",
    experiences: [
      { period: "Jan 2026 — Present", company: "MBA Consulting & Systems", role: "Full-Stack Developer", description: "Development and maintenance of web applications, APIs, and mobile solutions for live products.", tags: ["C#", ".NET", "React", "SQL Server", "Azure"] },
      { period: "Jun 2023 — Present", company: "Freelancer", role: "Full-Stack Developer", description: "Building complete applications, from database modeling to the final user experience.", tags: ["Java", "Spring Boot", "React", "Angular", "PostgreSQL"] },
    ],
    projectsTitle: "Projects",
    projectsIntro: "A selection of projects built to turn ideas into functional solutions.",
    visit: "View project",
    projectData: [
      { title: "Cook-It", description: "A recipe system based on ingredients already available at home.", image: cookIt, link: "https://cook-it-zeta.vercel.app/", tags: ["React", "Spring Boot", "PostgreSQL"] },
      { title: "StudentProgress", description: "A platform for student records, grades, and academic progress.", image: studentProgress, link: "https://student-progress-livid.vercel.app/", tags: ["React", "Java", "REST API"] },
      { title: "Sociau", description: "An application connecting animal rescue NGOs with people interested in adoption.", image: sociau, link: "https://github.com/Sociau", tags: ["Angular", "Java", "UX"] },
      { title: "Volumtarium", description: "A platform connecting organizations and volunteers by profile and location.", image: volumtarium, link: "https://github.com/henriiqueaze/Volumtarium", tags: ["React", "Node.js", "Maps"] },
      { title: "Task Manager", description: "A simple desktop application for organizing daily activities.", image: taskManager, link: "https://github.com/henriiqueaze/Sistema-de-Gerenciamento-de-Tarefas", tags: ["Python", "Tkinter", "SQLite"] },
      { title: "PUM", description: "An academic platform connecting students, mentors, courses, and activities.", image: pum, link: "https://github.com/henriiqueaze/PUM", tags: ["Java", "Spring Boot", "SQL"] },
    ],
    skillsTitle: "Skills",
    skillsText: "Technologies I use to build complete and scalable solutions.",
    contactTitle: "Let's work together?",
    contactText: "If you have a project, an opportunity, or simply want to talk about technology, I'd be happy to hear from you.",
    sendEmail: "Send email",
    footer: "Developed by Henrique Azevedo",
    theme: "Toggle theme", language: "Mudar para português", menu: "Open menu", close: "Close menu",
  },
};

const technologies = ["Java", "Spring Boot", "C#", ".NET", "React", "Angular", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker", "Azure"];
const reveal = { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.5 } };

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      <span className="section-kicker">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-400 light:text-slate-600">{description}</p>}
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem("portfolio-language") || "pt");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[language];

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-400 selection:text-slate-950 light:bg-slate-50 light:text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-lg light:border-slate-200 light:bg-slate-50/90">
        <nav className="site-container flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="grid size-9 place-items-center rounded-lg bg-cyan-400 font-mono text-xs font-bold text-slate-950">HA</span>
            <span>Henrique Azevedo</span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {t.nav.map(([label, id]) => <a key={id} className="nav-link" href={`#${id}`}>{label}</a>)}
          </div>

          <div className="flex items-center gap-1">
            <button className="icon-button" onClick={() => setLanguage(language === "pt" ? "en" : "pt")} aria-label={t.language} title={t.language}><FiGlobe /><span className="text-[10px] font-bold uppercase">{language}</span></button>
            <button className="icon-button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={t.theme} title={t.theme}>{theme === "dark" ? <FiSun /> : <FiMoon />}</button>
            <button className="icon-button lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.close : t.menu}>{menuOpen ? <FiX /> : <FiMenu />}</button>
          </div>
        </nav>

        {menuOpen && <div className="border-t border-white/10 bg-slate-950 px-5 py-4 lg:hidden light:border-slate-200 light:bg-slate-50"><div className="site-container flex flex-col">{t.nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="border-b border-white/5 py-3 text-sm text-slate-300 last:border-0 light:border-slate-200 light:text-slate-700">{label}</a>)}</div></div>}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden pt-16">
          <div className="absolute right-0 top-20 size-96 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="site-container relative grid min-h-[calc(100vh-4rem)] items-center gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium text-cyan-400"><span className="size-2 rounded-full bg-cyan-400" />{t.available}</div>
              <p className="mb-3 text-lg font-medium text-slate-400 light:text-slate-600">{t.greeting}</p>
              <h1 className="text-5xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-6xl xl:text-7xl">Henrique Azevedo</h1>
              <h2 className="mt-4 text-2xl font-semibold text-cyan-400 sm:text-3xl">{t.role}</h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg light:text-slate-600">{t.heroText}</p>
              <div className="mt-8 flex flex-wrap gap-3"><a href="#projects" className="button-primary">{t.projectsButton}<FiArrowRight /></a><a href="#contact" className="button-secondary">{t.contactButton}</a></div>
              <div className="mt-9 flex gap-3"><a className="social-button" href="https://github.com/henriiqueaze" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a><a className="social-button" href="https://www.linkedin.com/in/henrique-azevedo-b2195b2b0/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a><a className="social-button" href="mailto:henriquee.aze.dev@gmail.com" aria-label="E-mail"><FiMail /></a></div>
            </motion.div>

            <motion.div className="mx-auto w-full max-w-md" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.6 }}>
              <div className="relative rounded-3xl border border-white/10 bg-slate-900 p-3 shadow-2xl shadow-black/30 light:border-slate-200 light:bg-white light:shadow-slate-300/50">
                <img src={profilePhoto} alt="Henrique Azevedo" className="aspect-[4/5] w-full rounded-2xl object-cover" />
                <div className="absolute -bottom-5 -left-5 rounded-xl border border-white/10 bg-slate-900 px-5 py-3 shadow-xl light:border-slate-200 light:bg-white"><span className="block text-xs text-slate-400 light:text-slate-500">Stack principal</span><strong className="text-sm">React · Java · .NET</strong></div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section-block bg-slate-900/45 light:bg-white">
          <motion.div {...reveal} className="site-container grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <SectionHeading eyebrow="01" title={t.aboutTitle} />
            <div>
              <p className="text-xl font-medium leading-8 sm:text-2xl">{t.aboutText}</p>
              <p className="mt-5 leading-7 text-slate-400 light:text-slate-600">{t.aboutText2}</p>
              <div className="mt-8 flex flex-wrap gap-4"><a href={`${import.meta.env.BASE_URL}${language === "pt" ? "Henrique Azevedo - Currículo - Desenvolvedor - (Português).pdf" : "Henrique Azevedo - Resume - Developer - (English).pdf"}`} target="_blank" rel="noreferrer" className="button-secondary">{t.resume}<FiDownload /></a></div>
              <div className="mt-10 grid grid-cols-3 gap-3">{t.stats.map(([value, label]) => <div key={label} className="rounded-xl border border-white/10 bg-slate-950/50 p-4 light:border-slate-200 light:bg-slate-50"><strong className="block text-2xl text-cyan-400 sm:text-3xl">{value}</strong><span className="mt-1 block text-[11px] leading-4 text-slate-400 light:text-slate-600">{label}</span></div>)}</div>
            </div>
          </motion.div>
        </section>

        <section id="experience" className="section-block">
          <motion.div {...reveal} className="site-container">
            <SectionHeading eyebrow="02" title={t.experienceTitle} />
            <div className="space-y-5">{t.experiences.map((experience) => <article key={experience.company} className="content-card grid gap-6 p-6 md:grid-cols-[180px_1fr] sm:p-8"><p className="text-sm font-medium text-cyan-400">{experience.period}</p><div><h3 className="text-xl font-semibold">{experience.company}</h3><p className="mt-1 text-sm font-medium text-slate-300 light:text-slate-700">{experience.role}</p><p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 light:text-slate-600">{experience.description}</p><div className="mt-5 flex flex-wrap gap-2">{experience.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div></div></article>)}</div>
          </motion.div>
        </section>

        <section id="projects" className="section-block bg-slate-900/45 light:bg-white">
          <motion.div {...reveal} className="site-container">
            <SectionHeading eyebrow="03" title={t.projectsTitle} description={t.projectsIntro} />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{t.projectData.map(project => <a key={project.title} href={project.link} target="_blank" rel="noreferrer" className="project-card group"><div className="aspect-video overflow-hidden bg-slate-800 light:bg-slate-100"><img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" /></div><div className="flex flex-1 flex-col p-5"><div className="flex items-start justify-between gap-4"><h3 className="text-lg font-semibold">{project.title}</h3><FiExternalLink className="mt-1 shrink-0 text-slate-500 group-hover:text-cyan-400" /></div><p className="mt-3 flex-1 text-sm leading-6 text-slate-400 light:text-slate-600">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400">{t.visit}<FiArrowRight /></span></div></a>)}</div>
          </motion.div>
        </section>

        <section id="skills" className="section-block">
          <motion.div {...reveal} className="site-container">
            <SectionHeading eyebrow="04" title={t.skillsTitle} description={t.skillsText} />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{technologies.map((tech, index) => <div key={tech} className="content-card flex items-center gap-4 p-4"><span className="grid size-9 shrink-0 place-items-center rounded-lg bg-cyan-400/10 font-mono text-xs font-bold text-cyan-400">{String(index + 1).padStart(2, "0")}</span><span className="text-sm font-semibold">{tech}</span></div>)}</div>
          </motion.div>
        </section>

        <section id="contact" className="section-block bg-slate-900/45 light:bg-white">
          <motion.div {...reveal} className="site-container"><div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-transparent p-7 text-center sm:p-12"><span className="section-kicker">05</span><h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{t.contactTitle}</h2><p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400 light:text-slate-600">{t.contactText}</p><a href="mailto:henriquee.aze.dev@gmail.com" className="button-primary mt-8">{t.sendEmail}<FiMail /></a></div></motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-7 light:border-slate-200"><div className="site-container flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row"><p>© 2026 · {t.footer}</p><div className="flex gap-4"><a href="https://github.com/henriiqueaze" target="_blank" rel="noreferrer" className="hover:text-cyan-400">GitHub</a><a href="https://www.linkedin.com/in/henrique-azevedo-b2195b2b0/" target="_blank" rel="noreferrer" className="hover:text-cyan-400">LinkedIn</a></div></div></footer>
    </div>
  );
}
