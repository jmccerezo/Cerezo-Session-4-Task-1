import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="teal">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            <i className="material-icons">grade</i>ReactJS
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contactus">Contact us</Link>
            </li>
            <li>
              <Link to="/aboutus">About us</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
