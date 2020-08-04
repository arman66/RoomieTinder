import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="showcase">
      <div className="container">
        <nav>
          <h1 className="logo">RommieTinder</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
