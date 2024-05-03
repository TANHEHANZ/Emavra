import React, { useEffect, useState } from "react";
import "../../styles/style-home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carrosucel from "../../components/carrosucel";
import { dataCarroucel, dataInicio } from "../../data/dataprueba";
import apiService from "../../services/endpint";
const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [destacado, setDestacado] = useState([]);
  const [noticias, setNoticias] = useState([]);
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === dataInicio.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [dataInicio.length]);

  const data = async () => {
    try {
      const [destacado, noticias, proyectos] = await Promise.all([
        apiService.fetchData("GET", "api/post/destacado"),
        apiService.fetchData("GET", "api/destacar/noticias"),
        apiService.fetchData("GET", "api/destacar/proyectos"),
      ]);

      setDestacado(destacado);
      setNoticias(noticias);
      setProyectos(proyectos);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    data();
  }, []);

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
          {destacado &&
            destacado.map((item, i) => (
              <img
                key={i}
                src={item}
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

      <Carrosucel title={"Noticias"} data={noticias} />
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
          {proyectos &&
            proyectos.map((item, i) => (
              <img src={item.multimedia} alt="img" key={i} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
