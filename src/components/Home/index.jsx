import React from "react";
import "./style.css";
import { motion } from "framer-motion";
import henriquePicture from "../../assets/images/henrique-picture.jpg";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <motion.div
          className="left-column"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.3 }}
        >
          <header>
            <motion.h4 variants={itemVariants}>Olá Mundo! 👋🏼</motion.h4>

            <motion.h1 variants={itemVariants}>Me chamo Henrique</motion.h1>
          </header>

          <div className="content">
            <motion.p className="typing" variants={itemVariants}>
              Desenvolvedor Full-Stack
            </motion.p>

            <motion.a
              href="#contact"
              className="button"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Fale comigo
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="right-column"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.img
            src={henriquePicture}
            alt="Henrique - Foto"
            id="profile-photo"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
