import { NavBar } from "./navbar"

export const NewRoom = () => {
    return <div>
        <NavBar />
        <br></br>
        <div className="flex flex-col gap-3">
        <span className="p-2 bg-white text-black flex flex-col items-center">
            <button className="">Create New Room</button>
        </span>
        <span className="p-3 text-black flex justify-between">
            <input type="text" placeholder="Enter Room Code" 
            className="text-white border border-gray-300 rounded p-2 pr-20" />
            <button className="bg-white rounded p-2">Join Room</button>
        </span>
        </div>
    </div>
}
