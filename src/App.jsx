import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import {
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiMoon,
  FiPlay,
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
    nav: [["Início", "home"], ["Trabalhos", "work"], ["Sobre", "info"], ["Experiência", "experience"], ["Contato", "contact"]],
    menu: "Menu", close: "Fechar", theme: "Alternar tema", language: "Switch to English",
    folio: "Portfólio de", role: "Desenvolvedor Full-Stack", location: "São Paulo, Brasil",
    hero: "Construo produtos digitais que unem engenharia, clareza e movimento.", explore: "Explorar trabalhos",
    intro: "Da interface à infraestrutura, transformo problemas reais em experiências digitais rápidas, confiáveis e memoráveis.",
    selected: "Trabalho selecionado", selectedTitle: "Projetos em movimento.", selectedText: "Navegue pelas prévias. Selecione um projeto para abrir sua apresentação, conhecer as decisões, tecnologias e acessar o produto.",
    openPresentation: "Abrir apresentação", drag: "Arraste ou use as setas", project: "Projeto", technologies: "Tecnologias", visit: "Visitar projeto", repository: "Ver repositório", closeProject: "Fechar projeto",
    all: "Todos os projetos", allTitle: "Arquivo de trabalhos.", allHint: "Passe o cursor sobre um projeto para visualizar sua identidade.",
    infoLabel: "Sobre", infoTitle: "Engenharia com\nvisão de produto.",
    infoLead: "Sou Henrique, desenvolvedor full-stack interessado tanto na lógica invisível de um sistema quanto na experiência que chega às mãos das pessoas.",
    infoBody: "Atuo em todo o ciclo de um produto: arquitetura, interfaces, APIs, bancos de dados, integração e evolução. Gosto de equipes que valorizam curiosidade, colaboração e decisões bem fundamentadas.",
    resume: "Abrir currículo", based: "Base", focus: "Foco", focusValue: "Produtos web completos", availability: "Disponibilidade", availabilityValue: "Projetos e oportunidades selecionadas",
    experienceLabel: "Experiência", experienceTitle: "Onde transformo\nideias em software.", today: "Hoje", responsibilities: "Principais frentes",
    contactLabel: "Contato", contactTitle: "Vamos construir\nalgo relevante.", contactBody: "Se você tem um produto para tirar do papel, uma experiência para melhorar ou uma oportunidade para discutir, quero ouvir sobre isso.",
    write: "Enviar um e-mail", copyEmail: "Copiar e-mail", copied: "E-mail copiado", back: "Voltar ao topo", footer: "Projetado e desenvolvido por Henrique Azevedo",
  },
  en: {
    nav: [["Home", "home"], ["Work", "work"], ["About", "info"], ["Experience", "experience"], ["Contact", "contact"]],
    menu: "Menu", close: "Close", theme: "Toggle theme", language: "Mudar para português",
    folio: "Portfolio of", role: "Full-Stack Developer", location: "São Paulo, Brazil",
    hero: "I build digital products where engineering, clarity and motion meet.", explore: "Explore work",
    intro: "From interface to infrastructure, I turn real problems into fast, reliable and memorable digital experiences.",
    selected: "Selected work", selectedTitle: "Projects in motion.", selectedText: "Browse the previews. Select a project to open its presentation, learn about the decisions and technologies, and access the product.",
    openPresentation: "Open presentation", drag: "Drag or use the arrows", project: "Project", technologies: "Technologies", visit: "Visit project", repository: "View repository", closeProject: "Close project",
    all: "All projects", allTitle: "Work archive.", allHint: "Move your cursor over a project to reveal its identity.",
    infoLabel: "About", infoTitle: "Engineering with\nproduct vision.",
    infoLead: "I'm Henrique, a full-stack developer interested in both the invisible logic of a system and the experience that reaches people's hands.",
    infoBody: "I work across a product's entire lifecycle: architecture, interfaces, APIs, databases, integrations and evolution. I enjoy teams that value curiosity, collaboration and well-grounded decisions.",
    resume: "Open résumé", based: "Based", focus: "Focus", focusValue: "End-to-end web products", availability: "Availability", availabilityValue: "Selected projects and opportunities",
    experienceLabel: "Experience", experienceTitle: "Where ideas become\nworking software.", today: "Present", responsibilities: "Primary focus",
    contactLabel: "Contact", contactTitle: "Let's build\nsomething relevant.", contactBody: "If you have a product to launch, an experience to improve or an opportunity to discuss, I want to hear about it.",
    write: "Send an email", copyEmail: "Copy email", copied: "Email copied", back: "Back to top", footer: "Designed and developed by Henrique Azevedo",
  },
};

const projects = [
  {
    title: "Cook—It", image: cookIt, year: "2026", category: { pt: "Produto web", en: "Web product" },
    description: { pt: "Uma plataforma que transforma os ingredientes disponíveis em casa em sugestões inteligentes de receitas.", en: "A platform that turns ingredients available at home into smart recipe suggestions." },
    details: { pt: "O produto reduz a fricção entre decidir o que cozinhar e encontrar uma receita possível. A experiência foi desenhada para buscas rápidas, leitura clara e resultados úteis.", en: "The product reduces the friction between deciding what to cook and finding a feasible recipe. The experience was designed for fast searches, clear reading and useful results." },
    tech: ["React", "Spring Boot", "PostgreSQL", "REST API"], url: "https://cook-it-zeta.vercel.app/", accent: "#1481B8", fit: "cover",
  },
  {
    title: "StudentProgress", image: studentProgress, year: "2025", category: { pt: "Educação", en: "Education" },
    description: { pt: "Gestão acadêmica para cadastrar alunos, registrar notas e acompanhar sua evolução com clareza.", en: "Academic management to register students, record grades and clearly follow their progress." },
    details: { pt: "Uma interface operacional enxuta para transformar dados acadêmicos em acompanhamento prático, com fluxos simples e uma arquitetura preparada para evoluir.", en: "A lean operational interface that turns academic data into practical tracking, with simple flows and an architecture ready to evolve." },
    tech: ["React", "Java", "REST", "SQL"], url: "https://student-progress-livid.vercel.app/", accent: "#5f9fbe", fit: "contain",
  },
  {
    title: "Sociau", image: sociau, year: "2025", category: { pt: "Impacto social", en: "Social impact" },
    description: { pt: "Conecta organizações de resgate animal a pessoas interessadas em adoção responsável.", en: "Connects animal rescue organizations with people interested in responsible adoption." },
    details: { pt: "O projeto centraliza divulgação, cadastro e adoção de animais, aproximando instituições e adotantes em uma experiência organizada e acessível.", en: "The project centralizes animal listings, registration and adoption, bringing institutions and adopters together through an organized, accessible experience." },
    tech: ["Angular", "Java", "Spring Boot", "UX"], url: "https://github.com/Sociau", accent: "#397f9f", fit: "cover",
  },
  {
    title: "Volumtarium", image: volumtarium, year: "2024", category: { pt: "Voluntariado", en: "Volunteering" },
    description: { pt: "Oportunidades sociais encontradas por perfil, interesses e localização.", en: "Social opportunities discovered by profile, interests and location." },
    details: { pt: "Uma rede para facilitar o encontro entre quem precisa de ajuda e quem deseja contribuir, com descoberta contextual e organização de oportunidades.", en: "A network that helps those who need support meet those who want to contribute, with contextual discovery and organized opportunities." },
    tech: ["React", "Node.js", "Maps", "PostgreSQL"], url: "https://github.com/henriiqueaze/Volumtarium", accent: "#2476a0", fit: "contain",
  },
  {
    title: "Task Manager", image: taskManager, year: "2024", category: { pt: "Aplicação desktop", en: "Desktop application" },
    description: { pt: "Uma ferramenta direta para organizar e acompanhar atividades diárias.", en: "A direct tool to organize and track daily activities." },
    details: { pt: "Aplicação desktop focada em produtividade cotidiana, com criação, edição e acompanhamento de tarefas em uma interface simples.", en: "A desktop app focused on everyday productivity, with task creation, editing and tracking in a simple interface." },
    tech: ["Python", "Tkinter", "SQLite"], url: "https://github.com/henriiqueaze/Sistema-de-Gerenciamento-de-Tarefas", accent: "#0f6f9f", fit: "cover",
  },
  {
    title: "P.U.M.", image: pum, year: "2024", category: { pt: "Ecossistema acadêmico", en: "Academic ecosystem" },
    description: { pt: "Plataforma de monitoria que integra alunos, monitores, atividades e cursos.", en: "A mentoring platform connecting students, tutors, activities and courses." },
    details: { pt: "Um sistema acadêmico escalável para organizar inscrições e atendimentos, dando visibilidade à jornada de alunos e monitores.", en: "A scalable academic system for organizing registrations and sessions, giving visibility into the journey of students and tutors." },
    tech: ["Java", "Spring Boot", "SQL", "REST API"], url: "https://github.com/henriiqueaze/PUM", accent: "#1481B8", fit: "contain",
  },
];

const experiences = [
  {
    period: { pt: "2026 — Hoje", en: "2026 — Present" }, company: "MBA Consultoria & Sistemas", role: "Full-Stack Developer",
    summary: { pt: "Construção e evolução de produtos digitais utilizados em operações reais, conectando regras de negócio, interfaces e dados.", en: "Building and evolving digital products used in real operations, connecting business rules, interfaces and data." },
    items: { pt: ["APIs e serviços com C# e .NET", "Interfaces web em React", "Aplicações com React Native", "SQL Server, Azure e manutenção evolutiva"], en: ["APIs and services with C# and .NET", "Web interfaces with React", "React Native applications", "SQL Server, Azure and continuous improvement"] },
  },
  {
    period: { pt: "2023 — Hoje", en: "2023 — Present" }, company: "Independent / Freelance", role: "Full-Stack Developer",
    summary: { pt: "Produtos completos para diferentes contextos, da arquitetura e modelagem de dados à experiência final.", en: "End-to-end products for different contexts, from architecture and data modeling to the final experience." },
    items: { pt: ["Arquitetura e modelagem de dados", "APIs, integrações e autenticação", "Interfaces responsivas", "Publicação e evolução contínua"], en: ["Architecture and data modeling", "APIs, integrations and authentication", "Responsive interfaces", "Deployment and continuous evolution"] },
  },
];

const reveal = { initial: { opacity: 0, y: 50, filter: "blur(12px)" }, whileInView: { opacity: 1, y: 0, filter: "blur(0px)" }, viewport: { once: true, margin: "-12%" }, transition: { duration: .85, ease: [0.16, 1, .3, 1] } };

function ProjectDialog({ project, language, onClose }) {
  const t = content[language];
  useEffect(() => {
    const handleKey = event => event.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return <motion.div className="project-dialog" role="dialog" aria-modal="true" aria-label={`${t.project}: ${project.title}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <motion.div className="dialog-backdrop" onClick={onClose} />
    <motion.div className="dialog-shell" layoutId={`project-${project.title}`} initial={{ borderRadius: 24 }} animate={{ borderRadius: 0 }} exit={{ opacity: 0, scale: .94 }} transition={{ duration: .65, ease: [0.16, 1, .3, 1] }}>
      <button className="dialog-close" onClick={onClose} aria-label={t.closeProject}><FiX /><span>{t.close}</span></button>
      <div className="dialog-media" style={{ "--project-accent": project.accent }}>
        <motion.img src={project.image} alt={project.title} className={project.fit} initial={{ scale: 1.12, filter: "blur(12px)" }} animate={{ scale: 1, filter: "blur(0px)" }} transition={{ duration: .9 }} />
        <div className="media-scan" /><div className="media-chrome"><span>PROJECT FILM</span><div><i /><i /><i /></div><small>00:24</small></div>
      </div>
      <div className="dialog-content">
        <div className="dialog-index"><span>{project.year}</span><small>{project.category[language]}</small></div>
        <h3>{project.title}</h3><p className="dialog-lead">{project.description[language]}</p><p className="dialog-body">{project.details[language]}</p>
        <div className="dialog-tech"><span>{t.technologies}</span><div>{project.tech.map(item => <i key={item}>{item}</i>)}</div></div>
        <a href={project.url} target="_blank" rel="noreferrer">{project.url.includes("github") ? t.repository : t.visit}<FiArrowUpRight /></a>
      </div>
    </motion.div>
  </motion.div>;
}

function VideoCarousel({ language, onOpen }) {
  const [active, setActive] = useState(0);
  const t = content[language];
  const wrap = index => (index + projects.length) % projects.length;
  const relativeOffset = index => {
    let difference = index - active;
    if (difference > projects.length / 2) difference -= projects.length;
    if (difference < -projects.length / 2) difference += projects.length;
    return difference;
  };

  useEffect(() => {
    const handleKey = event => {
      if (event.key === "ArrowRight") setActive(value => wrap(value + 1));
      if (event.key === "ArrowLeft") setActive(value => wrap(value - 1));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return <div className="video-carousel">
    <div className="carousel-stage">
      <div className="orbit-line" aria-hidden="true" />
      {projects.map((project, index) => {
        const offset = relativeOffset(index);
        const distance = Math.abs(offset);
        return <motion.button
          key={project.title}
          className={`video-card ${offset === 0 ? "active" : ""}`}
          style={{ zIndex: 20 - distance, "--project-accent": project.accent }}
          animate={{ x: `${offset * 27}vw`, y: distance * 30, scale: Math.max(.52, 1 - distance * .16), rotateY: offset * -16, opacity: distance > 2 ? 0 : 1 }}
          transition={{ type: "spring", stiffness: 125, damping: 21 }}
          onClick={() => offset === 0 ? onOpen(project) : setActive(index)}
          aria-label={offset === 0 ? `${t.openPresentation}: ${project.title}` : project.title}
        >
          <motion.div className="video-frame" layoutId={offset === 0 ? `project-${project.title}` : undefined}>
            <img src={project.image} alt="" className={project.fit} />
            <div className="video-overlay" /><div className="video-top"><span>0{index + 1} / 0{projects.length}</span><small>{project.year}</small></div>
            <div className="video-play"><FiPlay /></div><div className="video-progress"><i /></div>
          </motion.div>
          <div className="video-caption"><span>{project.category[language]}</span><h3>{project.title}</h3><small>{offset === 0 ? t.openPresentation : project.year}</small></div>
        </motion.button>;
      })}
    </div>
    <div className="carousel-controls"><span>{t.drag}</span><div><button onClick={() => setActive(value => wrap(value - 1))} aria-label="Previous"><FiArrowLeft /></button><strong>{String(active + 1).padStart(2, "0")}<i>/</i>{String(projects.length).padStart(2, "0")}</strong><button onClick={() => setActive(value => wrap(value + 1))} aria-label="Next"><FiArrowRight /></button></div></div>
  </div>;
}

function ProjectArchive({ language }) {
  const [hovered, setHovered] = useState(null);
  const cursorX = useMotionValue(-500);
  const cursorY = useMotionValue(-500);
  const smoothX = useSpring(cursorX, { stiffness: 350, damping: 32 });
  const smoothY = useSpring(cursorY, { stiffness: 350, damping: 32 });
  const rotate = useTransform(smoothX, value => (value % 24) - 12);
  const t = content[language];
  return <section className="archive" id="all-work" onPointerMove={event => { cursorX.set(event.clientX); cursorY.set(event.clientY); }} onPointerLeave={() => setHovered(null)}>
    <div className="archive-head"><p>[ {t.all} ]</p><h2>{t.allTitle}</h2><span>{t.allHint}</span></div>
    <div className="archive-list">{projects.map((project, index) => <a href={project.url} target="_blank" rel="noreferrer" key={project.title} onPointerEnter={() => setHovered(index)} onFocus={() => setHovered(index)} onBlur={() => setHovered(null)}><span>{String(index + 1).padStart(2, "0")}</span><h3>{project.title}</h3><p>{project.category[language]}</p><small>{project.year}</small><FiArrowUpRight /></a>)}</div>
    <AnimatePresence>{hovered !== null && <motion.div className="cursor-project" style={{ x: smoothX, y: smoothY, rotate }} initial={{ opacity: 0, scale: .6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .6 }} transition={{ duration: .25 }}><img src={projects[hovered].image} alt="" className={projects[hovered].fit} /><span>{projects[hovered].title}</span></motion.div>}</AnimatePresence>
  </section>;
}

export default function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem("portfolio-language") || "pt");
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(null);
  const [copied, setCopied] = useState(false);
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tiltX = useSpring(useTransform(mouseY, [-.5, .5], [10, -10]), { stiffness: 80, damping: 18 });
  const tiltY = useSpring(useTransform(mouseX, [-.5, .5], [-13, 13]), { stiffness: 80, damping: 18 });
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.16]);
  const heroOpacity = useTransform(scrollYProgress, [0, .9], [1, .15]);
  const t = content[language];

  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem("portfolio-theme", theme); }, [theme]);
  useEffect(() => { document.documentElement.lang = language === "pt" ? "pt-BR" : "en"; localStorage.setItem("portfolio-language", language); }, [language]);
  useEffect(() => { document.body.classList.toggle("locked", menuOpen || Boolean(projectOpen)); return () => document.body.classList.remove("locked"); }, [menuOpen, projectOpen]);

  function pointerMove(event) { mouseX.set(event.clientX / window.innerWidth - .5); mouseY.set(event.clientY / window.innerHeight - .5); }
  async function copyEmail() { await navigator.clipboard.writeText("henriquee.aze.dev@gmail.com"); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }

  return <div className="site" onPointerMove={pointerMove}>
    <header className="header">
      <a href="#home" className="logo" aria-label="Henrique Azevedo">H<span>/</span>A</a>
      <nav>{t.nav.map(([label, id], index) => <a href={`#${id}`} key={id}><small>0{index + 1}</small><span>{label}</span></a>)}</nav>
      <div className="header-actions"><button onClick={() => setLanguage(language === "pt" ? "en" : "pt")} aria-label={t.language}>{language === "pt" ? "EN" : "PT"}</button><button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={t.theme}>{theme === "dark" ? <FiSun /> : <FiMoon />}</button><button className="menu-trigger" onClick={() => setMenuOpen(true)} aria-label={t.menu}><FiMenu /></button></div>
    </header>

    <AnimatePresence>{menuOpen && <motion.div className="menu" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: .65, ease: [0.76, 0, .24, 1] }}><div><span>H/A — 2026</span><button onClick={() => setMenuOpen(false)}>{t.close}<FiX /></button></div><nav>{t.nav.map(([label, id], index) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}><small>0{index + 1}</small><span>{label}</span><FiArrowUpRight /></a>)}</nav></motion.div>}</AnimatePresence>

    <main>
      <section className="hero" id="home" ref={heroRef}>
        <motion.div className="hero-image" style={{ scale: heroScale, opacity: heroOpacity }}><img src={profilePhoto} alt="" /><div /></motion.div>
        <div className="hero-grid" aria-hidden="true" />
        <motion.div className="hero-monogram" style={{ rotateX: tiltX, rotateY: tiltY }} aria-hidden="true"><span>H</span><i>A</i><b>H</b><em>A</em></motion.div>
        <motion.div className="hero-content" initial={{ opacity: 0, y: 40, filter: "blur(14px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1, delay: .15 }}><p>[ {t.folio} ]</p><h1>Henrique<br /><span>Azevedo</span></h1><div><span>{t.role}<br />{t.location}</span><p>{t.hero}</p></div></motion.div>
        <a className="hero-scroll" href="#work">{t.explore}<FiArrowDown /></a>
      </section>

      <section className="statement"><motion.p {...reveal}>{t.intro}</motion.p><div><span>FULL-STACK</span><i /> <span>PRODUCT</span><i /> <span>WEB EXPERIENCES</span><i /></div></section>

      <section className="selected-work" id="work">
        <div className="section-heading"><p>[ {t.selected} ]</p><motion.h2 {...reveal}>{t.selectedTitle}</motion.h2><span>{t.selectedText}</span></div>
        <VideoCarousel language={language} onOpen={setProjectOpen} />
      </section>

      <ProjectArchive language={language} />

      <section className="info" id="info">
        <div className="section-heading"><p>[ {t.infoLabel} ]</p><motion.h2 {...reveal}>{t.infoTitle.split("\n").map(line => <span key={line}>{line}</span>)}</motion.h2></div>
        <div className="info-layout">
          <motion.div className="profile-card" {...reveal}><div className="profile-image"><img src={profilePhoto} alt="Henrique Azevedo" /><span>HA / 26</span></div><div className="profile-status"><i /><span>{t.availabilityValue}</span></div></motion.div>
          <motion.div className="profile-copy" {...reveal}><p className="profile-lead">{t.infoLead}</p><p>{t.infoBody}</p><a href={`${import.meta.env.BASE_URL}${language === "pt" ? "Henrique Azevedo - Currículo - Desenvolvedor - (Português).pdf" : "Henrique Azevedo - Resume - Developer - (English).pdf"}`} target="_blank" rel="noreferrer">{t.resume}<FiDownload /></a></motion.div>
          <motion.dl className="profile-facts" {...reveal}><div><dt>01 / {t.based}</dt><dd>São Paulo, BR</dd></div><div><dt>02 / {t.focus}</dt><dd>{t.focusValue}</dd></div><div><dt>03 / {t.availability}</dt><dd>{t.availabilityValue}</dd></div></motion.dl>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="section-heading"><p>[ {t.experienceLabel} ]</p><motion.h2 {...reveal}>{t.experienceTitle.split("\n").map(line => <span key={line}>{line}</span>)}</motion.h2></div>
        <div className="experience-list">{experiences.map((item, index) => <motion.article key={item.company} {...reveal}><div className="experience-index"><span>0{index + 1}</span><i /></div><div className="experience-main"><small>{item.period[language]}</small><h3>{item.company}</h3><p>{item.role}</p></div><p className="experience-summary">{item.summary[language]}</p><div className="experience-items"><span>{t.responsibilities}</span>{item.items[language].map(entry => <p key={entry}>{entry}</p>)}</div></motion.article>)}</div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-grid" aria-hidden="true" />
        <motion.div className="contact-content" {...reveal}><p>[ {t.contactLabel} ]</p><h2>{t.contactTitle.split("\n").map(line => <span key={line}>{line}</span>)}</h2><div className="contact-lower"><p>{t.contactBody}</p><div><a href="mailto:henriquee.aze.dev@gmail.com">{t.write}<FiMail /></a><button onClick={copyEmail}>{copied ? t.copied : t.copyEmail}</button></div></div></motion.div>
      </section>
    </main>

    <footer><div><span>© 2026</span><p>{t.footer}</p></div><div><a href="https://github.com/henriiqueaze" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a><a href="https://www.linkedin.com/in/henrique-azevedo-b2195b2b0/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a></div><a href="#home">{t.back}<FiArrowUpRight /></a></footer>

    <AnimatePresence>{projectOpen && <ProjectDialog project={projectOpen} language={language} onClose={() => setProjectOpen(null)} />}</AnimatePresence>
  </div>;
}
