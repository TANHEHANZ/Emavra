import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import imgPortada from "../../../assets/parque1.jpg";

const Mantenimiento = () => {
  return (
    <section style={{ width: "100%" }}>
      <div className="Head-Ecogestion">
        <section>
          <h1>Mantenimiento </h1>
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
    </section>
  );
};

export default Mantenimiento;
