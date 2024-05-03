import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import img from "../assets/7.jpg";

const Carrosucel = ({ title, data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
  };

  const goToPrevSlide = () => {
    const prevIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  return (
    <article className="container-carroucel">
      <h2>{title}</h2>
      <div className="carrucel">
        <button onClick={goToPrevSlide}>
          <FontAwesomeIcon icon="fa-solid fa-caret-left" />
        </button>

        <section className="carrucel-contenido">
          {data[currentIndex]?.titulo && (
            <>
              <h3>{data[currentIndex].titulo}</h3>
              <p>{data[currentIndex].Descripcion}</p>
            </>
          )}
          <button>
            leer más <FontAwesomeIcon icon="fa-solid fa-caret-right" />
          </button>
        </section>

        <img
          src={data[currentIndex]?.multimedia }
          alt={`imgCarrusel${currentIndex + 1}`}
        />

        <button onClick={goToNextSlide}>
          <FontAwesomeIcon icon="fa-solid fa-caret-right" />
        </button>
      </div>
    </article>
  );
};

export default Carrosucel;
