import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import React from "react";
import "../styles/style-footer.css";
import logo from "../assets/logo.png";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
const FooterHome = () => {
  return (
    <footer className="footer">
      <section className="contenedor">
        <img src={logo} alt="Logo" />
        <section className="enlaces">
          <strong>Enlaces rapidos</strong>
          <p>Proyectos</p>
          <p>Noticias</p>
          <p>Informacion</p>
          <p>Parques</p>
        </section>
        <section className="contacto">
          <strong>Contactate</strong>
          <div className="inputContact">
            <input type="text" placeholder="+591 75215686" />
            <button>
              <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
            </button>
          </div>
        </section>
      </section>
      <div className="derechos">
        <section className="redes">
          <button>
            <FontAwesomeIcon icon={faTiktok} />
          </button>
          <button>
            <FontAwesomeIcon icon={faWhatsapp} />
          </button>
          <button>
            <FontAwesomeIcon icon={faPhoneVolume} />
          </button>
          <button>
            <FontAwesomeIcon icon={faFacebook} />
          </button>
        </section>
        <p>© 2024 Emavra . Derechos reservados.</p>
      </div>
    </footer>
  );
};

export default FooterHome;
