const MultimediaController = require("../controller/multimedia");
const express = require("express");
const router = express.Router();

router.post("/", MultimediaController.saveMultimedia);
router.get("/", MultimediaController.GetMultimedia);

module.exports = router;
