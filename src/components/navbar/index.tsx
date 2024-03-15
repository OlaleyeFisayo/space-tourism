import { NavLink } from "react-router-dom";
import logo from "../../assets/shared/logo.svg";
import hamburgerIcon from "../../assets/shared/icon-hamburger.svg";
import closedIcon from "../../assets/shared/icon-close.svg";
import "./index.scss";
import { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const changeToggle = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <section className="nav-container">
      <nav id="desktop-view">
        <img src={logo} alt="Logo" loading="lazy" />
        <ul className="nav-list">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to=".."
            >
              <p>
                <span className="bold">00</span>Home
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/destination"
            >
              <p>
                <span className="bold">01</span>Destination
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/crew"
            >
              <p>
                <span className="bold">02</span>crew
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/technology"
            >
              <p>
                <span className="bold">03</span>Technology
              </p>
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav id="mobile-view">
        <section className="img-container">
          <img src={logo} alt="Logo" loading="lazy"/>
        </section>
        <section className="hamburger" role="button" onClick={changeToggle}>
          <img src={hamburgerIcon} alt="hamburger icon" />
        </section>
        <section className={!toggle ? "nav" : "nav active"}>
          <section
            className="img-container"
            role="button"
            onClick={changeToggle}
          >
            <img src={closedIcon} alt="closed icon" />
          </section>
          <ul className="nav-list">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to=".."
              >
                <p>
                  <span className="bold">00</span>Home
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/destination"
              >
                <p>
                  <span className="bold">01</span>Destination
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/crew"
              >
                <p>
                  <span className="bold">02</span>crew
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/technology"
              >
                <p>
                  <span className="bold">03</span>Technology
                </p>
              </NavLink>
            </li>
          </ul>
        </section>
      </nav>
    </section>
  );
}
