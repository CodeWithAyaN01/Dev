const EventEmitter = require('events');

class ChatRoom extends EventEmitter {
    constructor() {
        super()
        this.users = new Set(); // crates an instance property ,, set is a data S
    }

    join(user) {
        this.users.add(user)
        this.emit('join',user) // events
    }

    sendMessage(user , msg) {
        if(this.users.has(user)) {
            this.emit('message' , user , msg) // events
        }else {
            console.log(`The user ${user} is not here `) 
        }
    }

    leave(user) {
        if(this.users.has(user)){
            this.users.delete(user)
            this.emit('leave',user) // events
        }else {
            console.log(`the user in not is chat ${user} `)
        }
    }
}

module.exports = ChatRoom