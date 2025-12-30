import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./modal.css";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 40,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 40,
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};

const KnowledgeModal = ({ selected, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = originalStyle);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="knowledge-modal"
          className="modal"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => {
            if (e.target.id === "knowledge-modal") onClose();
          }}
        >
          <motion.div
            className="modal-content"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={onClose}>
              &times;
            </span>

            {selected && (
              <motion.div
                id="modal-icon"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {selected.icon}
              </motion.div>
            )}

            <motion.h3
              id="modal-title"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              {selected?.title}
            </motion.h3>

            <motion.p
              id="modal-desc"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {selected?.desc}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default KnowledgeModal;
