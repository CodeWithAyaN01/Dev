
import { pgTable, uuid, varchar, text, timestamp } from 'drizzle-orm/pg-core'

export const userTable = pgTable('users', {
    id: uuid().primaryKey().defaultRandom(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    password: text().notNull(),
    salt: text().notNull(), // for password security
})


export const userSession = pgTable('user-session', {
    id: uuid().primaryKey().defaultRandom(),
    userId: uuid()
    .references(() => userTable.id)
    .notNull(),
    createdAt: timestamp().defaultNow().notNull(), // for Auto logout features
})