import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/style-contactos.css";
import contact from "../.././../assets/contact.png";

const Contactos = () => {
  return (
    <div className="headContactos">
      <img src={contact} alt="Img contacto" />
      <section className="contactos">
        <div>
          <h1>Contáctanos</h1>

          <div className="telefonos-contactos">
            <h2>Teléfonos de contacto</h2>
            <a href="tel:+44448430">
              <FontAwesomeIcon icon={faPhoneVolume} />
              Teléfono Fijo: 4 4448430
            </a>
            <a
              href="https://wa.me/59169254248"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              Celular (WhatsApp): 69254248
            </a>
          </div>
          <div className="redes-sociales">
            <h2>Redes Sociales</h2>
            <a
              href="https://www.facebook.com/EmavraCbba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
              EMAVRA- Somos ciudad jardín
            </a>
            <a
              href="https://www.instagram.com/emavracbba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
              @emavracbba
            </a>
            <a
              href="https://www.tiktok.com/@emavracbba?_t=8o8PHa77gKE&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} />
              @emavracbba
            </a>
          </div>
          <div className="correo-institucional">
            <h2>Correo Institucional</h2>
            <a
              href="mailto:Cbba.emavra01@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cbba.emavra01@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactos;
