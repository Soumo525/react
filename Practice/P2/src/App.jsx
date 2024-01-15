import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("#99AFD7");
   async function randomColor(){  // https://x-colors.yurace.pro/ website
     const getcolor = await fetch("https://x-colors.yurace.pro/api/random")
     const data = await getcolor.json()
     console.log(data);
     setColor(data.hex)
   }
 
  return (
    <>
    <div className='w-full h-screen' style={{background : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <button className="bg-blue-500 hover:bg-blue-700 
      text-white font-bold py-2 px-4 rounded"
        onClick={randomColor}>
         Button
      </button>
      
      </div>
      </div>

    </>
  )
}

export default App
