import './App.css'
import { Footer } from './components/Footer'
import { NavBar } from './components/navbar'
import { RoomCode } from './components/RoomCode'
import { ShowBar } from './components/ShowBar'

function App() {
  return <div className='bg-black min-h-screen flex py-10 justify-center text-white'>
    <div className='border border-[#a3a3a3] p-6 h-auto w-120 rounded-xl'>
    <NavBar />
    <RoomCode />
    <ShowBar />
    <Footer />
    </div>
  </div>
}

export default App
