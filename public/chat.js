const socket = io()

socket.on('message' , (bananas) => {
    console.log(bananas)
})