const ChatRoom = require("./chatRoom.js")
const chat = new ChatRoom()

//Creating Listners
chat.on('join', (user) => {
    console.log(`${user} the user has joined the chat`)
})

chat.on('message' , (user,msg) => {
    console.log(`Message by ${user}: ${msg} (the message is sent)`)
})

chat.on('leave' , (user) => {
    console.log(`Notification: ${user} left the chat`)
})

// Chatting Simulation

chat.join('ayan')
chat.join('divyesh')

chat.sendMessage('ayan',"hello bro how are you..")

chat.sendMessage('divyesh' , "hello Ayan hi !!")

chat.leave('ayan')

chat.sendMessage('ayan' , "this will not be sent"); // not going to the user

chat.leave('divyesh')