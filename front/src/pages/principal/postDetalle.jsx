import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../../services/endpint";
import "../../styles/detalleImg.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDate } from "../../utils/formatDate";

const PostDetalle = ({ data }) => {
  const { id, type } = useParams();
  const [dataPost, setDataPost] = useState(data || null);
  const [verImg, setVerImg] = useState("");
  const [imgSeleccionado, setImgSeleccionado] = useState(0);
console.log(data)
  const fetchPostId = async () => {
    try {
      if (!data) {
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
      } else {
        if (
          data.postRelacion.multimedia &&
          data.postRelacion.multimedia.length > 0
        ) {
          setVerImg(data.postRelacion.multimedia[0]);
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
  }, [id, type, data]);

  if (!dataPost) {
    return <div>Loading...</div>;
  }

  const handleVolver = () => {
    window.history.back();
  };

  const post = dataPost.length > 0 ? dataPost[0] : dataPost;

  return (
    <div className="PostDetalle">
      <section>
        <button onClick={handleVolver} className="volver">
          <FontAwesomeIcon icon="fa-solid fa-circle-arrow-left" /> Volver
        </button>
        <section className="contenido">
          <div className="imgPrincipal">
            <img src={verImg} alt="img" />
            <section className="detalleImg">
              {Array.isArray(post.postRelacion.multimedia) &&
                post.postRelacion.multimedia.map((mul, i) => (
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
            <h1>{post.postRelacion.titulo}</h1>
            <p>{post.postRelacion.contenido}</p>
            <aside className="informacion">
              <p>
                <FontAwesomeIcon icon="fa-solid fa-at" />
                {post.postRelacion.autor}
              </p>
              <p>
                <FontAwesomeIcon icon="fa-solid fa-calendar" />
                {formatDate(post.postRelacion.fecha)}
              </p>
              <p>
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                {post.postRelacion.ubicacion}
              </p>
            </aside>
          </div>
        </section>
      </section>
    </div>
  );
};

export default PostDetalle;
