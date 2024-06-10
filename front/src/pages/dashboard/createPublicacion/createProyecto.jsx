import React, { useEffect, useState } from "react";
import apiService from "../../../services/endpint";
import TableDash from "../../../components/tableDashborad";
import { campos, thead } from "../../../data/dataprueba";
import FormularioDocumentos from "../../../components/form";

const CreateProyecto = () => {
  const [llenarForm, setLlenarForm] = useState(false);
  const [proyectosData, setProyectos] = useState([]);
  const [formDataToEdit, setFormDataToEdit] = useState(null);
  const [tbody, setTbody] = useState([]);
  
  const fetchedproyectos = async () => {
    const proyecto = await apiService.fetchData("GET", "api/proyectos");
    setProyectos(proyecto.data);
  };

  useEffect(() => {
    fetchedproyectos();
  }, []);

  const handleEdit = (row) => {
    setFormDataToEdit(row);
    setLlenarForm(!llenarForm);
  };
  useEffect(() => {
    if (proyectosData.length > 0) {
      setTbody(proyectosData);
    }
  }, [proyectosData]);

  const handleFormSubmit = async () => {
    await fetchedproyectos();
    setLlenarForm(false);
  };

  return (
    <div>
      <h2>Proyectos</h2>
      <section className="containerForm">
        <button onClick={() => setLlenarForm(!llenarForm)}>
          {llenarForm ? "Volver" : "Nueva proyecto"}
        </button>
        {llenarForm ? (
          <FormularioDocumentos
            campos={campos}
            title={formDataToEdit ? "Editar Proyecto" : "Crear nuevo proyecto"}
            parametro={
              formDataToEdit
                ? "api/post/" + formDataToEdit.postId
                : "api/post?Proyectos=true"
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
            route={"api/proyect/"}
            onSuccess={handleFormSubmit}
          />
        </section>
      </section>
    </div>
  );
};

export default CreateProyecto;
