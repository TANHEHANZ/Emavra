import CreateNoticia from "../pages/dashboard/createPublicacion/createNoticia";
import CreateProyecto from "../pages/dashboard/createPublicacion/createProyecto";
import CreateMantenimeinto from "../pages/dashboard/createPublicacion/createMantenimeinto";

import CreateParques from "../pages/dashboard/createPublicacion/createParque";
import ListEmavra from "../pages/dashboard/managmenDocument/listEmavraTransparente";
import FormYReglamentos from "../pages/dashboard/managmenDocument/formYReglamentos";

export const dataRoutesDashboard = [
  {
    name: "Ecogestion",
    path: "list-proyectos",
    component: CreateProyecto,
    children: [
      {
        name: "Proyectos",
        path: "list-proyectos",
        component: CreateProyecto,
      },
      {
        name: "Noticias",
        path: "list-noticias",
        component: CreateNoticia,
      },
      {
        name: "Mantenimiento",
        path: "list-mantenimiento",
        component: CreateMantenimeinto,
      },
      {
        name: "Parques",
        path: "list-parques",
        component: CreateParques,
      },
    ],
  },
  {
    name: "Emavra Transparente",
    path: "list-emvra",
    component: ListEmavra,
  },
  {
    name: "Formularios y reglamentos",
    path: "list-formulariosReglamentos",
    component: FormYReglamentos,
  },
];
