const express = require("express");
const router = express.Router();

const MantenimeintoController = require("../controller/mantenimeinto");

router.get("/", MantenimeintoController.getMantenimeinto);
router.get("/:idMan", MantenimeintoController.getMantenimientoID);
router.put("/:idMan", MantenimeintoController.updateMantenimeinto);
router.delete("/:idMan", MantenimeintoController.deleteMantenieminto);
module.exports = router;
