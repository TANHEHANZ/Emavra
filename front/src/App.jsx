import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import { dataRoutes } from "./services/routes";
import React from "react";
import DashboardLayaut from "./pages/dashboard/dashboard_layaut";
import { dataRoutesDashboard } from "./services/routes_dashboard";
import Login from "./pages/dashboard/login/login";
import PostDetalle from "./pages/principal/postDetalle";
import { Toaster } from "sonner";

library.add(fas);

function App() {
  const renderRoutes = (dataRender) => {
    return dataRender.map((ruta) => (
      <React.Fragment key={ruta.name}>
        {ruta.path && <Route path={ruta.path} element={<ruta.component />} />}
        {ruta.children && renderRoutes(ruta.children)}
      </React.Fragment>
    ));
  };
  const renderRoutesDashborad = (dataRoutesDashboard) => {
    return dataRoutesDashboard.map((ruta) => (
      <React.Fragment key={ruta.path}>
        {ruta.path && <Route path={ruta.path} element={<ruta.component />} />}
        {ruta.children && renderRoutes(ruta.children)}
      </React.Fragment>
    ));
  };

  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          {renderRoutes(dataRoutes)}
          <Route path="/detalle/:type/:id" element={<PostDetalle />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<DashboardLayaut />}>
          {renderRoutesDashborad(dataRoutesDashboard)}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
