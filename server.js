const express = require('express')
const path = require('path')
const http = require('http')
const socketio = require('socketio')


const publicDir = path.join(__dirname, "./piublic")

const app = express()

app.use(express.static(publicDir))

const server = http.createServer(app) // this is the key difference for websockets

const io = socketio(server) // create an instance of socket.io

server.listen(3001, () => {  // this is then changed from app.listen to server.listen
    console.log('The server is running on port 3001..')
})

