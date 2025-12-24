
const {boolean} = require("drizzle-orm/gel-core")

const {mysqlTable, serial, varchar} = require("drizzle-orm/mysql-core")


 const MessagesTable = mysqlTable('messages_table', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  message: varchar('message', { length: 1000 }).notNull(),
  subject: varchar('subject', { length: 255 }).notNull(),
  read:boolean('read').default(false).notNull(),
});

const ContactsTable = mysqlTable('contacts_table', {
 id: serial('id').primaryKey(),
 email: varchar('email', { length: 255 }).notNull(),
 phone: varchar('phone', { length: 20 }).notNull(),
});


const pricesTable = mysqlTable('prices_table', {
 id: serial('id').primaryKey(),
 oneVone: varchar('1v1', { length: 50 }).notNull(),
 groupClasses: varchar('group', { length: 50 }).notNull(),
 smallGroup: varchar('small_group', { length: 50 }).notNull(),
});

module.exports = { MessagesTable, ContactsTable, pricesTable }