// create a model

const { pgTable, integer, varchar, uuid, text } = require('drizzle-orm/pg-core')

const authorTable = require('./author.models')

const bookTable = pgTable('books', {
    id: uuid().primaryKey().defaultRandom(),
    title: varchar({length: 100}).notNull(),
    description: text(),
    authorId: 
    uuid()
    .notNull()
    .references(() => authorTable.id)

})

module.exports = bookTable