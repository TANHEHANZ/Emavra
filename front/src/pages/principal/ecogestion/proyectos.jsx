import React, { useEffect, useState } from "react";
import Renderdescription from "../../../components/renderdescription";
import Carrosucel from "../../../components/carrosucel";
import img from "../../../assets/7.jpg";
import apiService from "../../../services/endpint";
const Proyectos = () => {
  const [pasoParam, setPasoParam] = useState("");
  const [proyectData, setProyectData] = useState([]);
  const [proyectDataAll, setProyectDataAll] = useState([]);
  const getAllProyect = async () => {
    const [destacados, proyectAll] = await Promise.all([
      apiService.fetchData("GET", "api/destacar/proyectos"),
      apiService.fetchData("GET", "api/proyectos"),
    ]);

    setProyectData(destacados.data);
    setProyectDataAll(proyectAll.data);
  };
  useEffect(() => {
    getAllProyect();
  }, []);
  return (
    <section className="proyectosCuerpo">
      <div className="Head-Ecogestion">
        <section>
          <h1>Proyectos con emavra </h1>
          <p>
            ¡Bienvenido a Emavra, tu aliado confiable para el cuidado de
            jardineras y plantas en toda Cochabamba! Somos una empresa dedicada
            a embellecer y mantener los espacios verdes de nuestra querida
            ciudad, brindando servicios expertos de jardinería que garantizan la
            salud y la belleza de tus plantas en cada rincón.
          </p>
        </section>
        <img src={img} alt="img-Proyecto" />
      </div>
      <Carrosucel title={"Proyectos"} data={proyectData} />

      <section className="todoList">
        <div className="sliderimg">
          {proyectDataAll.map(
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
        <Renderdescription renderData={pasoParam} titulo="proyectos" />
      </section>
    </section>
  );
};

export default Proyectos;
