import HomeDashboard from "../pages/dashboard/homeDashboard";
import CreateNoticia from "../pages/dashboard/createPublicacion/createNoticia";
import CreateProyecto from "../pages/dashboard/createPublicacion/createProyecto";
import CreateMantenimeinto from "../pages/dashboard/createPublicacion/createMantenimeinto";
import ListEmavraTransparente from "../pages/dashboard/listEmavraTransparente";

export const dataRoutesDashboard = [
  {
    name: "home",
    path: "home",
    component: HomeDashboard,
  },
  {
    name: "Ecogestion",
    path: "home",
    component: HomeDashboard,
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
    ],
  },
  {
    name: "Emavra Transparente",
    path: "list-emvra",
    component: ListEmavraTransparente,
  },
];
