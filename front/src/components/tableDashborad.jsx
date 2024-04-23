import React from "react";

const TableDash = ({ tbody, thead, onEdit, onDelete }) => {
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
            {Object.values(row).map((cell, cellIndex) => (
              <td key={cellIndex}>
                {thead[cellIndex] === "Destacado" ? (cell ? "Destacado" : "No destacado") : cell}
              </td>
            ))}
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
