import React from "react";
import { dataInicio } from "../data/dataprueba";
const ImgPost = () => {
  return (
    <>
      <h4>Todas las Imagenes</h4>
      {dataInicio.map((item, i) => (
        <img src={item.url} alt="imgALmacenados" key={i} />
      ))}
    </>
  );
};

export default ImgPost;
