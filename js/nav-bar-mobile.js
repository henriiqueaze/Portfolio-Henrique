window.addEventListener("load", () => {
    //Verifica se o dispositivo tem largura de até 768px. 
    if (window.innerWidth > 768) return;
    const navbar = document.getElementById("navbar");
    navbar.style.height = "7.6rem";
    const logo = navbar.querySelector(".logo");
    if (logo) logo.style.fontSize = "1.7rem";
    
    //Cria o botão de menu
    const mobileMenuBtn = document.createElement("div");
    mobileMenuBtn.className = "mobile-menu";
    Object.assign(mobileMenuBtn.style, {
      cursor: "pointer",
      fontSize: "2.5rem",
      color: "var(--primary-color)",
      padding: "2.1rem",
      position: "absolute",
      left: "50%",
      top: "1.5rem",
      transform: "translateX(-50%)"
    });
    mobileMenuBtn.textContent = "☰";
    navbar.insertBefore(mobileMenuBtn, navbar.firstChild);
    
    const navMenu = document.querySelector(".nav-menu");
    navMenu.style.display = "none";
    
    // Mostra o menu
    mobileMenuBtn.addEventListener("click", e => {
      e.stopPropagation();
      mobileMenuBtn.style.display = "none";
      Object.assign(navMenu.style, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem"
      });
      const ulElement = navMenu.querySelector("ul");
      if (ulElement) {
        Object.assign(ulElement.style, {
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
          textAlign: "center"
        });
      }
      navbar.style.height = "auto";
    });
    
    // Fecha o menu
    document.addEventListener("click", e => {
      if (
        navMenu.style.display === "flex" &&
        !e.target.closest(".nav-menu") &&
        !e.target.closest(".mobile-menu")
      ) {
        navMenu.style.display = "none";
        mobileMenuBtn.style.display = "block";
        navbar.style.height = "7.6rem";
      }
    });
    
    navMenu.addEventListener("click", e => e.stopPropagation());
  });
  