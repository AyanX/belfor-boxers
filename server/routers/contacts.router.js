const express = require("express");
const contactsRouter = express.Router();
const {
  contactsPost,
  contactsGet,
  pricesPost,
  pricesGet
} = require("../controllers/contacts.controller");

// Define your contacts routes here
contactsRouter.post("/", contactsPost);

contactsRouter.get("/", contactsGet);

contactsRouter.post("/prices", pricesPost);

contactsRouter.get("/prices", pricesGet);

module.exports = contactsRouter;
