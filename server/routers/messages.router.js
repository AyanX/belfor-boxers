const express = require("express")
const messagesRouter = express.Router()
const { getMessages, postMessage,readMessages,deleteMessage } = require("../controllers/messages.controller")
const { verifyToken } = require("../utils/jwt")

messagesRouter.post("/", postMessage)


messagesRouter.get("/",verifyToken, getMessages)


messagesRouter.post("/read/:id", verifyToken, readMessages);
messagesRouter.post("/delete/:id", verifyToken, deleteMessage);

module.exports = messagesRouter