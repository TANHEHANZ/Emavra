import React, { useEffect, useState } from "react";
import "../../styles/style-home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const dataInicio = [
    {
      url: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/426274422_742307761368935_1126866670417351482_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ogvq_xw1nUYAb7RTdX9&_nc_ht=scontent.fcbb2-2.fna&cb_e2o_trans=q&oh=00_AfArnWeQyxjXteoW4oy98-I9QXs0kJdB-zzNmDP_BFxpNA&oe=662330CB",
    },
    {
      url: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/435971549_742307751368936_4622345956034795144_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CqDsSA1kl1EAb4wrlrq&_nc_ht=scontent.fcbb2-2.fna&cb_e2o_trans=q&oh=00_AfAFo_aQCDKp_dQPfTDNg9QKKJQTfEH5zfy43WvSrL8wAg&oe=66230FDB",
    },
    {
      url: "https://scontent.fcbb2-1.fna.fbcdn.net/v/t39.30808-6/435065717_741825914750453_1929606767316372569_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gJl-Wsxtk_IAb7RlQDw&_nc_ht=scontent.fcbb2-1.fna&cb_e2o_trans=q&oh=00_AfDZ2O4IhlHr8U8yqafkL57ofJSbiaP9rFLtgPZVs8mJKw&oe=6623096E",
    },
    {
      url: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/426274422_742307761368935_1126866670417351482_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ogvq_xw1nUYAb7RTdX9&_nc_ht=scontent.fcbb2-2.fna&cb_e2o_trans=q&oh=00_AfArnWeQyxjXteoW4oy98-I9QXs0kJdB-zzNmDP_BFxpNA&oe=662330CB",
    },
  ];
  const dataCarroucel = [
    {
      id: 1,
      url_recurso:
        "https://scontent.fcbb2-1.fna.fbcdn.net/v/t39.30808-6/435065717_741825914750453_1929606767316372569_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gJl-Wsxtk_IAb7RlQDw&_nc_ht=scontent.fcbb2-1.fna&cb_e2o_trans=q&oh=00_AfDZ2O4IhlHr8U8yqafkL57ofJSbiaP9rFLtgPZVs8mJKw&oe=6623096E",
      titulo: "Mantenimiento del Cementerio General de Cochabamba",
      descripcion:
        "Durante el mes de octubre se realizaron trabajos de mantenimiento en el Cementerio General de Cochabamba.Durante el mes de octubre se realizaron trabajos de mantenimiento en el Cementerio General de Cochabamba...",
    },
    // {
    //   id: 2,
    //   url_recurso:
    //     "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/426274422_742307761368935_1126866670417351482_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ogvq_xw1nUYAb7RTdX9&_nc_ht=scontent.fcbb2-2.fna&cb_e2o_trans=q&oh=00_AfArnWeQyxjXteoW4oy98-I9QXs0kJdB-zzNmDP_BFxpNA&oe=662330CB",
    //   titulo: "Mantenimiento del Cementerio General de Cochabamba",
    //   descripcion:
    //     "Durante el mes de octubre se realizaron trabajos de mantenimiento en el Cementerio General de Cochabamba.Durante el mes de octubre se realizaron trabajos de mantenimiento en el Cementerio General de Cochabamba...",
    // },
    // {
    //   id: 3,
    //   url_recurso:
    //     "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/426274422_742307761368935_1126866670417351482_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ogvq_xw1nUYAb7RTdX9&_nc_ht=scontent.fcbb2-2.fna&cb_e2o_trans=q&oh=00_AfArnWeQyxjXteoW4oy98-I9QXs0kJdB-zzNmDP_BFxpNA&oe=662330CB",
    //   titulo: "Mantenimiento del Cementerio General de Cochabamba",
    //   descripcion:
    //     "Durante el mes de octubre se realizaron trabajos de mantenimiento en el Cementerio General de Cochabamba.Durante el mes de octubre se realizaron trabajos de mantenimiento en el Cementerio General de Cochabamba...",
    // },
  ];

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
          {dataInicio.map((item, i) => (
            <React.Fragment key={i}>
              <img key={i} src={item.url} alt={`imgCarrusel${i + 1}`} />
            </React.Fragment>
          ))}
        </div>
      </article>

      <article className="noticias">
        <h2>Noticias</h2>
        <div className="carrucel">
          <button>
            <FontAwesomeIcon icon="fa-solid fa-caret-left" />
          </button>
          {dataCarroucel.map((item, index) => (
            <React.Fragment key={index}>
              <section className="carrucel-contenido">
                <h3>{item.titulo}</h3>
                <p>{item.descripcion}</p>
                <button>
                  leer más <FontAwesomeIcon icon="fa-solid fa-caret-right" />
                </button>
              </section>
              <img src={item.url_recurso} alt={`imgCarrusel${index + 1}`} />
            </React.Fragment>
          ))}
          <button>
            <FontAwesomeIcon icon="fa-solid fa-caret-right" />
          </button>
        </div>
      </article>

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
        <div className="galeriaImg">
          {dataInicio.map((item, i) => (
            <img src={item.url} alt="img" key={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
