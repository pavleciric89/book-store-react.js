import React from "react";
import "./Navbar.css";
import "../../App.css"

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <h2 className="logo">
          BOOK:
          <br />
          <p className="p-logo">store</p>
        </h2>
        <div className="burger-container">
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </div>
        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
