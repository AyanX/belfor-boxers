const { ContactsTable } = require("../modals/schema");
const db = require("../db/db");

const contactsPost = async (req, res) => {
  try {
    const { email, phone } = req.body;

    await db
      .insert(ContactsTable)
      .values({
        email: email,
        phone: phone,
      })
      .onDuplicateKeyUpdate({
        set: {
          phone: phone,
          email:email
        },
      });
  } catch (err) {
    console.error("Error inserting contact:", err);
    res.status(500).send({message:"Internal Server Error"});
    return;
  }
};

const contactsGet = async (req, res) => {
  // Logic to get all contacts
  res.status(200).send("List of contacts");
};

const pricesPost = async (req, res) => {
  // Logic to add new prices
  res.status(201).send("Prices added");
};


module.exports = { contactsPost, contactsGet, pricesPost };