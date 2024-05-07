import { Link } from "react-router-dom";
import myPicture from "../assets/me-green-hair.jpeg";
import theMess from "../assets/the-mess.jpeg";
import "./Home.css";

export default function Home() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="shadows-into-light-regular about-title">A Web Paige</h1>
      <div className="d-flex flex-column col-12 col-sm-10 col-lg-9 align-items-center">
        <p className="m-3 quicksand-font about-text">
          “If a story is not about the hearer he [or she] will not listen . . .
          A great lasting story is about everyone or it will not last. The
          strange and foreign is not interesting--only the deeply personal and
          familiar.” ― <em>John Steinbeck, East of Eden</em>
        </p>
        <div className="d-flex flex-column flex-md-row align-items-center">
          <Link to="/portfolio" className="btn btn-primary" style={{
              backgroundColor: "#319D39",
              borderColor: "#319D39",
              transition: "background-color 0.3s, border-color 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#287e2e"; // Change to the desired darker color
              e.target.style.borderColor = "#287e2e";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#319D39"; // Restore the original color
              e.target.style.borderColor = "#319D39";
            }}>
            Projects
          </Link>
          <img
            src={theMess}
            className="rounded-circle m-3 center home-image flex-shrink-3"
            alt="picture of me"
          ></img>
          <Link to="/contact" className="btn btn-primary" style={{
              backgroundColor: "#319D39",
              borderColor: "#319D39",
              transition: "background-color 0.3s, border-color 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#287e2e"; // Change to the desired darker color
              e.target.style.borderColor = "#287e2e";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#319D39"; // Restore the original color
              e.target.style.borderColor = "#319D39";
            }}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
