// Entry-Point File
import express from 'express'
import userRoutes from './routes/user.routes.js'
import db from './db/index.js'
import { userTable, userSession } from './db/schema.js'
import { eq } from 'drizzle-orm'

const app = express()
const PORT = 8000

app.use(express.json())

app.use(async function(req,res,next){
    const sessionId = req.headers('session-id')
    if(!sessionId) {
        return next()
    }

    const [data] = await db
    .select({
        sessionId: userSession.id,
        id: userTable.id,
        userId: userSession.userId,
        name: userTable.name,
        email: userTable.email
    })
    .from(userSession)
    .rightJoin(userTable,eq(userTable.id,userSession.userId))
    .where(table => eq(table.sessionId, sessionId))

    if(!data) {
        return next()
    }
    req.user = data
    next()

})

app.use('/user', userRoutes)

app.get('/', (req,res) => {
    res.status(201).json({message: `The server is running on port ${PORT}`})
})


app.listen(PORT, () => {
    console.log("Server is Running...")
})

