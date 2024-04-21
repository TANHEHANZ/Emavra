import React from "react";
import FormularioDocumentos from "../../../components/form";
import FormularioImagenes from "../../../components/formfile";

const CreateNoticia = () => {
  const campos = [
    { nombre: "titulo", label: "Titulo", tipo: "text" },
    { nombre: "Descripcion", label: "Descripcion", tipo: "textarea" },
    { nombre: "contenido", label: "contenido", tipo: "textarea" },
    { nombre: "destacar", label: "Destacar", tipo: "text" },
    { nombre: "fecha", label: "fecha", tipo: "date" },
    { nombre: "ubicacion", label: "ubicacion", tipo: "text" },
  ];

  return (
    <div>
      <section className="containerForm">
        <FormularioDocumentos campos={campos} title={"Crear nueva noticia"} />
        <FormularioImagenes />
      </section>
    </div>
  );
};

export default CreateNoticia;
