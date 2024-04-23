import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TableDash = ({ tbody, thead, onEdit, onDelete }) => {
  console.log(tbody);
  return (
    <table>
      <thead>
        <tr>
          {thead.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {tbody.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>{row.id_noticias}</td>
            <td>{row.postRelacion.titulo}</td>
            <td>{row.postRelacion.fecha}</td>
            <td>{row.postRelacion.ubicacion}</td>
            <td>{row.postRelacion.Descripcion}</td>
            <td>{row.postRelacion.contenido}</td>
            <td
              className={
                row.postRelacion.destacar ? "Destacado" : "Nodestacado"
              }
            >
              <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
            </td>
            <td
              className={row.postRelacion.estado ? "Destacado" : "Nodestacado"}
            >
              <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
            </td>
            <td>
              <button onClick={() => onEdit(row)}>Editar</button>
              <button onClick={() => onDelete(row)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableDash;
