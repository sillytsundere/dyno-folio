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
        Howdy! I'm Paige—a passionate web developer driven by insatiable curiosity and a love for the exhilarating world of software development. My recently acquired Full Stack Web Development certificate serves as a cornerstone, propelling me into the next phase of my educational journey. 
        <br></br>
        <br></br>
        I am most comfortable working with JavaScript and its frameworks, and now I'm broadening my skills through courses in Python, AWS, C#, and Java. 
        <br></br>
        <br></br>
        Away from the terminal, you’ll catch me creating art, exploring local hiking trails, devouring books and manga, and savoring delicious meals with good friends.
        </p>
      </div>
    </div>
  );
}
