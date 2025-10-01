import React, { useEffect } from "react";
import Header from "./assets/components/header/Header";
import Home from "./assets/components/home/Home";
import About from "./assets/components/about/About";
import Projects from "./assets/components/projects/Projects";
import Knowledge from "./assets/components/knowledge/Knowledge";
import Contact from "./assets/components/contact/Contact";
import Footer from "./assets/components/footer/Footer";

export default function App() {
  useEffect(() => {
    if (!document.documentElement.getAttribute("data-theme")) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  return (
    <div>
      <Header />
      <Home/>
      <About/>
      <Projects/>
      <Knowledge/>
      <Contact/>
      <Footer/>
    </div>
  );
}
