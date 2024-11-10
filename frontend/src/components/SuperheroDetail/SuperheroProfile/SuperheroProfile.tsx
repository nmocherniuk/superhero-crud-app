import React, { useState } from "react";
import { motion as m } from "framer-motion";
import ImageSlider from "../../UI/ImageSlider/ImageSlider";
import { ActionButton, SuperheroData } from "../../../types";
import DeleteWarningModal from "../DeleteWarningModal/DeleteWarningModal";
import { useNavigate } from "react-router-dom";
import ActionButtons from "../../UI/ActionButtons/ActionButtons";
import { useModal } from "../../../store/ModalContext";
import classes from "./SuperheroProfile.module.css";

interface SuperheroProfileProps {
  superheroData: SuperheroData | null;
}

const SuperheroProfile: React.FC<SuperheroProfileProps> = ({
  superheroData,
}) => {
  const [superheroDetail, setSuperheroData] = useState(superheroData);
  const navigate = useNavigate();
  const { isModalOpen, openModal } = useModal();

  const handleOpenDeleteModal = () => {
    openModal();
  };

  const handleEdit = () => {
    navigate("/superheroes/edit/1");
  };

  const buttons: ActionButton[] = [
    {
      children: "Delete",
      onClick: handleOpenDeleteModal,
      bgColor: "red",
      color: "white",
      type: "button",
    },
    {
      children: "Edit",
      onClick: handleEdit,
      bgColor: "white",
      color: "black",
      type: "button",
    },
  ];

  const superheroAttributes = [
    { label: "Nickname", value: superheroData?.nickname },
    { label: "Real Name", value: superheroData?.real_name },
    {
      label: "Origin",
      value: superheroData?.origin_description,
      textArea: true,
    },
    { label: "Superpowers", value: superheroData?.superpowers },
    { label: "Catchphrase", value: superheroData?.catch_phrase },
  ];

  return (
    <>
      {isModalOpen && <DeleteWarningModal />}
      <m.div
        animate={{ y: [30, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={classes["hero-profile"]}
      >
        <div className={classes["hero-image"]}>
          {/* <ImageSlider images={superheroDetail?.images} /> */}
        </div>
        <div className={classes["hero-details"]}>
          {superheroAttributes.map((attribute) => (
            <div key={attribute.label} className={classes["hero-detail-item"]}>
              <span className={classes["hero-detail-label"]}>
                {attribute.label}:
              </span>
              {" " + attribute.value}
            </div>
          ))}
          <ActionButtons buttons={buttons} />
        </div>
      </m.div>
    </>
  );
};

export default SuperheroProfile;
