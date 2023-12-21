import myPicture from "../assets/me-green-hair.jpeg";
import './About.css';

export default function About() {
  return (
    <div>
      <h1 className="m-2 about-title">
        A Web Paige
      </h1>
      <div className="d-flex flex-column flex-md-row align-items-center">
        <img
          src={myPicture}
          className="rounded-circle m-3 center image"
          alt="picture of me"
        />
        <p className="m-3 about-text">
          Hello! I'm Paige, an eager and devoted junior developer who is having fun
          exploring the MERN stack. Having recently graduated from a Full Stack
          Web Development bootcamp I am ready to bounce off of that springboard
          into even more knowledge and exciting experiences. I am most
          comfortable working with JavaScript and its frameworks, and I'm
          currently taking continuing education courses for Python, AWS, C# and
          Java. When I am not fighting bugs(that I created) in the terminal, I
          enjoy making art, reading books and manga, and eating delicious food
          with good friends!
        </p>
      </div>
    </div>
  );
}
