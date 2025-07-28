import { useEffect, useRef, useState } from "react"
import { NavBar } from "./navbar"
import { RoomCode } from "./RoomCode"

export const Dashboard = () => {

    const [messages, setMessage] = useState([]);
    const wsRef = useRef();

    useEffect(() => {
        if (wsRef.current) return;

        const ws = new WebSocket("ws://localhost:8080");

        ws.onopen = () => {
            ws.send(JSON.stringify({
                type: "join",
                payload: { roomId: "red" }
            }));
        };

        ws.onmessage = (event) => {
            setMessage((s) => [...s, event.data]);
        };

        wsRef.current = ws;

        return () => {
            ws.close();
            wsRef.current = null;
        };
    }, []);


    return <div className="bg-black min-h-screen flex py-10 justify-center text-white">
        <div className="border border-[#a3a3a3] p-6 h-auto w-120 rounded-xl">
            <NavBar />
            <RoomCode />
            <div className="border border-[#a3a3a3] h-90 rounded-lg mt-4">
                {messages.map((message, index) => (
                    <div key={index} className="mt-3 flex ml-4">
                        <span className="p-4 bg-white text-black rounded">
                            {message}
                        </span>
                    </div>
                ))}

            </div>
            <div className="py-3 px-3 border border-[#404040] rounded mt-3
                            flex justify-between">
                <input id="message" type="text" placeholder="Type a message..." />
                <span className="bg-gray-200 text-black px-3 py-1 rounded">
                    <button onClick={() => {
                        const message = document.getElementById('message')?.value;
                        if (!message?.trim()) return;
                        wsRef.current.send(JSON.stringify({
                            type: "chat",
                            payload: {
                                message: message
                            }
                        }))
                    }}>Send</button>
                </span>
            </div>
        </div>
    </div>
}
