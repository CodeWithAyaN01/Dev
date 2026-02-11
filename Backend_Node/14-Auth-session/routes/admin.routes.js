import express from 'express'
import db from '../db/index.js'
import { userTable } from '../db/schema.js'
import { ensureAuthentication } from '../middleware/auth.middleware.js'
const router = express.Router()

// Get all user data
router.get('/user', ensureAuthentication, async (req, res) => {
    const Users = await db.select({
        id: userTable.id,
        name: userTable.name,
        email: userTable.email
    })
    .from(userTable)
    return res.json({ Users }).status(200)
})

export default router