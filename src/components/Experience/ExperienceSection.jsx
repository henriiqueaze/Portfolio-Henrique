import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { revealAnimation } from "../../config/animations";
import { content } from "../../content/portfolioContent";
import { experiences } from "../../data/portfolioExperiences";
import { TechnologyLoop } from "./TechnologyLoop";

export function ExperienceSection({ language }) {
  const t = content[language];
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 72%", "end 32%"],
  });
  const runnerTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section className="experience" id="experience">
      <motion.h2 {...revealAnimation}>{t.experienceLabel}</motion.h2>
      <div className="career-timeline" ref={timelineRef}>
        <span className="timeline-rail" aria-hidden="true" />
        <motion.span
          className="timeline-progress"
          style={{ scaleY: scrollYProgress }}
          aria-hidden="true"
        />
        <motion.span
          className="timeline-runner"
          style={{ top: runnerTop }}
          aria-hidden="true"
        />
        {experiences.map((item, index) => (
          <motion.article
            className={index % 2 === 0 ? "left" : "right"}
            key={item.company.en}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -90 : 90,
              rotate: index % 2 === 0 ? -2 : 2,
            }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="timeline-dot" />
            <motion.div
              className="career-card"
              whileHover={{ y: -10, rotate: index % 2 === 0 ? -0.5 : 0.5 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <div className="career-header">
                <motion.img
                  src={item.logo}
                  alt=""
                  whileHover={{ rotate: 8, scale: 1.08 }}
                />
                <p>{item.company[language]}</p>
                <div>
                  <span>{item.period[language]}</span>
                  <i>•</i>
                  <span>{item.location[language]}</span>
                </div>
              </div>
              <h3>{item.role[language]}</h3>
              <p className="career-summary">{item.summary[language]}</p>
              <h4>{t.responsibilities}</h4>
              <ul>
                {item.items[language].map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
              <h4>{t.technologies}</h4>
              <div className="career-tech">
                {item.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="career-projects">
                <span>{t.projects}</span>
                {item.products.map((product) => (
                  <a
                    key={product.name}
                    href={product.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{product.name}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.article>
        ))}
      </div>
      <TechnologyLoop language={language} />
    </section>
  );
}
