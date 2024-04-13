const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const userRoutes = require("./src/routes/RouteUser");
const ProyectRoutes = require("./src/routes/RouteProyectos");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(bodyParser.json());

app.use("/api/users", userRoutes);
app.use("/api/proyect", ProyectRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
