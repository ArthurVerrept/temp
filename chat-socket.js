const socket = io('http://localhost:3000', { query: "name=arduino" })


function showVal(val) {
    console.log(val)
    socket.emit('velocity', {velocity: val})
}