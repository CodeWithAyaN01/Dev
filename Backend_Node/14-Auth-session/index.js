// Entry-Point File
import express from 'express'
import userRoutes from './routes/user.routes.js'

const app = express()
const PORT = 8000
app.use(express.json())
app.get('/', (req,res) => {
    res.status(201).json({message: `The server is running on port ${PORT}`})
})

app.use('/user', userRoutes)

app.listen(PORT, () => {
    console.log("Server is Running...")
})

