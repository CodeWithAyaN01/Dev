// importing Drizzle with The URL

import { drizzle } from 'drizzle-orm/node-postgres'

// Postgres URL :  postgres://<username>:<password>@<host>:<port>/<db_name>

const db = drizzle('postgres://postgres:admin@localhost:5432/mydb')

module.exports.db