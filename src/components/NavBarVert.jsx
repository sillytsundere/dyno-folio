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
          About
        </Link>
      </li>
    );
  } else if (page === "resume") {
    return (
      <li className="nav-item">
        <Link
          to="/resume"
          className={currentPage === "/resume" ? "nav-link active" : "nav-link"}
          target="_blank"
          onClick={() => {
            closeDrawer();
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

function NavBar() {
  const pages = ["/", "portfolio", "contact", "resume"];
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <header className="shadows-into-light-regular drawer-header">Paige</header>
      <ul className="list quicksand-font">
        {pages.map((page) => (
          <NavListItem key={page} page={page} currentPage={currentPage} />
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
