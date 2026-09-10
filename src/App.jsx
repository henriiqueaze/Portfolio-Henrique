import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { FiArrowDown, FiArrowLeft, FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiMenu, FiMoon, FiPlay, FiSun, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaBootstrap, FaCss3Alt, FaDatabase, FaDocker, FaGitAlt, FaGithub as FaGithubBrand, FaHtml5, FaJava, FaJsSquare, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiAngular, SiDjango, SiDotnet, SiSpringboot, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandAzure, TbBrandCSharp } from "react-icons/tb";
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
    nav: [
      ["Início", "home"],
      ["Trabalhos", "work"],
      ["Sobre", "info"],
      ["Experiência", "experience"],
      ["Contato", "contact"],
    ],
    menu: "Menu",
    close: "Fechar",
    theme: "Alternar tema",
    language: "Switch to English",
    folio: "Portfólio de",
    role: "Desenvolvedor Full-Stack",
    location: "São Paulo, Brasil",
    hero: "Produtos digitais construídos de ponta a ponta — com intenção, desempenho e movimento.",
    explore: "Conheça meu trabalho",
    aboutLabel: "Sobre mim",
    aboutRoles: [
      "Desenvolvedor full-stack.",
      "Qualidade de software.",
      "Analista de sistemas.",
    ],
    aboutLead:
      "Sou Henrique Azevedo, desenvolvedor full-stack que trabalha entre produto, interface e infraestrutura.",
    aboutBody:
      "Minha experiência passa por sistemas empresariais, produtos independentes e aplicações com impacto real. Transformo regras complexas em experiências claras, construindo desde a arquitetura e as APIs até a última interação da interface — sempre com atenção a desempenho, manutenção e contexto de negócio.",
    resume: "Baixar currículo",
    based: "São Paulo, Brasil",
    available: "Disponível para projetos e oportunidades selecionadas",
    aboutMeta: "CÓDIGO, SOFTWARE E ARQUITETURA / 2026",
    aboutTitle: "Desenvolvedor full-stack que transforma regras de negócio em produtos digitais",
    aboutParagraphs: ["Sou Henrique Azevedo. Trabalho na construção de software de ponta a ponta, traduzindo necessidades de negócio em sistemas claros, confiáveis e simples de usar.", "Hoje, na MBA Consultoria & Sistemas, desenvolvo e mantenho aplicações usadas em operações reais. Atuo com C#, .NET, SQL Server, React, React Native e Azure, conectando interfaces, APIs, dados e regras de negócio no mesmo produto.", "Em paralelo, desenvolvo produtos autorais como Cook—It, StudentProgress e Sociau. Esses projetos ampliaram minha experiência com Java, Spring Boot, React, Angular, PostgreSQL e Docker — da definição da arquitetura à publicação e evolução contínua."],
    knowledgeLabel: "Minha trajetória", knowledgeTitle: "Entre estudo, produtos autorais e software em produção",
    knowledgeTimeline: [{ period: "2023", title: "Primeiras entregas", text: "Comecei a transformar fundamentos de programação, orientação a objetos, web e bancos de dados em aplicações completas e trabalhos independentes." }, { period: "2024", title: "Amplitude técnica", text: "Avancei em Java, Spring Boot, SQL e APIs REST, além de explorar aplicações desktop com Python e arquiteturas preparadas para evolução." }, { period: "2025", title: "Visão de produto", text: "Construí experiências completas com React e Angular em projetos como StudentProgress e Sociau, aproximando decisões técnicas das necessidades de quem usa." }, { period: "2026 — Hoje", title: "Software em operação", text: "Na MBA Consultoria & Sistemas, trabalho com C#, .NET, SQL Server, React, React Native e Azure em aplicações empresariais que exigem manutenção, refatoração e confiabilidade." }],
    selectedTitle: "Projetos em movimento.",
    selectedText:
      "Arraste a faixa para explorar. Toque no projeto central para abrir sua apresentação.",
    openPresentation: "Abrir projeto",
    drag: "Arraste para navegar",
    project: "Projeto",
    technologies: "Tecnologias",
    visit: "Visitar projeto",
    repository: "Ver repositório",
    closeProject: "Fechar projeto",
    videoPlaceholder: "Prévia do projeto",
    all: "Todos os projetos",
    allTitle: "Arquivo de trabalhos.",
    allHint: "Passe o cursor sobre um projeto para visualizar sua identidade.",
    viewAll: "Ver todos os trabalhos",
    archiveBack: "Voltar ao portfólio",
    experienceLabel: "Experiência",
    experienceTitle: "Experiência construída\nem produto real.",
    experienceIntro:
      "Do software empresarial aos produtos autorais, cada trabalho ampliou meu repertório técnico e meu olhar de produto.",
    responsibilities: "Principais frentes",
    projects: "Projetos",
    details: "Ver detalhes",
    contactLabel: "Contato",
    contactQuestion: "Entre em contato!",
    contactBody:
      "Me conta o que você tem em mente. Pode ser um produto novo, uma ideia que ainda está tomando forma ou um problema que precisa de uma boa solução. A gente pensa no melhor caminho para transformar isso em algo real, bem feito e com personalidade.",
    choose: "Escolha o canal que preferir:",
    write: "E-mail",
    whatsapp: "Abrir WhatsApp",
    back: "Voltar ao topo",
    footer: "Projetado e desenvolvido por Henrique Azevedo",
  },
  en: {
    nav: [
      ["Home", "home"],
      ["Work", "work"],
      ["About", "info"],
      ["Experience", "experience"],
      ["Contact", "contact"],
    ],
    menu: "Menu",
    close: "Close",
    theme: "Toggle theme",
    language: "Mudar para português",
    folio: "Portfolio of",
    role: "Full-Stack Developer",
    location: "São Paulo, Brazil",
    hero: "End-to-end digital products — built with intention, performance and motion.",
    explore: "Discover my work",
    aboutLabel: "About me",
    aboutRoles: [
      "Full-stack developer.",
      "Product-minded.",
      "Systems builder.",
    ],
    aboutLead:
      "I'm Henrique Azevedo, a full-stack developer working across product, interface and infrastructure.",
    aboutBody:
      "My experience spans business systems, independent products and applications with real-world impact. I turn complex rules into clear experiences, building from architecture and APIs to the last interface interaction — always considering performance, maintainability and business context.",
    resume: "Download résumé",
    based: "São Paulo, Brazil",
    available: "Available for selected projects and opportunities",
    aboutMeta: "PRODUCT, CODE AND MOTION / 2026",
    aboutTitle: "Full-stack developer turning business rules into digital products",
    aboutParagraphs: ["I'm Henrique Azevedo. I build software end to end, translating business needs into systems that are clear, reliable and simple to use.", "At MBA Consultoria & Sistemas, I develop and maintain applications used in real operations. I work with C#, .NET, SQL Server, React, React Native and Azure, connecting interfaces, APIs, data and business rules within the same product.", "Alongside my professional work, I build independent products such as Cook—It, StudentProgress and Sociau. These projects expanded my experience with Java, Spring Boot, React, Angular, PostgreSQL and Docker — from architecture through deployment and continuous evolution."],
    knowledgeLabel: "My journey", knowledgeTitle: "Across study, independent products and production software",
    knowledgeTimeline: [{ period: "2023", title: "First deliveries", text: "I began turning foundations in programming, object-oriented design, web development and databases into complete applications and independent work." }, { period: "2024", title: "Technical range", text: "I advanced in Java, Spring Boot, SQL and REST APIs while exploring desktop applications with Python and architectures designed to evolve." }, { period: "2025", title: "Product perspective", text: "I built complete experiences with React and Angular through projects such as StudentProgress and Sociau, bringing technical decisions closer to user needs." }, { period: "2026 — Present", title: "Software in operation", text: "At MBA Consultoria & Sistemas, I work with C#, .NET, SQL Server, React, React Native and Azure on enterprise applications that demand maintenance, refactoring and reliability." }],
    selected: "Selected work",
    selectedTitle: "Projects in motion.",
    selectedText:
      "Drag the reel to explore. Select the centered project to open its presentation.",
    openPresentation: "Open project",
    drag: "Drag to browse",
    project: "Project",
    technologies: "Technologies",
    visit: "Visit project",
    repository: "View repository",
    closeProject: "Close project",
    videoPlaceholder: "Project preview",
    all: "All projects",
    allTitle: "Work archive.",
    allHint: "Move your cursor over a project to reveal its identity.",
    viewAll: "View all work",
    archiveBack: "Back to portfolio",
    experienceLabel: "Experience",
    experienceTitle: "Experience built\nthrough real products.",
    experienceIntro:
      "From enterprise software to independent products, each engagement expanded my technical range and product perspective.",
    responsibilities: "Primary focus",
    projects: "Projects",
    details: "View details",
    contactLabel: "Contact",
    contactQuestion: "Have an idea that needs to become real?",
    contactBody:
      "Tell me what you want to build — a new product, a better experience or a solution to a real problem. Let's find a clear, technically sound path with personality.",
    choose: "Choose the channel you prefer:",
    write: "Email",
    whatsapp: "Open WhatsApp",
    back: "Back to top",
    footer: "Designed and developed by Henrique Azevedo",
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

const technologies = [
  ["Java", <FaJava />], ["Spring Boot", <SiSpringboot />], ["C#", <TbBrandCSharp />], ["ASP.NET", <SiDotnet />], ["Python", <FaPython />], ["Django", <SiDjango />], ["JavaScript", <FaJsSquare />], ["TypeScript", <SiTypescript />], ["React", <FaReact />], ["Angular", <SiAngular />], ["Node.js", <FaNodeJs />], ["SQL", <FaDatabase />], ["HTML5", <FaHtml5 />], ["CSS3", <FaCss3Alt />], ["Tailwind", <SiTailwindcss />], ["Bootstrap", <FaBootstrap />], ["Docker", <FaDocker />], ["Git", <FaGitAlt />], ["GitHub", <FaGithubBrand />], ["Azure", <TbBrandAzure />],
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
  const trackRef = useRef(null); const reelX = useMotionValue(0); const loopWidth = useRef(1); const paused = useRef(false); const clickGuard = useRef(0); const pointerStart = useRef(null); const dragging = useRef(false);
  useEffect(() => {
    const measure = () => { if (trackRef.current) loopWidth.current = trackRef.current.scrollWidth / 2; };
    measure(); window.addEventListener("resize", measure); return () => window.removeEventListener("resize", measure);
  }, []);
  useAnimationFrame((_, delta) => {
    if (paused.current || loopWidth.current <= 1) return;
    let next = reelX.get() - Math.min(delta, 40) * .034;
    if (next <= -loopWidth.current) next += loopWidth.current;
    reelX.set(next);
  });
  const repeatedProjects = [...projects, ...projects];
  return <div className="project-reel">
    <div className="reel-viewport"><motion.div ref={trackRef} className="reel-track" style={{ x: reelX }} drag="x" dragConstraints={{ left: -100000, right: 100000 }} dragElastic={0} dragMomentum onDragStart={() => { paused.current = true; dragging.current = true; clickGuard.current = Number.POSITIVE_INFINITY; }} onDragEnd={() => { clickGuard.current = Date.now() + 520; dragging.current = false; const width = loopWidth.current; if (width > 1) { let normalized = reelX.get() % width; if (normalized > 0) normalized -= width; reelX.set(normalized); } window.setTimeout(() => { paused.current = false; }, 120); }}>
      {repeatedProjects.map((project, index) => <motion.button key={`${project.title}-${index}`} className="reel-card" style={{ "--project-accent": project.accent, "--card-ratio": index % 3 === 2 ? "1.38" : index % 2 ? "1.66" : "1.75" }} whileHover={{ y: -6 }} onPointerDown={event => { pointerStart.current = { x: event.clientX, y: event.clientY }; }} onPointerUp={event => { const start = pointerStart.current; pointerStart.current = null; if (!start) return; const distance = Math.hypot(event.clientX - start.x, event.clientY - start.y); window.setTimeout(() => { if (distance < 5 && !dragging.current && Date.now() > clickGuard.current) onOpen(project); }, 0); }} onPointerCancel={() => { pointerStart.current = null; }} onClick={event => event.preventDefault()} onKeyDown={event => { if ((event.key === "Enter" || event.key === " ") && Date.now() > clickGuard.current) { event.preventDefault(); onOpen(project); } }} aria-label={`${t.openPresentation}: ${project.title}`}>
        <motion.div className="reel-media"><img src={project.image} alt="" className={project.fit} /><div className="reel-shade" /><div className="reel-meta"><span>{project.title}</span><small>{project.category[language]}</small></div><div className="reel-play"><FiPlay /></div></motion.div>
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

function AboutStory({ language }) {
  const t = content[language];
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const cardY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const cardRotate = useTransform(scrollYProgress, [0, .5, 1], [-9, 3, 9]);
  const resumeUrl = `${import.meta.env.BASE_URL}${language === "pt" ? "Henrique Azevedo - Currículo - Desenvolvedor - (Português).pdf" : "Henrique Azevedo - Resume - Developer - (English).pdf"}`;

  return <section className="about-story" id="info" ref={sectionRef}>
    <div className="about-story-grid">
      <div className="about-story-visual">
        <div className="about-story-backdrop"><img src={profilePhoto} alt="" /></div>
        <motion.div className="about-story-card" style={{ y: cardY, rotate: cardRotate }}><div><img src={profilePhoto} alt="Henrique Azevedo" /></div><span>Henrique Azevedo</span><small>Full-stack developer — 2026</small></motion.div>
      </div>
      <div className="about-story-content">
        <motion.div className="about-story-intro" {...reveal}>
          <span className="about-story-tag">&#123; {t.aboutLabel} &#125;</span>
          <h2>{t.aboutTitle}</h2>
          <div className="about-story-copy">{t.aboutParagraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
          <a className="about-story-resume" href={resumeUrl} target="_blank" rel="noreferrer">{t.resume}<FiDownload /></a>
        </motion.div>
        <motion.div className="about-knowledge-head" {...reveal}><span className="about-story-tag">&#123; {t.knowledgeLabel} &#125;</span><h3>{t.knowledgeTitle}</h3></motion.div>
        <div className="about-knowledge-list">{t.knowledgeTimeline.map((item, index) => <motion.article key={item.period} initial={{ opacity: 0, y: 55 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .7, delay: index * .05 }}><div><span className="about-story-tag">&#123; {item.period} &#125;</span><h3>{item.title}</h3></div><p>{item.text}</p></motion.article>)}</div>
      </div>
    </div>
  </section>;
}

function TechnologyLoop({ language }) {
  const repeated = [...technologies, ...technologies];
  const label = language === "pt" ? "Tecnologias que utilizo" : "Technologies I use";
  return <div className="technology-loop" role="region" aria-label={label}>
    <div className="technology-loop-fade left" aria-hidden="true" />
    <div className="technology-loop-fade right" aria-hidden="true" />
    <div className="technology-loop-track">{repeated.map(([name, icon], index) => <span className="technology-loop-item" key={`${name}-${index}`} aria-hidden={index >= technologies.length}>{icon}<b>{name}</b></span>)}</div>
  </div>;
}

function ExperienceSection({ language }) {
  const t = content[language];
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 72%", "end 32%"] });
  const runnerTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return <section className="experience" id="experience">
    <motion.h2 {...reveal}>{t.experienceLabel}</motion.h2>
    <div className="career-timeline" ref={timelineRef}>
      <span className="timeline-rail" aria-hidden="true" /><motion.span className="timeline-progress" style={{ scaleY: scrollYProgress }} aria-hidden="true" /><motion.span className="timeline-runner" style={{ top: runnerTop }} aria-hidden="true" />
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
    <TechnologyLoop language={language} />
  </section>;
}

export default function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem("portfolio-language") || "pt");
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");
  const [menuOpen, setMenuOpen] = useState(false); const [projectOpen, setProjectOpen] = useState(null);
  const heroRef = useRef(null); const mouseX = useMotionValue(0); const mouseY = useMotionValue(0);
  const tiltX = useSpring(useTransform(mouseY, [-.5, .5], [10, -10]), { stiffness: 80, damping: 18 }); const tiltY = useSpring(useTransform(mouseX, [-.5, .5], [-13, 13]), { stiffness: 80, damping: 18 });
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] }); const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]); const heroOpacity = useTransform(scrollYProgress, [0, .9], [1, .18]); const t = content[language];
  const isWorkArchive = window.location.pathname.replace(/\/+$/, "") === "/trabalhos";
  const navHref = id => isWorkArchive ? `/#${id}` : `#${id}`;
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem("portfolio-theme", theme); }, [theme]);
  useEffect(() => { document.documentElement.lang = language === "pt" ? "pt-BR" : "en"; localStorage.setItem("portfolio-language", language); }, [language]);
  useEffect(() => { document.body.classList.toggle("locked", menuOpen || Boolean(projectOpen)); return () => document.body.classList.remove("locked"); }, [menuOpen, projectOpen]);
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    if (!window.location.hash) window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0 }));
  }, []);
  function pointerMove(event) { mouseX.set(event.clientX / window.innerWidth - .5); mouseY.set(event.clientY / window.innerHeight - .5); }
  return <div className="site" onPointerMove={pointerMove}>
    <header className="header"><a href={navHref("home")} className="logo" aria-label="Henrique Azevedo">H<span>/</span>A</a><nav>{t.nav.map(([label, id], index) => <a href={navHref(id)} key={id}><small>0{index + 1}</small><span>{label}</span></a>)}</nav><div className="header-actions"><button onClick={() => setLanguage(language === "pt" ? "en" : "pt")} aria-label={t.language}>{language === "pt" ? "EN" : "PT"}</button><button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={t.theme}>{theme === "dark" ? <FiSun /> : <FiMoon />}</button><button className="menu-trigger" onClick={() => setMenuOpen(true)} aria-label={t.menu}><FiMenu /></button></div></header>
    <AnimatePresence>{menuOpen && <motion.div className="menu" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: .65, ease: [0.76, 0, .24, 1] }}><div><span>H/A — 2026</span><button onClick={() => setMenuOpen(false)}>{t.close}<FiX /></button></div><nav>{t.nav.map(([label, id], index) => <a href={navHref(id)} key={id} onClick={() => setMenuOpen(false)}><small>0{index + 1}</small><span>{label}</span><FiArrowUpRight /></a>)}</nav></motion.div>}</AnimatePresence>
    {isWorkArchive ? <main className="work-route"><a className="archive-back" href="/"><FiArrowLeft />{t.archiveBack}</a><ProjectArchive language={language} /></main> : <main>
      <section className="hero" id="home" ref={heroRef}><motion.div className="hero-image" style={{ scale: heroScale, opacity: heroOpacity }}><div /></motion.div><div className="hero-grid" aria-hidden="true" /><motion.div className="hero-monogram" style={{ rotateX: tiltX, rotateY: tiltY }} aria-hidden="true"><span>H</span><i>A</i><b>H</b><em>A</em></motion.div><motion.div className="hero-content" initial={{ opacity: 0, y: 40, filter: "blur(14px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1, delay: .15 }}><h1>Henrique<br /><span>Azevedo</span></h1></motion.div><motion.div className="hero-bottom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .65 }}><span>{t.role}</span></motion.div><a className="hero-scroll" href="#info">{t.explore}<FiArrowDown /></a></section>
      <AboutStory language={language} />
      <section className="selected-work" id="work"><div className="selected-interface"><p>Projetos Selecionados</p><span>{t.drag}</span></div><ProjectReel language={language} onOpen={setProjectOpen} /><a className="all-work-cta" href="/trabalhos">{t.viewAll}<FiArrowUpRight /></a><div className="selected-bottom"><span>{t.selected}</span></div></section>
      <ExperienceSection language={language} />
      <section className="contact" id="contact"><div className="contact-direct"><motion.div className="contact-copy" {...reveal}><p>{t.contactLabel}</p><h2>{t.contactQuestion}</h2><span>{t.contactBody}</span></motion.div><motion.div className="contact-side" {...reveal}><p>{t.choose}</p><ul className="contact-channels"><li><a href="https://wa.me/" target="_blank" rel="noreferrer"><span>01</span><span><strong><FaWhatsapp />WhatsApp</strong><small>{t.whatsapp}</small></span><FiArrowUpRight /></a></li><li><a href="mailto:henriquee.aze.dev@gmail.com"><span>02</span><span><strong><FiMail />{t.write}</strong><small>henriquee.aze.dev@gmail.com</small></span><FiArrowUpRight /></a></li><li><a href="https://www.linkedin.com/in/henrique-azevedo-b2195b2b0/" target="_blank" rel="noreferrer"><span>03</span><span><strong><FiLinkedin />LinkedIn</strong><small>/in/henrique-azevedo</small></span><FiArrowUpRight /></a></li><li><a href="https://github.com/henriiqueaze" target="_blank" rel="noreferrer"><span>04</span><span><strong><FiGithub />GitHub</strong><small>@henriiqueaze</small></span><FiArrowUpRight /></a></li></ul></motion.div></div></section>
    </main>}
    <footer><div><span>© 2026</span><p>{t.footer}</p></div><div><a href="https://github.com/henriiqueaze" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a><a href="https://www.linkedin.com/in/henrique-azevedo-b2195b2b0/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a></div><a href={navHref("home")}>{t.back}<FiArrowUpRight /></a></footer>
    <AnimatePresence>{projectOpen && <ProjectDialog project={projectOpen} language={language} onClose={() => setProjectOpen(null)} />}</AnimatePresence>
  </div>;
}
