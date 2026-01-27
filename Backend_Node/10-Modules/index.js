const express = require('express')
const fs  = require('node:fs')
const app = express()
const bookRouter = require('./routes/book.routes')
const PORT = 8000

// Middleware... (Plugins) to read JSON data coming from client
app.use(express.json()) // -> goes to next



app.use((req,res,next) => {
    console.log("I am a middleware A")
    next() // sends the req to the next middleware or to the route
})

app.use((req,res,next) => {
    console.log("I am the middleware B")
    next()
})

app.use((req,res,next) => {
    const log = `[Date : [${Date.now()}] Method: ${req.method} Path: ${req.path}]\n`
    fs.appendFileSync('./log.txt', log, 'utf-8')
    next()
} )

// Routes
app.use('/books',bookRouter)


// starting the server
app.listen(PORT, () => {
    console.log(`The server is ALIVE on PORT ${PORT}`)
})
