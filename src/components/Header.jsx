import pinImage from "../assets/pin-header.jpeg";

const styles = {
  header: {
    width: "100%",
    height: "300px",
    backgroundSize: "cover",
    backgroundImage: `url(${pinImage})`,
    backgroundRepeat: "no-repeat",
  },
  text: {
    color: "#333",
    backgroundColor: "rgba(255, 250, 255, 0.771)",
  },
};

function Header() {
  return (
    <div style={styles.header}>
      <div className="container text-center" style={{ height: "300px" }}>
        <div className="row align-items-center justify-content-center" style={{ height: "300px" }}>
          <h1 className="col-3 rounded" style={styles.text}>
            Paige
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
