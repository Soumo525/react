import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Clock from './Components/Clock'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState('')
  
  return (
      <>
      <div>
      {count}
      </div>
        <Card />
        <Clock />
      </>
  )
}

export default App
