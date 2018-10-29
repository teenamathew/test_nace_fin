const express = require("express");
const UserController = require("../controllers/user");

const router = express.Router();

router.post("/login", UserController.loginUser);
router.get("/checkserver", UserController.checkServer);
router.post("/bcrypt_it", UserController.bcrypt_it);

module.exports = router;
