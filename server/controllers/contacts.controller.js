const { ContactsTable, pricesTable } = require("../modals/schema");
const db = require("../db/db");

const contactsPost = async (req, res) => {
  console.log("NEW CONTACT ADD REQUEST");
  try {
    const { email, phone } = req.body;

    if (!email || !phone) {
      return res.status(400).json({ message: "Email and phone are required" });
    }
    await db.delete(ContactsTable);

    await db.insert(ContactsTable).values({
      email: email,
      phone: phone,
    });
    return res.status(201).json({ message: "Contact added successfully" });
  } catch (err) {
    console.error("Error inserting contact:", err);
    res.status(500).send({ message: "Internal Server Error" });
    return;
  }
};

const contactsGet = async (req, res) => {
  try {
    const contacts = await db.select().from(ContactsTable);
    let foundContacts, foundPrices;

    if (contacts.length > 0) {
      foundContacts = contacts[0];
    } else {
      foundContacts = contacts;
    }

    const prices = await db.select().from(pricesTable);
    if (prices.length > 0) {
      foundPrices = prices[0];
    } else {
      foundPrices = prices;
    }

    res.status(200).json({ ...foundContacts, ...foundPrices });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const pricesPost = async (req, res) => {
  console.log("NEW PRICES ADD REQUEST");

  try {
    const {
      privateSession: oneVone,
      smallGroup: smallGroup,
      groupClass: groupClasses,
    } = req.body;

    if (!oneVone || !groupClasses || !smallGroup) {
      return res.status(400).json({ message: "All price fields are required" });
    }

    await db.delete(pricesTable);

    await db.insert(pricesTable).values({
      oneVone: oneVone,
      groupClasses: groupClasses,
      smallGroup: smallGroup,
    });

    return res.status(201).json({ message: "Prices added successfully" });
  } catch (error) {
    console.log("Error adding prices:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const pricesGet = async (req, res) => {
  try {
    const prices = await db.select().from(pricesTable);
    if (prices.length > 0) {
      return res.status(200).json(prices[0]);
    }
    return res.status(200).json(prices);
  } catch (error) {
    console.log("Error fetching prices:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { contactsPost, contactsGet, pricesPost, pricesGet };
