import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <section id="footer">
    <header className="bg-gray-800 md:sticky bottom-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#social" className="ml-3 text-xl">
            Find me on the following platforms
          </a>
        </a>
        <nav className="md:mr-auto md:ml-10 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a
          href="https://www.youtube.com/"
          className="youtube social ml-10 mr-10 hover:text-white"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/"
          className="facebook social ml-10 mr-10 hover:text-white"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="http://www.instagram.com/"
          className="instagram social ml-10 mr-10 hover:text-white"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.twitter.com/shanevarnum" className="twitter social ml-10 mr-10 hover:text-white">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://github.com/shanevarnum" className="github social ml-10 mr-10 hover:text-white">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        </nav>
        <h1 className="font-bold">Copyright &copy;2022 Shane Varnum</h1>
      </div>
    </header>
    </section>
  );
}