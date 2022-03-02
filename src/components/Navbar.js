// src/components/Navbar.js

import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Shane Varnum
          </a>
        </a>
        <nav className="md:mr-auto md:ml-10 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="font-bold ml-10 mr-10 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="font-bold ml-10 mr-10 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="font-bold ml-10 mr-10 hover:text-white">
            Testimonials
          </a>
          <a href="#footer" className="font-bold ml-10 mr-10 hover:text-white">
            Social
          </a>
          <a href="./Shane_Varnum_Resume.pdf" target="_blank" className="font-bold ml-10 mr-10 hover:text-white">
            Resume
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 font-bold hover:text-white">
          Contact Me
          <ArrowCircleRightIcon className="font-bold w-5 h-5 mb-0  ml-2 hover:text-white" />
        </a>
      </div>
    </header>
  );
}