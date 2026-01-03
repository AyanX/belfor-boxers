const express = require("express");
const {
  getAcademySettings,
  updateAcademySettings,
} = require("../controllers/academy.controller");
const { verifyToken } = require("../utils/jwt");


const academyRouter = express.Router();

academyRouter.get("/academy", getAcademySettings);
academyRouter.post("/academy", verifyToken, updateAcademySettings);

module.exports = academyRouter;