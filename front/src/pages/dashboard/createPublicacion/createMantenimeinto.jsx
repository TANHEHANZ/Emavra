import React, { useEffect, useState } from 'react'
import apiService from '../../../services/endpint';
import TableDash from '../../../components/tableDashborad';
import { campos, thead } from '../../../data/dataprueba';
import FormularioDocumentos from "../../../components/form";

const CreateMantenimeinto = () => {


  const [llenarForm, setLlenarForm] = useState(false);
  const [proyectosData, setProyectos] = useState([]);
  const [formDataToEdit, setFormDataToEdit] = useState(null);

  const [tbody, setTbody] = useState([]);

  const fetchedproyectos = async () => {
    const proyecto = await apiService.fetchData("GET", "api/mantenimiento");
    setProyectos(proyecto);
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
    <h2>Manteniemiento</h2>
    <section className="containerForm">
      <button onClick={() => setLlenarForm(!llenarForm)}>
        {llenarForm ? "Volver" : "Nuevo Registro de mantenimeinto"}
      </button>
      {llenarForm ? (
        <FormularioDocumentos
          campos={campos}
          title={formDataToEdit ? "Editar registro" : "Crear nuevo registro"}
          parametro={
            formDataToEdit
              ? "api/post/" + formDataToEdit.postId
              : "api/post?Mantenimeinto=true"
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
          route={"api/mantenimiento/"}
          onSuccess={handleFormSubmit}
        />
      </section>
    </section>
  </div>
  )
}

export default CreateMantenimeinto
