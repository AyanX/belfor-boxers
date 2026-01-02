const express = require("express");
const {
  getAcademySettings,
  updateAcademySettings,
} = require("../controllers/academy.controller");


const academyRouter = express.Router();

academyRouter.get("/academy", getAcademySettings);
academyRouter.post("/academy", updateAcademySettings);

module.exports = academyRouter;