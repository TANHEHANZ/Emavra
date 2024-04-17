import {
  faFacebook,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../../styles/style-contactos.css"
const Contactos = () => {
  return (
    <div className="head-contacos">
      <h1>Contactanos </h1>
      <section className="contactos ">
        <div className="telefonos-contactos">
          <h2>Telefonos de contacto</h2>
          <a href="Facebook">
            <FontAwesomeIcon icon={faPhoneVolume} />
            Telefono Fijo : 75216598
          </a>
          <a href="Facebook">
            <FontAwesomeIcon icon={faPhoneVolume} />
            Celular : 75216598
          </a>
        </div>
        <div className="redes-Sociales">
          <h2>Telefonos de contacto</h2>
          <a href="">
            <FontAwesomeIcon icon={faFacebook} />
            @Emavra-Ciudad-Jardin-oficial
          </a>
          <a href="tiktok">
            <FontAwesomeIcon icon={faTiktok} />
            @Emavra-Ciudad-Jardin-oficial
          </a>

          <a href="">
            <FontAwesomeIcon icon={faWhatsapp} />
            611413156
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contactos;
