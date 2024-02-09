import { Link } from "react-router-dom";
import img from "../../assets/logo.svg";
import "./NavBar.css";

const NavBar = () => {
  function ToggleNav() {
    const nav = document.querySelector(".primary-navigation");
    const navToggle = document.querySelector(".mobile-nav-toggle");

    const visiblity = nav.getAttribute("data-visible");
    console.log(visiblity);
    if (visiblity === "false") {
      nav.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
    } else {
      nav.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    }
  }

  return (
    <div className="navbar">
      <div className="destination">
        <Link to = "/" className="skip-to-content" href="#main">
          Skip to content
        </Link>
        <header className="primary-header flex">
          <div>
            <img src={img} alt="space tourism logo" className="logo" />
          </div>
          <button
            className="mobile-nav-toggle"
            aria-controls="primary-navigation"
            onClick={ToggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={34}
              height={34}
              viewBox="0 0 24 24"
              style={{
                fill: "rgba(255, 255, 255, 1)",
                transform: "",
              }}
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </button>
          <nav>
            <ul
              id="primary-navigation"
              data-visible="false"
              className="primary-navigation underline-indicators flex"
            >
              <li className="active">
                <Link to="/"
                  className="ff-sans-cond uppercase text-white letter-spacing-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to = "/gallery"
                  className="ff-sans-cond uppercase text-white letter-spacing-2"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link to = "/about"
                  className="ff-sans-cond uppercase text-white letter-spacing-2"
                >
                  About
                </Link>
              </li>
              <li>
                <Link to = "/events"
                  className="ff-sans-cond uppercase text-white letter-spacing-2"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link to = "/contact"
                  className="ff-sans-cond uppercase text-white letter-spacing-2"
                  style={{
                    display: "flex",
                    gap: "5px",
                  }}
                >
                  Contact <div>Us</div>
                </Link>
              </li>
              <li>
                <Link to = "/team"
                  className="ff-sans-cond uppercase text-white letter-spacing-2"
                >
                  Team
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default NavBar;
