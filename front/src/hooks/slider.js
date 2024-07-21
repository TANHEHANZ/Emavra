// src/hooks/useImageSlider.js
import { useEffect, useState, useCallback } from "react";

const useImageSlider = (images, intervalTime = 4000) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images.length, intervalTime]);

  const handleImageError = useCallback((index) => {
    setImageErrors((prevErrors) => ({ ...prevErrors, [index]: true }));
  }, []);

  return { currentImageIndex, imageErrors, handleImageError };
};

export default useImageSlider;
