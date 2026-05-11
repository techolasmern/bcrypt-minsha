const { Router } = require("express");
const jwtController = require("../controllers/jwt.controller");


const jwtRouter = Router();

jwtRouter.post("/create", jwtController.createToken);
jwtRouter.get("/verify", jwtController.verifyToken);

module.exports = jwtRouter;