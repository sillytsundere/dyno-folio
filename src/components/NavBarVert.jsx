import { Link, useLocation } from "react-router-dom";
import "./NavBarVert.css";

function NavListItem({ page, currentPage, closeDrawer }) {
  if (page === "/") {
    return (
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === "/" ? "nav-link active" : "nav-link"}
          onClick={() => {
            closeDrawer();
          }}
        >
          Home
        </Link>
      </li>
    );
  } else if (page === "resume") {
    return (
      <li className="nav-item">
        <Link
          to="/resume"
          className={currentPage === `/${page}` ? "nav-link active" : "nav-link"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            // e.preventDefault();
            closeDrawer();
            // window.open("../assets/Paige-H-Carroll-Resume.pdf", "_blank");
          }}
        >
          Resume
        </Link>
      </li>
    );
  } else {
    return (
      <li className="nav-item">
        <Link
          to={`/${page}`}
          className={
            currentPage === `/${page}` ? "nav-link active" : "nav-link"
          }
          onClick={() => {
            closeDrawer();
          }}
        >
          {page[0].toUpperCase()}
          {page.slice(1)}
        </Link>
      </li>
    );
  }
}

function NavBar({ closeDrawer }) {
  const pages = ["/", "about", "portfolio", "contact", "resume"];
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <header className="shadows-into-light-regular drawer-header">
        Paige
      </header>
      <ul className="list quicksand-font">
        {pages.map((page) => (
          <NavListItem
            key={page}
            page={page}
            currentPage={currentPage}
            closeDrawer={closeDrawer}
          />
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
