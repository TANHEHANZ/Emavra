const express = require("express");
const { ReglamentoController } = require("../controller/reglamentos");
const router = express.Router();

router.get("/", ReglamentoController.getEmavra);
router.post("/", ReglamentoController.createReglamento);
router.put("/:idEma", ReglamentoController.updateEmavra);
router.delete("/:idEma", ReglamentoController.deleteProyect);
module.exports = router;
