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
    name: "inicio",
    path: "/",
    component: Home,
  },
  {
    name: "Informacion",
    children: [
      {
        name: "Alcalde",
        path: "alcalde",
        component: Alcalde,
      },
      {
        name: "Empresa",
        path: "empresa",
        component: Empresa,
      },
      {
        name: "Contactanos",
        path: "contactanos",
        component: Contactos,
      },
    ],
  },
  {
    name: "Ecogestion",
    path: null,
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
    ],
  },
  {
    name: "Transparencia",
    path: null,

    children: [
      {
        name: "Rendicion de cuentas ",
        path: "Emavra_transparente",
        component: EmavraTransparente,
      },

      {
        name: "Lucha contra la corrupción",
        path: "proyectos",
        component: Proyectos,
      },
    ],
  },
  {
    name: "Normativa",
    children: [
      {
        name: "Formulario de reglamento ",
        path: "normativa",
        component: Noticias,
      },
    ],
  },
  { name: "Noticias", path: "noticias", component: Noticias },
];
