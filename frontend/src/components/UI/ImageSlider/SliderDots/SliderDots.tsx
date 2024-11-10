import React from "react";
import { Circle, CircleDot } from "lucide-react";
import classes from "./SliderDots.module.css";

type SliderDotsProps = {
  images: { url: string; alt: string }[];
  currentIndex: number;
  onDotClick: (index: number) => void;
};

const SliderDots: React.FC<SliderDotsProps> = ({
  images,
  currentIndex,
  onDotClick,
}) => {
  return (
    <div className={classes["buttons-container"]}>
      {images.map((_, index) => (
        <button
          key={index}
          className={classes["img-slider-dot-btn"]}
          aria-label={`View Image ${index + 1}`}
          onClick={() => onDotClick(index)}
        >
          {index === currentIndex ? (
            <CircleDot aria-hidden />
          ) : (
            <Circle aria-hidden />
          )}
        </button>
      ))}
    </div>
  );
};

export default SliderDots;
