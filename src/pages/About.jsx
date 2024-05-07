import myPicture from "../assets/me-green-hair.jpeg";
import theMess from "../assets/the-mess.jpeg";
import "./About.css";

export default function About() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="shadows-into-light-regular about-title">Paige H. Carroll</h1>
      <div className="d-flex flex-column flex-md-row align-items-center">
        <img
          src={myPicture}
          className="rounded-circle m-3 image"
          alt="picture of me"
        />
        <p className="m-3 quicksand-font about-text">
          Howdy! I'm Paige—a passionate web developer driven by humble curiosity
          and a love for creating things. As a lifelong learner I relish getting
          to learn something new and the ever-evolving field of web development
          continually presents fresh avenues for discovery.
          <br></br>
          <br></br>I am most comfortable working with HTML, CSS, JavaScript and
          React. I am excited by web accessibility and the intersection of
          technology and art. Away from the terminal, you’ll catch me creating
          art, exploring local hiking trails, devouring books and manga, and
          savoring delicious meals with good friends.
        </p>
      </div>
    </div>
  );
}
