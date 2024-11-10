import React from "react";
import classes from "./Button.module.css";
import { ActionButton } from "../../../types";

const Button: React.FC<ActionButton> = ({
  onClick,
  children,
  type,
  addClasses,
  color,
  bgColor,
}) => {
  return (
    <button
      type={type}
      className={`${classes.button} ${classes[`${bgColor}-bg`]} ${
        classes[`${color}-text`]
      } ${addClasses || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
