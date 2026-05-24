import React from "react";
import "./style.css";
import { motion } from "framer-motion";
import henriquePicture from "../../assets/images/henrique-picture.jpg";
import siteCopy from "../../data/siteCopy";
import { useLanguage } from "../../context/LanguageContext";

import {
  sectionVariants,
  containerVariants,
  itemVariants,
  cardVariants,
} from "../../utils/animations/animations";

const Home = () => {
  const { language } = useLanguage();
  const copy = siteCopy[language].home;

  return (
    <motion.section
      id="home"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="container">
        <motion.div className="left-column" variants={containerVariants}>
          <header>
            <motion.h4 variants={itemVariants}>{copy.greeting}</motion.h4>

            <motion.h1 variants={itemVariants}>{copy.name}</motion.h1>
          </header>

          <div className="content">
            <motion.p
              className="typing"
              variants={itemVariants}
              style={{ ["--typing-width"]: copy.typingWidth }}
            >
              {copy.role}
            </motion.p>

            <motion.a
              href="#contact"
              className="button"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {copy.contact}
            </motion.a>
          </div>
        </motion.div>

        <motion.div className="right-column" variants={cardVariants}>
          <motion.img
            src={henriquePicture}
            alt={copy.photoAlt}
            id="profile-photo"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
