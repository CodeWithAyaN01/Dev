// Learning FS module in Node.js

const fs = require('fs') 
// Import file system module

const content = fs.readFileSync("./Notes.txt", "utf-8")
// Read file synchronously as text

console.log(content)
// Print file content
