import React, { useEffect, useState } from "react";
import "../../../styles/style-emavraTransparente.css";
import imgPortada from "../../../assets/ofinicas.jpeg";
import apiService from "../../../services/endpint";
import Head from "../../../components/ui/head";
import Tablebody from "../../../components/table";

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
      <Head>
        <div>
          <h1>
            Emavra <strong>Transparente</strong>{" "}
          </h1>
          <p>
            ¡Bienvenido a Emavra, tu aliado confiable para el cuidado de
            jardineras y plantas en toda Cochabamba! Somos una empresa dedicada
            a embellecer y mantener los espacios verdes de nuestra querida
            ciudad, brindando servicios expertos de jardinería que garantizan la
            salud y la belleza de tus plantas en cada rincón.
          </p>
        </div>
        <img src={imgPortada} alt="img-Proyecto" />
      </Head>

      <section className="TableSection">
        <h2>Documentos de emavra</h2>

        <table>
          <thead>
            <tr>
              <th>N#</th>
              <th>Nombre</th>
              <th>Descripcion</th>
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
