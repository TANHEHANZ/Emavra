import React, { useState } from "react";
import FormularioDocumentos from "../../../components/form";
import Tablebody from "../../../components/table";
import TableDash from "../../../components/tableDashborad";

const CreateNoticia = () => {
  const [llenarForm, setLlenarForm] = useState(false);

  const campos = [
    { nombre: "titulo", label: "Titulo", tipo: "text" },
    { nombre: "fecha", label: "fecha", tipo: "date" },
    { nombre: "ubicacion", label: "ubicacion", tipo: "text" },
    { nombre: "Descripcion", label: "Descripcion", tipo: "textarea" },
    { nombre: "contenido", label: "contenido", tipo: "textarea" },
    { nombre: "destacar", label: "Destacar", tipo: "checkbox" },
  ];

  const thead = [
    "Titulo",
    "Fecha",
    "Ubicacion",
    "Descripcion",
    "Contenido",
    "Destacado",
  ];
  const tbody = [
    {
      titulo: "Noticia 1",
      fecha: "2024-04-23",
      ubicacion: "Ubicacion 1",
      Descripcion: "Descripcion 1",
      contenido: "Contenido 1",
      destacar: true,
    },
    {
      titulo: "Noticia 2",
      fecha: "2024-04-24",
      ubicacion: "Ubicacion 2",
      Descripcion: "Descripcion 2",
      contenido: "Contenido 2",
      destacar: false,
    },
    {
      titulo: "Noticia 3",
      fecha: "2024-04-25",
      ubicacion: "Ubicacion 3",
      Descripcion: "Descripcion 3",
      contenido: "Contenido 3",
      destacar: true,
    },
  ];

  const handleEdit = (row) => {
    // Lógica para editar el elemento
    console.log("Editar", row);
  };

  const handleDelete = (row) => {
    // Lógica para eliminar el elemento
    console.log("Eliminar", row);
  };
  return (
    <div>
      <section className="containerForm">
        <h2>Noticias</h2>
        <button onClick={() => setLlenarForm(!llenarForm)}>
          {llenarForm ? "Volver" : "Nueva noticia"}
        </button>
        {llenarForm ? (
          <FormularioDocumentos campos={campos} title={"Crear nueva noticia"} />
        ) : (
          ""
        )}
        <section className="table">
          <TableDash
            tbody={tbody}
            thead={thead}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </section>
      </section>
    </div>
  );
};

export default CreateNoticia;
