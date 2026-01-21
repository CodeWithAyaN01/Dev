const http = require('node:http')
const server = http.createServer(function (req,res) {
    console.log(`Incomming request at ${Date.now()}`)
    console.log(req.url) // prints the current path
    //.. DB connection
    switch (req.url) {
        case '/':
            res.writeHead(200)
            return res.end("homepage")
        case '/contact-us':
            res.writeHead(200)
            return res.end("Contact me")
        default :
        return res.writeHead(404)
    }
})
server.listen(8000 , () => {
    console.log("The server is listining @ port 8000")
})