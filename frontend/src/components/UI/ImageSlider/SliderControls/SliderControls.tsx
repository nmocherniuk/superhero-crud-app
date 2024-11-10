import React from "react";
import { ReactComponent as ArrowRight } from "../../../../assets/svg/right-arrow.svg";
import { ReactComponent as ArrowLeft } from "../../../../assets/svg/left-arrow.svg";
import classes from "./SliderControls.module.css";

type SliderControlsProps = {
  onPrev: () => void;
  onNext: () => void;
};

const SliderControls: React.FC<SliderControlsProps> = ({ onPrev, onNext }) => {
  return (
    <>
      <button
        onClick={onPrev}
        className={classes["img-slider-btn"]}
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ArrowLeft />
      </button>
      <button
        onClick={onNext}
        className={classes["img-slider-btn"]}
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ArrowRight />
      </button>
    </>
  );
};

export default SliderControls;
