import React, { useEffect, useState } from "react";
import FormularioDocumentos from "../../../components/form";
import TableDash from "../../../components/tableDashborad";
import apiService from "../../../services/endpint";
import { campos, thead } from "../../../data/dataprueba";

const CreateNoticia = () => {
  const [llenarForm, setLlenarForm] = useState(false);
  const [noticiasData, setNoticiasData] = useState([]);
  const [formDataToEdit, setFormDataToEdit] = useState(null);

  const [tbody, setTbody] = useState([]);

  const fetchedNoticias = async () => {
    const noticia = await apiService.fetchData("GET", "api/noticias");
    setNoticiasData(noticia);
  };

  useEffect(() => {
    fetchedNoticias();
  }, []);

  const handleEdit = (row) => {
    setFormDataToEdit(row);
    setLlenarForm(!llenarForm);
  };

  
  useEffect(() => {
    if (noticiasData.length > 0) {
      setTbody(noticiasData);
    }
  }, [noticiasData]);

  const handleFormSubmit = async () => {
    await fetchedNoticias();
    setLlenarForm(false);
  };

  return (
    <div>
      <h2>Noticias</h2>
      <section className="containerForm">
        <button onClick={() => setLlenarForm(!llenarForm)}>
          {llenarForm ? "Volver" : "Nueva noticia"}
        </button>
        {llenarForm ? (
          <FormularioDocumentos
            campos={campos}
            title={formDataToEdit ? "Editar noticia" : "Crear nueva noticia"}
            parametro={
              formDataToEdit
                ? "api/post/" + formDataToEdit.postId
                : "api/post?Noticias=true"
            }
            formDataToEdit={formDataToEdit ? formDataToEdit : ""}
            onSuccess={handleFormSubmit}
          />
        ) : (
          ""
        )}
        <section className="table" style={{ width: "75vw" }}>
          <TableDash
            tbody={tbody}
            thead={thead}
            onEdit={handleEdit}
            route={"api/noticias/"}
            onSuccess={handleFormSubmit}

          />
        </section>
      </section>
    </div>
  );
};

export default CreateNoticia;
