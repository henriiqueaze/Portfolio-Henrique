import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from "react-icons/fi";
import profilePhoto from "./assets/images/henrique-picture.jpg";
import cookIt from "./assets/images/projects/cook-it.jpg";
import studentProgress from "./assets/images/projects/student-progress-logo.png";
import sociau from "./assets/images/projects/sociau-logo.jpg";
import volumtarium from "./assets/images/projects/volumtarium-logo.png";
import taskManager from "./assets/images/projects/gerenciamento-de-tarefas-layout.png";
import pum from "./assets/images/projects/pum.png";

const copy = {
  pt: {
    nav: [["Início", "home"], ["Projetos", "work"], ["Sobre", "about"], ["Contato", "contact"]], menu: "Menu", close: "Fechar", language: "EN",
    eyebrow: "Desenvolvedor full-stack independente", heroLine: "Código, produto", heroLine2: "& experiências digitais.", heroNote: "Transformo ideias em produtos digitais claros, rápidos e prontos para crescer — da primeira interface à infraestrutura.",
    scroll: "Role para explorar", status: "Disponível para projetos selecionados", based: "São Paulo, Brasil", introLabel: "Olá, prazer em conhecer",
    intro: "Sou Henrique — um desenvolvedor que combina engenharia, sensibilidade visual e visão de produto para criar experiências que funcionam tão bem quanto parecem.",
    workKicker: "Trabalho selecionado", workTitle: "Projetos", workIntro: "Uma seleção de produtos construídos com intenção, do raciocínio de produto ao último detalhe da implementação.",
    explore: "Explorar projeto", completed: "Concluído", type: "Tipo", role: "Atuação", aboutKicker: "Perfil / 2026", aboutTitle: "Curioso por natureza.\nPreciso por escolha.",
    aboutBody: "Gosto de entender o produto inteiro, não apenas a tarefa da vez. Trabalho da interface ao banco de dados, transformando necessidades reais em software confiável, intuitivo e com personalidade.",
    resume: "Abrir currículo", portrait: "Retrato de Henrique Azevedo", location: "Baseado em São Paulo", services: "Especialidades", now: "Agora",
    nowBody: "Desenvolvendo produtos web na MBA Consultoria & Sistemas e criando soluções independentes.", experience: "Experiência", contactKicker: "Tem um projeto em mente?",
    contactTitle: "Vamos fazer\nalgo marcante.", contactBody: "Estou aberto a oportunidades, colaborações e boas conversas sobre tecnologia e produto.", email: "Escreva para mim",
    backTop: "Voltar ao topo", copyright: "Criado e desenvolvido por Henrique Azevedo",
  },
  en: {
    nav: [["Home", "home"], ["Projects", "work"], ["About", "about"], ["Contact", "contact"]], menu: "Menu", close: "Close", language: "PT",
    eyebrow: "Independent full-stack developer", heroLine: "Code, product", heroLine2: "& digital experiences.", heroNote: "I turn ideas into digital products that are clear, fast and ready to grow — from the first interface to the infrastructure.",
    scroll: "Scroll to explore", status: "Available for selected projects", based: "São Paulo, Brazil", introLabel: "Hello, nice to meet you",
    intro: "I'm Henrique — a developer combining engineering, visual sensitivity and product thinking to create experiences that work as beautifully as they look.",
    workKicker: "Selected work", workTitle: "Projects", workIntro: "A selection of products built with intent, from product thinking to the final implementation detail.",
    explore: "Explore project", completed: "Completed", type: "Type", role: "Role", aboutKicker: "Profile / 2026", aboutTitle: "Curious by nature.\nPrecise by choice.",
    aboutBody: "I like to understand the entire product, not just the task at hand. I work from interface to database, turning real needs into reliable, intuitive software with personality.",
    resume: "Open résumé", portrait: "Portrait of Henrique Azevedo", location: "Based in São Paulo", services: "Expertise", now: "Now",
    nowBody: "Building web products at MBA Consulting & Systems and creating independent solutions.", experience: "Experience", contactKicker: "Have a project in mind?",
    contactTitle: "Let's make\nsomething memorable.", contactBody: "I'm open to opportunities, collaborations and good conversations about technology and product.", email: "Write to me",
    backTop: "Back to top", copyright: "Created and developed by Henrique Azevedo",
  },
};

const projects = [
  { title: "Cook—It", image: cookIt, link: "https://cook-it-zeta.vercel.app/", year: "2026", type: { pt: "Produto digital", en: "Digital product" }, role: "Full-stack / UI", summary: { pt: "Receitas inteligentes a partir dos ingredientes que já estão na sua cozinha.", en: "Smart recipes built around the ingredients already available in your kitchen." }, color: "#f0764b", fit: "cover" },
  { title: "Student Progress", image: studentProgress, link: "https://student-progress-livid.vercel.app/", year: "2025", type: { pt: "Plataforma educacional", en: "Education platform" }, role: "Full-stack", summary: { pt: "Gestão acadêmica clara para acompanhar alunos, notas e evolução.", en: "Clear academic management for students, grades and progress." }, color: "#b5c9d9", fit: "contain" },
  { title: "Sociau", image: sociau, link: "https://github.com/Sociau", year: "2025", type: { pt: "Impacto social", en: "Social impact" }, role: "Front-end / UX", summary: { pt: "Uma ponte entre ONGs de resgate animal e pessoas que querem adotar.", en: "A bridge between animal rescue NGOs and people looking to adopt." }, color: "#d69b91", fit: "cover" },
  { title: "Volumtarium", image: volumtarium, link: "https://github.com/henriiqueaze/Volumtarium", year: "2024", type: { pt: "Voluntariado", en: "Volunteering" }, role: "Full-stack", summary: { pt: "Oportunidades sociais encontradas por perfil, interesse e localização.", en: "Social opportunities discovered by profile, interests and location." }, color: "#a9b79e", fit: "contain" },
  { title: "Task Manager", image: taskManager, link: "https://github.com/henriiqueaze/Sistema-de-Gerenciamento-de-Tarefas", year: "2024", type: { pt: "Aplicação desktop", en: "Desktop application" }, role: "Python / UI", summary: { pt: "Uma forma direta de organizar e acompanhar atividades diárias.", en: "A direct way to organize and track daily activities." }, color: "#95aabe", fit: "cover" },
  { title: "P.U.M.", image: pum, link: "https://github.com/henriiqueaze/PUM", year: "2024", type: { pt: "Ecossistema acadêmico", en: "Academic ecosystem" }, role: "Back-end / Product", summary: { pt: "Monitoria acadêmica integrada para alunos, monitores e cursos.", en: "Integrated academic mentoring for students, tutors and courses." }, color: "#d4c1a6", fit: "contain" },
];

const experience = [
  { period: "2026 — NOW", company: "MBA CONSULTORIA & SISTEMAS", role: "FULL-STACK DEVELOPER", stack: "C# · .NET · REACT · SQL SERVER · AZURE" },
  { period: "2023 — NOW", company: "INDEPENDENT / FREELANCE", role: "FULL-STACK DEVELOPER", stack: "JAVA · SPRING · REACT · ANGULAR · POSTGRESQL" },
];

const expertise = ["Product thinking", "Front-end", "Back-end", "APIs", "UI engineering", "Data modelling", "Cloud", "Motion"];
const reveal = { initial: { opacity: 0, y: 44 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-10%" }, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } };

function Project({ project, index, language, t }) {
  const number = String(index + 1).padStart(2, "0");
  return (
    <motion.article className="project" style={{ "--project-accent": project.color }} {...reveal}>
      <div className="project-ghost" aria-hidden="true">{project.title}</div>
      <div className="project-grid">
        <div className="project-count"><span>{number}</span><i>/</i><small>{String(projects.length).padStart(2, "0")}</small></div>
        <a className="project-visual" href={project.link} target="_blank" rel="noreferrer" aria-label={`${t.explore}: ${project.title}`}>
          <img src={project.image} alt="" className={project.fit} /><span className="project-cta">{t.explore}<FiArrowUpRight /></span>
        </a>
        <div className="project-name"><span>{project.type[language]}</span><h3>{project.title}</h3><p>{project.summary[language]}</p></div>
        <dl className="project-facts"><div><dt>A / {t.completed}</dt><dd>{project.year}</dd></div><div><dt>B / {t.type}</dt><dd>{project.type[language]}</dd></div><div><dt>C / {t.role}</dt><dd>{project.role}</dd></div></dl>
      </div>
    </motion.article>
  );
}

export default function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem("portfolio-language") || "pt");
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 150, damping: 30, restDelta: 0.001 });
  const t = copy[language];
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => { document.documentElement.lang = language === "pt" ? "pt-BR" : "en"; localStorage.setItem("portfolio-language", language); }, [language]);
  useEffect(() => { document.body.classList.toggle("menu-is-open", menuOpen); return () => document.body.classList.remove("menu-is-open"); }, [menuOpen]);

  return (
    <div className="site-shell">
      <motion.div className="progress" style={{ scaleX: progress }} />
      <header className="topbar">
        <a className="monogram" href="#home" aria-label="Henrique Azevedo — início"><span>H</span><i>/</i><span>A</span></a>
        <nav className="desktop-links" aria-label="Navegação principal">{t.nav.map(([label, target], index) => <a href={`#${target}`} key={target}><small>0{index + 1}</small>{label}</a>)}</nav>
        <div className="top-actions"><button className="language-button" onClick={() => setLanguage(language === "pt" ? "en" : "pt")} aria-label={language === "pt" ? "Switch to English" : "Mudar para português"}>{t.language}</button><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? t.close : t.menu}>{menuOpen ? <FiX /> : <FiMenu />}<span>{menuOpen ? t.close : t.menu}</span></button></div>
      </header>

      <AnimatePresence>{menuOpen && <motion.div className="menu-panel" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}><div className="menu-panel-meta"><span>PORTFOLIO / {year}</span><span>{t.based}</span></div><nav>{t.nav.map(([label, target], index) => <a href={`#${target}`} key={target} onClick={() => setMenuOpen(false)}><small>0{index + 1}</small><span>{label}</span><FiArrowUpRight /></a>)}</nav></motion.div>}</AnimatePresence>

      <main>
        <section className="hero" id="home">
          <div className="hero-side hero-side-left" aria-hidden="true"><span>﹁</span><b>開<br />発<br />者</b><span>﹂</span></div>
          <div className="hero-side hero-side-right"><span>{t.status}</span><i /></div>
          <motion.div className="hero-heading" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}><p>{t.eyebrow}</p><h1><span>Henrique</span><span>Azevedo</span></h1></motion.div>
          <div className="hero-bottom"><div className="hero-statement"><span>[ 01 ]</span><p>{t.heroLine}<br />{t.heroLine2}</p></div><p className="hero-note">{t.heroNote}</p><a className="round-link" href="#work" aria-label={t.scroll}><FiArrowDown /></a></div>
          <div className="hero-coordinate"><span>{t.based}</span><span>23.5° S · 46.6° W</span></div>
        </section>

        <section className="manifesto"><motion.div {...reveal}><p className="section-marker">[ {t.introLabel} ]</p><p className="manifesto-copy">{t.intro}</p></motion.div><div className="marquee" aria-hidden="true"><div>{[...expertise, ...expertise].map((item, index) => <span key={`${item}-${index}`}>{item}<i>✦</i></span>)}</div></div></section>

        <section className="work" id="work"><div className="work-head"><p>[ {t.workKicker} ]</p><h2>{t.workTitle}<sup>{projects.length}</sup></h2><span>{t.workIntro}</span></div><div className="projects-list">{projects.map((project, index) => <Project key={project.title} project={project} index={index} language={language} t={t} />)}</div></section>

        <section className="about" id="about">
          <div className="about-heading"><p>{t.aboutKicker}</p><motion.h2 {...reveal}>{t.aboutTitle.split("\n").map(line => <span key={line}>{line}</span>)}</motion.h2></div>
          <div className="about-layout">
            <motion.div className="portrait" {...reveal}><img src={profilePhoto} alt={t.portrait} /><span>{t.location}</span><i>HA / 26</i></motion.div>
            <motion.div className="about-copy" {...reveal}><span>[ A ]</span><p>{t.aboutBody}</p><a href={`${import.meta.env.BASE_URL}${language === "pt" ? "Henrique Azevedo - Currículo - Desenvolvedor - (Português).pdf" : "Henrique Azevedo - Resume - Developer - (English).pdf"}`} target="_blank" rel="noreferrer">{t.resume}<FiDownload /></a></motion.div>
            <motion.div className="about-now" {...reveal}><span>[ B / {t.now} ]</span><p>{t.nowBody}</p><i /></motion.div>
            <motion.div className="expertise" {...reveal}><span>[ C / {t.services} ]</span>{expertise.map((item, index) => <div key={item}><small>{String(index + 1).padStart(2, "0")}</small><p>{item}</p></div>)}</motion.div>
          </div>
        </section>

        <section className="experience" id="experience"><div className="experience-title"><p>[ {t.experience} ]</p><span>2023 — {year}</span></div>{experience.map((item, index) => <motion.article {...reveal} key={item.company}><span>0{index + 1}</span><div><small>{item.period}</small><h3>{item.company}</h3></div><p>{item.role}</p><small>{item.stack}</small></motion.article>)}</section>

        <section className="contact" id="contact"><div className="contact-orbit" aria-hidden="true"><span>COME SAY HELLO · VAMOS CONVERSAR · </span></div><motion.div {...reveal} className="contact-main"><p>[ {t.contactKicker} ]</p><h2>{t.contactTitle.split("\n").map(line => <span key={line}>{line}</span>)}</h2><small>{t.contactBody}</small><a href="mailto:henriquee.aze.dev@gmail.com">{t.email}<FiMail /></a></motion.div><div className="contact-symbol" aria-hidden="true">你<br />好</div></section>
      </main>

      <footer><div><span>© {year}</span><p>{t.copyright}</p></div><div className="socials"><a href="https://github.com/henriiqueaze" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a><a href="https://www.linkedin.com/in/henrique-azevedo-b2195b2b0/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a><a href="mailto:henriquee.aze.dev@gmail.com"><FiMail /> Email</a></div><a href="#home" className="back-top">{t.backTop}<FiArrowUpRight /></a></footer>
    </div>
  );
}
