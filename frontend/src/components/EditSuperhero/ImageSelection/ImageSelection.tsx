import React from "react";
import { SuperheroData } from "../../../types";
import classes from "./ImageSelection.module.css";

interface ImageSelectionProps {
  images: SuperheroData["images"];
  selectedImages: number[];
  onSelectImage: (id: number) => void;
}

const ImageSelection: React.FC<ImageSelectionProps> = ({
  images,
  selectedImages,
  onSelectImage,
}) => {
  return (
    <article className={classes["image-article"]}>
      <h4>Images</h4>
      <span>
        Selected for deletion {selectedImages.length}{" "}
        {selectedImages.length > 1 ? "images" : "image"}
      </span>
      <div className={classes["container-images"]}>
        {images.map((image) => (
          <div
            key={image.id}
            className={`${classes["image-item"]} ${
              selectedImages.includes(image.id) ? classes["selected-image"] : ""
            }`}
            onClick={() => onSelectImage(image.id)}
          >
            <img src={image.url} alt={image.alt} className={classes.image} />
          </div>
        ))}
      </div>
    </article>
  );
};

export default ImageSelection;
