const { Router } = require("express");
const apiController = require("../controllers/api.controller");

const apiRouter = Router();

apiRouter.post("/password/create-hash", apiController.createPasswordHash);
apiRouter.post("/password/compare", apiController.comparePassword);

module.exports = apiRouter;