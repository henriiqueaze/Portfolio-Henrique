export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06, 
    },
  },
};

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.22,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: {
      duration: 0.18,
      ease: "easeIn",
    },
  },
};

export const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -32,
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};

export const backdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.15 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

export const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.22,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 20,
    transition: {
      duration: 0.18,
      ease: "easeIn",
    },
  },
};

export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 22,
    },
  },
};
