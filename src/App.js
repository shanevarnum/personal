// src/App.js

import React from "react";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <main className="text-white bg-black w-full h-full body-font">
      <Navbar />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
