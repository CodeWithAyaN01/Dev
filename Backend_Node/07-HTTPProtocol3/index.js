const http = require("node:http")
const fs = require('node:fs')

const server = http.createServer(function (req,res) {
    const method = req.method
    const path = req.url
    
    const log = `\n[${Date.now()}]: ${method} ${path}` // action details...
    fs.appendFileSync('./log.txt',log,'utf8')// file creation

    console.log(`[${new Date().toISOString()}] ${method} ${path}`)
    switch(method) {
        case 'GET':
            switch(path) {
                case '/':
                return res.writeHead(200).end("Hello From he server 👌")
                
                case '/contact-us':
                    return res.writeHead(200).end(`you are on contact us page`)
                
                case '/tweet':
                    return res.writeHead(200).end(`you are Getting a tweet`)
            }
            break

        case 'POST':
            switch(path) {
                case '/tweet':
                    return res.writeHead(201).end('Tweet was created')
            }
        
    }
    return res.writeHead(404).end('You r lost ')
})
server.listen(8000,() => {
    console.log("Server is Alive...😊")
})