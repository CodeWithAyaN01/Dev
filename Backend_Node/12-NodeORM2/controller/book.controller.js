const db = require('../db')
const booksTable = require('../models.book.model')
const { eq } = require('drizzle-orm')

exports.getAllBooks = async function(res,req) {
    const book = await db.select().from(booksTable)
    return res.json(book)
}

// get book by Id uuid

exports.getBooksById = async function(req,res) {
    const id = req.params.id // id in URL

    const [book] = await db
    .select()
    .from(booksTable)
    .where((table) => eq(table.id, id))
    .limit(1)
}

exports.createBook = async function (res,req) {
    const { title, description, authorId } = req.body 
 
    if(!title || title === '')
        return res.status(400).json({error: 'Title is required'})

    const result = await db.insert(booksTable).values({
        title,
        description,
        authorId,
    }).returning({
        id: booksTable.id
    })

    // Final message for Books
    return res.status(201).json({message: 'The book was created OK! with id :', id: result.id })
}