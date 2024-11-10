import React from "react";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import classes from "./AddHeroForm.module.css";

interface formField {
  label: string;
  type?: string;
  id: string;
  isTextArea?: boolean;
}

const formFields: formField[] = [
  { label: "Nickname", type: "text", id: "nickname" },
  { label: "Real Name", type: "text", id: "real-name" },
  { label: "Superpowers", type: "text", id: "superpowers" },
  { label: "Catch phrase", type: "text", id: "catch-phrase" },
  {
    label: "Origin description",
    id: "origin-description",
    isTextArea: true,
  },
  { label: "Hero Images", type: "file", id: "hero-image" },
];

const AddHeroForm: React.FC = () => {
  const handleSumbitForm = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(2);
  };

  return (
    <form className={classes.form} onSubmit={handleSumbitForm}>
      {formFields.map((field: formField) => (
        <Input
          key={field.id}
          label={field.label}
          type={field.type}
          id={field.id}
          isTextArea={field.isTextArea}
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
