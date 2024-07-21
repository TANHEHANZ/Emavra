import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Carrosucel = ({ title, data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
  };

  const goToPrevSlide = () => {
    const prevIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const leerArticulo = (id) => {
    const type = title.toLowerCase();
    navigate(`/detalle/${type}/${id}`);
  };

  return (
    <article className="containerCarroucel">
      <h2>
        {title} <strong>Destacados</strong>
      </h2>
      <div className="carrucel">
        <button onClick={goToPrevSlide}>
          <FontAwesomeIcon icon="fa-solid fa-caret-left" />
        </button>

        <article>
          <section className="carrucel-contenido" key={currentIndex}>
            {data[currentIndex]?.titulo && (
              <>
                <h3 key={`title-${currentIndex}`}>
                  {data[currentIndex].titulo}
                </h3>
                <p key={`desc-${currentIndex}`}>
                  {data[currentIndex].Descripcion}
                </p>
              </>
            )}
            <button onClick={() => leerArticulo(data[currentIndex].id_post)}>
              leer más <FontAwesomeIcon icon="fa-solid fa-caret-right" />
            </button>
          </section>
          <img
            className="imgCarrucel"
            src={data[currentIndex]?.multimedia}
            alt={`imgCarrusel${currentIndex + 1}`}
          />
        </article>

        <button onClick={goToNextSlide}>
          <FontAwesomeIcon icon="fa-solid fa-caret-right" />
        </button>
      </div>
    </article>
  );
};

export default Carrosucel;
