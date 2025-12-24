const express = require("express")
const contactsRouter = express.Router()
const {contactsPost} = require("../controllers/contacts.controllers")

// Define your contacts routes here
contactsRouter.post("/", contactsPost)

contactsRouter.get("/", (req, res) => {
    // Logic to get all contacts
    res.status(200).send("List of contacts")
})


contactsRouter.post("/prices", (req, res) => {
    // Logic to add new prices
    res.status(201).send("Prices added")
})


module.exports = contactsRouter