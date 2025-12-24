const express = require("express")

const messagesRouter = require("./routers/messages.router")
const contactsRouter = require("./routers/contacts.router")


const app= express()


app.use(express.json())
app.get("/health", (req, res) => {
    res.send("Hello, World!")
})


app.use("/messages", messagesRouter)
app.use("/contacts", contactsRouter)

module.exports = app