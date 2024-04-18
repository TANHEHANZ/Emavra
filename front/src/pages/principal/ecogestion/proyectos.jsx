import React, { useState } from "react";
import Renderdescription from "../../../components/renderdescription";
import Carrosucel from "../../../components/carrosucel";
import { dataCarroucel } from "../../../data/dataprueba";

const Proyectos = () => {
  const [pasoParam, setPasoParam] = useState("");
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
        <img
          src="https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/426274422_742307761368935_1126866670417351482_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ogvq_xw1nUYAb7RTdX9&_nc_ht=scontent.fcbb2-2.fna&cb_e2o_trans=q&oh=00_AfArnWeQyxjXteoW4oy98-I9QXs0kJdB-zzNmDP_BFxpNA&oe=662330CB"
          alt=""
        />
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
