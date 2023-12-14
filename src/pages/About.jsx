import myPicture from "../assets/me-green-hair.jpeg";

const imageStyle = {
  width: "300px",
  border: "6px solid #319D39",
};

export default function About() {
  return (
    <div>
      <h1 className="m-2" style={{ color: "#D0F0C0", fontFamily: "chalkduster, fantasy", fontStyle: "italic", fontWeight: "bold", }}>
        A Web Paige
      </h1>
      <div className="d-flex flex-column flex-sm-row align-items-center">
        <img
          src={myPicture}
          className="rounded-circle m-3 center"
          alt="picture of me"
          style={imageStyle}
        />
        <p className="m-3" style={{fontFamily: "cambria", fontSize: "23px"}}>
          Hello! I'm Paige, an eager and devoted developer who is having fun
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
