const express = require("express");
const router = express.Router();

const { ProyectoController } = require("../controller/proyectos");

router.get("/", ProyectoController.getProyect);
router.get("/:idProyect", ProyectoController.getProyectId);
router.post("/", ProyectoController.createProyect);
router.put("/:idProyect", ProyectoController.updateProtect);
router.delete("/:idProyect", ProyectoController.deleteProyect);
module.exports = router;
