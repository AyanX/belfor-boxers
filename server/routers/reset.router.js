const express = require("express");
const {resetController, resetControllerGet} = require("../controllers/reset.controller");

const resetRouter = express.Router();

resetRouter.post("/", resetController);
resetRouter.get("/", resetControllerGet);
module.exports = resetRouter;