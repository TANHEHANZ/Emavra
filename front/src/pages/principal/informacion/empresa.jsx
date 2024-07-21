import React, { useEffect, useState } from "react";
import "../../../styles/style-empresa.css";
import Quien from "../../../assets/quien.png";
import Autoridad from "../../../assets/autoridad.png";
import Organigrama from "./empresaComponet/Organigrama";

const Empresa = () => {
  return (
    <div style={{ background: "var(--white)", width: "99.7dvw" }}>
      <section className="Emavra">
        <div className="palabras">
          <img src={Autoridad} alt="" />
          <section>
            <p className="cargo">GERENTE GENERAL EMAVRA</p>

            <p>
              Desde la Gestión 2021 bajo la dirección y liderazgo del alcalde
              Cap. Manfred Reyes Villa, asumimos la administración de la Empresa
              Municipal de Áreas Verdes y Recreación Alternativa “EMAVRA” con
              compromiso, experiencia, transparencia y responsabilidad para
              hacer de Cochabamba una ciudad jardín, mejorando constantemente la
              prestación de servicios de áreas verdes y de recreación,
              contribuyendo al mejoramiento del medio ambiente y la calidad de
              vida de los cochabambinos.
            </p>
            <p className="autor">Ing. Milton T. Copa Morató</p>
          </section>
        </div>

        <section className="quienes-somos">
          <img src={Quien} alt="img-quien-somos" />
          <article>
            <h3>¿Quienes somos? </h3>

            <p>
              La Empresa Municipal de Áreas Verdes y Recreación Alternativa
              “EMAVRA”, es una Empresa Municipal Descentralizada del Gobierno
              Autónomo Municipal de Cochabamba, creada mediante Ordenanza
              Municipal N°2541/2000 de 11 de agosto de 2000, con propia
              personalidad jurídica, cuenta con autonomía en Gestión
              Administrativa, Técnica y Económica; de manera indefinida. La
              empresa está situada en la Ciudad de Cochabamba.
            </p>
            <p>
              El 28 de junio de 2013 mediante Resolución Ministerial N°515 el
              Viceministerio de presupuestos y Contabilidad Fiscal del
              Ministerio de Economía y finanzas Publicas, autoriza el código
              Institucional N°2303 desde entonces EMAVRA se convierte en una
              Empresa Municipal legalmente establecida que funcionara{" "}
              <strong>
                como Empresa Municipal Descentralizada prestadora de Servicios
                relacionados al mantenimiento de áreas verdes, plazas,
                plazuelas, parques recreacionales y áreas de esparcimiento.
              </strong>
            </p>
            <p>
              Hasta la fecha EMAVRA como institución llega a cubrir el 70% de
              las áreas verdes del municipio de Cochabamba mejorando la calidad
              de vida de los habitantes tanto en la zona norte y sud de la
              ciudad
            </p>
            <p>
              Administramos de manera independiente como institución 10 parques
              municipales que se encuentran dispersados en diferentes puntos de
              la ciudad. Cada parque cuenta con una temática totalmente
              diferente al otro.
            </p>
          </article>
        </section>

        <section className="mision-vision">
          <div>
            <h4>MISIÓN</h4>
            <p>
              Crear un equilibrio con el ser humano y el medio ambiente mediante
              la prestación de servicios para las áreas verdes y sitios de
              recreación, buscando satisfacer las demandas de toda la población
              referentes al mantenimiento de plazas, plazuelas jardineras
              centrales.
            </p>
          </div>
          <div>
            <h4>VISIÓN</h4>
            <p>
              Constituirse en una instancia que logre contribuir a la
              conservación y protección del medio ambiente, situando a
              Cochabamba, como municipio jardín en el corazón de la madre
              tierra, respetuoso del medio ambiente.
            </p>
          </div>
        </section>
        <Organigrama />
      </section>
    </div>
  );
};

export default Empresa;
