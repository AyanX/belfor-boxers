/* const { drizzle } = require("drizzle-orm/mysql2")
const mysql2 = require("mysql2/promise")
const { databaseUrl } = require("../env/env")


const db = drizzle(databaseUrl);
*/


const { drizzle } = require("drizzle-orm/mysql2");
const mysql = require("mysql2/promise");

require("dotenv").config();

const pool = mysql.createPool({
  host: "localhost",
  user: process.env.DB_UNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306,

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const db = drizzle(pool);

console.log("Database pool initialized.");

module.exports = db 