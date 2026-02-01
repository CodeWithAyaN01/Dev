const { pgTable, integer, varchar, uuid, text } = require('drizzle-orm/pg-core')

const authorTable = pgTable("authors", {
    id: uuid().primaryKey().notNull().defaultRandom(),
    firstName: varchar({length: 55}).notNull(),
    lastName: varchar({length: 55}).notNull(),
    email: varchar({length: 255}).notNull().unique(),
    age: integer(),
})

module.exports = authorTable