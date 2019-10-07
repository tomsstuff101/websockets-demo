const socket = io()


const form = document.getElementById('form')
const formInput = document.getElementById('formInput')

// socket.on('message' , (bananas) => {
//     console.log(bananas)
// })



form.addEventListener('submit', e => {
    e.preventDefault()
    // console.log(e.target[0].value)

    let text = e.target[0].value

    socket.emit('sendMessage' , text)

    form.reset()
    })



//     socket.on('message' , (bananas) => {

//         console.log(bananas)    
// })