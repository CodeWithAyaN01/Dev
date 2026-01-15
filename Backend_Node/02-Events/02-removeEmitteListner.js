const EventEmitter = require('events')

const eventEmitter = new EventEmitter()

const greet = () => {
    console.log("This is a Greet function")
}

eventEmitter.on('test',greet)
eventEmitter.emit('test');
eventEmitter.removeListener('test',greet) // removal of Emitter 
eventEmitter.emit('test');

