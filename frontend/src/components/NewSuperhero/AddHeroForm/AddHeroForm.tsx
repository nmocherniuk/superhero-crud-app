import React, { useState } from "react";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import classes from "./AddHeroForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SuperheroData } from "../../../types";

interface formField {
  label: string;
  type?: string;
  id: string;
  isTextArea?: boolean;
}

const formFields: formField[] = [
  { label: "Nickname", type: "text", id: "nickname" },
  { label: "Real Name", type: "text", id: "real_name" },
  { label: "Superpowers", type: "text", id: "superpowers" },
  { label: "Catch phrase", type: "text", id: "catch_phrase" },
  {
    label: "Origin description",
    id: "origin_description",
    isTextArea: true,
  },
  { label: "Hero Images (comma-separated)", type: "text", id: "images" },
];

const AddHeroForm: React.FC = () => {
  const [formValues, setFormValues] = useState({
    nickname: "",
    real_name: "",
    superpowers: "",
    catch_phrase: "",
    origin_description: "",
    images: [] as SuperheroData["images"],
  });

  const navigate = useNavigate();

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/new-superhero", formValues)
      .then((response) => navigate("/superheroes"));
    console.log(formValues);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    if (id === "images") {
      const images = value.split(",").map((url, index) => ({
        url: url.trim(),
        id: Math.random(),
        alt: `Superhero Image ${index + 1}`,
      }));
      setFormValues({
        ...formValues,
        [id]: images,
      });
    } else {
      setFormValues({
        ...formValues,
        [id]: value,
      });
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmitForm}>
      {formFields.map((field: formField) => (
        <Input
          key={field.id}
          label={field.label}
          type={field.type}
          id={field.id}
          isTextArea={field.isTextArea}
          onChange={handleInputChange}
          required
        />
      ))}
      <Button
        type="submit"
        bgColor="white"
        color="black"
        addClasses={classes.button}
      >
        Add hero
      </Button>
    </form>
  );
};

export default AddHeroForm;
