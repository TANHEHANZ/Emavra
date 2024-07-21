import React, { useState } from "react";
import Nav from "../utils/navHome";
import { dataRoutes } from "../services/routes";
import { Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import Search from "../utils/search";
import "../styles/style-nav.css";
import FooterHome from "../utils/footerHome";
import "../styles/styleDashboard/style-content.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import NuttonFlotante from "../utils/buttonFlotante";

const Layout = () => {
  const [navActive, setNavActive] = useState(true);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <div>
      <button className={"buttonNav"} onClick={toggleNav}>
        <FontAwesomeIcon icon="fa-bars" />
      </button>
      <nav className={`navPage ${navActive ? "activado" : "desactivado"}`}>
        <img src={logo} alt="logo emavra" />
        <section className="nav">
          <Nav links={dataRoutes} />
        </section>
        {/* <Search /> */}
      </nav>
      <section className="contenido">
        <div style={{ marginTop: "12vh" ,backgroundColor:"var(--white)", width:"100%"}}>
          <Outlet />
        </div>
      </section>
      <NuttonFlotante />

      <FooterHome />
    </div>
  );
};

export default Layout;
