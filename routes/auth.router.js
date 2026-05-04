const { Router } = require("express");
const authController = require("../controllers/auth.controller");

const authRouter = Router();

authRouter.post("/signup", authController.userRegistration);
authRouter.post("/login", authController.userLogin);

module.exports = authRouter;