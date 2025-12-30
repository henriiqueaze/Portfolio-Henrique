import React, { useEffect } from "react";
import Header from "./components/Header/index";
import Home from "./components/Home/index";
import About from "./components/About/index";
import Experience from "./components/Experience/index";
import Projects from "./components/Projects/index";
import Knowledge from "./components/Knowledge/index";
import Contact from "./components/Contact/index";
import Footer from "./components/Footer/index";
import Theme from "./components/Theme/index";

export default function App() {
  useEffect(() => {
    if (!document.documentElement.getAttribute("data-theme")) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  return (
    <>
      <Header />

      {}
      <main>
        <section>
          <Home />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Experience />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Knowledge />
        </section>
        <section>
          <Contact />
        </section>
      </main>

      <Footer />

      <aside>
        <Theme />
      </aside>
    </>
  );
}
