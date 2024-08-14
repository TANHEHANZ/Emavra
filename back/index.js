const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const userRoutes = require("./src/routes/RouteUser");
const ProyectRoutes = require("./src/routes/RouteProyectos");
const PostRoutes = require("./src/routes/RoutePost");
const ClaudinaryRoutes = require("./src/routes/RouteClaudinary");
const ManteniemintoRoutes = require("./src/routes/RouteMantenimiento");
const NoticiasRoutes = require("./src/routes/RoutesNoticias");
const destacarRoutes = require("./src/routes/RoutesDestacados");
const ParquesRoute = require("./src/routes/RouteParque");
const ViveroRoute = require("./src/routes/RouteVivero");
const EmavraRoute = require("./src/routes/RouteEmavraTransparente");
const REglamentoRoute = require("./src/routes/RouteReglamentos");

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use("/api/claudynary", ClaudinaryRoutes);
app.use("/api/mantenimiento", ManteniemintoRoutes);
app.use("/api/post", PostRoutes);
app.use("/api/proyectos", ProyectRoutes);
app.use("/api/noticias", NoticiasRoutes);
app.use("/api/parques", ParquesRoute);
app.use("/api/viveros", ViveroRoute);
app.use("/api/emavraTransparente", EmavraRoute);
app.use("/api/reglamento", REglamentoRoute);
app.use("/api/users", userRoutes);
app.use("/api/destacar", destacarRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
