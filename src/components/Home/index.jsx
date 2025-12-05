import React from "react";
import "./style.css";
import henriquePicture from "../../assets/images/henrique-picture.jpg";

const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="left-column">
          <header>
            <h4>Olá Mundo! 👋🏼</h4>
            <h1>Me chamo Henrique</h1>
          </header>
          <div className="content">
            <p className="typing">Desenvolvedor Full-Stack</p>
            <a className="button" href="#contact">
              Fale comigo
            </a>
          </div>
        </div>

        <div className="right-column">
          <img src={henriquePicture} alt="Henrique - Foto" id="profile-photo" />
        </div>
      </div>
    </section>
  );
};

export default Home;
