import pinImage from "../assets/pin-header.jpeg";

const headerStyle = {
  width: "100%",
  height: "300px",
  backgroundSize: "cover",
  backgroundImage: `url(${pinImage})`,
  backgroundRepeat: "no-repeat",
};

function Header() {
  return (
    <div style={headerStyle}>
      <h1>My Web Paige</h1>
    </div>
  );
}

export default Header;
