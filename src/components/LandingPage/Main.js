import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <>
      <h1 className="main-title">Buy Books Online!</h1>

      <div className="flex-container">
        <div className="subtitle-button">
          <p className="sub-title">
            Buy cheap kids books, fiction, cooking, young adult novels, & so
            much more!
            <br /> FREE shipping on orders over $35.
          </p>
          <Link to="/booklist">
            <button className="main-btn">See All Books</button>
          </Link>
        </div>
        <div className="img">
          <div className="hero"></div>
        </div>
      </div>
    </>
  );
};

export default Main;
