import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from "react-icons/fi";
import profilePhoto from "./assets/images/henrique-picture.jpg";
import cookIt from "./assets/images/projects/cook-it.jpg";
import studentProgress from "./assets/images/projects/student-progress-logo.png";
import sociau from "./assets/images/projects/sociau-logo.jpg";
import volumtarium from "./assets/images/projects/volumtarium-logo.png";
import taskManager from "./assets/images/projects/gerenciamento-de-tarefas-layout.png";
import pum from "./assets/images/projects/pum.png";

const ui = {
  pt: {
    nav: [["INÍCIO", "home"], ["PROJETOS", "work"], ["SOBRE", "info"], ["CONTATO", "contact"]],
    role: "DESENVOLVEDOR FULL-STACK", based: "BASEADO EM SÃO PAULO", folio: "é o portfólio de", and: "e",
    heroText: "Transformo visões em experiências digitais marcantes, com o usuário no centro de cada decisão.",
    nice: "PRAZER EM CONHECER", scroll: "ROLE PARA BAIXO", selected: "PROJETOS EM DESTAQUE",
    selectedCopy: "Experiências imersivas criadas a partir de problemas reais, combinando estratégia, engenharia e atenção aos detalhes.",
    viewProject: "VER PROJETO", viewAll: "VER TODOS OS PROJETOS", info: "SOBRE",
    perspective: "Uma perspectiva multidisciplinar moldada por engenharia, curiosidade e uma vontade constante de transformar ideias em produtos que as pessoas realmente gostem de usar.",
    aboutA: "Meu trabalho atravessa interface, lógica, dados e infraestrutura.",
    aboutB: "Cada experiência é criada para ser intuitiva, relevante e silenciosamente surpreendente.",
    story: "ABRIR MEU CURRÍCULO", craftTitle: "Experiências digitais\nsilenciosamente poderosas",
    craftBody: "Para mim, desenvolvimento é a ponte entre intenção e função. Meu objetivo é elevar interações cotidianas em produtos claros, confiáveis e memoráveis.",
    expertise: "ESPECIALIDADES E SERVIÇOS", fueled: "MOVIDO POR CURIOSIDADE, MOLDADO POR EXPERIÊNCIA",
    now: "ATUALMENTE", current: "FULL-STACK DEVELOPER @ MBA CONSULTORIA & SISTEMAS", hello: ["VEM", "dizer", "OLÁ"],
    contactCopy: "Tem uma ideia, uma oportunidade ou apenas quer conversar sobre tecnologia? Minha caixa de entrada está aberta.",
    email: "ENVIAR E-MAIL", back: "VOLTAR AO TOPO", copyright: "HENRIQUE AZEVEDO", menu: "MENU", close: "FECHAR",
  },
  en: {
    nav: [["HOME", "home"], ["WORK", "work"], ["INFO", "info"], ["CONTACT", "contact"]],
    role: "FULL-STACK DEVELOPER", based: "BASED IN SÃO PAULO", folio: "is the folio of", and: "and",
    heroText: "I transform visions into compelling digital experiences, with users at the centre of every decision.",
    nice: "NICE TO MEET YOU", scroll: "SCROLL DOWN", selected: "FEATURED PROJECTS",
    selectedCopy: "Immersive experiences created from real problems, combining strategy, engineering and attention to detail.",
    viewProject: "VIEW PROJECT", viewAll: "VIEW ALL WORK", info: "INFO",
    perspective: "A multidisciplinary perspective shaped by engineering, curiosity and a constant drive to turn ideas into products people genuinely enjoy using.",
    aboutA: "My work moves across interface, logic, data and infrastructure.",
    aboutB: "Every experience is crafted to be intuitive, relevant and quietly delightful.",
    story: "OPEN MY RÉSUMÉ", craftTitle: "Quietly powerful\ndigital experiences",
    craftBody: "To me, development is the bridge between intention and function. My goal is to elevate everyday interactions into clear, reliable and memorable products.",
    expertise: "EXPERTISE AND SERVICES", fueled: "FUELED BY CURIOSITY, SHAPED BY EXPERIENCE",
    now: "CURRENTLY", current: "FULL-STACK DEVELOPER @ MBA CONSULTING & SYSTEMS", hello: ["COME", "say", "HELLO"],
    contactCopy: "Have an idea, an opportunity or simply want to talk technology? My inbox is open.",
    email: "SEND AN EMAIL", back: "BACK TO TOP", copyright: "HENRIQUE AZEVEDO", menu: "MENU", close: "CLOSE",
  },
};

const projects = [
  { title: "COOK—IT", subtitle: { pt: "PLATAFORMA DE RECEITAS", en: "RECIPE PLATFORM" }, year: "2026", image: cookIt, url: "https://cook-it-zeta.vercel.app/", tone: "#c4a866", device: "wide" },
  { title: "STUDENT\nPROGRESS", subtitle: { pt: "GESTÃO ACADÊMICA", en: "ACADEMIC MANAGEMENT" }, year: "2025", image: studentProgress, url: "https://student-progress-livid.vercel.app/", tone: "#97aab8", device: "tablet" },
  { title: "SOCIAU", subtitle: { pt: "IMPACTO SOCIAL", en: "SOCIAL IMPACT" }, year: "2025", image: sociau, url: "https://github.com/Sociau", tone: "#a86f61", device: "phone" },
  { title: "VOLUMTARIUM", subtitle: { pt: "REDE DE VOLUNTARIADO", en: "VOLUNTEERING NETWORK" }, year: "2024", image: volumtarium, url: "https://github.com/henriiqueaze/Volumtarium", tone: "#728474", device: "tablet" },
  { title: "TASK MANAGER", subtitle: { pt: "PRODUTIVIDADE", en: "PRODUCTIVITY" }, year: "2024", image: taskManager, url: "https://github.com/henriiqueaze/Sistema-de-Gerenciamento-de-Tarefas", tone: "#718798", device: "wide" },
  { title: "P.U.M.", subtitle: { pt: "ECOSSISTEMA EDUCACIONAL", en: "EDUCATION ECOSYSTEM" }, year: "2024", image: pum, url: "https://github.com/henriiqueaze/PUM", tone: "#a89470", device: "phone" },
];

const skills = ["FRONT-END ENGINEERING", "BACK-END DEVELOPMENT", "PRODUCT THINKING", "UI / MOTION", "API DESIGN", "DATA MODELLING"];
const blurReveal = { initial: { opacity: 0, y: 45, filter: "blur(14px)" }, whileInView: { opacity: 1, y: 0, filter: "blur(0px)" }, viewport: { once: true, margin: "-12%" }, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } };

function RollLink({ children, href, external = false }) {
  return <a className="roll-link" href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}><span>{children}</span><span aria-hidden="true">{children}</span></a>;
}

function Loader({ language }) {
  return <motion.div className="loader" exit={{ y: "-100%" }} transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}>
    <motion.div className="loader-mark" initial={{ opacity: 0, filter: "blur(15px)", scale: .86 }} animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }} transition={{ duration: .8 }}><span>H</span><i>A</i></motion.div>
    <div className="loader-bottom"><span>{language === "pt" ? "CARREGANDO EXPERIÊNCIA" : "LOADING EXPERIENCE"}</span><motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.25, ease: "easeInOut" }} /></div>
  </motion.div>;
}

function MonogramScene({ mouseX, mouseY }) {
  const rotateY = useTransform(mouseX, [-.5, .5], [-18, 18]);
  const rotateX = useTransform(mouseY, [-.5, .5], [16, -16]);
  const softX = useSpring(rotateX, { stiffness: 80, damping: 18 });
  const softY = useSpring(rotateY, { stiffness: 80, damping: 18 });
  return <motion.div className="monogram-scene" style={{ rotateX: softX, rotateY: softY }} aria-hidden="true">
    {Array.from({ length: 7 }, (_, index) => <div className="monogram-layer" key={index} style={{ transform: `translateZ(${(index - 3) * 22}px)` }}><span>H</span><i>A</i></div>)}
    <div className="monogram-script">﹁<br />創<br />造<br />﹂</div>
  </motion.div>;
}

function FeatureProject({ project, index, language }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const cardY = useTransform(scrollYProgress, [0, .5, 1], [180, 0, -150]);
  const cardRotate = useTransform(scrollYProgress, [0, .5, 1], [index % 2 ? 11 : -11, 0, index % 2 ? -7 : 7]);
  const cardScale = useTransform(scrollYProgress, [0, .5, 1], [.82, 1, .88]);
  const titleX = useTransform(scrollYProgress, [0, 1], [index % 2 ? -90 : 90, index % 2 ? 90 : -90]);
  return <article className={`feature-project feature-${index + 1}`} ref={ref} style={{ "--tone": project.tone }}>
    <motion.div className="project-title-giant" style={{ x: titleX }}>{project.title.split("\n").map(line => <span key={line}>{line}</span>)}</motion.div>
    <div className="feature-meta"><span>[ 0{index + 1} ]</span><p>{project.subtitle[language]}</p><small>{project.year}</small></div>
    <div className="project-perspective">
      <motion.a href={project.url} target="_blank" rel="noreferrer" className={`device ${project.device}`} style={{ y: cardY, rotateZ: cardRotate, scale: cardScale }}>
        <div className="device-glass"><div className="device-bar"><i /><i /><i /></div><img src={project.image} alt={project.title.replace("\n", " ")} /></div>
        <div className="device-shadow" />
      </motion.a>
      <div className="project-index-3d" aria-hidden="true">0{index + 1}</div>
    </div>
    <RollLink href={project.url} external>{ui[language].viewProject}<FiArrowUpRight /></RollLink>
  </article>;
}

export default function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem("portfolio-language") || "pt");
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const heroRef = useRef(null);
  const { scrollYProgress: pageProgress } = useScroll();
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const progress = useSpring(pageProgress, { stiffness: 120, damping: 28 });
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.18]);
  const heroBlur = useTransform(heroProgress, [0, .8], [0, 10]);
  const heroOpacity = useTransform(heroProgress, [0, 1], [1, .15]);
  const t = ui[language];

  useEffect(() => { const timer = window.setTimeout(() => setLoading(false), 1450); return () => window.clearTimeout(timer); }, []);
  useEffect(() => { document.documentElement.lang = language === "pt" ? "pt-BR" : "en"; localStorage.setItem("portfolio-language", language); }, [language]);
  useEffect(() => { document.body.classList.toggle("locked", menuOpen || loading); return () => document.body.classList.remove("locked"); }, [menuOpen, loading]);

  function handlePointerMove(event) {
    mouseX.set(event.clientX / window.innerWidth - .5);
    mouseY.set(event.clientY / window.innerHeight - .5);
  }

  return <div className="site" onPointerMove={handlePointerMove}>
    <AnimatePresence>{loading && <Loader language={language} />}</AnimatePresence>
    <motion.div className="page-progress" style={{ scaleX: progress }} />

    <header className="nav">
      <a href="#home" className="nav-logo">HAHA</a>
      <nav>{t.nav.map(([label, id], index) => <a href={`#${id}`} key={id} className={id === "home" ? "active" : ""}><i />{label}<small>0{index + 1}</small></a>)}</nav>
      <div className="nav-tools"><button onClick={() => setLanguage(language === "pt" ? "en" : "pt")}>[{language === "pt" ? "EN" : "PT"}]</button><span>2026</span><button className="hamburger" onClick={() => setMenuOpen(true)} aria-label={t.menu}><FiMenu /></button></div>
    </header>

    <AnimatePresence>{menuOpen && <motion.div className="mobile-menu" initial={{ y: "-100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: .8, ease: [0.76, 0, .24, 1] }}><div className="mobile-menu-head"><span>HAHA / 2026</span><button onClick={() => setMenuOpen(false)}>{t.close}<FiX /></button></div><nav>{t.nav.map(([label, id], index) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}><small>0{index + 1}</small><span>{label}</span><FiArrowUpRight /></a>)}</nav></motion.div>}</AnimatePresence>

    <main>
      <section className="hero" id="home" ref={heroRef}>
        <motion.div className="hero-photo" style={{ scale: heroScale, opacity: heroOpacity, filter: useTransform(heroBlur, value => `blur(${value}px)`) }}><img src={profilePhoto} alt="" /><div /></motion.div>
        <div className="hero-noise" />
        <MonogramScene mouseX={mouseX} mouseY={mouseY} />
        <motion.div className="hero-copy" initial="hidden" animate={loading ? "hidden" : "show"} variants={{ hidden: {}, show: { transition: { delayChildren: .2, staggerChildren: .08 } } }}>
          <motion.p variants={{ hidden: { opacity: 0, y: 20, filter: "blur(10px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }}><span>[home]</span> {t.folio}</motion.p>
          <motion.h1 variants={{ hidden: { opacity: 0, scale: .92, filter: "blur(18px)" }, show: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1 } } }}>Henrique <em>[ Azevedo ]</em></motion.h1>
          <motion.p className="hero-role" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>{t.role}, creative developer {t.and} product builder</motion.p>
        </motion.div>
        <motion.div className="hero-description" initial={{ opacity: 0 }} animate={loading ? { opacity: 0 } : { opacity: 1 }} transition={{ delay: .8 }}><div><span>{t.role}</span><span>{t.based}</span></div><p>{t.heroText}</p></motion.div>
        <div className="hero-greeting">[ {t.nice.split(" ").join("  ")} ]</div>
        <a href="#intro" className="hero-scroll">[ {t.scroll} ]<FiArrowDown /></a>
      </section>

      <section className="intro" id="intro">
        <div className="vertical-symbol" aria-hidden="true">﹁<br />作<br />品<br />集<br />﹂</div>
        <motion.div className="intro-statement" {...blurReveal}><span>{t.role}<br />{t.based}</span><p>{t.heroText}</p></motion.div>
        <div className="intro-marquee" aria-hidden="true"><div>{["HENRIQUE AZEVEDO", "FULL-STACK DEVELOPER", "DIGITAL EXPERIENCES", "HENRIQUE AZEVEDO", "FULL-STACK DEVELOPER", "DIGITAL EXPERIENCES"].map((item, index) => <span key={index}>{item}<i>✦</i></span>)}</div></div>
      </section>

      <section className="featured" id="work">
        <div className="featured-head"><p>[ {t.selected} ]</p><motion.h2 {...blurReveal}>SELECTED<br /><em>WOR</em>K</motion.h2><span>{t.selectedCopy}</span></div>
        {projects.slice(0, 2).map((project, index) => <FeatureProject key={project.title} project={project} index={index} language={language} />)}
        <a className="all-work-link" href="#all-work"><span>{t.viewAll}</span><i>看作品集</i><FiArrowDown /></a>
      </section>

      <section className="all-work" id="all-work">
        <div className="all-work-heading"><p>PROJECTS / 2024—26</p><span>{projects.length} SELECTED</span></div>
        {projects.map((project, index) => <a href={project.url} target="_blank" rel="noreferrer" className="work-row" key={project.title} style={{ "--row-tone": project.tone }}><span>0{index + 1}</span><h3>{project.title.replace("\n", " ")}</h3><p>{project.subtitle[language]}</p><small>{project.year}</small><div className="row-preview"><img src={project.image} alt="" /></div><FiArrowUpRight /></a>)}
      </section>

      <section className="info" id="info">
        <div className="info-title" aria-hidden="true"><span>IN</span><div>﹁<br />簡<br />介<br />﹂</div><span>FO</span></div>
        <motion.p className="info-perspective" {...blurReveal}>{t.perspective}</motion.p>
        <div className="info-grid">
          <motion.div className="info-portrait" {...blurReveal}><div className="portrait-stack"><i /><i /><img src={profilePhoto} alt="Henrique Azevedo" /></div><span>[ HENRIQUE AZEVEDO / SÃO PAULO ]</span></motion.div>
          <motion.div className="info-copy" {...blurReveal}><p>{t.aboutA}</p><p>{t.aboutB}</p><RollLink href={`${import.meta.env.BASE_URL}${language === "pt" ? "Henrique Azevedo - Currículo - Desenvolvedor - (Português).pdf" : "Henrique Azevedo - Resume - Developer - (English).pdf"}`} external>{t.story}<FiDownload /></RollLink></motion.div>
        </div>
      </section>

      <section className="craft">
        <div className="craft-visual"><motion.div className="floating-portrait" whileInView={{ rotateY: [18, -8, 0], rotateX: [-10, 5, 0], y: [100, -20, 0] }} viewport={{ once: true, amount: .3 }} transition={{ duration: 1.5, ease: [0.16, 1, .3, 1] }}><img src={profilePhoto} alt="" /><span>HA</span><i>CREATIVE<br />DEVELOPER</i></motion.div></div>
        <motion.div className="craft-copy" {...blurReveal}><p>{t.craftTitle.split("\n").map(line => <span key={line}>{line}</span>)}</p><small>{t.craftBody}</small><RollLink href="#contact">{t.email}<FiArrowUpRight /></RollLink></motion.div>
      </section>

      <section className="services">
        <div className="services-label">[ {t.expertise.split("").join(" ")} ]</div>
        <div className="services-list">{skills.map((skill, index) => <motion.div key={skill} initial={{ opacity: 0, x: index % 2 ? 70 : -70, filter: "blur(10px)" }} whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: .8, delay: index * .05 }}><span>{String(index + 1).padStart(2, "0")}</span><p>{skill}</p><i>{index % 2 ? "專業" : "技術"}</i></motion.div>)}</div>
        <div className="services-footer">[ {t.fueled.split("").join(" ")} ]</div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-photo"><img src={profilePhoto} alt="" /><div /></div>
        <div className="contact-border" />
        <motion.div className="contact-title" {...blurReveal}>{t.hello.map((line, index) => <span key={line} className={index === 1 ? "script" : ""}>{line}</span>)}</motion.div>
        <motion.div className="contact-symbol" {...blurReveal}>﹁<br />你<br />好<br />﹂</motion.div>
        <motion.div className="contact-card" {...blurReveal}><span>[ {t.now} ]</span><p>{t.current}</p><small>{t.contactCopy}</small><RollLink href="mailto:henriquee.aze.dev@gmail.com">{t.email}<FiMail /></RollLink></motion.div>
        <div className="contact-bottom"><span>[{t.copyright}]</span><span>[COPYRIGHT 2026]</span><div><RollLink href="https://github.com/henriiqueaze" external><FiGithub />GITHUB</RollLink><RollLink href="https://www.linkedin.com/in/henrique-azevedo-b2195b2b0/" external><FiLinkedin />LINKEDIN</RollLink><RollLink href="#home">{t.back}<FiArrowUpRight /></RollLink></div></div>
      </section>
    </main>
  </div>;
}
