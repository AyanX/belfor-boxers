
const {boolean} = require("drizzle-orm/gel-core")

const {mysqlTable, serial, varchar,timestamp ,int,json} = require("drizzle-orm/mysql-core")


 const MessagesTable = mysqlTable('messages_table', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  message: varchar('message', { length: 1000 }).notNull(),
  subject: varchar('subject', { length: 255 }).notNull(),
  read:boolean('read').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

const ContactsTable = mysqlTable('contacts_table', {
 email: varchar('email', { length: 255 }).notNull().primaryKey(),
 phone: varchar('phone', { length: 20 }).notNull(),
});


const pricesTable = mysqlTable('prices_table', {
 id: serial('id').primaryKey(),
 oneVone: varchar('1v1', { length: 50 }).notNull(),
 groupClasses: varchar('group', { length: 50 }).notNull(),
 smallGroup: varchar('small_group', { length: 50 }).notNull(),
});

const AdminTable = mysqlTable('admin_table', {
 email: varchar('email', { length: 255 }).notNull().primaryKey(),
 password: varchar('password', { length: 255 }).notNull(),
});

const AcademySettings = mysqlTable('academy_settings', {
  id: serial('id').primaryKey(),
  yearFounded: int('year_founded').default(2018),
  proMembers: int('pro_members').default(0),
  location: varchar('location', { length: 255 }),
  trainingHours: json('training_hours') 
})


module.exports = { MessagesTable, ContactsTable, pricesTable, AdminTable, AcademySettings }