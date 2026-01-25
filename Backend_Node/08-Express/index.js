const express = require('express')
const app = express()
const PORT = 8000
app.use(express.json());

// Routings

app.get('/', (req,res) => {
    res.end(`HomePage`)
})
app.get('/contact-us', (req,res) => {
    res.end(`We are at the Contact page`)
})
app.post('/me', (req,res) => {
    res.status(202).end("Sending the Post")
    console.log('Posting responce sending...')
})

app.listen(PORT,() => {
    console.log("The port is Alive...")
})