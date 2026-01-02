const { AcademySettings } = require("../modals/schema");
const db = require("../db/db");

async function getAcademySettings(req, res) {
  try {
    const settings = await db.select().from(AcademySettings).limit(1);
    res.status(200).json(settings[0] || {});
  } catch (error) {
    console.error("Error fetching academy settings:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function updateAcademySettings(req, res) {
  const { yearFounded, proMembers, location, trainingHours } = req.body;
  try {
    await db
      .insert(AcademySettings)
      .values({
        id: 1, // Force the ID to 1 to ensure we only ever have one settings row
        yearFounded,
        proMembers,
        location,
        trainingHours,
      })
      .onDuplicateKeyUpdate({
        set: {
          yearFounded,
          proMembers,
          location,
          trainingHours,
        },
      });

    res.status(200).json({ message: "Settings updated successfully" });
  } catch (error) {
    console.error("Error updating academy settings:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}


module.exports = { getAcademySettings, updateAcademySettings };