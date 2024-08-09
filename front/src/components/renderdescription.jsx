import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { IconArow } from "./ui/icons/icons";

const Renderdescription = ({ renderData, titulo }) => {
  const navigate = useNavigate();

  let id = renderData.id_post;
  const leerArticulo = () => {
    if (id) {
      const type = titulo.toLowerCase();
      navigate(`/detalle/${type}/${id}`);
    } else {
      toast.error("Seleccione un " + titulo);
    }
  };

  return (
    <div className=" remder-data-slider">
      <h3 style={{ textTransform: "uppercase" ,fontSize:"14px"}}>
        {renderData.titulo ? renderData.titulo : titulo}
      </h3>
      <p style={{display:"flex" ,flexDirection:"column", justifyContent:"center" ,alignItems:"center" , minHeight:"15rem"}}>
        {renderData.Descripcion ? (
          renderData.Descripcion
        ) : (
          <>
            <IconArow />
            <span >Selecciona una imagen para ver más detalles</span>
          </>
        )}
      </p>
      <button onClick={() => leerArticulo()}>
        leer {titulo} completo
        <FontAwesomeIcon icon="fa-solid fa-caret-right" />
      </button>
    </div>
  );
};

export default Renderdescription;
