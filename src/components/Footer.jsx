import React from "react";
import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";
import "./Footer.css";



function Footer() {

  const iconStyle = {
    instagram: {
      color: "#d62976",
    },
    linkedin: {
      color: "#0077b5",
    },
    github: {
      color: "#f5f5f5",
    }
  }

  return (
    <footer className="d-flex flex-column align-items-center m-1">
      <section>
        <a href="https://www.instagram.com/sillytsundere/" className="icon-link">
          <SiInstagram size={32} className="m-2 hover-overlay" style={iconStyle.instagram}/>
        </a>
        <a href="https://www.linkedin.com/in/paigehcarroll2113/" className="icon-link">
          <SiLinkedin size={32} className="m-2" style={iconStyle.linkedin}/>
        </a>
        <a href="https://github.com/sillytsundere" className="icon-link">
          <SiGithub size={32} className="m-2" style={iconStyle.github}/>
        </a>
      </section>
      <p style={{color: "#32CD32"}}>© 2023 Made by Paige Carroll</p>
    </footer>
  );
}

export default Footer;
