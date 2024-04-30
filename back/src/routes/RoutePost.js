const express = require("express");
const PostController = require("../controller/post");
const router = express.Router();

router.post("/", PostController.createPost);
router.get("/", PostController.getPost);
router.get("/destacado", PostController.getAllDataDestacada);
router.put("/:idPost", PostController.updatePost);

module.exports = router;
