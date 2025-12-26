const { eq,desc } = require("drizzle-orm");
const db = require("../db/db");
const { MessagesTable } = require("../modals/schema");

const getMessages = async (req, res) => {
  try {
    const messages = await db
      .select()
      .from(MessagesTable)
      .orderBy(desc(MessagesTable.createdAt));
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

const readMessages = async (req, res) => {
  try {
    const { id } = req.params;

    const message = await db
      .select()
      .from(MessagesTable)
      .where(eq(MessagesTable.id, id));

    if (!message[0]) {
      return res.status(404).json({ message: "Message not found" });
    }
    await db
      .update(MessagesTable)
      .set({ read: true })
      .where(eq(MessagesTable.id, id));

    res.status(200).json({ message: "Message marked as read" });
  } catch (error) {
    console.log("Error marking message as read:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteMessage = async (req, res) => {
  console.log("Delete message request received", req.params.id);
  try {
    const { id } = req.params;
    const messageToDelete = await db
      .select()
      .from(MessagesTable)
      .where(eq(MessagesTable.id, id));
    if (!messageToDelete[0]) {
      console.log("Message not found for deletion:", id);
      return res.status(404).json({ message: "Message not found" });
    }
    await db.delete(MessagesTable).where(eq(MessagesTable.id, id));

    return res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    console.log("Error deleting message:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getMessages, postMessage, readMessages, deleteMessage };
