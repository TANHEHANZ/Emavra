import React, { useState } from "react";

const FormularioImagenes = () => {
  const [files, setFiles] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);

    // Previsualizar las imágenes seleccionadas
    const imagePreviews = selectedFiles.map((file) =>
      URL.createObjectURL(file)
    );
    setImagenes(imagePreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });
    try {
      const response = await fetch("http://localhost:3000/api/multimedia", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to upload files");
      }
      const data = await response.json();
      setImagenes((prevImagenes) => [...prevImagenes, ...data.fileUrls.map((file) => file.url_recurso)]);

      console.log(data);
    } catch (error) {
      console.error("Error uploading files: ", error);
      setMessage("Error uploading files");
    }
  };

  return (
    <div>
      <h2>Subir Imágenes</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} multiple />
        <button type="submit">Upload</button>
      </form>
      {imagenes.map((imagen, index) => (
        <div key={index}>
          <img
            src={imagen}
            alt={`Uploaded Image ${index}`}
            style={{ width: "120px" }}
          />
          <p>{files[index].name}</p> {/* Mostrar el nombre del archivo */}
        </div>
      ))}
      {message && <p>{message}</p>}
    </div>
  );
};

export default FormularioImagenes;
