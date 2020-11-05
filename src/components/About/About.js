import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const about = () => {
  return (
    <>
      <div className="cover-about"></div>

      <div className="textbox-about">
        <Link to="/">
          <i className="bx bx-x bx-md icon-close-about"></i>
        </Link>
        <h3 className="title-about">
          Welcome, book lovers, to your online BOOK:store!
        </h3>
        <p className="subtitle-about">
          With so many titles, it is vital to give customers an easy way to find
          precisely the books they are looking for. Our search engine enables
          customers to locate books by title, author, or keyword in a few
          seconds at most.
        </p>
        <div className="container-about">
          <div className="pharagraph-section-about">
            <span className="icon-about">
              <i className="bx bx-book-reader"></i>
            </span>
            <p className="text-about">
              Customers with a general idea of what they want can use our Browse
              pages to sift through all of categories to find exactly the right
              book
            </p>
          </div>
          <div className="pharagraph-section-about">
            <span className="icon-about">
              <i className="bx bxs-medal"></i>
            </span>
            <p className="text-about">
              We believe that being the best seller in bargain books is about
              much more than providing you with great selection and value
            </p>
          </div>
          <div className="pharagraph-section-about">
            <span className="icon-about">
              <i className="bx bxs-truck"></i>
            </span>
            <p className="text-about">
              Free worldwide delivery available with every order
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
