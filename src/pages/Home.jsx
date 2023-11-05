const imageStyle = {
  width: "25%",
};

export default function Home() {
  return (
    <div>
      <h1 className="m-2">My Web Paige</h1>
      <div className="d-flex flex-column flex-sm-row">
        <p className="m-3">
          Hello! I'm Paige, an eager and devoted developer looking to gain
          experience and knowledge in the world of web development. I am
          finishing up a coding bootcamp where I learned and explored the full
          MERN stack. I am most comfortable working with JavaScript and its
          frameworks, and am always looking to learn new technologies.
        </p>
        <img
          src="src/assets/me-green-hair.jpeg"
          className="rounded-circle m-3"
          alt="picture of me"
          style={imageStyle}
        />
      </div>
    </div>
  );
}
