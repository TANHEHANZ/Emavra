const express = require("express");
const controller = require("../controller/parques");
const router = express.Router();

router.get("/", controller.get);
router.get("/:idpar", controller.getID);
router.put("/:idpar", controller.update);
router.delete("/:idpar", controller.delete);

module.exports = router;
