import { useEffect, useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";
import { FiPlay } from "react-icons/fi";
import { content } from "../../content/portfolioContent";
import { projects } from "../../data/portfolioProjects";
import { OptimizedVideo } from "../media/OptimizedVideo";

export function ProjectReel({ language, onOpen, videoTimes, onVideoTimeChange }) {
  const t = content[language];
  const trackRef = useRef(null);
  const reelX = useMotionValue(0);
  const loopWidth = useRef(1);
  const paused = useRef(false);
  const clickGuard = useRef(0);
  const pointerStart = useRef(null);
  const dragging = useRef(false);
  const shouldReduceMotion = useReducedMotion();
  useEffect(() => {
    const measure = () => {
      if (trackRef.current)
        loopWidth.current = trackRef.current.scrollWidth / 2;
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
  useAnimationFrame((_, delta) => {
    if (shouldReduceMotion || paused.current || loopWidth.current <= 1) return;
    let next = reelX.get() - Math.min(delta, 40) * 0.034;
    if (next <= -loopWidth.current) next += loopWidth.current;
    reelX.set(next);
  });
  const repeatedProjects = [...projects, ...projects];
  return (
    <div
      className="project-reel"
      aria-label={t.selectedTitle}
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
      onFocusCapture={() => { paused.current = true; }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) paused.current = false;
      }}
    >
      <div className="reel-viewport">
        <motion.div
          ref={trackRef}
          className="reel-track"
          style={{ x: reelX }}
          drag="x"
          dragConstraints={{ left: -100000, right: 100000 }}
          dragElastic={0}
          dragMomentum
          onDragStart={() => {
            paused.current = true;
            dragging.current = true;
            clickGuard.current = Number.POSITIVE_INFINITY;
          }}
          onDragEnd={() => {
            clickGuard.current = Date.now() + 520;
            dragging.current = false;
            const width = loopWidth.current;
            if (width > 1) {
              let normalized = reelX.get() % width;
              if (normalized > 0) normalized -= width;
              reelX.set(normalized);
            }
            window.setTimeout(() => {
              paused.current = false;
            }, 120);
          }}
        >
          {repeatedProjects.map((project, index) => (
            <motion.button
              key={`${project.title}-${index}`}
              className="reel-card"
              style={{
                "--project-accent": project.accent,
                "--title-width": `${Math.max(220, project.title.length * 16 + 80)}px`,
                "--card-ratio":
                  index % 3 === 2 ? "1.38" : index % 2 ? "1.66" : "1.75",
              }}
              whileHover={{ y: -6 }}
              onPointerDown={(event) => {
                pointerStart.current = { x: event.clientX, y: event.clientY };
              }}
              onPointerUp={(event) => {
                const start = pointerStart.current;
                pointerStart.current = null;
                if (!start) return;
                const distance = Math.hypot(
                  event.clientX - start.x,
                  event.clientY - start.y,
                );
                window.setTimeout(() => {
                  if (
                    distance < 5 &&
                    !dragging.current &&
                    Date.now() > clickGuard.current
                  )
                    onOpen(project);
                }, 0);
              }}
              onPointerCancel={() => {
                pointerStart.current = null;
              }}
              onClick={(event) => event.preventDefault()}
              onKeyDown={(event) => {
                if (
                  (event.key === "Enter" || event.key === " ") &&
                  Date.now() > clickGuard.current
                ) {
                  event.preventDefault();
                  onOpen(project);
                }
              }}
              aria-label={`${t.openPresentation}: ${project.title}`}
              aria-hidden={index >= projects.length}
              tabIndex={index >= projects.length ? -1 : 0}
            >
              <motion.div className="reel-media">
                {project.video ? (
                  <OptimizedVideo
                    source={project.video}
                    poster={project.image}
                    className={`project-video ${project.fit}`}
                    label={`${t.projectVideo}: ${project.title}`}
                    onLoadedMetadata={(event) => {
                      const video = event.currentTarget;
                      const card = video.closest(".reel-card");
                      const ratio = `${video.videoWidth} / ${video.videoHeight}`;
                      video.dataset.orientation =
                        video.videoHeight > video.videoWidth
                          ? "portrait"
                          : "landscape";
                      if (card) {
                        card.dataset.videoRatio = ratio;
                        card.style.setProperty("--video-ratio", ratio);
                        card.style.setProperty("width", "auto", "important");
                        requestAnimationFrame(() => {
                          if (trackRef.current)
                            loopWidth.current =
                              trackRef.current.scrollWidth / 2;
                        });
                      }
                      event.currentTarget.currentTime =
                        videoTimes[project.title] || 0;
                    }}
                    onTimeUpdate={(event) =>
                      onVideoTimeChange(
                        project.title,
                        event.currentTarget.currentTime,
                      )
                    }
                  />
                ) : (
                  <img src={project.image} alt="" className={project.fit} />
                )}
                <div className="reel-shade" />
                <div className="reel-meta">
                  <span>{project.title}</span>
                  <small>{project.category[language]}</small>
                </div>
                <div className="reel-play">
                  <FiPlay />
                </div>
              </motion.div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
