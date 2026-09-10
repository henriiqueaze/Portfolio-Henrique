import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMenu, FiMoon, FiPlay, FiSun, FiX } from "react-icons/fi";
import profilePhoto from "./assets/images/henrique-picture.jpg";
import cookIt from "./assets/images/projects/cook-it.jpg";
import studentProgress from "./assets/images/projects/student-progress-logo.png";
import sociau from "./assets/images/projects/sociau-logo.jpg";
import volumtarium from "./assets/images/projects/volumtarium-logo.png";
import taskManager from "./assets/images/projects/gerenciamento-de-tarefas-layout.png";
import pum from "./assets/images/projects/pum.png";
import mbaLogo from "./assets/images/experiences/mba-logo.jpg";
import freelancerLogo from "./assets/images/experiences/freelancer-logo.png";

const content = {
  pt: {
    nav: [["Início", "home"], ["Trabalhos", "work"], ["Sobre", "info"], ["Experiência", "experience"], ["Contato", "contact"]],
    menu: "Menu", close: "Fechar", theme: "Alternar tema", language: "Switch to English",
    folio: "Portfólio de", role: "Desenvolvedor Full-Stack", location: "São Paulo, Brasil",
    hero: "Produtos digitais construídos de ponta a ponta — com intenção, desempenho e movimento.", explore: "Conheça meu trabalho",
    aboutLabel: "Sobre mim", aboutRoles: ["Full-stack developer.", "Product-minded.", "Construtor de sistemas."],
    aboutLead: "Sou Henrique Azevedo, desenvolvedor full-stack que trabalha entre produto, interface e infraestrutura.",
    aboutBody: "Minha experiência passa por sistemas empresariais, produtos independentes e aplicações com impacto real. Transformo regras complexas em experiências claras, construindo desde a arquitetura e as APIs até a última interação da interface — sempre com atenção a desempenho, manutenção e contexto de negócio.",
    resume: "Baixar currículo", based: "São Paulo, Brasil", available: "Disponível para projetos e oportunidades selecionadas",
    selected: "Trabalho selecionado", selectedTitle: "Projetos em movimento.", selectedText: "Arraste a faixa para explorar. Toque no projeto central para abrir sua apresentação.",
    openPresentation: "Abrir projeto", drag: "Arraste para navegar", project: "Projeto", technologies: "Tecnologias", visit: "Visitar projeto", repository: "Ver repositório", closeProject: "Fechar projeto", videoPlaceholder: "Prévia do projeto",
    all: "Todos os projetos", allTitle: "Arquivo de trabalhos.", allHint: "Passe o cursor sobre um projeto para visualizar sua identidade.",
    experienceLabel: "Experiência", experienceTitle: "Experiência construída\nem produto real.", experienceIntro: "Do software empresarial aos produtos autorais, cada trabalho ampliou meu repertório técnico e meu olhar de produto.", responsibilities: "Principais frentes", projects: "Projetos", details: "Ver detalhes",
    contactLabel: "Contato", contactQuestion: "Tem uma ideia que precisa sair do papel?", contactBody: "Conte o que você quer construir — um produto novo, uma experiência melhor ou uma solução para um problema real. Vamos encontrar um caminho claro, tecnicamente sólido e com personalidade.", choose: "Escolha o canal que preferir:", create: "Vamos criar\nalgo real.", write: "E-mail", copyEmail: "Copiar e-mail", copied: "Copiado", back: "Voltar ao topo", footer: "Projetado e desenvolvido por Henrique Azevedo",
  },
  en: {
    nav: [["Home", "home"], ["Work", "work"], ["About", "info"], ["Experience", "experience"], ["Contact", "contact"]],
    menu: "Menu", close: "Close", theme: "Toggle theme", language: "Mudar para português",
    folio: "Portfolio of", role: "Full-Stack Developer", location: "São Paulo, Brazil",
    hero: "End-to-end digital products — built with intention, performance and motion.", explore: "Discover my work",
    aboutLabel: "About me", aboutRoles: ["Full-stack developer.", "Product-minded.", "Systems builder."],
    aboutLead: "I'm Henrique Azevedo, a full-stack developer working across product, interface and infrastructure.",
    aboutBody: "My experience spans business systems, independent products and applications with real-world impact. I turn complex rules into clear experiences, building from architecture and APIs to the last interface interaction — always considering performance, maintainability and business context.",
    resume: "Download résumé", based: "São Paulo, Brazil", available: "Available for selected projects and opportunities",
    selected: "Selected work", selectedTitle: "Projects in motion.", selectedText: "Drag the reel to explore. Select the centered project to open its presentation.",
    openPresentation: "Open project", drag: "Drag to browse", project: "Project", technologies: "Technologies", visit: "Visit project", repository: "View repository", closeProject: "Close project", videoPlaceholder: "Project preview",
    all: "All projects", allTitle: "Work archive.", allHint: "Move your cursor over a project to reveal its identity.",
    experienceLabel: "Experience", experienceTitle: "Experience built\nthrough real products.", experienceIntro: "From enterprise software to independent products, each engagement expanded my technical range and product perspective.", responsibilities: "Primary focus", projects: "Projects", details: "View details",
    contactLabel: "Contact", contactQuestion: "Have an idea that needs to become real?", contactBody: "Tell me what you want to build — a new product, a better experience or a solution to a real problem. Let's find a clear, technically sound path with personality.", choose: "Choose the channel you prefer:", create: "Let's make\nsomething real.", write: "Email", copyEmail: "Copy email", copied: "Copied", back: "Back to top", footer: "Designed and developed by Henrique Azevedo",
  },
};

const projects = [
  { title: "Cook—It", image: cookIt, year: "2026", category: { pt: "Produto web", en: "Web product" }, description: { pt: "Uma plataforma que transforma os ingredientes disponíveis em casa em sugestões inteligentes de receitas.", en: "A platform that turns ingredients available at home into smart recipe suggestions." }, details: { pt: "O produto reduz a fricção entre decidir o que cozinhar e encontrar uma receita possível, com buscas rápidas, leitura clara e resultados úteis.", en: "The product reduces the friction between deciding what to cook and finding a feasible recipe, with fast searches, clear reading and useful results." }, tech: ["React", "Spring Boot", "PostgreSQL", "REST API"], url: "https://cook-it-zeta.vercel.app/", accent: "#1481B8", fit: "cover" },
  { title: "StudentProgress", image: studentProgress, year: "2025", category: { pt: "Educação", en: "Education" }, description: { pt: "Gestão acadêmica para cadastrar alunos, registrar notas e acompanhar sua evolução.", en: "Academic management to register students, record grades and follow their progress." }, details: { pt: "Uma interface operacional enxuta para transformar dados acadêmicos em acompanhamento prático, com fluxos simples e arquitetura preparada para evoluir.", en: "A lean operational interface that turns academic data into practical tracking, with simple flows and an architecture ready to evolve." }, tech: ["React", "Java", "REST", "SQL"], url: "https://student-progress-livid.vercel.app/", accent: "#5f9fbe", fit: "contain" },
  { title: "Sociau", image: sociau, year: "2025", category: { pt: "Impacto social", en: "Social impact" }, description: { pt: "Conecta organizações de resgate animal a pessoas interessadas em adoção responsável.", en: "Connects animal rescue organizations with people interested in responsible adoption." }, details: { pt: "Centraliza divulgação, cadastro e adoção de animais, aproximando instituições e adotantes em uma experiência organizada e acessível.", en: "Centralizes animal listings, registration and adoption, bringing institutions and adopters together through an organized experience." }, tech: ["Angular", "Java", "Spring Boot", "UX"], url: "https://github.com/Sociau", accent: "#397f9f", fit: "cover" },
  { title: "Volumtarium", image: volumtarium, year: "2024", category: { pt: "Voluntariado", en: "Volunteering" }, description: { pt: "Oportunidades sociais encontradas por perfil, interesses e localização.", en: "Social opportunities discovered by profile, interests and location." }, details: { pt: "Uma rede para facilitar o encontro entre quem precisa de ajuda e quem deseja contribuir.", en: "A network that helps those who need support meet those who want to contribute." }, tech: ["React", "Node.js", "Maps", "PostgreSQL"], url: "https://github.com/henriiqueaze/Volumtarium", accent: "#2476a0", fit: "contain" },
  { title: "Task Manager", image: taskManager, year: "2024", category: { pt: "Aplicação desktop", en: "Desktop application" }, description: { pt: "Uma ferramenta direta para organizar e acompanhar atividades diárias.", en: "A direct tool to organize and track daily activities." }, details: { pt: "Aplicação desktop focada em produtividade cotidiana, com criação, edição e acompanhamento de tarefas.", en: "A desktop app focused on everyday productivity, with task creation, editing and tracking." }, tech: ["Python", "Tkinter", "SQLite"], url: "https://github.com/henriiqueaze/Sistema-de-Gerenciamento-de-Tarefas", accent: "#0f6f9f", fit: "cover" },
  { title: "P.U.M.", image: pum, year: "2024", category: { pt: "Ecossistema acadêmico", en: "Academic ecosystem" }, description: { pt: "Plataforma de monitoria que integra alunos, monitores, atividades e cursos.", en: "A mentoring platform connecting students, tutors, activities and courses." }, details: { pt: "Um sistema acadêmico escalável para organizar inscrições e atendimentos.", en: "A scalable academic system for organizing registrations and sessions." }, tech: ["Java", "Spring Boot", "SQL", "REST API"], url: "https://github.com/henriiqueaze/PUM", accent: "#1481B8", fit: "contain" },
];

const experiences = [
  { period: { pt: "Jan 2026 — Hoje", en: "Jan 2026 — Present" }, company: "MBA Consultoria & Sistemas", role: "Full-Stack Developer", logo: mbaLogo, location: { pt: "Remoto", en: "Remote" }, summary: { pt: "Desenvolvimento e manutenção de aplicações utilizadas em operações reais, conectando regras de negócio, interfaces, APIs e dados.", en: "Development and maintenance of applications used in real operations, connecting business rules, interfaces, APIs and data." }, items: { pt: ["APIs RESTful com C# e .NET", "Sistemas web com React", "Aplicações mobile com React Native", "SQL Server, Git, Azure, correção de bugs e refatoração"], en: ["RESTful APIs with C# and .NET", "Web systems with React", "Mobile applications with React Native", "SQL Server, Git, Azure, bug fixing and refactoring"] }, products: ["ERP Wiizi", "Integralmed Delivery", "Wiizi Atendimento"], tech: ["C#", "ASP.NET", "SQL Server", "React", "React Native", "Azure"] },
  { period: { pt: "Jun 2023 — Hoje", en: "Jun 2023 — Present" }, company: "Independent / Freelance", role: "Full-Stack Developer", logo: freelancerLogo, location: { pt: "Remoto", en: "Remote" }, summary: { pt: "Criação de aplicações web completas, da descoberta e arquitetura à interface, publicação e evolução contínua.", en: "Building complete web applications, from discovery and architecture to interface, deployment and continuous evolution." }, items: { pt: ["APIs REST modernas e autenticação", "Modelagem de bancos de dados escaláveis", "Interfaces com React e Angular", "Deploy, Git e refatoração contínua"], en: ["Modern REST APIs and authentication", "Scalable database modeling", "Interfaces with React and Angular", "Deployment, Git and continuous refactoring"] }, products: ["Cook—It", "Sociau", "StudentProgress"], tech: ["Java", "Spring Boot", "TypeScript", "Angular", "React", "PostgreSQL", "Docker"] },
];

const reveal = { initial: { opacity: 0, y: 50, filter: "blur(12px)" }, whileInView: { opacity: 1, y: 0, filter: "blur(0px)" }, viewport: { once: true, margin: "-10%" }, transition: { duration: .85, ease: [0.16, 1, .3, 1] } };

function ProjectDialog({ project, language, onClose }) {
  const t = content[language];
  useEffect(() => { const key = event => event.key === "Escape" && onClose(); window.addEventListener("keydown", key); return () => window.removeEventListener("keydown", key); }, [onClose]);
  return <motion.div className="project-dialog" role="dialog" aria-modal="true" aria-label={`${t.project}: ${project.title}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <motion.div className="dialog-backdrop" onClick={onClose} />
    <motion.div className="dialog-shell" layoutId={`project-${project.title}`} initial={{ borderRadius: 20 }} animate={{ borderRadius: 0 }} exit={{ opacity: 0, scale: .94 }} transition={{ duration: .7, ease: [0.16, 1, .3, 1] }}>
      <button className="dialog-close" onClick={onClose} aria-label={t.closeProject}><FiX /><span>{t.close}</span></button>
      <div className="dialog-media" style={{ "--project-accent": project.accent }}><img src={project.image} alt={project.title} className={project.fit} /><div className="media-scan" /><div className="media-chrome"><span>{t.videoPlaceholder.toUpperCase()}</span><div><i /><i /><i /></div><small>00:24</small></div></div>
      <div className="dialog-content"><div className="dialog-index"><span>{project.year}</span><small>{project.category[language]}</small></div><h3>{project.title}</h3><p className="dialog-lead">{project.description[language]}</p><p className="dialog-body">{project.details[language]}</p><div className="dialog-tech"><span>{t.technologies}</span><div>{project.tech.map(item => <i key={item}>{item}</i>)}</div></div><a href={project.url} target="_blank" rel="noreferrer">{project.url.includes("github") ? t.repository : t.visit}<FiArrowUpRight /></a></div>
    </motion.div>
  </motion.div>;
}

function ProjectReel({ language, onOpen }) {
  const t = content[language];
  return <div className="project-reel">
    <div className="reel-viewport"><motion.div className="reel-track" drag="x" dragConstraints={{ left: -3550, right: 0 }} dragElastic={.12} dragMomentum transition={{ type: "spring", stiffness: 90, damping: 24 }}>
      {projects.map((project, index) => <motion.button key={project.title} className="reel-card" style={{ "--project-accent": project.accent, "--card-ratio": index % 3 === 2 ? "1.38" : index % 2 ? "1.66" : "1.75" }} whileHover={{ y: -6 }} onClick={() => onOpen(project)} aria-label={`${t.openPresentation}: ${project.title}`}>
        <motion.div className="reel-media" layoutId={`project-${project.title}`}><img src={project.image} alt="" className={project.fit} /><div className="reel-shade" /><div className="reel-meta"><span>{project.title}</span><small>{project.category[language]}</small></div><div className="reel-play"><FiPlay /></div></motion.div>
      </motion.button>)}
    </motion.div></div>
  </div>;
}

function ProjectArchive({ language }) {
  const [hovered, setHovered] = useState(null);
  const cursorX = useMotionValue(-500); const cursorY = useMotionValue(-500);
  const smoothX = useSpring(cursorX, { stiffness: 350, damping: 32 }); const smoothY = useSpring(cursorY, { stiffness: 350, damping: 32 });
  const rotate = useTransform(smoothX, value => (value % 24) - 12); const t = content[language];
  return <section className="archive" id="all-work" onPointerMove={event => { cursorX.set(event.clientX); cursorY.set(event.clientY); }} onPointerLeave={() => setHovered(null)}><div className="archive-head"><p>[ {t.all} ]</p><h2>{t.allTitle}</h2><span>{t.allHint}</span></div><div className="archive-list">{projects.map((project, index) => <a href={project.url} target="_blank" rel="noreferrer" key={project.title} onPointerEnter={() => setHovered(index)} onFocus={() => setHovered(index)} onBlur={() => setHovered(null)}><span>{String(index + 1).padStart(2, "0")}</span><h3>{project.title}</h3><p>{project.category[language]}</p><small>{project.year}</small><FiArrowUpRight /></a>)}</div><AnimatePresence>{hovered !== null && <motion.div className="cursor-project" style={{ x: smoothX, y: smoothY, rotate }} initial={{ opacity: 0, scale: .6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .6 }}><img src={projects[hovered].image} alt="" className={projects[hovered].fit} /><span>{projects[hovered].title}</span></motion.div>}</AnimatePresence></section>;
}

function ExperienceSection({ language }) {
  const t = content[language];
  return <section className="experience" id="experience">
    <motion.h2 {...reveal}>{t.experienceLabel}</motion.h2>
    <div className="career-timeline">
      {experiences.map((item, index) => <motion.article className={index % 2 === 0 ? "left" : "right"} key={item.company} initial={{ opacity: 0, x: index % 2 === 0 ? -90 : 90, rotate: index % 2 === 0 ? -2 : 2 }} whileInView={{ opacity: 1, x: 0, rotate: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .85, ease: [0.16, 1, .3, 1] }}>
        <span className="timeline-dot" />
        <motion.div className="career-card" whileHover={{ y: -10, rotate: index % 2 === 0 ? -.5 : .5 }} transition={{ type: "spring", stiffness: 220, damping: 18 }}>
          <div className="career-header"><motion.img src={item.logo} alt="" whileHover={{ rotate: 8, scale: 1.08 }} /><p>{item.company}</p><div><span>{item.period[language]}</span><i>•</i><span>{item.location[language]}</span></div></div>
          <h3>{item.role}</h3><p className="career-summary">{item.summary[language]}</p>
          <h4>{t.responsibilities}</h4><ul>{item.items[language].map(entry => <li key={entry}>{entry}</li>)}</ul>
          <h4>{t.technologies}</h4><div className="career-tech">{item.tech.map(tech => <span key={tech}>{tech}</span>)}</div>
          <div className="career-projects"><span>{t.projects}</span>{item.products.map(product => <i key={product}>{product}</i>)}</div>
        </motion.div>
      </motion.article>)}
    </div>
  </section>;
}

export default function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem("portfolio-language") || "pt");
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");
  const [menuOpen, setMenuOpen] = useState(false); const [projectOpen, setProjectOpen] = useState(null);
  const heroRef = useRef(null); const mouseX = useMotionValue(0); const mouseY = useMotionValue(0);
  const tiltX = useSpring(useTransform(mouseY, [-.5, .5], [10, -10]), { stiffness: 80, damping: 18 }); const tiltY = useSpring(useTransform(mouseX, [-.5, .5], [-13, 13]), { stiffness: 80, damping: 18 });
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] }); const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]); const heroOpacity = useTransform(scrollYProgress, [0, .9], [1, .18]); const t = content[language];
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem("portfolio-theme", theme); }, [theme]);
  useEffect(() => { document.documentElement.lang = language === "pt" ? "pt-BR" : "en"; localStorage.setItem("portfolio-language", language); }, [language]);
  useEffect(() => { document.body.classList.toggle("locked", menuOpen || Boolean(projectOpen)); return () => document.body.classList.remove("locked"); }, [menuOpen, projectOpen]);
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    if (!window.location.hash) window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0 }));
  }, []);
  function pointerMove(event) { mouseX.set(event.clientX / window.innerWidth - .5); mouseY.set(event.clientY / window.innerHeight - .5); }
  return <div className="site" onPointerMove={pointerMove}>
    <header className="header"><a href="#home" className="logo" aria-label="Henrique Azevedo">H<span>/</span>A</a><nav>{t.nav.map(([label, id], index) => <a href={`#${id}`} key={id}><small>0{index + 1}</small><span>{label}</span></a>)}</nav><div className="header-actions"><button onClick={() => setLanguage(language === "pt" ? "en" : "pt")} aria-label={t.language}>{language === "pt" ? "EN" : "PT"}</button><button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={t.theme}>{theme === "dark" ? <FiSun /> : <FiMoon />}</button><button className="menu-trigger" onClick={() => setMenuOpen(true)} aria-label={t.menu}><FiMenu /></button></div></header>
    <AnimatePresence>{menuOpen && <motion.div className="menu" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: .65, ease: [0.76, 0, .24, 1] }}><div><span>H/A — 2026</span><button onClick={() => setMenuOpen(false)}>{t.close}<FiX /></button></div><nav>{t.nav.map(([label, id], index) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}><small>0{index + 1}</small><span>{label}</span><FiArrowUpRight /></a>)}</nav></motion.div>}</AnimatePresence>
    <main>
      <section className="hero" id="home" ref={heroRef}><motion.div className="hero-image" style={{ scale: heroScale, opacity: heroOpacity }}><div /></motion.div><div className="hero-grid" aria-hidden="true" /><motion.div className="hero-monogram" style={{ rotateX: tiltX, rotateY: tiltY }} aria-hidden="true"><span>H</span><i>A</i><b>H</b><em>A</em></motion.div><motion.div className="hero-content" initial={{ opacity: 0, y: 40, filter: "blur(14px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1, delay: .15 }}><h1>Henrique<br /><span>Azevedo</span></h1></motion.div><motion.div className="hero-bottom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .65 }}><span>{t.role}</span></motion.div><a className="hero-scroll" href="#info">{t.explore}<FiArrowDown /></a></section>
      <section className="about-editorial" id="info">
        <div className="about-top">
          <motion.div className="about-roles" {...reveal}>{t.aboutRoles.map((role, index) => <h2 key={role} className={index === 0 ? "circled" : ""}>{role}</h2>)}</motion.div>
          <motion.div className="about-portrait" {...reveal}><div><img src={profilePhoto} alt="Henrique Azevedo" /></div><p>Henrique Azevedo</p><p><span>PT / EN</span><span>SÃO PAULO, BRASIL</span></p><a href={`${import.meta.env.BASE_URL}${language === "pt" ? "Henrique Azevedo - Currículo - Desenvolvedor - (Português).pdf" : "Henrique Azevedo - Resume - Developer - (English).pdf"}`} target="_blank" rel="noreferrer">{t.resume}<FiDownload /></a></motion.div>
        </div>
        <div className="about-details">
          <motion.div {...reveal}><span>{t.aboutLabel}</span><p>{t.aboutLead}<br /><br />{t.aboutBody}</p></motion.div>
          <motion.div className="about-practice" {...reveal}><span>{language === "pt" ? "Atuação" : "Practice"}</span><p><small>01</small>{language === "pt" ? "Produtos web completos" : "End-to-end web products"}</p><p><small>02</small>{language === "pt" ? "Sistemas empresariais" : "Enterprise systems"}</p><p><small>03</small>APIs, interfaces & dados</p><p><small>04</small>{t.available}</p></motion.div>
        </div>
      </section>
      <section className="selected-work" id="work"><div className="selected-interface"><p>Henrique Azevedo</p><span>{t.drag}</span></div><ProjectReel language={language} onOpen={setProjectOpen} /><div className="selected-bottom"><span>{t.selected}</span><span>Featured / Full</span></div></section>
      <ProjectArchive language={language} />
      <ExperienceSection language={language} />
      <section className="contact" id="contact"><div className="contact-direct"><motion.div className="contact-copy" {...reveal}><p>{t.contactLabel}</p><h2>{t.contactQuestion}</h2><span>{t.contactBody}</span></motion.div><motion.div className="contact-side" {...reveal}><p>{t.choose}</p><ul className="contact-channels"><li><a href="mailto:henriquee.aze.dev@gmail.com"><span>01</span><span><strong>{t.write}</strong><small>henriquee.aze.dev@gmail.com</small></span><FiArrowUpRight /></a></li><li><a href="https://www.linkedin.com/in/henrique-azevedo-b2195b2b0/" target="_blank" rel="noreferrer"><span>02</span><span><strong>LinkedIn</strong><small>/in/henrique-azevedo</small></span><FiArrowUpRight /></a></li><li><a href="https://github.com/henriiqueaze" target="_blank" rel="noreferrer"><span>03</span><span><strong>GitHub</strong><small>@henriiqueaze</small></span><FiArrowUpRight /></a></li></ul></motion.div></div><motion.div className="contact-statement" {...reveal}><p>{language === "pt" ? "Vamos criar" : "Let's make"}</p><strong>{language === "pt" ? "algo real." : "something real."}</strong></motion.div></section>
    </main>
    <footer><div><span>© 2026</span><p>{t.footer}</p></div><div><a href="https://github.com/henriiqueaze" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a><a href="https://www.linkedin.com/in/henrique-azevedo-b2195b2b0/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a></div><a href="#home">{t.back}<FiArrowUpRight /></a></footer>
    <AnimatePresence>{projectOpen && <ProjectDialog project={projectOpen} language={language} onClose={() => setProjectOpen(null)} />}</AnimatePresence>
  </div>;
}
