import React, { useState } from "react";
import apiService from "../services/endpint";
import useContextImg from "./context/context-imgPost";

const Formulario = ({ campos, title, parametro }) => {
  const [formData, setFormData] = useState({});
  const { img } = useContextImg();

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fecha = formData.fecha
      ? new Date(formData.fecha).toISOString()
      : null;
    console.log(formData);

    const postForm = apiService.fetchData(
      "POST",
      parametro,
      { ...formData, multimedia: img, userId: 1, fecha },
      undefined
    );

    console.log(postForm);
  };

  return (
    <form onSubmit={handleSubmit} className="formularioText">
      <h2>{title ? title : "Formulario"}</h2>
      {campos.map((campo, index) => (
        <div key={index}>
          <label htmlFor={campo.nombre}>{campo.label}</label>
          {campo.tipo === "textarea" ? (
            <textarea
              id={campo.nombre}
              name={campo.nombre}
              value={formData[campo.nombre] || ""}
              onChange={handleChange}
              rows="8"
            />
          ) : campo.tipo === "checkbox" ? (
            <input
              type="checkbox"
              id={campo.nombre}
              name={campo.nombre}
              checked={formData[campo.nombre] || false}
              onChange={handleChange}
            />
          ) : (
            <input
              type={campo.tipo}
              id={campo.nombre}
              name={campo.nombre}
              value={formData[campo.nombre] || ""}
              onChange={handleChange}
            />
          )}
        </div>
      ))}
      <button type="submit">{title}</button>
    </form>
  );
};

export default Formulario;
