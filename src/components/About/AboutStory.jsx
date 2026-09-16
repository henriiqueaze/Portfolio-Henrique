import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import profilePhoto from "../../assets/images/henrique-picture.jpg";
import { revealAnimation } from "../../config/animations";
import { content } from "../../content/portfolioContent";

export function AboutStory({ language }) {
  const t = content[language];
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const cardY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const cardRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-9, 3, 9]);
  const resumeUrl = `${import.meta.env.BASE_URL}${language === "pt" ? "Henrique Azevedo - Currículo - Desenvolvedor - (Português).pdf" : "Henrique Azevedo - Resume - Developer - (English).pdf"}`;

  return (
    <section className="about-story" id="info" ref={sectionRef}>
      <div className="about-story-grid">
        <div className="about-story-visual">
          <div className="about-story-backdrop">
            <img src={profilePhoto} alt="" />
          </div>
          <motion.div
            className="about-story-card"
            style={{ y: cardY, rotate: cardRotate }}
          >
            <div>
              <img src={profilePhoto} alt="Henrique Azevedo" />
            </div>
            <span>Henrique Azevedo</span>
            <small>{t.role} — 2026</small>
          </motion.div>
        </div>
        <div className="about-story-content">
          <motion.div className="about-story-intro" {...revealAnimation}>
            <span className="about-story-tag">
              &#123; {t.aboutLabel} &#125;
            </span>
            <h2>{t.aboutTitle}</h2>
            <div className="about-story-copy">
              {t.aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <a
              className="about-story-resume"
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t.resume}
              <FiDownload />
            </a>
          </motion.div>
          <motion.div className="about-knowledge-head" {...revealAnimation}>
            <span className="about-story-tag">
              &#123; {t.knowledgeLabel} &#125;
            </span>
            <h3>{t.knowledgeTitle}</h3>
          </motion.div>
          <div className="about-knowledge-list">
            {t.knowledgeTimeline.map((item, index) => (
              <motion.article
                key={item.period}
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
              >
                <div>
                  <span className="about-story-tag">
                    &#123; {item.period} &#125;
                  </span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
