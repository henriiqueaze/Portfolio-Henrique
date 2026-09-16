import { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import { content } from "../../content/portfolioContent";
import { createProjectRoute } from "../../config/routes";
import { OptimizedVideo } from "../media/OptimizedVideo";

export function ProjectDialog({
  project,
  language,
  onClose,
  videoTime,
  onVideoTimeChange,
}) {
  const t = content[language];
  const [isPortraitVideo, setIsPortraitVideo] = useState(false);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const headingId = useId();

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;
      const focusableElements = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), video[controls], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusableElements?.length) return;
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [onClose]);
  return (
    <motion.div
      className="project-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby={headingId}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div className="dialog-backdrop" onClick={onClose} />
      <motion.div
        ref={dialogRef}
        className={`dialog-shell${isPortraitVideo ? " portrait" : ""}`}
        layoutId={`project-${project.title}`}
        initial={{ borderRadius: 20 }}
        animate={{ borderRadius: 0 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <button
          ref={closeButtonRef}
          className="dialog-close"
          onClick={onClose}
          aria-label={t.closeProject}
        >
          <FiX />
          <span>{t.close}</span>
        </button>
        <div
          className="dialog-media"
          style={{ "--project-accent": project.accent }}
        >
          {project.video ? (
            <OptimizedVideo
              source={project.video}
              poster={project.image}
              className={`project-video ${project.fit}`}
              label={`${t.projectVideo}: ${project.title}`}
              eager
              controls
              onLoadedMetadata={(event) => {
                setIsPortraitVideo(
                  event.currentTarget.videoHeight >
                    event.currentTarget.videoWidth,
                );
                event.currentTarget.currentTime = videoTime;
              }}
              onTimeUpdate={(event) =>
                onVideoTimeChange(event.currentTarget.currentTime)
              }
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className={project.fit}
            />
          )}
          <div className="media-scan" />
          <div className="media-chrome">
            <span>{t.videoPlaceholder.toUpperCase()}</span>
            <div>
              <i />
              <i />
              <i />
            </div>
            <small>00:24</small>
          </div>
        </div>
        <div className="dialog-content">
          <div className="dialog-index">
            <span>{project.year}</span>
            <small>{project.category[language]}</small>
          </div>
          <h3 id={headingId}>{project.title}</h3>
          <p className="dialog-lead">{project.description[language]}</p>
          <p className="dialog-body">{project.details[language]}</p>
          <div className="dialog-tech">
            <span>{t.technologies}</span>
            <div>
              {project.tech.map((item) => (
                <i key={item}>{item}</i>
              ))}
            </div>
          </div>
          <div className="dialog-actions">
            <a href={createProjectRoute(project.slug)}>{t.openCaseStudy}<FiArrowUpRight /></a>
            <a href={project.url} target="_blank" rel="noreferrer">
              {project.url.includes("github") ? t.repository : t.visit}<FiArrowUpRight />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
