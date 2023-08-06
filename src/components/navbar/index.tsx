import { NavLink } from "react-router-dom";
import logo from "../../assets/shared/logo.svg";
import "./index.scss";

export default function Navbar() {
  return (
    <div className="nav-container">
      <nav id="desktop-view">
        <img src={logo} alt="Logo" loading="lazy" />
        <div>
          <div className="line"></div>
          <ul className="nav-list">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to=".."
              >
                <p>
                  <span className="bold">01</span>Home
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/destination"
              >
                <p>
                  <span className="bold">02</span>Destination
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/crew"
              >
                <p>
                  <span className="bold">03</span>crew
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/technology"
              >
                <p>
                  <span className="bold">04</span>Technology
                </p>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
