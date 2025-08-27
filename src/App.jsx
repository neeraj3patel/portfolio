import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import CertificatesAndSoftSkills from "./components/CertificatesAndSoftSkills";


export default function App() {
  return (
    <div className="font-[Poppins] ">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
       <section id="extras">
        <CertificatesAndSoftSkills />
      </section> 
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}