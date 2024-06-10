import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiService from "../../services/endpint";
import "../../styles/detalleImg.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDate } from "../../utils/formatDate";

const PostDetalle = () => {
  const { id, type } = useParams();

  const [dataPost, setDataPost] = useState(null);
  const [verImg, setVerImg] = useState("");
  const [imgSeleccionado, setImgSeleccionado] = useState(0);

  const fetchPostId = async () => {
    try {
      const url = `api/${type}/${id}`;
      const postId = await apiService.fetchData("GET", url);
      setDataPost(postId.data);
      if (postId.data && postId.data.length > 0) {
        const firstPost = postId.data[0];
        if (
          firstPost.postRelacion.multimedia &&
          firstPost.postRelacion.multimedia.length > 0
        ) {
          setVerImg(firstPost.postRelacion.multimedia[0]);
        }
      }
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  const handleImgClick = (imageUrl, index) => {
    setVerImg(imageUrl);
    setImgSeleccionado(index);
  };

  useEffect(() => {
    fetchPostId();
  }, [id, type]);

  if (!dataPost) {
    return <div>Loading...</div>;
  }
  const handleVolver = () => {
    window.history.back();
  };

  return (
    <div className="PostDetalle">
      <section>
        {dataPost &&
          dataPost.map((info, index) => (
            <div key={index}>
              <button onClick={() => handleVolver()} className="volver">
                <FontAwesomeIcon icon="fa-solid fa-circle-arrow-left" /> Volver
              </button>
              <section className="contenido">
                <div className="imgPrincipal">
                  <img src={verImg} alt="img" />
                  <section className="detalleImg">
                    {Array.isArray(info.postRelacion.multimedia) &&
                      info.postRelacion.multimedia.map((mul, i) => (
                        <img
                          key={i}
                          src={mul}
                          alt="img"
                          className={i === imgSeleccionado ? "elegido" : ""}
                          onClick={() => handleImgClick(mul, i)}
                        />
                      ))}
                  </section>
                </div>
                <div className="datos">
                  <h1>{info.postRelacion.titulo}</h1>
                  <p>{info.postRelacion.contenido}</p>
                  <aside className="informacion">
                    <p>
                      <FontAwesomeIcon icon="fa-solid fa-at" />
                      {info.postRelacion.autor}
                    </p>
                    <p>
                      <FontAwesomeIcon icon="fa-solid fa-calendar" />
                      {formatDate(info.postRelacion.fecha)}
                    </p>
                    <p>
                      <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                      {info.postRelacion.ubicacion}
                    </p>
                  </aside>
                </div>
              </section>
            </div>
          ))}
      </section>
    </div>
  );
};

export default PostDetalle;
