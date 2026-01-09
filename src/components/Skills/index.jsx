import React, { useState } from "react";
import "./style.css";
import { motion } from "framer-motion";

import {
  containerVariants,
  itemVariants,
  sectionVariants,
} from "../../utils/animations/animations";

import Modal from "./modal.jsx";
import skills from "../../data/skills.data";

const Knowledge = () => {
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function openSkill(skill) {
    setSelected(skill);
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
    setTimeout(() => setSelected(null), 250);
  }

  return (
    <motion.section
      id="knowledge"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
    >
      <div className="container">
        <header>
          <h2>Conhecimentos</h2>
        </header>

        <motion.div
          className="icon-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((s) => {
            const Icon = s.icon;

            return (
              <motion.button
                key={s.title}
                className="icon-item"
                variants={itemVariants}
                whileHover={{ scale: 1.08, y: -6 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openSkill(s)}
              >
                <div className="icon">{Icon && <Icon />}</div>
                <span>{s.title}</span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      <Modal selected={selected} show={showModal} onClose={closeModal} />
    </motion.section>
  );
};

export default Knowledge;
