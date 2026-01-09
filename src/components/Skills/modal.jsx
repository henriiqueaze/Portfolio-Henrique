import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./modal.css";

import {
  backdropVariants,
  modalVariants,
  itemVariants,
} from "../../utils/animations/animations";

const KnowledgeModal = ({ selected, show, onClose }) => {
  useEffect(() => {
    if (!show) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [show]);

  if (!show || !selected) return null;

  const Icon = selected.icon;

  return (
    <AnimatePresence>
      <motion.div
        id="knowledge-modal"
        className="modal"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.target.id === "knowledge-modal" && onClose()}
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

          {Icon && (
            <motion.div id="modal-icon" variants={itemVariants}>
              <Icon />
            </motion.div>
          )}

          <motion.h3 id="modal-title" variants={itemVariants}>
            {selected.title}
          </motion.h3>

          <motion.p id="modal-desc" variants={itemVariants}>
            {selected.desc}
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default KnowledgeModal;
