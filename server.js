const express = require('express')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')


const publicDir = path.join(__dirname, "./public")

const app = express()

app.use(express.static(publicDir))

const server = http.createServer(app) // this is the key difference for websockets

const io = socketio(server) // create an instance of socket.io

io.on("connection", (socket) => {     // socket represent the user thats connected a bit like 'e' in eventlistenrs
    console.log('New WebSocket Connection')

    // socket.emit("message", "Hello from io - there")

    // socket.on("sendMessage", param => {
    //     // console.log(param)
    //     io.emit("message", param)
    // })

    socket.emit("message", "Welcome to the chatroom")
    // socket.broadcast.emit("message", "new user joined")

    socket.on('sendMessage', (message) => {
        io.emit('message', message)
    })

})



server.listen(3001, () => {  // this is then changed from app.listen to server.listen
    console.log('The server is running on port 3001..')
})

