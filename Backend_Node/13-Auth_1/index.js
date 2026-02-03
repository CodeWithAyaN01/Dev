const express = require('express')

const app = express()
const PORT = 8000

// middleware
app.use(express.json())

const DIARY = {} // objects
const EMAILS = new Set()


// Routes

app.post('/signup', (req, res) => {
    const { name, email, password } = req.body
    if (EMAILS.has(email)) {
        return res.status(400).json({error: 'Email already taken'})
    }

    const token = `${Date.now()}`
    DIARY[token] = {name, email, password}
    EMAILS.add(email)
    console.log(DIARY)
    return res.status(200).json({Message: `The email has been registered`})
})

app.post('/me', (req, res) => {
    const { token } = req.body

    // No valid token
    if(!token) {
        return res.status(400).json({error: `Missing token `})
    }

    if (!(token in DIARY)) {
        return res.status(400).json({error: `Invalid token `})
    }
    // If Token 
    const entry = DIARY[token]

    return res.json({data: entry})
})

app.post('/private-data', (req,res) => {
    const { token } = req.body

    if(!token) {
        return res.status(400).json({error: `Missing Token`})
    }
    if(!(token in DIARY)) {
        return res.status(400).json({error: `Invalid Token`})
    }
    if (token) {
        const data = DIARY[token]
        return res.status(201).json({message: data})
    }
})

app.listen(PORT,() => {console.log(`Surver Running...`)})
