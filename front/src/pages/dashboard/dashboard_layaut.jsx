import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavDash from "../../utils/NavDash";
import { dataRoutesDashboard } from "../../services/routes_dashboard";
import "../../styles/styleDashboard/layaut.css";
import logo from "../../assets/logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImgPost from "../../components/imgPost";
import "../../styles/styleDashboard/style-content.css";

const Dashboard_layaut = () => {
  const [ver, setVer] = useState("nover");

  const cambiarClase = () => {
    if (ver === "ver") {
      setVer("nover");
    } else {
      setVer("ver");
    }
  };
  return (
    <div className="layautDashboard">
      <nav>
        <NavDash links={dataRoutesDashboard} />
        <img src={logo} alt="" />
      </nav>
      <section className="contenidoDash">
        <div className="salir">
          <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
        </div>
        <div className="imagenes" onClick={() => cambiarClase()}>
          <FontAwesomeIcon icon="fa-solid fa-images" />
        </div>
        <section>
          <Outlet />
        </section>
        <aside className={ver}>
          <ImgPost />
        </aside>
      </section>
    </div>
  );
};

export default Dashboard_layaut;
