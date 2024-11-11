import React from "react";
import Modal from "../../UI/Modal/Modal";
import deadpoolWarning from "../../../assets/images/deadpool-warning.jpg";
import ActionButtons from "../../UI/ActionButtons/ActionButtons";
import classes from "./DeleteWarningModal.module.css";
import { useModal } from "../../../store/ModalContext";
import { ActionButton } from "../../../types";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteWarningModal: React.FC = () => {
  const { closeModal } = useModal();
  const { superheroId } = useParams();
  const navigate = useNavigate();
  const handleCancelDelete = () => {
    closeModal();
  };

  const handleConfirmDelete = () => {
    axios.delete(`http://localhost:3001/superheroes/${superheroId}`);
    closeModal();
    navigate("/superheroes");
  };

  const buttons: ActionButton[] = [
    {
      children: "Cancel",
      onClick: handleCancelDelete,
      bgColor: "white",
      color: "black",
      addClasses: classes.button,
      type: "button",
    },
    {
      children: "Yes, delete",
      onClick: handleConfirmDelete,
      bgColor: "red",
      color: "white",
      addClasses: classes.button,
      type: "button",
    },
  ];

  return (
    <Modal>
      <div className={classes.container}>
        <img src={deadpoolWarning} alt="Deadpool" className={classes.image} />
        <h4 className={classes.title}>Delete Superhero</h4>
        <p className={classes.message}>
          Are you sure you want to delete this superhero? Any unsaved changes
          will be lost, and this action cannot be undone.
        </p>
        <ActionButtons buttons={buttons} containerClasses={classes.buttons} />
      </div>
    </Modal>
  );
};

export default DeleteWarningModal;
