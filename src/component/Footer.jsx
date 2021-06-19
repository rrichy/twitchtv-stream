import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFreeCodeCamp,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <p>Created and designed by rrichy</p>
      <a href="https://github.com/rrichy" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} className="fa-lg" />
      </a>
      <a
        href="https://www.freecodecamp.org/rrichy"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFreeCodeCamp} className="fa-lg" />
      </a>
      <a href="https://codepen.io/rrichy" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faCodepen} className="fa-lg" />
      </a>
    </footer>
  );
};

export default Footer;
