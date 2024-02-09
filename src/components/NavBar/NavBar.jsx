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
    <>
      <div className="destination">
        <a className="skip-to-content" href="#main">
          Skip to content
        </a>
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
                <a
                  className="ff-sans-cond uppercase text-white letter-spacing-2"
                  href="index.html"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="ff-sans-cond uppercase text-white letter-spacing-2"
                  href="destination.html"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  className="ff-sans-cond uppercase text-white letter-spacing-2"
                  href="crew.html"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="ff-sans-cond uppercase text-white letter-spacing-2"
                  href="technology.html"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  className="ff-sans-cond uppercase text-white letter-spacing-2"
                  href="technology.html"
                  style={{
                    display: "flex",
                    gap: "5px",
                  }}
                >
                  Contact <div>Us</div>
                </a>
              </li>
              <li>
                <a
                  className="ff-sans-cond uppercase text-white letter-spacing-2"
                  href="technology.html"
                >
                  Team
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default NavBar;
