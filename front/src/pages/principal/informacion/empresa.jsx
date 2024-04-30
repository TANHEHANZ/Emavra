import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../styles/style-empresa.css";
import apiService from "../../../services/endpint";
const Empresa = () => {
  const [dataDestacado, setDataDestacado] = useState([]);

  const data = async () => {
    const fetch = await apiService.fetchData(
      "GET",
      "api/post/destacado"
    );
    setDataDestacado(fetch);
  };

  useEffect(() => {
    data();
  }, []);



  const objetivos = [
    {
      objetivo:
        "Organizar, reglamentar, administrar y prestar el servicio de limpieza de vías y espacios de uso público, recolección transporte, tratamiento, reciclaje, industrialización y eliminación de basuras y residuos.",
    },
    {
      objetivo:
        "Determinar y recaudar las tasas y tarifas correspondientes a los servicios a su cargo, de acuerdo a políticas y normas que dicte el Concejo Municipal.",
    },
    {
      objetivo:
        "Gestionar financiamientos y otorgar las garantías que sean requeridas.",
    },
    {
      objetivo:
        "Realizar todos los actos jurídicos y administrativos permitidos por la Legislación nacional.",
    },
  ];

  return (
    <div>
      <div className="Emavra-head">
        <div className="title-emavra">
          <h1>Emavra</h1>
          <button>
            Proyectos de emavra
            <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
          </button>
        </div>
        <div className="galery">
          {dataDestacado.map((img, i) => (
            <img src={img} alt="img" key={i} />
          ))}
        </div>
      </div>

      <section className="quienes-somos">
        <img
          src="https://scontent.fcbb2-1.fna.fbcdn.net/v/t39.30808-6/435129735_745886954344349_3179303480436942120_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2Dnyed2cE3EAb4aw716&_nc_ht=scontent.fcbb2-1.fna&cb_e2o_trans=q&oh=00_AfCAU18ryr6kEfiuMeAnyorNsDhSYT-vgSji3fQItNZiyQ&oe=663603B9"
          alt="img-quien-somos"
        />
        <div>
          <h3>¿Quienes somos? </h3>
          <p>
            La Empresa Municipal de Servicios de Aseo (EMSA) es la institución
            responsable de brindar el Servicio de Aseo Urbano a la población de
            Cochabamba. El Gobierno de la Alcaldía Municipal de Cochabamba
            realiza este servicio a través de esta entidad descentralizada.
            EMSA, fue creada mediante la Ordenanza Municipal Nº 1908/97 de 24 de
            Enero de 1997, como Empresa Municipal descentralizada Pública, con
            personería jurídica de derecho público, patrimonio propio y
            autonomía de gestión técnica, administrativa, económica, financiera
            y de duración indefinida. Según Ordenanza Municipal 2838/2002, EMSA
            está facultada para establecer el régimen normativo para regular la
            limpieza de espacios públicos y privados, para la recolección,
            transporte, tratamiento, y disposición final de los residuos sólidos
            en la jurisdicción municipal de Cochabamba. Esto con el fin de
            prevenir y controlar los riesgos a la salud pública y el medio
            ambiente.
          </p>
        </div>
      </section>

      <section className="mision-vision">
        <div>
          <h4>Mision</h4>
          <p>
            Nuestra misión es “Proteger el medio ambiente y la salud de la
            población mejorando la limpieza y el paisaje urbano de la ciudad;
            promoviendo buenos hábitos en la ciudadanía y fomentando acciones
            para reducir, reciclar y reutilizar los residuos sólidos en
            general”.
          </p>
        </div>
        <div>
          <h4>Vision</h4>
          <p>
            “Ser una empresa de prestación de servicio de aseo y recolección
            diferenciada y eficiente, en la gestión integral de residuos
            sólidos, reduciendo significativamente la contaminación ambiental y
            promoviendo el equilibrio ecológico para futuras generaciones”.
          </p>
        </div>
      </section>

      <section className="objetivos">
        <div>
          <h4>Objetivos</h4>

          {objetivos.map((item, i) => (
            <p key={i}>{item.objetivo}</p>
          ))}
        </div>
        <section className="organigrama">
          <img
            src="https://scontent.fcbb2-1.fna.fbcdn.net/v/t39.30808-6/435129735_745886954344349_3179303480436942120_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2Dnyed2cE3EAb4aw716&_nc_ht=scontent.fcbb2-1.fna&cb_e2o_trans=q&oh=00_AfCAU18ryr6kEfiuMeAnyorNsDhSYT-vgSji3fQItNZiyQ&oe=663603B9"
            alt="img-quien-somos"
          />
          <button>Expandir Organigrama</button>
        </section>
      </section>
    </div>
  );
};

export default Empresa;
