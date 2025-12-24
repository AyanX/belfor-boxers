const express = require("express")
const cors = require("cors")
const messagesRouter = require("./routers/messages.router")
const contactsRouter = require("./routers/contacts.router")
const cookieParser = require("cookie-parser")
const resetRouter = require("./routers/reset.router")


const app= express()
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.get("/health", (req, res) => {
    res.send("Hello, World!")
})


app.use("/messages", messagesRouter)
app.use("/contacts", contactsRouter)
app.use("/reset",resetRouter)
module.exports = app