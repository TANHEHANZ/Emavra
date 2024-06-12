const express = require("express");
const { EmavraController } = require("../controller/emavaTransparente");
const router = express.Router();

router.get("/", EmavraController.getEmavra);
router.post("/", EmavraController.cretaeEmavra);
router.put("/:idEma", EmavraController.updateEmavra);
router.delete("/:idEma", EmavraController.deleteProyect);
module.exports = router;
