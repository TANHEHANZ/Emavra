const express = require("express");
const router = express.Router();

const NoticiaController = require("../controller/noticias");

router.get("/", NoticiaController.getNoticias);
router.get("/:idNot", NoticiaController.getNoticiasID);
router.put("/:idNot", NoticiaController.updateNorticia);
router.delete("/:idNot", NoticiaController.deleteNoticias);

module.exports = router;
