const db = require("../db/db");
const { MessagesTable } = require("../modals/schema");

const getMessages = async (req, res) => {
  try {
    const messages = await db.select().from(MessagesTable);
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const postMessage = async (req, res) => {
  try {
    const { name, email, message, subject } = req.body;
    if (!name || !email || !message || !subject) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const result = await db.insert(MessagesTable).values({
      name,
      email,
      message,
      subject,
    });
    res
      .status(201)
      .json({ message: "Message created successfully", id: result.insertId });
  } catch (error) {
    console.error("Error creating message:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getMessages, postMessage };
