import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import imgPortada from "../../../assets/9.jpg";
import Renderdescription from "../../../components/renderdescription";
import apiService from "../../../services/endpint";
import Head from "../../../components/ui/head";

const Mantenimiento = () => {
  const [parquesAll, setParquesAll] = useState([]);
  const [pasoParam, setPasoParam] = useState("");

  const getAllProyect = async () => {
    const parquesAllpromis = await apiService.fetchData(
      "GET",
      "api/mantenimiento"
    );
    setParquesAll(parquesAllpromis.data);
  };

  useEffect(() => {
    getAllProyect();
  }, []);
  return (
    <section style={{ width: "100%" }}>
      <Head>
        <div>
          <h1>
            <strong>Mantenimiento</strong> en toda Cochabamba
          </h1>
          <p>
            ¡Bienvenido a Emavra, tu aliado confiable para el cuidado de
            jardineras y plantas en toda Cochabamba! Somos una empresa dedicada
            a embellecer y mantener los espacios verdes de nuestra querida
            ciudad, brindando servicios expertos de jardinería que garantizan la
            salud y la belleza de tus plantas en cada rincón.
          </p>
        </div>
        <img src={imgPortada} alt="img-Proyecto" />
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
        <Renderdescription renderData={pasoParam} titulo="Mantenimiento" />
      </section>
    </section>
  );
};

export default Mantenimiento;
