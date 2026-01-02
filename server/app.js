const express = require("express")
const cors = require("cors")
const messagesRouter = require("./routers/messages.router")
const contactsRouter = require("./routers/contacts.router")
const cookieParser = require("cookie-parser")
const resetRouter = require("./routers/reset.router")
const { verifyToken } = require("./utils/jwt")
const adminLoginHandler = require("./controllers/admin.login.controller")
const { newMessageCount } = require("./controllers/messages.controller")
const  academyRouter  = require("./routers/academy.router")
const app= express()






app.use(cors({
    origin: ['https://admin.uncletboxingacademy.com', 
      'https://uncletboxingacademy.com',
      'http://localhost:3000',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], 
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(cookieParser())
app.use(express.json())


app.get("/health", (req, res) => {
    res.send("Hello, World! Health check.")
})

app.get("/", (req, res) => {
    res.send("Hello, World!")
})

app.use( academyRouter)

app.use("/messages", messagesRouter)
app.use("/contacts", contactsRouter)
app.post("/login/adm", adminLoginHandler);


//protected routes below

app.use(verifyToken)

app.post("/logout/adm", verifyToken, (req, res) => {
  try {
    res.clearCookie("access", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    return res.json({ message: "Logged out" });
  } catch (e) {
    console.log("Error during logout:", e);
  }
});
app.use("/reset",resetRouter)


app.get("/count", newMessageCount)

module.exports = app