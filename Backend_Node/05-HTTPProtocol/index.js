const http = require("http")
const server = http.createServer(function(req,res) {
    console.log('Got an incomming Request')
    // we connect to database
    res.writeHead(200) // successfull res
    res.end("Thanks for visiting")
})
server.listen(3000, function() {
    console.log(`HTTP is running on port Given`)
})
