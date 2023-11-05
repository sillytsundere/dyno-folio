import React from "react";
import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";

function Footer() {
  return (
    <footer className="d-flex flex-column align-items-center">
      <section>
        <a href="https://www.instagram.com/sillytsundere/">
          <SiInstagram size={32} className="m-2" />
        </a>
        <a href="https://www.linkedin.com/in/paigehcarroll2113/">
          <SiLinkedin size={32} className="m-2" />
        </a>
        <a href="https://github.com/sillytsundere">
          <SiGithub size={32} className="m-2" />
        </a>
      </section>
      <p>© 2023 Made by Paige Carroll</p>
    </footer>
  );
}

export default Footer;
