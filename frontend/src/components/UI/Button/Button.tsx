import React from "react";
import classes from "./Button.module.css";

interface ButtonProps {
  onClick?: (e: React.FormEvent) => void;
  children: React.ReactNode;
  bgColor: "red" | "white";
  color: "white" | "black";
  type?: "button" | "reset" | "submit";
  addClasses?: string;
}

const Button: React.FC<ButtonProps> = ({
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
