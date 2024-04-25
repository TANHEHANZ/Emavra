import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import { dataRoutes } from "./services/routes";
import React from "react";
import DashboardLayaut from "./pages/dashboard/dashboard_layaut";
import { dataRoutesDashboard } from "./services/routes_dashboard";

library.add(fas);

function App() {
  const renderRoutes = (dataRender) => {
    return dataRender.map((ruta) => (
      <React.Fragment key={ruta.path}>
        <Route path={ruta.path} element={<ruta.component />} />
        {ruta.children && renderRoutes(ruta.children)}
      </React.Fragment>
    ));
  };
  const renderRoutesDashborad = (dataRoutesDashboard) => {
    return dataRoutesDashboard.map((ruta) => (
      <React.Fragment key={ruta.path}>
        <Route path={ruta.path} element={<ruta.component />} />
        {ruta.children && renderRoutes(ruta.children)}
      </React.Fragment>
    ));
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {renderRoutes(dataRoutes)}
        </Route>
      </Routes>
      <Routes>
        <Route path="dashboard" element={<DashboardLayaut />}>
          {renderRoutesDashborad(dataRoutesDashboard)}

        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
