import React from "react";
import Nav from "../utils/navHome";
import { dataRoutes } from "../services/routes";
import { Outlet } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import Search from "../utils/search";
import "../styles/style-nav.css";
import FooterHome from "../utils/footerHome";

const Layout = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="logo emavra" />
        <section className="nav">
          <Nav links={dataRoutes} />
        </section>
        <Search />
      </nav>
      <section className="contenido">
        <Outlet />
      </section>
      <FooterHome />
    </>
  );
};

export default Layout;
