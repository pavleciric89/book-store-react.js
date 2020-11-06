import React from "react";
import ReactDom from "react-dom";
import "./style.css";

export default function SampleModal({ close, book }) {
  return ReactDom.createPortal(
    <>
      <div className="modal-wrapper">
        <div className="modal-backdrop" />
        <div className="modal-box">
          <div className="flex-modal">
            <div className="img-modal-container">
              <img className="img-modal" src={book.img} alt="img" />
            </div>
            <div className="text-modal">
              <h3 className="title-modal">{book.title}</h3>
              <p className="author-modal">{book.author}</p>
              <p className="details-title-modal">Details:</p>
              <p className="details-modal">{book.details}</p>
              <i onClick={close} className="bx bx-x bx-md close-modal"></i>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
}
