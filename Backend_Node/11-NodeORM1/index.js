const { asyncWrapProviders } = require('async_hooks')
require('dotenv/config') // importing dotenv file
const db = require('./DB')
const { userTable } = require('./drizzle/schema.js')


// Getting Users
async function getAllUsers() {
    const users = await db.select().from(userTable)
    console.log(`User in DB`,users)
    return users // in jsoin format
}

// Add user

async function createUser({id, name, email}) {
    await db.insert(userTable).values({
        id,
        name,
        email,
    })
}

// Hard Code user Creation..
// createUser({
//     id: 3,
//     name: "Div",
//     email: "Div@gmail.com"
// })
// createUser({
//     id: 4,
//     name: "Krish",
//     email: "Krish@gmail.com"
// })

getAllUsers() // gettingg all data by postgrese