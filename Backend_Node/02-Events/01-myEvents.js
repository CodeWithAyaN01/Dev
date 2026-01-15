const EventEmitter = require("events") // module

const eventEmitter = new EventEmitter() // making a class

const fn = function(receivedData) {
    console.log("hello this is a function", receivedData)
}

eventEmitter.on('greet', (receivedData) => {
    console.log(`hello this the Data -> ${receivedData}`)
})

eventEmitter.on('greet' , fn)
eventEmitter.emit('greet',"SendData")