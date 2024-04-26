import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import apiService from "../services/endpint";

const TableDash = ({ tbody, thead, onEdit, route, onSuccess }) => {
  const handleDelete = async (row) => {
    let idTable;

    if (row.id_proyectos) {
      idTable = row.id_proyectos;
    } else if (row.id_noticias) {
      idTable = row.id_noticias;
    } else {
      idTable = row.id_mantenimiento;
    }

    const deleteData = await apiService.fetchData(
      "DELETE",
      route + idTable,
      undefined,
      undefined
    );
    if (deleteData.ok) {
      onSuccess();
    }
    console.log(deleteData);
  };

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
            <td>{rowIndex + 1}</td>
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
              <button onClick={() => handleDelete(row)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableDash;
