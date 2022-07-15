import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedium,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <section id="footer">
      <footer class="p-4 bg-gray-900 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-gray-500 justify-center items-center dark:text-gray-400">
          © 2022 Shane Varnum
        </span>
        <ul class="flex flex-wrap justify-center items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="http://www.instagram.com/"
              className="instagram social mx-6 hover:text-white"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/shanevarnum"
              className="twitter social mx-6 hover:text-white"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/shanevarnum"
              className="github social mx-6 hover:text-white"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/shanevarnum"
              className="github social mx-6 hover:text-white"
            >
              <FontAwesomeIcon icon={faMedium} size="2x" />
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}
