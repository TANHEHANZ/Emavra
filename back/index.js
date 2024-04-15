const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const userRoutes = require("./src/routes/RouteUser");
const ProyectRoutes = require("./src/routes/RouteProyectos");
const SaveFileRoutes = require("./src/routes/RuouteSaveFile");
const PostRoutes = require("./src/routes/RoutePost");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(bodyParser.json());

app.use("/api/users", userRoutes);
app.use("/api/proyect", ProyectRoutes);
app.use("/api/multimedia", SaveFileRoutes);
app.use("/api/post", PostRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
