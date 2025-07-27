import './App.css'
import { NavBar } from './components/navbar'

function App() {
  return <div className='bg-black min-h-screen flex py-10 justify-center text-white'>
    <div className='border border-[#a3a3a3] p-6 h-auto w-auto rounded-2xl'>
    <NavBar />
    </div>
  </div>
}

export default App
