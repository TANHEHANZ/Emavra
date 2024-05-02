import React, { useEffect, useState } from "react";
import Renderdescription from "../../../components/renderdescription";
import Carrosucel from "../../../components/carrosucel";
import { dataCarroucel } from "../../../data/dataprueba";
import img from "../../../assets/7.jpg";
import apiService from "../../../services/endpint";
const Proyectos = () => {
  const [pasoParam, setPasoParam] = useState("");
  const [proyectData, setProyectData] = useState([]);
  const getAllProyect = async () => {
    const dataAll = await apiService.fetchData("GET", "api/proyect");
    setProyectData(dataAll);
  };
  useEffect(() => {
    getAllProyect();
  }, []);
  console.log(proyectData);
  return (
    <section>
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
      <Carrosucel title={"Proyectos destacados"} data={dataCarroucel} />

      <section className="todoList">
        <div className="sliderimg">
          {dataCarroucel.map((item, i) => (
            <img
              src={item.url_recurso}
              alt="img"
              onClick={() => setPasoParam(item)}
            />
          ))}
        </div>

        <Renderdescription renderData={pasoParam} titulo="proyecto" />
      </section>
    </section>
  );
};

export default Proyectos;
