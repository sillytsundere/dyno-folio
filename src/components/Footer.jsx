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

  const [iconSize, setIconSize] = useState(50);

  useEffect(() => {
    const updateIconSize = () => {
      const viewportWidth = window.innerWidth;

      if (viewportWidth <= 600) {
        setIconSize(32);
      } else if (viewportWidth <= 800) {
        setIconSize(50)
      } else {
        setIconSize(75)
      }
    };
  
  // Initial update
  updateIconSize();

  // Update on window resize
  window.addEventListener("resize", updateIconSize);

  // Clean up the event listener on component unmount
  return () => {
    window.removeEventListener("resize", updateIconSize);
  };
 }, []);

  return (
    <footer className="d-flex flex-column align-items-center m-1">
      <section>
        <a href="https://www.instagram.com/sillytsundere/" className="m-2 icon-link" style={iconStyle.instagram}>
        <svg height={iconSize} width={iconSize}>
          <defs>
            <linearGradient id="myGradient" gradientTransform="rotate(70)">
              <stop offset="0%" stopColor="#f9ce34" />
              <stop offset="75%" stopColor="#ee2a7b" />
              <stop offset="100%" stopColor="#6228d7" />
            </linearGradient>
          </defs>
          <IconContext.Provider value={{ attr: {fill: "url('#myGradient')"}}}>
            <SiInstagram size={iconSize} className="rounded hover-overlay" />
          </IconContext.Provider>
        </svg>
        </a>
        <a href="https://www.linkedin.com/in/paigehcarroll2113/" className="m-2 rounded icon-link">
          <SiLinkedin size={iconSize} className="hover-overlay" style={iconStyle.linkedin}/>
        </a>
        <a href="https://github.com/sillytsundere" className="m-2 rounded-circle icon-link">
          <SiGithub size={iconSize} className="hover-overlay" style={iconStyle.github}/>
        </a>
      </section>
      <p style={{color: "#32CD32"}}>© 2023 Made by Paige Carroll</p>
    </footer>
  );
}

export default Footer;
