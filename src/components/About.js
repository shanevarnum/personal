// src/components/About.js

import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, I'm Shane &amp; I'm 
            a Software Developer
            <br/>
          </h1>
          <p className="mb-8 leading-relaxed text-justify">
            Allow me to introduce myself! I am a tech professional with four years of
            industry IT experience. I spent a whole lot of it in the financial industry 
            as a production support engineer but I've moved on to greener pastures..
            I'm now pursuing a life and career as a full time developer! My coding 
            experience is a mix of work, school and personal projects but I've spent
            most of that time working in the web development realm. I love the MERN stack! 
            Keep scrolling to learn more about my experience and where things are headed next!
          </p>
        <div className="flex justify-center">
            <a
              href="./Shane_Varnum_Resume.pdf" target="_blank"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg font-bold">
              View CV
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg font-bold">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="sm:max-w-sm sm:w-full sm:w-1/3 w-2/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./circle.png"
          />
        </div>
      </div>
    </section>
  );
}