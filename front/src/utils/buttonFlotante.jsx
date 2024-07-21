import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NuttonFlotante = () => {

  const handleClick = () => {
    const phoneNumber = "62743029"; // Reemplaza con tu número de teléfono en formato internacional sin el "+"
    const message = "Hola, necesito ayuda con..."; // El mensaje predefinido
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="buttonContactame" onClick={handleClick}>
      <FontAwesomeIcon icon={faWhatsapp}  />
    </section>
  );
};

export default NuttonFlotante;
