import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Renderdescription = ({ renderData, titulo }) => {
  return (
    <div className=" remder-data-slider">
      <h3>{renderData.titulo ? renderData.titulo : titulo}</h3>
      <p>
        {renderData.descripcion
          ? renderData.descripcion
          : "Descripcion de " + titulo}
      </p>
      <button>
        leer {titulo} completo{" "}
        <FontAwesomeIcon icon="fa-solid fa-caret-right" />
      </button>
    </div>
  );
};

export default Renderdescription;
