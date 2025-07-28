export const Footer = () => {
    return <div className="py-3 px-3 border border-[#404040] rounded mt-3
    flex justify-between">
        <input id="message" type="text" placeholder="Type a message..." />
        <span className="bg-gray-200 text-black px-3 py-1 rounded">
            <button>Send</button>
        </span>
    </div>
}

