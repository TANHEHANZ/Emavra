import EmavraTransparente from "../pages/principal/docuemntos/emavraTransparente";
import Home from "../pages/principal/home";
import Noticias from "../pages/principal/noticias";
import Alcalde from "../pages/principal/informacion/alcalde";
import Contactos from "../pages/principal/informacion/contactos";
import Empresa from "../pages/principal/informacion/empresa";
import Parques from "../pages/principal/ecogestion/parques";
import Proyectos from "../pages/principal/ecogestion/proyectos";
import Mantenimiento from "../pages/principal/ecogestion/mantenimiento";
import Viveros from "../pages/principal/ecogestion/viveros";
import LuchaCorrupcion from "../pages/principal/docuemntos/luchaCorrupcion";
import FormularioYreglamento from "../pages/principal/docuemntos/formularioYreglamento";

export const dataRoutes = [
  {
    name: "Inicio",
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
      {
        name: "Viveros",
        path: "viveros",
        component: Viveros,
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
        path: "lucha",
        component: LuchaCorrupcion,
      },
    ],
  },
  {
    name: "Normativa",
    children: [
      {
        name: "Formulario y reglamento ",
        path: "formulario",
        component: FormularioYreglamento,
      },
    ],
  },
  { name: "Noticias", path: "noticias", component: Noticias },
];
