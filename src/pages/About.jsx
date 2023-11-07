import myPicture from "../assets/me-green-hair.jpeg";

const imageStyle = {
  width: "300px",
  border: "6px solid #319D39" 
};

export default function About() {
  return (
    <div>
      <h1 className="m-2" style={{color: "#D0F0C0"}}>My Web Paige</h1>
      <div className="d-flex flex-column flex-sm-row align-items-center">
        <img
          src={myPicture}
          className="rounded-circle m-3 center"
          alt="picture of me"
          style={imageStyle}
        />
        <p className="m-3">
          Hello! I'm Paige, an eager and devoted developer looking to gain
          experience and knowledge in the world of web development. I am
          finishing up a coding bootcamp where I learned and explored the full
          MERN stack. I am most comfortable working with JavaScript and its
          frameworks, and am always looking to learn new technologies.
        </p>
      </div>
    </div>
  );
}
