import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { uploadImageToCloudinary } from "../services/claudinary";

const HandleSaveImg = ({ getImg, setAgregar, agregar }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      console.error("No file selected");
      return;
    }
    try {
      const tipo = file.name.split(".").pop();
      const imageUrl = await uploadImageToCloudinary(file, tipo);
      if (imageUrl.length != null) {
        getImg();
      }
      console.log("Image uploaded successfully:", imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      <label htmlFor="real-file" className="custom-file-upload">
        <input type="file" id="real-file" hidden onChange={handleFileChange} />
        Seleccionar imagen
      </label>

      <button onClick={handleUpload}>
        <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
      </button>
      <button onClick={() => setAgregar(!agregar)} className="more">
        <FontAwesomeIcon icon="fa-solid fa-circle-arrow-left" />
      </button>
    </>
  );
};

export default HandleSaveImg;
