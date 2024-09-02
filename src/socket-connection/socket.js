import  io  from "socket.io-client"
const socket = io.connect(process.env.REACT_APP_BASE_URI)

const connect_socket = ()=>{
    socket.on("connect",(s)=> {
        console.log("Welcome To Whatsapp Clone")
    })
}

export {socket, connect_socket};