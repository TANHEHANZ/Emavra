const express = require("express");
const { EmavraController } = require("../controller/emavaTransparente");
const router = express.Router();

router.get("/", EmavraController.getEmavra);
router.post("/", EmavraController.cretaeEmavra);
router.put("/:idMan", EmavraController.updateEmavra);
router.delete("/:idMan", EmavraController.deleteProyect);
module.exports = router;
