import CreateNoticia from "../pages/dashboard/createPublicacion/createNoticia";
import CreateProyecto from "../pages/dashboard/createPublicacion/createProyecto";
import CreateMantenimeinto from "../pages/dashboard/createPublicacion/createMantenimeinto";
import ListEmavraTransparente from "../pages/dashboard/listEmavraTransparente";
import CreateParques from "../pages/dashboard/createPublicacion/createParque";

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
    component: ListEmavraTransparente,
  },
];
