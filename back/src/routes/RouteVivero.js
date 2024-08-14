const express = require("express");
const controllerVivero = require("../controller/vivero");
const router = express.Router();

router.get("/", controllerVivero.get);
router.get("/:idpar", controllerVivero.getID);
router.put("/:idpar", controllerVivero.update);
router.delete("/:idpar", controllerVivero.delete);

module.exports = router;
