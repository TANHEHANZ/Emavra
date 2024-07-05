import React, { useEffect, useState } from "react";
import "../../styles/style-home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carrosucel from "../../components/carrosucel";
import apiService from "../../services/endpint";
import { useNavigate } from "react-router-dom";
import { dataImg } from "../../data/dataEmpresa";
const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [destacado, setDestacado] = useState([]);
  const [noticias, setNoticias] = useState([]);
  const [proyectos, setProyectos] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === dataImg.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [destacado.length]);

  const data = async () => {
    try {
      const [destacado, noticias, proyectos] = await Promise.all([
        apiService.fetchData("GET", "api/post/destacado"),
        apiService.fetchData("GET", "api/destacar/noticias"),
        apiService.fetchData("GET", "api/destacar/proyectos"),
      ]);

      if (destacado && noticias && proyectos) {
        setDestacado(destacado.data);
        setNoticias(noticias.data);
        setProyectos(proyectos.data);
      } else {
        toast.error("Error en el servidor " + "codigo :" + destacado);
      }
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
            <button onClick={() => navigate("/contactanos")}>
              Contactanos
            </button>
            <button onClick={() => navigate("/Proyectos")}>Proyectos</button>
          </section>
        </div>
        <div className="slider">
          {dataImg &&
            dataImg.slice(0, 4).map((item, i) => (
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
      <section className="circulos"></section>
      <Carrosucel title={"Noticias"} data={noticias} />
      <section className="proyectos">
        <div className="datosProyecto">
          <h3>Proyectos</h3>
          <p>
            Te invitamos a descubrir más sobre los proyectos realizados por
            Emavra donde nos dedicamos a crear y mantener entornos verdes que
            mejoran la calidad de vida de las comunidades. Conoce cómo nuestros
            esfuerzos contribuyen a la conservación del medio ambiente y al
            bienestar social, transformando parques en lugares vibrantes y
            acogedores para todos.
          </p>
          <button onClick={() => navigate("/Proyectos")}>
            leer más <FontAwesomeIcon icon="fa-solid fa-caret-right" />
          </button>
        </div>
        <div className="sliderimg" onClick={() => navigate("/Proyectos")}>
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
