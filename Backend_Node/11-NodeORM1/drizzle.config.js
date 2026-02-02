// before setup install Drizzle kit by -> npm i drizzle-kit
const { defineConfig } = require('drizzle-kit')
require('dotenv/config')

const config = defineConfig({
    dialect: "postgresql",
    out: "./drizzle",
    schema: "./drizzle/schema.js",
    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
})
module.exports = config

// to read this file do 

// npx drizzle-kit push

// npx drizzle-kit studio
