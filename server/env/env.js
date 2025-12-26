
require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL;
const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY;
const NODE_ENV = process.env.NODE_ENV || 'development';
module.exports = {
    databaseUrl: DATABASE_URL,
    ACCESS_TOKEN_KEY,
    NODE_ENV
};