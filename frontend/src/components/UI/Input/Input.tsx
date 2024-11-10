import React from "react";
import classes from "./Input.module.css";

interface InputProps {
  label?: string;
  id?: string;
  type?: string;
  isTextArea?: boolean;
  required?: boolean;
  inputValue?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  id,
  inputValue,
  isTextArea = false,
  onChange,
}) => {
  return (
    <div className={classes["input-container"]}>
      {label && (
        <label htmlFor={id} className={classes.label}>
          {label}
        </label>
      )}
      {isTextArea ? (
        <textarea
          required
          className={classes.textarea}
          id={id}
          name={id}
          rows={5}
          onChange={onChange}
          value={inputValue}
        />
      ) : (
        <input
          value={inputValue}
          required
          type={type}
          onChange={onChange}
          id={id}
          name={id}
          className={`${classes.input} ${
            type === "file" ? classes["image-input"] : ""
          }`}
          multiple={type === "file"}
        />
      )}
    </div>
  );
};

export default Input;
