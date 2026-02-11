import express from 'express'
import db from '../db/index.js'
import { userTable } from '../db/schema.js'
import { randomBytes, createHmac } from 'node:crypto' // for saltPassword
import { eq } from 'drizzle-orm'
import jwt from 'jsonwebtoken'
import {ensureAuthentication} from '../middleware/auth.middleware.js'


//userRouter

const router = express.Router()

router.patch('/', ensureAuthentication, async (req, res) => {
    const { name } = req.body
    await db.update(userTable).set({ name }).where(eq(userTable.id, user.id))

    return res.json({Status: `succss`})
})

router.get('/', async (req, res)  => {
    const user = req.user

    if(!user) {
        return res.status(401).json({error: `you are not logged in`})
    }
    return res.json({ user })
})

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body
    const [existingUser] = await db // check for existing user
    .select({
        email: userTable.email,
    })
    .from(userTable)
    .where((table) => eq(table.email,email))

    if(existingUser) { //  checking existing user the email not found in the DB
        return res
        .status(400)
        .json({error: `user with email ${email} already exist!`})
    }

    // Hashing The password
    const salt = randomBytes(256).toString('hex') // for password hashing
    const hashedPassword = createHmac('sha256', salt).update(password).digest('hex') // this is hashed password...

    // if email is found in the DB
    if(!existingUser) {
        const user = await db.insert(userTable).values({
            name,
            email,
            password: hashedPassword, // take data from hashedPassword ->(Save it to) -> password
            salt
        })
    }
    return res.status(201).json({message: `The user is added in the DB with Email: ${email}`})

})

router.post('/login', async (req, res)  => {
    const { email, password } = req.body
    const [existingUser] = await db
    .select({
        id: userTable.id,
        name: userTable.name,
        email: userTable.email,
        salt: userTable.salt,
        password: userTable.password // hashed password for existing user
    })
    .from(userTable)
    .where((table) => eq(table.email,email))

    if(!existingUser) {
        return res.status(404).json({error: "User with this emial does not exist"})
    }

    const salt = existingUser.salt // salt also saved in thr DB
    const existingHash = existingUser.password // hased password

    const checkHash = createHmac('sha256', salt).update(password).digest('hex')

    if (checkHash !== existingHash) {
        return res.json({error : 'Your password is not correct'}) // for wrong password
    }   

    // session Creation for every user
    // const [session] = await db.insert(userSession).values({
    //     userId: existingUser.id,

    // }).returning({id: userSession.id})

    const payload = {
        id: existingUser.id,
        email: existingUser.email,
        name: existingUser.name
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET)


    // password matches
    return res.json({
        msg: `Welcome ${existingUser.name}`,
        // sessionId: session.id
        token: token
    })

})

export default router