import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

export function HeroSection({ copy }) {
  const sectionRef = useRef(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const tiltX = useSpring(useTransform(pointerY, [-0.5, 0.5], [10, -10]), { stiffness: 80, damping: 18 });
  const tiltY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-13, 13]), { stiffness: 80, damping: 18 });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.18]);

  function handlePointerMove(event) {
    pointerX.set(event.clientX / window.innerWidth - 0.5);
    pointerY.set(event.clientY / window.innerHeight - 0.5);
  }

  return (
    <section className="hero" id="home" ref={sectionRef} onPointerMove={handlePointerMove}>
      <motion.div className="hero-image" style={{ scale: backgroundScale, opacity: backgroundOpacity }}><div /></motion.div>
      <div className="hero-grid" aria-hidden="true" />
      <motion.div className="hero-monogram" style={{ rotateX: tiltX, rotateY: tiltY }} aria-hidden="true">
        <span>H</span><i>A</i><b>H</b><em>A</em>
      </motion.div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40, filter: "blur(14px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.15 }}
      >
        <h1>Henrique<br /><span>Azevedo</span></h1>
      </motion.div>
      <motion.div className="hero-bottom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.65 }}>
        <span>{copy.role}</span>
      </motion.div>
      <a className="hero-scroll" href="#info">{copy.explore}<FiArrowDown /></a>
    </section>
  );
}
