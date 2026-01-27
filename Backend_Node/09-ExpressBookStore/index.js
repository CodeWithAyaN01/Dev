const express = require('express')
const fs  = require('node:fs')
const app = express()
const PORT = 8000

// DB
const books = [
    { id: 1, title: 'Book One', author: 'Ayan' },
    { id: 2, title: 'Book Two', author: 'Krish' },
]

// Middleware... (Plugins) to read JSON data coming from client
app.use(express.json()) // -> goes to next

// custom middleware 

// function for Middleware

function middleWarefunction(req,res,next) {
    console.log("MiddleWare 3: Running The get Book by ID request...👌")
    next()
}

app.use((req,res,next) => {
    console.log("I am a middleware A")
    // return res.status(400).json({message : "the middleware is working this means the stucking of res"}) // res to the user with stuck code
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


app.get('/books', (req,res) => {
    res.json(books) // gives the response in the json format
})

app.get('/books/:id', middleWarefunction, (req,res) => {
    const id = req.params.id // id that we put in URL /books/:id -> this id is params.id
    const book = books.find((e) => e.id == id) // e.id and id is different # here the id is passed as a string

    if(isNaN(id))
        return res.status(400).json({error:'id must be of type number'})

    if(!book) {
        return res
        .status(404)
        .json({error: "Book not found"})
    }
    return res.json(book)
})

// adding a book’s info to the database

app.post('/books', (req,res) => {
    // this syntax maps to each variable
    const { title, author } = req.body // data gets from the client to the server

    // Validation 
    if(!title || title === '')
        return res.status(400).json({error: 'Title is required'})

    if(!author || author === '')
        return res.status(400).json({error: 'Author is required'})

    // Creation
    const id = books.length + 1 // books is the DB
    const book = { id, title, author }
    books.push(book)

    // Final message for Books
    return res.status(201).json({message: 'The book was created OK!'})

})

// deleting a book by its index 
app.delete('/books/:id', (req,res) => {
    const id = req.params.id

    if(isNaN(id))
        return res.status(400).json({error:'id must be of type number'})

    const indexToDelete = books.findIndex((e) => e.id == id) // index fetching
    if(indexToDelete < 0)
        return res
        .status(404)
        .json({error: "Book not found"})

    books.splice(indexToDelete, 1) // method to delete a book

    return res.status(200).json({message: `Book deleted at index ${indexToDelete}`})
})


// starting the server
app.listen(PORT, () => {
    console.log(`The server is ALIVE on PORT ${PORT}`)
})
