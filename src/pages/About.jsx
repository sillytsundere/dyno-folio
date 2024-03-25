import myPicture from "../assets/me-green-hair.jpeg";
import "./About.css";

export default function About() {
  return (
    <div>
      <h1 className="shadows-into-light-regular about-title">A Web Paige</h1>
      <div className="d-flex flex-column flex-md-row align-items-center">
        <img
          src={myPicture}
          className="rounded-circle m-3 center image"
          alt="picture of me"
        />
        <p className="m-3 quicksand-font about-text">
        Howdy! I'm Paige—a passionate web developer driven by humble curiosity and a love for creating things. Since delving into coding and obtaining my Full Stack Web Development certificate, my hunger for knowledge has surged. As a lifelong learner I relish getting to learn something new and the ever-evolving field of web development continually presents fresh avenues for discovery. 
        <br></br>
        <br></br>
        I am most comfortable working with HTML, CSS, JavaScript and React. I am currently pursuing further understanding of coding fundamentals by delving further into JavaScript and its many frameworks and libraries. With the ever-evolving nature of web-development I am excited with the prospect that there will always be something new to learn.
        <br></br>
        <br></br>
        Away from the terminal, you’ll catch me creating art, exploring local hiking trails, devouring books and manga, and savoring delicious meals with good friends.
        </p>
      </div>
    </div>
  );
}
