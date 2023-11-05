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
    <div style={headerStyle}></div>
  );
}

export default Header;
