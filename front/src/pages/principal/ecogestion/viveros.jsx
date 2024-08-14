import React, { useEffect, useState } from "react";
import video from "../../../assets/videos/videoA.mp4";
import Head from "../../../components/ui/head";
import apiService from "../../../services/endpint";
import Renderdescription from "../../../components/renderdescription";

const Viveros = () => {
  const [parquesAll, setParquesAll] = useState([]);
  const [pasoParam, setPasoParam] = useState("");

  const getAllProyect = async () => {
    const parquesAllpromis = await apiService.fetchData(
      "GET",
      "api/viveros"
    );
    setParquesAll(parquesAllpromis.data);
  };

  useEffect(() => {
    getAllProyect();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Head>
        <div>
          <h1>
            <strong>Viveros</strong> de Emavra
          </h1>
        </div>
        <video
          src={video}
          alt="Video de Viveros"
          controls
          autoPlay
          loop
          muted
          style={{ width: "90%", height: "40vw", objectFit: "cover" }}
        >
          Tu navegador no soporta la etiqueta de video.
        </video>
      </Head>

      <section className="todoList">
        <div className="sliderimg">
          {parquesAll.map(
            (item, i) =>
              item.postRelacion &&
              item.postRelacion.multimedia &&
              item.postRelacion.multimedia.length > 0 && (
                <img
                  key={i}
                  src={item.postRelacion.multimedia[0]}
                  alt={item.postRelacion.titulo}
                  onClick={() => setPasoParam(item.postRelacion)}
                />
              )
          )}
        </div>
        <Renderdescription renderData={pasoParam} titulo="viveros" />
      </section>
    </div>
  );
};

export default Viveros;
