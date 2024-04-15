const express = require("express");
const PostController = require("../controller/post");
const NoticiaController = require("../controller/noticias");
const router = express.Router();

router.post("/", PostController.createPost);
router.get("/", PostController.getPost);
router.post("/noticia", NoticiaController.craateNoticias);
router.get("/noticia", NoticiaController.getNoticias);

module.exports = router;
