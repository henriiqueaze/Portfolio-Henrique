import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { content } from "../../content/portfolioContent";
import { projects } from "../../data/portfolioProjects";
import { createProjectRoute } from "../../config/routes";

export function ProjectArchive({ language }) {
  const [hovered, setHovered] = useState(null);
  const cursorX = useMotionValue(-500);
  const cursorY = useMotionValue(-500);
  const smoothX = useSpring(cursorX, { stiffness: 350, damping: 32 });
  const smoothY = useSpring(cursorY, { stiffness: 350, damping: 32 });
  const rotate = useTransform(smoothX, (value) => (value % 24) - 12);
  const t = content[language];
  return (
    <section
      className="archive"
      id="all-work"
      onPointerMove={(event) => {
        cursorX.set(event.clientX);
        cursorY.set(event.clientY);
      }}
      onPointerLeave={() => setHovered(null)}
    >
      <div className="archive-head">
        <p>[ {t.all} ]</p>
        <h2>{t.allTitle}</h2>
        <span>{t.allHint}</span>
      </div>
      <div className="archive-list">
        {projects.map((project, index) => (
          <a
            href={createProjectRoute(project.slug)}
            key={project.title}
            onPointerEnter={() => setHovered(index)}
            onFocus={() => setHovered(index)}
            onBlur={() => setHovered(null)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{project.title}</h3>
            <p>{project.category[language]}</p>
            <small>{project.year}</small>
            <FiArrowUpRight />
          </a>
        ))}
      </div>
      <AnimatePresence>
        {hovered !== null && (
          <motion.div
            className="cursor-project"
            style={{ x: smoothX, y: smoothY, rotate }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
          >
            <img
              src={projects[hovered].image}
              alt=""
              className={projects[hovered].fit}
            />
            <span>{projects[hovered].title}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
