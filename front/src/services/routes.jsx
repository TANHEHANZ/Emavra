import Informacion from "../pages/principal/informacion/Informacion";
import Ecogestion from "../pages/principal/ecogestion/ecogestion";
import EmavraTransparente from "../pages/principal/emavraTransparente";
import Home from "../pages/principal/home";
import Noticias from "../pages/principal/noticias";
import Alcalde from "../pages/principal/informacion/alcalde";
import Contactos from "../pages/principal/informacion/contactos";
import Empresa from "../pages/principal/informacion/empresa";
import Parques from "../pages/principal/ecogestion/parques";
import Proyectos from "../pages/principal/ecogestion/proyectos";
import Mantenimiento from "../pages/principal/ecogestion/mantenimiento";
import Viveros from "../pages/principal/ecogestion/viveros";

export const dataRoutes = [
  {
    name: "Inicio",
    path: "home",
    component: Home,
  },
  {
    name: "Informacion",
    path: "informacion",
    component: Informacion,
    children: [
      {
        name: "Alcalde",
        path: "alcalde",
        component: Alcalde,
      },
      {
        name: "Contactos",
        path: "contactos",
        component: Contactos,
      },
      {
        name: "Empresa",
        path: "empresa",
        component: Empresa,
      },
    ],
  },
  {
    name: "Ecogestion",
    path: "ecogestion",
    component: Ecogestion,
    children: [
      {
        name: "Parques",
        path: "parques",
        component: Parques,
      },
      {
        name: "Proyectos",
        path: "proyectos",
        component: Proyectos,
      },
      {
        name: "Manteniemiento",
        path: "mantenimiento",
        component: Mantenimiento,
      },
      {
        name: "viveros",
        path: "viveros",
        component: Viveros,
      },
    ],
  },
  {
    name: "Emavra transparente",
    path: "Emavra_transparente",
    component: EmavraTransparente,
  },
  { name: "Noticias", path: "noticias", component: Noticias },
];
