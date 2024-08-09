import React, { useEffect, useState } from "react";
import apiService from "../../../services/endpint";
import "../../../styles/styleReglamento.css";
import { formatDate } from "../../../utils/formatDate";

const FormularioYreglamento = () => {
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await apiService.fetchData("GET", "api/reglamento");
      setGetData(response.data);
    } catch (err) {
      setError("Error fetching data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <div className="HeadReglamento">
        <div>
          <h1>
            Formularios y <strong>Reglamentos</strong>
          </h1>
          <p>Los siguientes Documentos son precentados por emavra </p>
        </div>
        <section>
          {getData.length > 0 ? (
            getData.map((item, i) => (
              <div key={i} className="itemReglamento">
                <strong>{item.Nombre}</strong>
                <p>{formatDate(item.fecha)}</p>
                <button>
                  <p>Descargar {item.tipo}</p>
                </button>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </section>
      </div>

      {/* Sección comentada para futuras implementaciones */}
      {/* 
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
            <Tablebody data={getData} />
          </tbody>
        </table>
      </section>
      */}
    </section>
  );
};

export default FormularioYreglamento;
