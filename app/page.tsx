import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about" className="w-full py-16 bg-white">
        <About />
      </div>
      <div id="experience" className="w-full py-16 bg-slate-50">
        <Experience />
      </div>
      <div id="education" className="w-full py-16 bg-white">
        <Education />
      </div>
      <div id="projects" className="w-full py-16 bg-slate-50">
        <Projects />
      </div>
      <div id="achievements" className="w-full py-16 bg-white">
        <Achievements />
      </div>
      <div id="certificates" className="w-full py-16 bg-slate-50">
        <Certificates />
      </div>
      <div id="contact" className="w-full py-16 bg-white">
        <Contact />
      </div>
    </main>
  );
}