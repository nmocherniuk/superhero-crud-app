import React, { FormEvent } from "react";
import Button from "../Button/Button";
import { ActionButton } from "../../../types";
import classes from "./ActionButtons.module.css";

interface ActionButtonsProps {
  buttons: ActionButton[];
  containerClasses?: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  buttons,
  containerClasses,
}) => {
  return (
    <div
      className={`${classes["buttons-container"]} ${containerClasses || ""}`}
    >
      {buttons.map((button: ActionButton, index: number) => (
        <Button
          key={index}
          color={button.color}
          bgColor={button.bgColor}
          addClasses={classes.button}
          type={button.type}
          onClick={button.onClick}
        >
          {button.children}
        </Button>
      ))}
    </div>
  );
};

export default ActionButtons;
