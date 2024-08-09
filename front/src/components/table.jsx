import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Tablebody = ({ data }) => {
  const handlePreview = (url) => {
    window.open(url, "_blank");
  };
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };
  return (
    <>
      {data &&
        data.map((item, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{item.Nombre}</td>
            <td>{item.Descripcion}</td>
            <td>{formatDate(item.fecha)}</td>
            <td>
              <button onClick={() => handlePreview(item.multimedia)}>
                <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-down" />
                <p>{item.tipo}</p>
              </button>
            </td>
          </tr>
        ))}
    </>
  );
};

export default Tablebody;
