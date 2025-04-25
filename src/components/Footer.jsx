import React, { useEffect, useState } from "react";
import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";
import "./Footer.css";
import { IconContext } from "react-icons";

function Footer() {

  const iconStyle = {
    instagram: {
      borderRadius: "25%",
    },
    linkedin: {
      color: "#0077b5",
    },
    github: {
      color: "#f5f5f5",
    }
  }

  return (
    <footer className="footer d-flex flex-column align-items-center m-2">
      <section>
        <a href="https://www.instagram.com/parchmentpaiges/" target="_blank" rel="noopener noreferrer" className=" icon-link" style={iconStyle.instagram}>
        <svg height={32} width={32}>
          <defs>
            <linearGradient id="myGradient" gradientTransform="rotate(102)">
              <stop offset="0%" stopColor="#6228d7" />
              <stop offset="35%" stopColor="#ee2a7b" />
              <stop offset="100%" stopColor="#f9ce34" />
            </linearGradient>
          </defs>
          <IconContext.Provider value={{ attr: {fill: "url('#myGradient')"}}}>
            <SiInstagram size={32} className="rounded hover-overlay" />
          </IconContext.Provider>
        </svg>
        </a>
        <a href="https://www.linkedin.com/in/paigehcarroll/" target="_blank" rel="noopener noreferrer" className=" rounded icon-link">
          <SiLinkedin size={32} className="hover-overlay" style={iconStyle.linkedin}/>
        </a>
        <a href="https://github.com/sillytsundere" target="_blank" rel="noopener noreferrer" className=" rounded-circle icon-link">
          <SiGithub size={32} className="hover-overlay" style={iconStyle.github}/>
        </a>
      </section>
      <p style={{color: "#32CD32"}}>© 2023 made by Paige Carroll</p>
    </footer>
  );
}

export default Footer;
