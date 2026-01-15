// Learning FS module in Node.js

const { error } = require('node:console')
const fs = require('node:fs')

console.log("start of the file")

// Blocking Code With sync
// const content = fs.readFileSync('file.txt', 'utf-8') // holds till the file is read...


// Non Blocking Code Async

const content = fs.readFile('file.txt', 'utf-8' , function(error,data) {
    if(error) console.log(error)
    else console.log(data);
})


console.log("end of the file")

// fs.writeFileSync('copy.txt', content , 'utf-8') // overwrite the content
