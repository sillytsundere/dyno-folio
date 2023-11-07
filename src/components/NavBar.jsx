import { Link, useLocation } from "react-router-dom";
import './NavBar.css';

function NavListItem({ page, currentPage }) {
  console.log(currentPage, "navlist item currentPage");
  console.log(page, "navlistitem page");

  if (page === "/") {
    return (
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === "/" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
    );
  } else {
    return (
      <li className="nav-item">
        <Link
          to={`${page}`}
          className={currentPage === `/${page}` ? "nav-link active" : "nav-link"}
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
  console.log(currentPage);

  return (
    <ul className="nav nav-tabs d-flex flex-nowrap justify-content-end">
      {pages.map((page) => (
        <NavListItem key={page} page={page} currentPage={currentPage} />
      ))}
    </ul>
  );
}

export default NavBar;
