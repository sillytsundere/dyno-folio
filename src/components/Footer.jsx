import React from 'react';
import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";

function Footer() {
  return (
    <footer>
        <a href="https://www.instagram.com/sillytsundere/">
            <SiInstagram size={32}/>
        </a>
        <a href="https://www.linkedin.com/in/paigehcarroll2113/">
            <SiLinkedin size={32} />
        </a>
        <a href="https://github.com/sillytsundere">
            <SiGithub size={32} />
        </a>
        <p>© 2023 Made by Paige Carroll</p>
    </footer>
  );
}

export default Footer;
