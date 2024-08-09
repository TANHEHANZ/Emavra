import React from "react";
import Head from "../../../components/ui/head";
import imgPortada from "../../../assets/plantas_2.png";
const LuchaCorrupcion = () => {
  return (
    <div className="HeadLucha">
      <section>
        <div>
          <h1>
            Emavra <strong>lucha contra la corrupción</strong>{" "}
          </h1>
          <p>
            La corrupción se define como el requerimiento o aceptación, el
            ofrecimiento u otorgamiento, directo o indirecto, de un servidor
            público, de una persona natural o jurídica, nacional o extranjera,
            de cualquier objeto de valor pecuniario u otros beneficios, dádivas,
            favores, promesas o ventajas para sí mismo o para otra persona o
            entidad, a cambio de la acción u omisión de cualquier acto que
            afecte a los intereses del Estado.
          </p>
          <p>
            La Unidad de Transparencia y Coordinación de EMAVRA tiene como uno
            de sus objetivos principales la creación de mecanismos eficaces para
            la recepción, procesamiento y seguimiento de denuncias relacionadas
            con posibles actos de corrupción. Estos actos pueden ser cometidos
            por servidores públicos de EMAVRA en el desempeño de sus funciones,
            así como por particulares y empresas que mantengan contratos de
            servicio con la institución. La unidad se encarga de garantizar la
            transparencia y la correcta gestión de los recursos destinados al
            mantenimiento y cuidado de las jardineras de Cochabamba, asegurando
            que las prácticas se realicen de acuerdo con los principios de
            integridad y legalidad.
          </p>
        </div>
        <img src={imgPortada} alt="img-Proyecto" />
      </section>
      <button> Descargar formulario de denuncias</button>
    </div>
  );
};

export default LuchaCorrupcion;
