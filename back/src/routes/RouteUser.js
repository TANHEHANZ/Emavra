const express = require("express");
const router = express.Router();

const user = require("../controller/user");
const { Logincontroller } = require("../controller/login");

router.get("/", user.getAllUsers);
router.post("/", user.createUser);
router.put("/:idUser", user.updateuser);
router.post("/login", Logincontroller);

module.exports = router;
