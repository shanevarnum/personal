import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
        <div className="sm:max-w-sm sm:w-full sm:w-1/3 w-2/6 mb-4 pb-4 mr-2">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./circle.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-right mb-8 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, I'm Shane &amp; I'm a Software Developer
            <br />
          </h1>
          <p className="mb-8 leading-relaxed text-justify">
            Allow me to introduce myself! I am a React developer at a local
            Progressive Web Development firm here in Tampa, Florida. My tech
            career has taken me from Data Analyst, to Product Support Engineer
            to now, a React developer building eCommerce applications. I
            consider myself full stack and I've touched many tools and
            technolgies throughout my career.
          </p>
          <div className="flex justify-center">
            <a
              href="./Varnum_Resume.pdf"
              target="_blank"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg font-bold"
            >
              View CV
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg font-bold"
            >
              See My Past Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
