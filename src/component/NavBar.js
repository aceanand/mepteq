import { NavLink } from "react-router-dom";
import logo from "../image/logo.jpeg";
import "../style/NavBar.css";
function NavBar() {
  return (
    <div className="nav-container">
      <div className="logo">
        <span>
          <img src={logo} alt="" />
        </span>
      </div>
      <div className="navbar">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About Us
        </NavLink>

        <NavLink className="nav-link" to="/projects">
          Project
        </NavLink>

        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
}
export default NavBar;
