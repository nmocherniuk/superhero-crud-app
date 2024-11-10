import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { useModal } from "../../../store/ModalContext"; // Імпортуємо useModal
import classes from "./Modal.module.css";

interface BackdropProps {
  onClick: () => void;
}

interface ModalOverlayProps {
  children: React.ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
  return <div className={classes.backdrop} onClick={onClick}></div>;
};

const ModalOverlay: React.FC<ModalOverlayProps> = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isModalOpen, closeModal } = useModal(); // Використовуємо контекст

  if (!isModalOpen) return null; // Якщо модальне вікно не відкрите, не рендеримо його

  return (
    <Fragment>
      {portalElement &&
        ReactDOM.createPortal(<Backdrop onClick={closeModal} />, portalElement)}
      {portalElement &&
        ReactDOM.createPortal(
          <ModalOverlay>{children}</ModalOverlay>,
          portalElement
        )}
    </Fragment>
  );
};

export default Modal;
