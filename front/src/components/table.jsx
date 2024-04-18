import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Tablebody = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{item.Nombre}</td>
          <td>{item.archivo}</td>
          <td>{item.Fecha}</td>
          <td>
            <button><FontAwesomeIcon icon="fa-solid fa-file-pdf" /></button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Tablebody;
