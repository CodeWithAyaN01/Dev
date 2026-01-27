const express = require('express')
const { BOOKS } = require('../DB/books')
const { middleWarefunction } = require('../Middlewares/middleware')
const router = express.Router() // Router Provided by Express 

// insted of app make it router

router.get('/', (req,res) => {
    res.json(BOOKS) // gives the response in the json format
})

router.get('/:id', middleWarefunction, (req,res) => {
    const id = req.params.id // id that we put in URL /books/:id -> this id is params.id
    const book = BOOKS.find((e) => e.id == id) // e.id and id is different # here the id is passed as a string

    if(isNaN(id))
        return res.status(400).json({error:'id must be of type number'})

    if(!book) {
        return res
        .status(404)
        .json({error: "Book not found"})
    }
    return res.json(book)
})

router.post('/', (req,res) => {
    // this syntax maps to each variable
    const { title, author } = req.body // data gets from the client to the server

    // Validation 
    if(!title || title === '')
        return res.status(400).json({error: 'Title is required'})

    if(!author || author === '')
        return res.status(400).json({error: 'Author is required'})

    // Creation
    const id = BOOKS.length + 1 // books is the DB
    const book = { id, title, author }
    BOOKS.push(book)

    // Final message for Books
    return res.status(201).json({message: 'The book was created OK!'})

})

router.delete('/:id', (req,res) => {
    const id = req.params.id

    if(isNaN(id))
        return res.status(400).json({error:'id must be of type number'})

    const indexToDelete = BOOKS.findIndex((e) => e.id == id) // index fetching
    if(indexToDelete < 0)
        return res
        .status(404)
        .json({error: "Book not found"})

    BOOKS.splice(indexToDelete, 1) // method to delete a book

    return res.status(200).json({message: `Book deleted at index ${indexToDelete}`})
})

// exporting
module.exports = router