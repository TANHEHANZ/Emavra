import React from "react";

import "../../styles/style-emavraTransparente.css";
import { emavraTransparenteData } from "../../data/dataprueba";
import Tablebody from "../../components/table";

const EmavraTransparente = () => {
  return (
    <section>
      <div className="headTanparente">
        <div className="informacionTransparente">
          <h1>Emavra Transparente</h1>
          <button>Terminos y condiciones</button>
          <p>
            ¡Bienvenido a Emavra, tu aliado confiable para el cuidado de
            jardineras y plantas en toda Cochabamba! Somos una empresa dedicada
            a embellecer y mantener los espacios verdes de nuestra querida
            ciudad, brindando servicios expertos de jardinería que garantizan la
            salud y la belleza de tus plantas en cada rincón.
          </p>
        </div>
        <div className="imgTransparente">
          <img
            src="https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/426274422_742307761368935_1126866670417351482_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ogvq_xw1nUYAb7RTdX9&_nc_ht=scontent.fcbb2-2.fna&cb_e2o_trans=q&oh=00_AfArnWeQyxjXteoW4oy98-I9QXs0kJdB-zzNmDP_BFxpNA&oe=662330CB"
            alt=""
          />
        </div>
      </div>

      <section className="table">
        <div>
          <label htmlFor="buscar"> buscar por nombre</label>
          <input type="text" placeholder="buscar por nombre" />
        </div>
        <table>
          <thead>
            <tr>
              <th>N#</th>
              <th>Nombre</th>
              <th>Tipo de archivo</th>
              <th>Fecha</th>
              <th>Descargar</th>
            </tr>
          </thead>
          <tbody>
            <Tablebody data={emavraTransparenteData} />
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default EmavraTransparente;
