import React, { useEffect, useState } from "react";
import "../../styles/style-emavraTransparente.css";
import Tablebody from "../../components/table";
import imgPortada from "../../assets/parque1.jpg";
import apiService from "../../services/endpint";

const EmavraTransparente = () => {
  const [getData, setGetData] = useState([]);
  const fetchdata = async () => {
    const fetchEmabra = await apiService.fetchData(
      "GET",
      "api/emavraTransparente",
      undefined,
      undefined
    );
    setGetData(fetchEmabra);
  };
  useEffect(() => {
    fetchdata();
  }, []);

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
          <img src={imgPortada} alt="" />
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
              <th>Descripcion</th>
              <th>Tipo de archivo</th>
              <th>Fecha</th>
              <th>Descargar</th>
            </tr>
          </thead>
          <tbody>
            <Tablebody data={getData.data} />
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default EmavraTransparente;
