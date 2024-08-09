import React, { useEffect, useState } from "react";
import "../../styles/style-home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carrosucel from "../../components/carrosucel";
import apiService from "../../services/endpint";
import { useNavigate } from "react-router-dom";

import imgArbol from "../../assets/mundo.png";
import ImageSlider from "../../components/ImageSlider";
import SkeletonLoader from "../../components/ui/loader/sketeton";

const Home = () => {
  const [noticias, setNoticias] = useState([]);
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(apiService.isLoading);
  const navigate = useNavigate();

  useEffect(() => {
    const data = async () => {
      try {
        setLoading(true);
        const [noticias, proyectos] = await Promise.all([
          apiService.fetchData("GET", "api/destacar/noticias"),
          apiService.fetchData("GET", "api/destacar/proyectos"),
        ]);

        if (noticias && proyectos) {
          setNoticias(noticias.data);
          setProyectos(proyectos.data);
        } else {
          toast.error("Error en el servidor ");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(apiService.isLoading); 
      }
    };

    data();
  }, []);
  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div style={{ background: "#cbd9e7e3" }}>
      <article className="contenidoHeader">
        <div className="title">
          <h1>
            Emavra
            <strong>
              Somos <div>Ciudad Jardin</div>
            </strong>
          </h1>
          <p>
            Empresa Municipal de Áreas Verdes y Recreación Alternativa "EMAVRA".
          </p>
          <section className="acciones">
            <button onClick={() => navigate("/contactanos")}>
              Contactanos
            </button>
            <button onClick={() => navigate("/Proyectos")}>Proyectos</button>
          </section>
        </div>
        <img src={imgArbol} alt="Img fondo ARBOL" className="imgRojoFundo" />
        <ImageSlider />
      </article>

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
              <img
                key={i}
                src={item.multimedia}
                alt="img"
                onError={() =>
                  setImageErrors((prevErrors) => ({ ...prevErrors, [i]: true }))
                }
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
