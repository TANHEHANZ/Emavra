import React, { useEffect, useState } from "react";
import apiService from "../../services/endpint";
import "../../styles/style-noticias.css";
import PostDetalle from "./postDetalle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Noticias = () => {
  const [noti, setNoti] = useState([]);
  const [notiUnique, setNotiUnique] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fechedNoticias = async () => {
    try {
      const noticias = await apiService.fetchData("GET", "api/noticias");
      if (noticias.data && noticias.data.length > 0) {
        setNoti(noticias.data);
        setNotiUnique(noticias.data[0]);
      } else {
        setError("No se encontraron noticias.");
      }
    } catch (err) {
      setError("Error al cargar las noticias.");
      console.error("Error fetching news:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fechedNoticias();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  const leerArticulo = (id) => {
    navigate  (`/detalle/noticias/${id}`);
  };

  return (
    <div>
      {notiUnique && <PostDetalle data={notiUnique} />}
      <div className="content-noticias">
        {noti &&
          noti.map((item, i) => (
            <div key={i}>
              {item.postRelacion.multimedia &&
                item.postRelacion.multimedia.map(
                  (img, j) => j === 0 && <img key={j} src={img} alt="" />
                )}
              <div>
                <section className="datosNoticias">
                  <p className="fecha">
                    <FontAwesomeIcon icon="fa-solid fa-calendar" />
                    <strong>{formatDate(item.postRelacion.fecha)}</strong>
                  </p>
                  <p className="autor">
                    <FontAwesomeIcon icon="fa-solid fa-at" />
                    <strong>{item.postRelacion.autor}</strong>
                  </p>
                  <p className="ubicacion">
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                    <strong> {item.postRelacion.ubicacion}</strong>
                  </p>
                </section>
                <h3>{item.postRelacion.titulo}</h3>
                <p>{item.postRelacion.Descripcion}</p>
              </div>
              <button onClick={() => leerArticulo(item.postId)}>
              leer más <FontAwesomeIcon icon="fa-solid fa-caret-right" />
            </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Noticias;
