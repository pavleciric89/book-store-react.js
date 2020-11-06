import React from "react";
import "./style.css";

export default function SampleModal({ close, book }) {
  
  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <button onClick={close}>&times;</button>
        <br/>
        Content
        <div>
          {book.title}
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
