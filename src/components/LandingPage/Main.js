import React from "react";
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
          <button className="main-btn">See All Books</button>
        </div>
        <div className="img">
          <div className="hero"></div>
        </div>
      </div>
    </>
  );
};

export default Main;
