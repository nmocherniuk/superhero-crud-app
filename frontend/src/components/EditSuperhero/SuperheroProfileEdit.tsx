import React, { FormEvent, useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import { ActionButton, SuperheroAttribute, SuperheroData } from "../../types";
import Input from "../UI/Input/Input";
import ActionButtons from "../UI/ActionButtons/ActionButtons";
import { useNavigate } from "react-router-dom";
import ImageSelection from "./ImageSelection/ImageSelection";
import classes from "./SuperheroProfileEdit.module.css";
import axios from "axios";

interface SuperheroProfileEditProps {
  data: SuperheroData | null;
}

const SuperheroProfileEdit: React.FC<SuperheroProfileEditProps> = ({
  data,
}) => {
  const [selectedImages, setSelectedImages] = useState<number[]>([]);
  const [superheroData, setSuperheroData] = useState<SuperheroData>({
    id: 0,
    images: [],
    nickname: "",
    real_name: "",
    origin_description: "",
    superpowers: "",
    catch_phrase: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setSuperheroData({ ...data });
    }
  }, [data]);

  const handleSelectImage = (id: number): void => {
    if (selectedImages.includes(id)) {
      setSelectedImages(selectedImages.filter((imageId) => imageId !== id));
    } else {
      setSelectedImages([...selectedImages, id]);
    }
  };

  const handleCancelEdit = (): void => {
    navigate(`/superheroes/${data?.id}`);
  };

  const handleUpdate = (e: FormEvent): void => {
    e.preventDefault();

    const updatedImages = superheroData.images.filter(
      (image) => !selectedImages.includes(image.id)
    );
    if (updatedImages.length === 0 && selectedImages.length > 0) return;

    const updatedData = { ...superheroData, images: updatedImages };

    axios
      .put(`http://localhost:3001/superheroes/edit/${data?.id}`, updatedData)
      .then((response) => navigate(`/superheroes/${data?.id}`));
  };

  const buttons: ActionButton[] = [
    {
      children: "Cancel edit",
      onClick: handleCancelEdit,
      bgColor: "white",
      color: "black",
      type: "button",
    },
    {
      children: "Update",
      onClick: handleUpdate,
      bgColor: "white",
      color: "black",
      type: "submit",
    },
  ];

  const superheroAttributes: SuperheroAttribute[] = [
    { label: "Nickname", value: superheroData.nickname, key: "nickname" },
    {
      label: "Real Name",
      value: superheroData.real_name,
      key: "real_name",
    },
    {
      label: "Superpowers",
      value: superheroData.superpowers,
      key: "superpowers",
    },
    {
      label: "Catchphrase",
      value: superheroData.catch_phrase,
      key: "catch_phrase",
    },
    {
      label: "Origin Description",
      value: superheroData.origin_description,
      textArea: true,
      key: "origin_description",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    setSuperheroData({
      ...superheroData,
      [id]: value,
    });
  };

  return (
    <m.div
      animate={{ y: [30, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className={classes["hero-profile"]}
    >
      <ImageSelection
        onSelectImage={handleSelectImage}
        images={superheroData.images}
        selectedImages={selectedImages}
      />

      <form className={classes.form}>
        {superheroAttributes.map((detail) => (
          <Input
            key={detail.label}
            label={detail.label}
            id={detail.key}
            type={detail.type}
            isTextArea={detail.textArea}
            inputValue={detail.value}
            onChange={handleInputChange}
          />
        ))}
        <ActionButtons buttons={buttons} />
      </form>
    </m.div>
  );
};

export default SuperheroProfileEdit;
