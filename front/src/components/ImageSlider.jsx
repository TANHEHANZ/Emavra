// src/components/ImageSlider.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import useImageSlider from "../hooks/slider";
import { dataImg } from "../data/dataEmpresa";

const ImageSlider = () => {
  const { currentImageIndex, imageErrors, handleImageError } = useImageSlider(dataImg);

  return (
    <div className="slider">
      {dataImg.slice(0, 4).map((item, i) =>
        imageErrors[i] ? (
          <FontAwesomeIcon
            key={i}
            icon={faImage}
            className="slider-img-placeholder"
            style={{
              width: `${currentImageIndex === i ? 300 : 0}px`,
              transition: "width 1s ease-in-out",
            }}
          />
        ) : (
          <img
            key={i}
            src={item}
            alt={`imgCarrusel${i + 1}`}
            className="slider-img"
            onError={() => handleImageError(i)}
            style={{
              width: `${currentImageIndex === i ? 300 : 0}px`,
              transition: "width 1s ease-in-out",
            }}
          />
        )
      )}
    </div>
  );
};

export default ImageSlider;
