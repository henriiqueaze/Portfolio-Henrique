import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiGlobe,
  FiGrid,
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

const ui = {
  pt: {
    nav: [["Projetos", "projects"], ["Fragmentos", "about"], ["Experiência", "experience"], ["Contato", "contact"]],
    available: "Disponível para novos projetos",
    role: "Desenvolvedor Full-Stack",
    statement: "Transformo ideias em produtos digitais claros, rápidos e prontos para crescer.",
    explore: "Explorar portfólio",
    based: "São Paulo, Brasil",
    projectsLabel: "Trabalho selecionado",
    projectsTitle: "Alguns projetos.",
    projectsIntro: "Produtos que combinam engenharia, experiência e atenção aos detalhes.",
    open: "Abrir projeto",
    fragmentsLabel: "Um pouco sobre mim",
    fragmentsTitle: "Fragmentos de quem eu sou.",
    aboutLead: "Sou um desenvolvedor que gosta de entender o produto inteiro, não apenas a tarefa da vez.",
    aboutBody: "Trabalho da interface ao banco de dados, transformando necessidades reais em software claro e confiável. Tenho facilidade para aprender novas tecnologias e gosto de colaborar desde a ideia inicial até a entrega.",
    resume: "Abrir currículo",
    currentLabel: "Agora",
    current: "Desenvolvendo produtos web na MBA Consultoria & Sistemas.",
    independentLabel: "Desde 2023",
    independent: "Criando aplicações e produtos independentes como freelancer.",
    years: "anos construindo software",
    terminalTitle: "henrique@portfolio — skills",
    terminalLines: ["> carregando curiosidade...", "> conectando frontend + backend", "> entregando produto com cuidado", "✓ pronto para o próximo desafio"],
    stackLabel: "Ferramentas que uso",
    experienceLabel: "Currículo",
    experienceTitle: "Experiência.",
    educationLabel: "Formação contínua",
    education: "Desenvolvimento guiado por prática, projetos reais e aprendizado constante.",
    contactLabel: "Vamos conversar",
    contactTitle: "Tem uma ideia? Vamos construir.",
    contactBody: "Estou aberto a projetos, oportunidades e conversas interessantes sobre tecnologia.",
    email: "Enviar um e-mail",
    footer: "Desenvolvido por Henrique Azevedo",
    theme: "Alternar tema", language: "Switch to English", grid: "Mostrar ou ocultar grade", menu: "Abrir menu", close: "Fechar menu",
  },
  en: {
    nav: [["Projects", "projects"], ["Fragments", "about"], ["Experience", "experience"], ["Contact", "contact"]],
    available: "Available for new projects",
    role: "Full-Stack Developer",
    statement: "I turn ideas into digital products that are clear, fast, and ready to grow.",
    explore: "Explore portfolio",
    based: "São Paulo, Brazil",
    projectsLabel: "Selected work",
    projectsTitle: "A few projects.",
    projectsIntro: "Products combining engineering, experience, and attention to detail.",
    open: "Open project",
    fragmentsLabel: "A little about me",
    fragmentsTitle: "Fragments of who I am.",
    aboutLead: "I'm a developer who likes to understand the whole product, not just the task at hand.",
    aboutBody: "I work from interface to database, turning real needs into clear and reliable software. I learn new technologies quickly and enjoy collaborating from the first idea through delivery.",
    resume: "Open résumé",
    currentLabel: "Now",
    current: "Building web products at MBA Consulting & Systems.",
    independentLabel: "Since 2023",
    independent: "Creating independent applications and products as a freelancer.",
    years: "years building software",
    terminalTitle: "henrique@portfolio — skills",
    terminalLines: ["> loading curiosity...", "> connecting frontend + backend", "> shipping products with care", "✓ ready for the next challenge"],
    stackLabel: "Tools I use",
    experienceLabel: "Résumé",
    experienceTitle: "Experience.",
    educationLabel: "Continuous learning",
    education: "Development shaped by practice, real projects, and constant learning.",
    contactLabel: "Let's talk",
    contactTitle: "Have an idea? Let's build it.",
    contactBody: "I'm open to projects, opportunities, and interesting conversations about technology.",
    email: "Send an email",
    footer: "Developed by Henrique Azevedo",
    theme: "Toggle theme", language: "Mudar para português", grid: "Show or hide grid", menu: "Open menu", close: "Close menu",
  },
};

const projects = [
  { title: "Cook-It", image: cookIt, link: "https://cook-it-zeta.vercel.app/", fit: "cover", background: "#211d1e", year: "2026", category: { pt: "Produto web", en: "Web product" }, description: { pt: "Receitas inteligentes usando o que já existe na sua cozinha.", en: "Smart recipes using what is already available in your kitchen." }, tags: ["React", "Spring Boot", "PostgreSQL"] },
  { title: "StudentProgress", image: studentProgress, link: "https://student-progress-livid.vercel.app/", fit: "contain", background: "#e7f0fb", year: "2025", category: { pt: "Educação", en: "Education" }, description: { pt: "Gestão acadêmica para acompanhar alunos, notas e evolução.", en: "Academic management for students, grades, and progress." }, tags: ["React", "Java", "REST"] },
  { title: "Sociau", image: sociau, link: "https://github.com/Sociau", fit: "cover", background: "#e9ded5", year: "2025", category: { pt: "Impacto social", en: "Social impact" }, description: { pt: "Conectando ONGs de resgate animal a pessoas que querem adotar.", en: "Connecting animal rescue NGOs with people looking to adopt." }, tags: ["Angular", "Java", "UX"] },
  { title: "Volumtarium", image: volumtarium, link: "https://github.com/henriiqueaze/Volumtarium", fit: "contain", background: "#e8eee7", year: "2024", category: { pt: "Voluntariado", en: "Volunteering" }, description: { pt: "Oportunidades sociais encontradas por perfil e localização.", en: "Social opportunities discovered by profile and location." }, tags: ["React", "Node.js", "Maps"] },
  { title: "Gerenciador de Tarefas", image: taskManager, link: "https://github.com/henriiqueaze/Sistema-de-Gerenciamento-de-Tarefas", fit: "cover", background: "#dce6ef", year: "2024", category: { pt: "Aplicação desktop", en: "Desktop app" }, description: { pt: "Uma forma direta de organizar e acompanhar atividades diárias.", en: "A direct way to organize and track daily activities." }, tags: ["Python", "Tkinter", "SQLite"] },
  { title: "PUM", image: pum, link: "https://github.com/henriiqueaze/PUM", fit: "contain", background: "#f1eee8", year: "2024", category: { pt: "Educação", en: "Education" }, description: { pt: "Ecossistema acadêmico para alunos, monitores e cursos.", en: "An academic ecosystem for students, mentors, and courses." }, tags: ["Java", "Spring Boot", "SQL"] },
];

const experiences = [
  {
    period: { pt: "2026 — hoje", en: "2026 — present" },
    company: "MBA Consultoria & Sistemas",
    role: { pt: "Desenvolvedor Full-Stack", en: "Full-Stack Developer" },
    summary: { pt: "Construção e evolução de produtos digitais utilizados em operações reais.", en: "Building and evolving digital products used in real-world operations." },
    work: { pt: ["APIs REST com C# e .NET", "Interfaces web em React", "Aplicações com React Native", "Manutenção, refatoração e qualidade"], en: ["REST APIs with C# and .NET", "Web interfaces with React", "Applications with React Native", "Maintenance, refactoring, and quality"] },
    stack: ["C#", ".NET", "React", "SQL Server", "Azure"],
  },
  {
    period: { pt: "2023 — hoje", en: "2023 — present" },
    company: "Freelancer",
    role: { pt: "Desenvolvedor Full-Stack", en: "Full-Stack Developer" },
    summary: { pt: "Produtos completos para diferentes contextos, da arquitetura à experiência final.", en: "End-to-end products for different contexts, from architecture to final experience." },
    work: { pt: ["Arquitetura e modelagem de dados", "Desenvolvimento de APIs e integrações", "Interfaces responsivas", "Entrega e evolução contínua"], en: ["Architecture and data modeling", "API development and integrations", "Responsive interfaces", "Delivery and continuous evolution"] },
    stack: ["Java", "Spring Boot", "React", "Angular", "PostgreSQL"],
  },
];

const stack = ["Java", "Spring Boot", "C#", ".NET", "React", "Angular", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker", "Azure"];
const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } };

function SectionTitle({ label, title, intro }) {
  return <div className="section-title-block"><p>{label}</p><div><h2>{title}</h2>{intro && <span>{intro}</span>}</div></div>;
}

export default function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem("portfolio-language") || "pt");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [gridVisible, setGridVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 32 });
  const t = ui[language];

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  return (
    <div className="site">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <div className={`design-grid ${gridVisible ? "design-grid-visible" : ""}`} aria-hidden="true">{Array.from({ length: 8 }, (_, index) => <i key={index} />)}</div>

      <header className="header">
        <nav className="frame header-inner">
          <a className="brand" href="#home"><span>H</span>enrique <span>A</span>zevedo</a>
          <div className="desktop-nav">{t.nav.map(([label, id], index) => <a href={`#${id}`} key={id}><i>0{index + 1}</i>{label}</a>)}</div>
          <div className="header-tools">
            <button onClick={() => setGridVisible(!gridVisible)} aria-label={t.grid} className={gridVisible ? "active" : ""}><FiGrid /></button>
            <button onClick={() => setLanguage(language === "pt" ? "en" : "pt")} aria-label={t.language}><FiGlobe /><small>{language}</small></button>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={t.theme}>{theme === "dark" ? <FiSun /> : <FiMoon />}</button>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.close : t.menu} className="mobile-trigger">{menuOpen ? <FiX /> : <FiMenu />}</button>
          </div>
        </nav>
        {menuOpen && <div className="mobile-nav frame">{t.nav.map(([label, id], index) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}><i>0{index + 1}</i>{label}<FiArrowUpRight /></a>)}</div>}
      </header>

      <main>
        <section id="home" className="hero frame">
          <motion.div className="hero-center" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="availability"><i />{t.available}</div>
            <p className="hero-role">{t.role}</p>
            <h1><span>Henrique</span><span>Azevedo</span></h1>
            <p className="hero-statement">{t.statement}</p>
            <a href="#projects" className="pill-button">{t.explore}<FiArrowDown /></a>
          </motion.div>
          <div className="hero-foot"><span>© 2026</span><span>{t.based}</span><span>40.7° W · 23.5° S</span></div>
        </section>

        <div className="ticker" aria-hidden="true"><div>{[...stack, ...stack].map((item, index) => <span key={`${item}-${index}`}>{item}<i>✦</i></span>)}</div></div>

        <section id="projects" className="page-section frame">
          <motion.div {...reveal}><SectionTitle label={t.projectsLabel} title={t.projectsTitle} intro={t.projectsIntro} /></motion.div>
          <div className="project-mosaic">
            {projects.map((project, index) => <motion.a {...reveal} href={project.link} target="_blank" rel="noreferrer" className={`project-card project-${index + 1}`} key={project.title}>
              <div className="project-image" style={{ backgroundColor: project.background }}><img src={project.image} alt={project.title} className={project.fit === "contain" ? "contain" : "cover"} /><span className="project-number">0{index + 1}</span><span className="project-arrow"><FiArrowUpRight /></span></div>
              <div className="project-copy"><div className="project-meta"><span>{project.category[language]}</span><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.description[language]}</p><div className="project-bottom"><div>{project.tags.map(tag => <small key={tag}>{tag}</small>)}</div><b>{t.open}<FiArrowUpRight /></b></div></div>
            </motion.a>)}
          </div>
        </section>

        <section id="about" className="page-section frame">
          <motion.div {...reveal}><SectionTitle label={t.fragmentsLabel} title={t.fragmentsTitle} /></motion.div>
          <div className="fragments">
            <motion.div {...reveal} className="fragment fragment-about"><span className="fragment-label">01 / BIO</span><p>{t.aboutLead}</p><small>{t.aboutBody}</small><a href={`${import.meta.env.BASE_URL}${language === "pt" ? "Henrique Azevedo - Currículo - Desenvolvedor - (Português).pdf" : "Henrique Azevedo - Resume - Developer - (English).pdf"}`} target="_blank" rel="noreferrer">{t.resume}<FiDownload /></a></motion.div>
            <motion.div {...reveal} className="fragment fragment-photo"><img src={profilePhoto} alt="Henrique Azevedo" /><span>São Paulo · Brasil</span></motion.div>
            <motion.div {...reveal} className="fragment fragment-now"><span className="fragment-label">{t.currentLabel}</span><p>{t.current}</p><i className="live-dot" /></motion.div>
            <motion.div {...reveal} className="fragment fragment-years"><strong>3+</strong><span>{t.years}</span></motion.div>
            <motion.div {...reveal} className="fragment fragment-independent"><span className="fragment-label">{t.independentLabel}</span><p>{t.independent}</p></motion.div>
            <motion.div {...reveal} className="fragment fragment-terminal"><div className="terminal-top"><span /><span /><span /><p>{t.terminalTitle}</p></div><div className="terminal-body">{t.terminalLines.map((line, index) => <p key={line} className={index === t.terminalLines.length - 1 ? "terminal-success" : ""}>{line}</p>)}</div></motion.div>
            <motion.div {...reveal} className="fragment fragment-stack"><span className="fragment-label">{t.stackLabel}</span><div>{stack.map((item, index) => <b key={item}><i>{String(index + 1).padStart(2, "0")}</i>{item}</b>)}</div></motion.div>
          </div>
        </section>

        <section id="experience" className="page-section frame">
          <motion.div {...reveal}><SectionTitle label={t.experienceLabel} title={t.experienceTitle} /></motion.div>
          <div className="resume-list">
            {experiences.map((experience, index) => <motion.article {...reveal} key={experience.company} className="resume-item"><div className="resume-index">0{index + 1}</div><div className="resume-role"><span>{experience.period[language]}</span><h3>{experience.company}</h3><p>{experience.role[language]}</p></div><div className="resume-details"><p>{experience.summary[language]}</p><ul>{experience.work[language].map(item => <li key={item}>{item}</li>)}</ul><div>{experience.stack.map(item => <small key={item}>{item}</small>)}</div></div></motion.article>)}
          </div>
          <motion.div {...reveal} className="education-note"><span>{t.educationLabel}</span><p>{t.education}</p><i>↗</i></motion.div>
        </section>

        <section id="contact" className="contact frame">
          <motion.div {...reveal}><p>{t.contactLabel}</p><h2>{t.contactTitle}</h2><span>{t.contactBody}</span><a className="pill-button" href="mailto:henriquee.aze.dev@gmail.com">{t.email}<FiMail /></a></motion.div>
        </section>
      </main>

      <footer className="footer frame"><p>© 2026 · {t.footer}</p><div><a href="https://github.com/henriiqueaze" target="_blank" rel="noreferrer">GitHub <FiArrowUpRight /></a><a href="https://www.linkedin.com/in/henrique-azevedo-b2195b2b0/" target="_blank" rel="noreferrer">LinkedIn <FiArrowUpRight /></a></div></footer>
    </div>
  );
}
