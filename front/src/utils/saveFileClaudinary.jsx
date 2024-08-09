import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { uploadFileToCloudinary } from "../services/claudinary";
import apiService from "../services/endpint";

const HandleSaveFile = ({ editDatos, onFormSubmit ,descripcion,urlData }) => {
  const [file, setFile] = useState(null);
  const [dataSave, setDataSave] = useState({
    Nombre: "",
    fecha: "",
    Descripcion: "",
    tipo: "",
  });

  useEffect(() => {
    if (editDatos) {
      setDataSave({
        Nombre: editDatos.Nombre || "",
        fecha: editDatos.fecha
          ? new Date(editDatos.fecha).toISOString().split("T")[0]
          : "",
        Multimedia: editDatos.Multimedia || [],
        Descripcion: editDatos.Descripcion || "",
        tipo: editDatos.tipo || "",
      });
    }
  }, [editDatos]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDataSave((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const fileExtension = selectedFile.name.split(".").pop();
    setFile(selectedFile);
    setDataSave((prevData) => ({
      ...prevData,
      tipo: fileExtension,
    }));
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (!file && !editDatos) {
      toast.error("No se ha seleccionado ningún archivo.");
      return;
    }

    try {
      let fileUrl = "";
      if (file) {
        fileUrl = await uploadFileToCloudinary(file);
        toast.success("Archivo subido exitosamente: " + fileUrl);
      }

      const formattedFecha = dataSave.fecha
        ? new Date(dataSave.fecha).toISOString()
        : "";

      const response = await apiService.fetchData(
        "POST",
        urlData,
        {
          ...dataSave,
          fecha: formattedFecha,
          multimedia: file ? [fileUrl] : dataSave.Multimedia,
        }
      );

      if (response.status === 200) {
        toast.success("Datos enviados exitosamente.");
        onFormSubmit();
      } else {
        toast.error("Error al enviar los datos: " + response.data.message);
      }
    } catch (error) {
      toast.error("Error: " + error.message);
      console.error("Error uploading file:", error);
    }
  };

  return (
    <form onSubmit={handleUpload} className="formularioText">
      <div>
        <label htmlFor="name">Nombre Archivo</label>
        <input
          type="text"
          name="Nombre"
          value={dataSave.Nombre}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="date">Fecha</label>
        <input
          type="date"
          name="fecha"
          value={dataSave.fecha}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label
          htmlFor="real-file"
          style={{
            width: "200px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            padding: ".35em",
          }}
        >
          {file ? file.name : "nombre del archivo"}{" "}
        </label>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label
            htmlFor="real-file"
            className="custom-file-upload"
            style={{ margin: 0, width: "100%", padding: ".7em" }}
          >
            <input
              type="file"
              id="real-file"
              hidden
              onChange={handleFileChange}
            />
            Seleccionar archivo
          </label>
        </div>
      </div>
      {descripcion ? (
        <div>
          <label htmlFor="descripcion">Descripción</label>
          <input
            type="text"
            name="Descripcion"
            value={dataSave.Descripcion}
            onChange={handleInputChange}
          />
        </div>
      ) : (
        ""
      )}
      <button type="submit">{editDatos ? "Editar" : "Guardar"}</button>
    </form>
  );
};

export default HandleSaveFile;
