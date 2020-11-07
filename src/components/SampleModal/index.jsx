import React from "react";
import "./style.css";

export default function SampleModal({ close, book }) {
  if (!book) return null;
  return (
    <div className="modal-wrapper">
        <div className="modal-backdrop" />
        <div className="modal-box">
          <i onClick={close} className="bx bx-x bx-md close-modal"></i>

          <div className="flex-modal">
            <div className="img-modal-container">
              <img className="img-modal" src={book.img} alt="img" />
            </div>
            <div className="text-modal">
              <h3 className="title-modal">{book.title}</h3>
              <p className="author-modal">{book.author}</p>
              <p className="details-title-modal">Details:</p>
              <p className="details-modal">{book.details}</p>
            </div>
          </div>
        </div>
      </div>
  );
}
