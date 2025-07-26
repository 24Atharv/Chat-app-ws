import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({port: 8080});

interface User {
    socket: WebSocket,
    room: string
}

let allSocket: User[] = []

wss.on("connection", (socket) => {
    socket.on("message", (message) => {
        let pareseMessage = JSON.parse(message as unknown as string);

        if(pareseMessage.type === 'join') {
            allSocket.push({
                socket: socket,
                room: pareseMessage.payload.roomId
            })
        }
    })
})

