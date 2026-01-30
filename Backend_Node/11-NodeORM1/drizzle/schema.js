import { integer, pgTable, varchar } from "drizzle-orm/pg-core"

// pgTable is used to create a table
// Table content is stored in an object notation

const userTable = pgTable('users', {
    id: integer().primaryKey(),
    name: varchar({length: 255}).notNull(),
    email: varchar({length: 255}).notNull().unique()
})

module.exports = {
    userTable
}