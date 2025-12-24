const { databaseUrl} = require('./env/env');
const { defineConfig } = require('drizzle-kit')


module.exports = defineConfig({
  out: './drizzle',
  schema: './modals/schema.js',
  dialect: 'mysql',
  dbCredentials: {
    url: databaseUrl,
  },
});