import React, { FormEvent, useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import {
  ActionButton,
  SuperheroAttribute,
  SuperheroDetailsData,
} from "../../types";
import Input from "../UI/Input/Input";
import ActionButtons from "../UI/ActionButtons/ActionButtons";
import { useNavigate } from "react-router-dom";
import ImageSelection from "./ImageSelection/ImageSelection";
import classes from "./SuperheroProfileEdit.module.css";

interface SuperheroProfileEditProps {
  initialData: SuperheroDetailsData | null;
}

const SuperheroProfileEdit: React.FC<SuperheroProfileEditProps> = ({
  initialData,
}) => {
  const [selectedImages, setSelectedImages] = useState<number[]>([]);
  const [superheroData, setSuperheroData] = useState<SuperheroDetailsData>({
    images: [],
    nickname: "",
    real_name: "",
    origin_description: "",
    superpowers: "",
    catch_phrase: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    // setSuperheroData({ ...superheroData, ...data });
  }, []);

  const handleSelectImage = (id: number): void => {
    if (selectedImages.includes(id)) {
      setSelectedImages(selectedImages.filter((imageId) => imageId !== id));
    } else {
      setSelectedImages([...selectedImages, id]);
    }
  };

  const handleCancelEdit = (): void => {
    navigate("/superheroes/1");
  };

  useEffect(() => {
    if (selectedImages.length > 0) {
      // data = { ...data, ...superheroData };
      navigate("/superheroes/1");
    }
  }, [superheroData.images]);

  const handleUpdate = (e: FormEvent): void => {
    e.preventDefault();

    const updatedImages = superheroData.images.filter(
      (image) => !selectedImages.includes(image.id)
    );

    setSuperheroData((prevData) => ({
      ...prevData,
      images: updatedImages,
    }));

    // data = { ...data, ...superheroData };
    navigate("/superheroes/1");
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
      type: "button",
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
    {
      label: "Add more Images",
      key: "images",
      type: "file",
    },
  ];

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
            id={detail.label}
            type={detail.type}
            isTextArea={detail.textArea}
            inputValue={detail.value}
            onChange={(e) =>
              setSuperheroData({
                ...superheroData,
                [detail.key]: e.target.value,
              })
            }
          />
        ))}
        <ActionButtons buttons={buttons} />
      </form>
    </m.div>
  );
};

export default SuperheroProfileEdit;
