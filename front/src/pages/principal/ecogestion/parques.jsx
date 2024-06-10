import React, { useEffect, useState } from "react";
import "../../../styles/style-ecogestion.css";
import Renderdescription from "../../../components/renderdescription";
import apiService from "../../../services/endpint";
import imgPortada from "../../../assets/parque1.jpg";
const Parques = () => {
  const [pasoParam, setPasoParam] = useState("");
  const [parquesAll, setParquesAll] = useState([]);

  const getAllProyect = async () => {
    const parquesAll = await apiService.fetchData("GET", "api/parques");
    console.log(parquesAll);
    setParquesAll(parquesAll.data);
  };
  useEffect(() => {
    getAllProyect();
  }, []);

  return (
    <section style={{ width: "100%" }}>
      <div className="Head-Ecogestion">
        <section>
          <h1>Parques </h1>
          <p>
            ¡Bienvenido a Emavra, tu aliado confiable para el cuidado de
            jardineras y plantas en toda Cochabamba! Somos una empresa dedicada
            a embellecer y mantener los espacios verdes de nuestra querida
            ciudad, brindando servicios expertos de jardinería que garantizan la
            salud y la belleza de tus plantas en cada rincón.
          </p>
        </section>
        <img src={imgPortada} alt="" />
      </div>

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
        <Renderdescription renderData={pasoParam} titulo="parques" />
      </section>
    </section>
  );
};

export default Parques;
