const express = require("express");
const contactsRouter = express.Router();
const {
  contactsPost,
  contactsGet,
  pricesPost,
  pricesGet
} = require("../controllers/contacts.controller");
const { verifyToken } = require("../utils/jwt");

// Define your contacts routes here
contactsRouter.get("/", contactsGet);

contactsRouter.get("/prices", pricesGet);


contactsRouter.post("/" ,verifyToken , contactsPost);
contactsRouter.post("/prices", verifyToken, pricesPost);


module.exports = contactsRouter;
