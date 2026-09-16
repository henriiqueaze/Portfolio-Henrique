export const revealAnimation = {
  initial: { opacity: 0, y: 50, filter: "blur(12px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
};
