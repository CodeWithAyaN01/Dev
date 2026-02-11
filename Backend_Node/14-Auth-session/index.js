// Entry-Point File
import express from 'express'
import userRoutes from './routes/user.routes.js'
import adminRoutes from './routes/admin.routes.js'
import { authenticationMiddleware } from './middleware/auth.middleware.js'

const app = express()
const PORT = 8000

app.use(express.json())
app.use(authenticationMiddleware)


// Checks if the User-Session Exist ?
// app.use(async function(req,res,next){
//     // USE SESSION DB
//     // const sessionId = req.header('session-id')
//     // if(!sessionId) {
//     //     return next()
//     // }

//     // JWT
//     try {
//         const tokenHeader = req.header('authorization')
//         if(!tokenHeader) {
//             return next()
//         }

//         if(!tokenHeader.startsWith('Bearer')) {
//             return res.status(400).json({ error: `Start with bearer` })
//         }
        
//         const token = tokenHeader.split(' ')[1]

//         // decode the token
//         const decode = jwt.verify(token, process.env.JWT_SECRET)

//         // NO NEED
//         // const [data] = await db
//         // .select({
//         //     sessionId: userSession.id,
//         //     id: userTable.id,
//         //     userId: userSession.userId,
//         //     name: userTable.name,
//         //     email: userTable.email
//         // })
//         // .from(userSession)
//         // .rightJoin(userTable,eq(userTable.id,userSession.userId))
//         // .where(table => eq(table.sessionId, sessionId))
//         // if(!data) {
//         //     return next()
//         // }
//         // req.user = data
//         req.user = decode
//         next()
//     }catch (error) {
//         res.json({error: `You are a tammpered token`})
//     }

app.use('/user', userRoutes)
app.use('/admin', adminRoutes)

app.get('/', (req,res) => {
    res.status(201).json({message: `The server is running on port ${PORT}`})
})


app.listen(PORT, () => {
    console.log("Server is Running...")
})

