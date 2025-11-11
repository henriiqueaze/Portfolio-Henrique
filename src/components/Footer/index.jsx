import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="left-column">
          <a className="logo" href="#home">
            Henrique Azevedo
          </a>
          <p>
            ©2025 por Henrique Azevedo.
            <br />
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;