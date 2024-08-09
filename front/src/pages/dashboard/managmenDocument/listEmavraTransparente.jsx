import React, { useEffect, useState } from "react";
import apiService from "../../../services/endpint";
import TableDash from "../../../components/tableDashborad";
import { theadTransparente } from "../../../data/dataprueba";
import HandleSaveFile from "../../../utils/saveFileClaudinary";
import { toast } from "sonner";

const ListEmavra = () => {
  const [llenarForm, setLlenarForm] = useState(false);
  const [proyectosData, setProyectos] = useState([]);
  const [formDataToEdit, setFormDataToEdit] = useState(null);
  const [tbody, setTbody] = useState([]);

  const fetchedproyectos = async () => {
    const proyecto = await apiService.fetchData(
      "GET",
      "api/emavraTransparente"
    );
    console.log(proyecto);
    setProyectos(proyecto.data);
  };

  useEffect(() => {
    fetchedproyectos();
  }, []);

  const handleEdit = (row) => {
    setFormDataToEdit(row);
    setLlenarForm(true);
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

  const handleDelete = async (row) => {
    console.log(row);
    let id = Number(row.id_transparencia);
    const deleteData = await apiService.fetchData(
      "DELETE",
      "api/emavraTransparente" + id,
      undefined,
      undefined
    );
    if (deleteData.ok) {
      fetchedproyectos();
      toast.success("Se elminino exitosamente ");
    }
  };

  return (
    <div>
      <h2>Emavra Transparente</h2>
      <section className="containerForm">
        <button onClick={() => setLlenarForm(!llenarForm)}>
          {llenarForm ? "Volver" : "Nuevo Registro"}
        </button>
        {llenarForm ? (
          <HandleSaveFile
            editDatos={formDataToEdit}
            onFormSubmit={handleFormSubmit}
            descripcion
            urlData="api/emavraTransparente"
          />
        ) : (
          ""
        )}
        <section className="TableSection" style={{ width: "75vw" }}>
          <table>
            <thead>
              <tr>
                {theadTransparente.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {tbody.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{rowIndex + 1}</td>
                  <td>{row.Nombre}</td>
                  <td>{row.Descripcion}</td>
                  <td>{row.tipo}</td>
                  <td>{row.fecha}</td>
                  <td>
                    <button onClick={() => handleEdit(row)}>Editar</button>
                    <button onClick={() => handleDelete(row)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </div>
  );
};

export default ListEmavra;
