const EventEmitter = require('events')

class Chat extends EventEmitter {
    sendMessgae(msg) {
        console.log(`Message sent: ${msg}`)
        this.emit("messageReceived" ,msg)
    }
}

const chat = new Chat()

chat.on('messageReceived', (msg) => {
    console.log(`New Message: ${msg}`);
})

// trigger 

chat.sendMessgae("Hello bhai kaise ho")