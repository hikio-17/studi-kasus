const router = require("express").Router();
const userController = require("../controllers/userController");

// register method-post
router.post("/register", userController.registerController);

// login method-get
router.post("/login", userController.loginController);

module.exports = router;
