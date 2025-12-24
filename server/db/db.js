const { drizzle } = require("drizzle-orm/mysql2")
const mysql2 = require("mysql2/promise")
const { databaseUrl } = require("../env/env")


const db = drizzle(databaseUrl);

module.exports = db