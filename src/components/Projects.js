import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-white bg-green-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-10 text-white">
            Check out my application catalog
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            My portfolio is made up of mostly Javascript/Mern projects but I
            like to keep it interesting and work with a different mix
            sometimes to keep things fun. Think Java and
            Python. I also experiment with new topics like Web3 technologies.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 rounded">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
              <h2 className="mt-3">{project.title}</h2>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}