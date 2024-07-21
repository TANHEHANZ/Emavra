import React, { useState } from "react";
import Org from "../../../../assets/organigrama.jpg";

const Organigrama = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <h3 className="h3Organigrama">
        Este organigrama muestra la estructura jerárquica de Emavra. Se divide
        en tres niveles principales
      </h3>
      <section className="Organigrama">
        <img
          src={Org}
          alt="Organigrama"
          onClick={() => setVisible(!visible)}
          style={visible ? { width: "100%", height: "100%" , position:"relative"} : {}}
        />
        <article 
          style={visible ? { display:"none" } : {}}
        
        >
          <p>Nivel de Dirección:</p>
          <div>
            <p>
              <strong>Directorio:</strong> Máximo nivel de decisión.
            </p>
            <p>
              <strong>Gerencia General:</strong> Responsable de la supervisión
              general de la organización.
            </p>
          </div>
          <p>Nivel Ejecutivo Staff:</p>
          <div>
            <p>
              <strong>Unidad de Asesoría Legal:</strong> Proporciona
              asesoramiento legal.
            </p>
            <p>
              <strong>Unidad de Transparencia:</strong> Se encarga de la
              transparencia institucional.
            </p>
            <p>
              <strong>Unidad de Auditoría Interna:</strong>Realiza auditorías
              internas para asegurar el cumplimiento de normativas.
            </p>
          </div>
          <p>Nivel Operativo:</p>
          <div>
            <p>
              <strong>Dirección Administrativa Financiera:</strong> Maneja las
              finanzas y la administración general
              <div>
                <p>
                  <strong>
                    Unidad de Administración de Parque Recreacionales:
                  </strong>{" "}
                </p>
                <p>
                  <strong>Unidad de Recursos Humanos:</strong> Gestiona el
                  personal.
                </p>
                <p>
                  <strong>Unidad Administrativa Contable:</strong> Lleva la
                  contabilidad y administración.
                </p>
              </div>
            </p>
            <p>
              <strong>Dirección Técnica:</strong> Supervisión técnica y
              desarrollo de proyectos
              <div>
                <p>
                  <strong>
                    Unidad de Investigación Científica Jardín Botánico:
                  </strong>
                  Realiza investigaciones científicas.
                </p>
                <p>
                  <strong>
                    Unidad de Planificación, Desarrollo y Gestión:
                  </strong>
                  Planea y gestiona proyectos.
                </p>
                <p>
                  <strong>Unidad de Planificación, Desarrollo y Gestión</strong>{" "}
                  Mantiene áreas verdes.
                </p>
                <p>
                  <strong>Unidad de Proyectos y Construcciones:</strong> Ejecuta
                  proyectos y construcciones
                </p>
                <p>
                  <strong>Unidad de Viveros:</strong> Administra y Gestiona
                  viveros.
                </p>
              </div>
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default Organigrama;
