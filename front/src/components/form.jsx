import React, { useState } from "react";

const Formulario = ({ campos, title }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="formularioText">
      <p>{title ? title : "Formulario"}</p>
      {campos.map((campo, index) => (
        <div key={index}>
          <label htmlFor={campo.nombre}>{campo.label}</label>
          {campo.tipo === "textarea" ? (
            <textarea
              id={campo.nombre}
              name={campo.nombre}
              value={formData[campo.nombre] || ""}
              onChange={handleChange}
              rows="4" cols="40"
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
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
