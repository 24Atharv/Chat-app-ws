import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 8080 });

interface User {
    socket: WebSocket,
    room: string
}

let allSocket: User[] = []

wss.on("connection", (socket) => {
    socket.on('message', (message) => {
        let parsedMessage = JSON.parse(message as unknown as string);

        if (parsedMessage.type === 'join') {
            console.log("User joined room " + parsedMessage.payload.roomId);
            allSocket.push({
                socket,
                room: parsedMessage.payload.roomId
            })
        }

        if (parsedMessage.type === 'chat') {
            console.log("user wants to chat");
            let currentUserRoom = null;
            let found = allSocket.find((x) => x.socket = socket);
            if (found) {
                currentUserRoom = found.room
            }

            for (let i = 0; i < allSocket.length; i++) {
                if (allSocket[i].room == currentUserRoom) {
                    allSocket[i].socket.send(parsedMessage.payload.message);
                }
            }
        }
    })
})

