import React, { useEffect, useState } from "react";
import FormularioDocumentos from "../../../components/form";
import Tablebody from "../../../components/table";
import TableDash from "../../../components/tableDashborad";
import apiService from "../../../services/endpint";
import { thead } from "../../../data/dataprueba";

const CreateNoticia = () => {
  const [llenarForm, setLlenarForm] = useState(false);
  const [noticiasData, setNoticiasData] = useState([]);
  const campos = [
    { nombre: "titulo", label: "Titulo", tipo: "text" },
    { nombre: "fecha", label: "fecha", tipo: "date" },
    { nombre: "ubicacion", label: "ubicacion", tipo: "text" },
    { nombre: "Descripcion", label: "Descripcion", tipo: "textarea" },
    { nombre: "contenido", label: "contenido", tipo: "textarea" },
    { nombre: "autor", label: "Autor", tipo: "text" },
    { nombre: "destacar", label: "Destacar", tipo: "checkbox" },
    { nombre: "estado", label: "visible", tipo: "checkbox" },
  ];

  const [tbody, setTbody] = useState([]);
 

  const fetchedNoticias = async () => {
    const noticia = await apiService.fetchData("GET", "api/noticias");
    setNoticiasData(noticia);
  };
  useEffect(() => {
    fetchedNoticias();
  }, []);

  const handleEdit = (row) => {
    // console.log("Editar", row);
    // const updateData = apiService.fetchData(
    //   "PUT",
    //   "api/post/" + row.id,
    //   { row },
    //   undefined
    // );
    // console.log(updateData);
  };

  const handleDelete = (row) => {
    // Lógica para eliminar el elemento
    console.log("Eliminar", row);
    // <FormularioDocumentos
    //   campos={row}
    //   title={"Ediatar "}
    //   parametro={"api/post?Noticias=true"}
    // />;
  };
  useEffect(() => {
    if (noticiasData.length > 0) {
      setTbody(noticiasData);
    }
  }, [noticiasData]);



  return (
    <div>
      <section className="containerForm">
        <h2>Noticias</h2>
        <button onClick={() => setLlenarForm(!llenarForm)}>
          {llenarForm ? "Volver" : "Nueva noticia"}
        </button>
        {llenarForm ? (
          <FormularioDocumentos
            campos={campos}
            title={"Crear nueva noticia"}
            parametro={"api/post?Noticias=true"}
          />
        ) : (
          ""
        )}
        <section className="table" style={{ width: "80vw" }}>
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
