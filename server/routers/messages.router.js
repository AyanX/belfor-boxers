const express = require("express")
const messagesRouter = express.Router()
const { getMessages, postMessage } = require("../controllers/messages.controller")

messagesRouter.get("/", getMessages)
messagesRouter.post("/", postMessage)

module.exports = messagesRouter