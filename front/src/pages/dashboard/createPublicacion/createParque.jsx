import React, { useEffect, useState } from "react";
import FormularioDocumentos from "../../../components/form";
import TableDash from "../../../components/tableDashborad";
import apiService from "../../../services/endpint";
import { campos, thead } from "../../../data/dataprueba";

const CreateParques = () => {
  const [llenarForm, setLlenarForm] = useState(false);
  const [parquedata, setParqueData] = useState([]);
  const [formDataToEdit, setFormDataToEdit] = useState(null);

  const [tbody, setTbody] = useState([]);

  const fetchedParque = async () => {
    const parque = await apiService.fetchData("GET", "api/parques");
    setParqueData(parque.data);
  };

  useEffect(() => {
    fetchedParque();
  }, []);

  const handleEdit = (row) => {
    setFormDataToEdit(row);
    setLlenarForm(!llenarForm);
  };
  useEffect(() => {
    if (parquedata.length > 0) {
      setTbody(parquedata);
    }
  }, [parquedata]);

  const handleFormSubmit = async () => {
    await fetchedParque();
    setLlenarForm(false);
  };

  return (
    <div>
      <h2>Parques</h2>
      <section className="containerForm">
        <button onClick={() => setLlenarForm(!llenarForm)}>
          {llenarForm ? "Volver" : "Nuevo Parque"}
        </button>
        {llenarForm ? (
          <FormularioDocumentos
            campos={campos}
            title={formDataToEdit ? "Editar registro" : "Crear nuevo registro"}
            parametro={
              formDataToEdit
                ? "api/post/" + formDataToEdit.postId
                : "api/post?Parques=true"
            }
            formDataToEdit={formDataToEdit ? formDataToEdit : ""}
            onSuccess={handleFormSubmit}
          />
        ) : (
          ""
        )}
        <section className="TableSection" style={{ width: "75vw" }}>
          <TableDash
            tbody={tbody}
            thead={thead}
            onEdit={handleEdit}
            route={"api/parques/"}
            onSuccess={handleFormSubmit}

          />
        </section>
      </section>
    </div>
  );
};

export default CreateParques;
