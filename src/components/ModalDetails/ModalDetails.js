import React, { forwardRef, useImperativeHandle, useState } from "react";
import ReactDOM from "react-dom";
// import BookList from "../../Data";
import "./ModalDetails.css";

const ModalDetails = forwardRef(({ data, selectedId }, ref) => {
  const [display, setDisplay] = useState(false);
  // const { img, title, author, details } = data;
  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close(),
    };
  });
  const open = (selectedId) => {
    setDisplay(true);
    console.log(selectedId);
  };
  const close = () => {
    setDisplay(false);
  };
  if (display) {
    return ReactDOM.createPortal(
      <div className="modal-wrapper">
        <div className="modal-backdrop" />
        <div className="modal-box">
          <div className="flex-modal">
            <div className="img-modal-container">
              {/* <img className="img-modal" src={data[selectedId].img} alt="img" /> */}
            </div>
            <div className="text-modal">
              {/* <h3 className="title-modal">{data[selectedId].title}</h3>
              <p className="author-modal">{data[selectedId].author}</p>
              <p className="details-title-modal">Details:</p>
              <p className="details-modal">{data[selectedId].details}</p> */}
              <i onClick={close} className="bx bx-x bx-md close-modal"></i>
            </div>
          </div>
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  }
  return null;
});

export default ModalDetails;
