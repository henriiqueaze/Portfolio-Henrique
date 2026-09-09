import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiDownload, FiGithub, FiGlobe, FiLinkedin, FiMail, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import profilePhoto from "./assets/images/henrique-picture.jpg";
import cookIt from "./assets/images/projects/cook-it.jpg";
import studentProgress from "./assets/images/projects/student-progress-logo.png";
import sociau from "./assets/images/projects/sociau-logo.jpg";
import volumtarium from "./assets/images/projects/volumtarium-logo.png";
import taskManager from "./assets/images/projects/gerenciamento-de-tarefas-layout.png";
import pum from "./assets/images/projects/pum.png";

const copy = {
  pt: {
    skip: "Pular para o conteúdo",
    nav: [["Sobre", "about"], ["Experiência", "experience"], ["Projetos", "projects"], ["Stack", "stack"]],
    available: "Disponível para novos projetos",
    eyebrow: "Full-stack developer · Brasil",
    heroA: "Construo produtos",
    heroB: "digitais que funcionam.",
    intro: "Transformo problemas complexos em experiências simples, rápidas e escaláveis — do banco de dados à última interação da interface.",
    viewWork: "Ver projetos", contact: "Vamos conversar", scroll: "Explore",
    aboutLabel: "01 / Sobre", aboutTitle: "Código com contexto. Interfaces com intenção.",
    aboutText: "Sou Henrique, desenvolvedor Full Stack com experiência em diferentes linguagens, frameworks e bancos de dados. Gosto de entender o produto por inteiro e construir soluções que equilibrem engenharia sólida, clareza visual e impacto real.",
    years: "anos criando", projectsCount: "projetos em destaque", layers: "front + back", resume: "Baixar currículo",
    experienceLabel: "02 / Experiência", experienceTitle: "Onde venho construindo",
    experiences: [
      { period: "2026 — hoje", company: "MBA Consultoria & Sistemas", role: "Desenvolvedor Full-Stack", text: "Desenvolvimento e evolução de produtos web, APIs e aplicações mobile para operações reais." },
      { period: "2023 — hoje", company: "Projetos independentes", role: "Desenvolvedor Full-Stack Freelancer", text: "Produtos completos para diferentes contextos, da descoberta e modelagem à interface e entrega." },
    ],
    projectsLabel: "03 / Trabalho selecionado", projectsTitle: "Projetos que saíram do papel", openProject: "Abrir projeto",
    projectItems: [
      ["Cook-It", "Receitas inteligentes a partir do que já existe na sua cozinha.", ["React", "Spring Boot", "PostgreSQL"]],
      ["StudentProgress", "Gestão acadêmica clara para acompanhar alunos, notas e evolução.", ["React", "Java", "REST API"]],
      ["Sociau", "Uma ponte digital entre ONGs de resgate e pessoas que querem adotar.", ["Angular", "Java", "UX"]],
      ["Volumtarium", "Oportunidades sociais conectando voluntários e organizações por perfil e localização.", ["React", "Node.js", "Maps"]],
      ["Gerenciador de Tarefas", "Organização diária em uma aplicação desktop direta e intuitiva.", ["Python", "Tkinter", "SQLite"]],
      ["PUM", "Ecossistema escalável para alunos, monitores, cursos e atividades acadêmicas.", ["Java", "Spring Boot", "SQL"]],
    ],
    stackLabel: "04 / Stack", stackTitle: "Ferramentas mudam. O cuidado com o produto, não.", stackText: "Uma stack versátil para construir da interface à infraestrutura.",
    contactLabel: "05 / Contato", contactTitleA: "Tem uma ideia?", contactTitleB: "Vamos fazê-la existir.",
    contactText: "Estou sempre aberto a projetos interessantes, colaborações e boas conversas sobre tecnologia.", emailMe: "Enviar um e-mail",
    footer: "Projetado e desenvolvido por Henrique Azevedo.", theme: "Alternar tema", language: "Switch to English", menu: "Abrir menu",
  },
  en: {
    skip: "Skip to content",
    nav: [["About", "about"], ["Experience", "experience"], ["Projects", "projects"], ["Stack", "stack"]],
    available: "Available for new projects", eyebrow: "Full-stack developer · Brazil",
    heroA: "I build digital products", heroB: "that simply work.",
    intro: "I turn complex problems into simple, fast, scalable experiences — from the database to the last interface interaction.",
    viewWork: "View projects", contact: "Let's talk", scroll: "Explore",
    aboutLabel: "01 / About", aboutTitle: "Code with context. Interfaces with intent.",
    aboutText: "I'm Henrique, a Full Stack developer experienced across languages, frameworks, and databases. I like to understand the whole product and build solutions that balance solid engineering, visual clarity, and real impact.",
    years: "years building", projectsCount: "featured projects", layers: "front + back", resume: "Download résumé",
    experienceLabel: "02 / Experience", experienceTitle: "Where I've been building",
    experiences: [
      { period: "2026 — present", company: "MBA Consulting & Systems", role: "Full-Stack Developer", text: "Building and evolving web products, APIs, and mobile applications for real-world operations." },
      { period: "2023 — present", company: "Independent projects", role: "Freelance Full-Stack Developer", text: "End-to-end products across different contexts, from discovery and modeling to interface and delivery." },
    ],
    projectsLabel: "03 / Selected work", projectsTitle: "Projects brought to life", openProject: "Open project",
    projectItems: [
      ["Cook-It", "Smart recipes built around what you already have in your kitchen.", ["React", "Spring Boot", "PostgreSQL"]],
      ["StudentProgress", "Clear academic management for students, grades, and progress.", ["React", "Java", "REST API"]],
      ["Sociau", "A digital bridge between animal rescue NGOs and people looking to adopt.", ["Angular", "Java", "UX"]],
      ["Volumtarium", "Social opportunities connecting volunteers and organizations by profile and location.", ["React", "Node.js", "Maps"]],
      ["Task Manager", "Daily organization in a direct and intuitive desktop application.", ["Python", "Tkinter", "SQLite"]],
      ["PUM", "A scalable ecosystem for students, mentors, courses, and academic activities.", ["Java", "Spring Boot", "SQL"]],
    ],
    stackLabel: "04 / Stack", stackTitle: "Tools change. Product care doesn't.", stackText: "A versatile stack to build from interface to infrastructure.",
    contactLabel: "05 / Contact", contactTitleA: "Have an idea?", contactTitleB: "Let's make it real.",
    contactText: "I'm always open to interesting projects, collaborations, and good conversations about technology.", emailMe: "Send an email",
    footer: "Designed and developed by Henrique Azevedo.", theme: "Toggle theme", language: "Mudar para português", menu: "Open menu",
  },
};

const projectVisuals = [
  [cookIt, "https://cook-it-zeta.vercel.app/"],
  [studentProgress, "https://student-progress-livid.vercel.app/"],
  [sociau, "https://github.com/Sociau"],
  [volumtarium, "https://github.com/henriiqueaze/Volumtarium"],
  [taskManager, "https://github.com/henriiqueaze/Sistema-de-Gerenciamento-de-Tarefas"],
  [pum, "https://github.com/henriiqueaze/PUM"],
];
const technologies = ["Java", "Spring Boot", "C#", ".NET", "React", "Angular", "TypeScript", "Node.js", "Python", "SQL", "Docker", "Azure"];
const reveal = { initial: { opacity: 0, y: 32 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } };

function SectionLabel({ children }) {
  return <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-500 sm:text-xs">{children}</p>;
}

export default function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem("portfolio-language") || "pt");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  const projects = useMemo(() => t.projectItems.map((item, index) => ({ title: item[0], description: item[1], tags: item[2], image: projectVisuals[index][0], link: projectVisuals[index][1] })), [t]);

  useEffect(() => { document.documentElement.classList.toggle("light", theme === "light"); document.documentElement.dataset.theme = theme; localStorage.setItem("theme", theme); }, [theme]);
  useEffect(() => { document.documentElement.lang = language === "pt" ? "pt-BR" : "en"; localStorage.setItem("portfolio-language", language); }, [language]);

  return (
    <div className="min-h-screen overflow-clip bg-stone-950 text-stone-100 selection:bg-cyan-400 selection:text-stone-950 light:bg-[#f4f3ef] light:text-stone-950">
      <motion.div className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-cyan-400" style={{ scaleX: progress }} />
      <a href="#main" className="fixed left-4 top-4 z-[80] -translate-y-24 bg-cyan-400 px-4 py-2 text-sm font-semibold text-stone-950 focus:translate-y-0">{t.skip}</a>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between rounded-full border border-white/10 bg-stone-950/75 px-5 py-3.5 shadow-2xl shadow-black/10 backdrop-blur-xl light:border-black/10 light:bg-[#f4f3ef]/80">
          <a href="#home" className="group flex items-center gap-3 text-sm font-semibold tracking-tight" aria-label="Henrique Azevedo — home"><span className="grid size-8 place-items-center rounded-full bg-cyan-400 font-mono text-xs font-bold text-stone-950 transition-transform group-hover:rotate-12">HA</span><span className="hidden sm:block">Henrique Azevedo</span></a>
          <div className="hidden items-center gap-7 lg:flex">{t.nav.map(([label, id]) => <a key={id} href={`#${id}`} className="nav-link text-xs font-medium text-stone-400 hover:text-cyan-400 light:text-stone-600">{label}</a>)}</div>
          <div className="flex items-center gap-1">
            <button onClick={() => setLanguage(language === "pt" ? "en" : "pt")} className="icon-button" aria-label={t.language} title={t.language}><FiGlobe /><span className="font-mono text-[10px] font-bold uppercase">{language}</span></button>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="icon-button" aria-label={t.theme} title={t.theme}>{theme === "dark" ? <FiSun /> : <FiMoon />}</button>
            <button onClick={() => setMenuOpen(true)} className="icon-button lg:hidden" aria-label={t.menu}><FiMenu /></button>
          </div>
        </nav>
      </header>

      <AnimatePresence>{menuOpen && <motion.div className="fixed inset-0 z-[60] flex flex-col bg-stone-950 p-6 text-stone-100 light:bg-[#f4f3ef] light:text-stone-950" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><div className="flex justify-end"><button onClick={() => setMenuOpen(false)} className="icon-button" aria-label="Fechar menu"><FiX /></button></div><div className="flex flex-1 flex-col justify-center gap-4">{t.nav.map(([label, id], index) => <motion.a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="border-b border-white/10 py-4 text-4xl font-semibold light:border-black/10" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.06 }}><span className="mr-4 font-mono text-xs text-cyan-500">0{index + 1}</span>{label}</motion.a>)}</div></motion.div>}</AnimatePresence>

      <main id="main">
        <section id="home" className="relative flex min-h-screen items-end px-5 pb-10 pt-32 sm:px-8 sm:pb-14 lg:px-12">
          <div className="pointer-events-none absolute -right-40 top-10 size-[38rem] rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="mx-auto w-full max-w-[1440px]">
            <div className="mb-10 flex flex-wrap items-center justify-between gap-4"><motion.p className="font-mono text-[11px] uppercase tracking-[0.2em] text-stone-400 light:text-stone-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>{t.eyebrow}</motion.p><motion.div className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-cyan-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}><span className="size-1.5 animate-pulse rounded-full bg-cyan-400" />{t.available}</motion.div></div>
            <h1 className="max-w-[1300px] text-[clamp(3.5rem,9.8vw,10rem)] font-semibold leading-[0.84] tracking-[-0.075em]"><motion.span className="block" initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>{t.heroA}</motion.span><motion.span className="block text-stone-500 light:text-stone-400" initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}>{t.heroB}</motion.span></h1>
            <motion.div className="mt-10 grid gap-8 border-t border-white/10 pt-7 md:grid-cols-[1fr_auto] md:items-end light:border-black/10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}><p className="max-w-xl text-base leading-relaxed text-stone-400 sm:text-lg light:text-stone-600">{t.intro}</p><div className="flex flex-wrap gap-3"><a href="#projects" className="button-primary">{t.viewWork}<FiArrowDown /></a><a href="mailto:henriquee.aze.dev@gmail.com" className="button-secondary">{t.contact}<FiArrowUpRight /></a></div></motion.div>
          </div>
        </section>

        <section id="about" className="section-shell border-t border-white/10 light:border-black/10"><motion.div {...reveal} className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><SectionLabel>{t.aboutLabel}</SectionLabel><div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] bg-stone-900 light:bg-stone-200"><img src={profilePhoto} alt="Henrique Azevedo" className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0" /><div className="absolute inset-0 bg-gradient-to-t from-stone-950/45 to-transparent" /><span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/30 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-white backdrop-blur">São Paulo · BR</span></div></div><div className="flex flex-col justify-end"><h2 className="section-title">{t.aboutTitle}</h2><p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-400 sm:text-xl light:text-stone-600">{t.aboutText}</p><div className="mt-12 grid grid-cols-3 border-y border-white/10 py-7 light:border-black/10">{[['3+', t.years], ['06', t.projectsCount], ['360°', t.layers]].map(([value, label]) => <div key={label} className="border-r border-white/10 px-3 first:pl-0 last:border-0 light:border-black/10"><strong className="block text-2xl font-semibold sm:text-4xl">{value}</strong><span className="mt-2 block text-[10px] uppercase tracking-widest text-stone-500 sm:text-xs">{label}</span></div>)}</div><a href={`${import.meta.env.BASE_URL}${language === "pt" ? "Henrique Azevedo - Currículo - Desenvolvedor - (Português).pdf" : "Henrique Azevedo - Resume - Developer - (English).pdf"}`} target="_blank" rel="noreferrer" className="button-secondary mt-8 w-fit">{t.resume}<FiDownload /></a></div></motion.div></section>

        <section id="experience" className="section-shell bg-stone-900/45 light:bg-white/45"><motion.div {...reveal}><SectionLabel>{t.experienceLabel}</SectionLabel><h2 className="section-title max-w-4xl">{t.experienceTitle}</h2><div className="mt-14 border-t border-white/10 light:border-black/10">{t.experiences.map((experience) => <article key={experience.company} className="group grid gap-5 border-b border-white/10 py-8 transition-colors hover:bg-white/[0.025] sm:grid-cols-[0.55fr_1fr_1.2fr] sm:gap-8 sm:px-4 light:border-black/10 light:hover:bg-black/[0.025]"><div className="font-mono text-xs text-stone-500">{experience.period}</div><div><h3 className="text-xl font-semibold tracking-tight group-hover:text-cyan-400">{experience.company}</h3><p className="mt-2 text-sm text-cyan-500">{experience.role}</p></div><p className="max-w-xl text-sm leading-relaxed text-stone-400 light:text-stone-600">{experience.text}</p></article>)}</div></motion.div></section>

        <section id="projects" className="section-shell"><motion.div {...reveal}><SectionLabel>{t.projectsLabel}</SectionLabel><h2 className="section-title max-w-5xl">{t.projectsTitle}</h2></motion.div><div className="mt-16 grid gap-x-6 gap-y-14 md:grid-cols-2">{projects.map((project, index) => <motion.a {...reveal} href={project.link} target="_blank" rel="noreferrer" key={project.title} className={`project-card group ${index === 0 || index === 3 ? "md:col-span-2" : ""}`}><div className={`project-image-wrap ${index === 0 || index === 3 ? "aspect-[16/8]" : "aspect-[4/3]"}`}><img src={project.image} alt={`Projeto ${project.title}`} className="project-image" /><span className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-cyan-400 text-lg text-stone-950 opacity-0 transition duration-300 group-hover:opacity-100"><FiArrowUpRight /></span><span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-white/70">0{index + 1}</span></div><div className="mt-5 flex items-start justify-between gap-5 border-t border-white/10 pt-5 light:border-black/10"><div><h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h3><p className="mt-2 max-w-xl text-sm leading-relaxed text-stone-400 light:text-stone-600">{project.description}</p><div className="mt-4 flex flex-wrap gap-2">{project.tags.map(tag => <span className="tech-pill" key={tag}>{tag}</span>)}</div></div><FiArrowUpRight className="mt-1 shrink-0 text-xl text-stone-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400" /></div></motion.a>)}</div></section>

        <section id="stack" className="border-y border-white/10 bg-cyan-400 py-16 text-stone-950 light:border-black/10"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><motion.div {...reveal} className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end"><div><p className="mb-7 font-mono text-xs uppercase tracking-[0.22em]">{t.stackLabel}</p><h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl">{t.stackTitle}</h2><p className="mt-6 max-w-lg text-sm text-stone-800">{t.stackText}</p></div><div className="flex flex-wrap gap-2 lg:justify-end">{technologies.map((tech, index) => <span key={tech} className="rounded-full border border-stone-950/25 px-4 py-2 text-sm font-semibold transition hover:bg-stone-950 hover:text-cyan-400 sm:px-5 sm:py-3 sm:text-base"><span className="mr-2 font-mono text-[9px] opacity-50">{String(index + 1).padStart(2, '0')}</span>{tech}</span>)}</div></motion.div></div></section>

        <section id="contact" className="section-shell relative min-h-[80vh] overflow-hidden"><div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" /><motion.div {...reveal} className="relative flex min-h-[60vh] flex-col justify-between"><SectionLabel>{t.contactLabel}</SectionLabel><div><h2 className="text-[clamp(3.4rem,9vw,9rem)] font-semibold leading-[0.86] tracking-[-0.07em]">{t.contactTitleA}<br /><span className="text-stone-500 light:text-stone-400">{t.contactTitleB}</span></h2><div className="mt-12 flex flex-col justify-between gap-8 border-t border-white/10 pt-7 md:flex-row md:items-end light:border-black/10"><p className="max-w-lg text-base leading-relaxed text-stone-400 light:text-stone-600">{t.contactText}</p><a href="mailto:henriquee.aze.dev@gmail.com" className="button-primary w-fit">{t.emailMe}<FiMail /></a></div></div></motion.div></section>
      </main>
      <footer className="border-t border-white/10 px-5 py-7 light:border-black/10 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1440px] flex-col gap-5 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 · {t.footer}</p><div className="flex items-center gap-4"><a href="https://github.com/henriiqueaze" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub"><FiGithub /></a><a href="https://www.linkedin.com/in/henrique-azevedo-b2195b2b0/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn"><FiLinkedin /></a><a href="mailto:henriquee.aze.dev@gmail.com" className="social-link" aria-label="E-mail"><FiMail /></a></div></div></footer>
    </div>
  );
}
