const express = require("express");
const router = express.Router();

const user = require("../controller/user");

router.get("/", user.getAllUsers);
router.post("/", user.createUser);
router.put("/:idUser", user.updateuser);

module.exports = router;
