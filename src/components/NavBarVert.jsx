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
            console.log("Link clicked");
          }}
        >
          About
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
            console.log("Link clicked");
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
