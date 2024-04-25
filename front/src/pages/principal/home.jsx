import React, { useEffect, useState } from "react";
import "../../styles/style-home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carrosucel from "../../components/carrosucel";
import { dataCarroucel, dataInicio } from "../../data/dataprueba";
const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === dataInicio.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [dataInicio.length]);

  return (
    <div>
      <article className="contenido">
        <div className="title">
          <h1>
            Emavra
            <strong>
              Somos <div>Ciudad Jardin</div>
            </strong>
          </h1>
          <p>
             Empresa Municipal de Áreas Verdes y Recreación Alternativa
            "EMAVRA".
          </p>
          <section className="acciones">
            <button>Contactanos</button>
            <button>Proyectos</button>
          </section>
        </div>
        <div className="slider">
          {dataInicio &&
            dataInicio.map((item, i) => (
              <img
                key={i}
                src={item.url}
                alt={`imgCarrusel${i + 1}`}
                className="slider-img"
                style={{
                  width: `${currentImageIndex === i ? 300 : 0}px`,
                  transition: "width 1s ease-in-out",
                }}
              />
            ))}
        </div>
      </article>

      <Carrosucel title={"Noticias"} data={dataCarroucel} />
      <section className="proyectos">
        <div className="datosProyecto">
          <h3>Proyectos</h3>
          <p>
            Durante el mes de octubre se realizaron trabajos de mantenimiento en
            el Cementerio General de Cochabamba.Durante el mes de octubre se
            realizaron trabajos de mantenimiento en el Cementerio General de
            Cochabamba...
          </p>
          <button>
            leer más <FontAwesomeIcon icon="fa-solid fa-caret-right" />
          </button>
        </div>
        <div className="sliderimg">
          {dataInicio.map((item, i) => (
            <img src={item.url} alt="img" key={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
