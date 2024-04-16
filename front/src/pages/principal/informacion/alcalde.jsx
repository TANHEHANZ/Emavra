import React from "react";
import alcalde from "../../../assets/manfred.jpeg";
import "../../../styles/style-alcalde.css";

const Alcalde = () => {
  return (
    <section>
      <div className="head">
        <h1>Alcalde</h1>
        <img src={alcalde} alt="Img-Alcalde" />
      </div>
      <article className="cuerpo">
        <p>
          Desde el Gobierno Autónomo Municipal de Cochabamba, estamos impulsando
          políticas para la preservación de la
          <strong> calidad del medio ambiente</strong> y mejorar las condiciones
          de vida de la población.
        </p>
        <p>
          La Empresa Municipal de Servicios de Aseo (EMSA) tiene un plan de
          mediano y largo alcance para lograr que Cochabamba, sea la ciudad más
          limpia de Bolivia con modernos sistemas de manejo de residuos sólidos
          que nos permitirán mejorar la calidad de vida de los cochabambinos
          EMSA es patrimonio de los Cochabamba, EMSA es una empresa del pueblo y
          jamás pasara a manos privadas. Nuestra misión es potenciar y mejorar
          las condiciones de trabajo de los obreros y mejorar el sistema de
          barrido y manejo de residuos sólidos. Uno de los principales problemas
          a los que se enfrenta el Medio Ambiente y las sociedades humanas es la
          contaminación producida por las basuras. La basura es un concepto muy
          amplio, que tiene graves consecuencias para el medio ambiente, la
          salud de humanos, animales y plantas por eso pido a la población a
          unirnos para evitar que la basura se expanda por todo lugar. La
          contaminación de basura se produce cuando los residuos recogidos en
          los vertederos se pudren, propagan el olor y causan contaminación del
          aire en las áreas circundantes, lo que también crea problemas en la
          sociedad. A menudo se ve que los residuos que incluyen material
          inorgánico como latas de hierro, papel, plástico, piezas de vidrio o
          restos de comida, huesos de animales, cáscaras de verduras, etc. son
          arrojados al aire libre.  En áreas donde las personas mantienen
          animales para leche, aves de corral u otros animales, sus heces
          también contaminan la atmósfera. La contaminación del aire también se
          propaga cuando la basura se quema al aire libre, lo que representa una
          grave amenaza para la salud y el medio ambiente. La basura daña los
          hábitats físicos, transportan contaminantes químicos, amenazan la vida
          acuática e interfieren con el uso humano de ríos y medio ambientes
          fluviales, marinos y costeros, por lo tanto es  nuestra
          responsabilidad a ser solidarios con nosotros mismos, haciendo un
          manejo adecuado de la basura desde sus hogares. Vamos emprender
          campañas educativas con diversos sectores de la sociedad para ser una
          ciudad limpia, libre de contaminación ambiental
        </p>
      </article>
    </section>
  );
};

export default Alcalde;
