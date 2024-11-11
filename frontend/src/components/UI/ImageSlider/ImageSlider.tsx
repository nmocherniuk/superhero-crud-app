import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import SliderControls from "./SliderControls/SliderControls";
import SliderDots from "./SliderDots/SliderDots";
import classes from "./ImageSlider.module.css";

type ImageSliderProps = {
  images: {
    id: number;
    url: string;
    alt: string;
  }[];
};

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  const showNextImage = (): void => {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = (): void => {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: showNextImage,
    onSwipedRight: showPrevImage,
    trackMouse: true,
  });

  return (
    <section
      aria-label="Image Slider"
      className={classes["image-slider"]}
      {...handlers}
    >
      <a href="#after-image-slider-controls" className={classes["skip-link"]}>
        Skip Image Slider Controls
      </a>
      <div className={classes["images-container"]}>
        {images.map(({ url, alt }, index) => (
          <img
            key={index}
            src={url}
            alt={alt}
            className={classes["img-slider-img"]}
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <SliderControls onPrev={showPrevImage} onNext={showNextImage} />
      <SliderDots
        images={images}
        currentIndex={imageIndex}
        onDotClick={setImageIndex}
      />
      <div id="after-image-slider-controls" />
    </section>
  );
};

export default ImageSlider;
