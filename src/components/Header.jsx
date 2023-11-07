import pinImage from "../assets/pin-header.jpeg";
import './Header.css'

const styles = {
  header: {
    width: "100%",
    backgroundSize: "cover",
    backgroundImage: `url(${pinImage})`,
    backgroundRepeat: "no-repeat",
  },
};

function Header() {
  return (
    <div className="header" style={styles.header}>
      <div className="container text-center">
        <div className="row align-items-center justify-content-center header">
          <h1 className="row align-items-center justify-content-center col-3 rounded text">
            Paige
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
