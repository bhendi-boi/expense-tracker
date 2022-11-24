import React from "react";
import ReactDOM from "react-dom";

// styles
import "../styles/Modal.css";

const Modal = ({ show, closeModal, children }) => {
  if (!show) return null;
  return ReactDOM.createPortal(
    <div className="modal">
      <button onClick={() => closeModal} />
      {children}
    </div>,
    document.querySelector("#portal")
  );
};

export default Modal;
