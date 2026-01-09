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
              <>
                <motion.div
                  id="modal-icon"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.1 }}
                >
                  {selected.icon}
                </motion.div>

                <motion.h3
                  id="modal-title"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.15 }}
                >
                  {selected.title}
                </motion.h3>

                <motion.p
                  id="modal-desc"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  {selected.desc}
                </motion.p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default KnowledgeModal;
