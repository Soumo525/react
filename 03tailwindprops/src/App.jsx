import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName : "Soumo",
    
  }
  let newArry = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 rounded-xl text-black mb-4'>Tailwind css</h1>
    {/* <Card channel = "Hi" someObj = {myObj}  someArry = {newArry}/> */}
   
    <Card userName = "Hi"  btnText = "Click Me"/>
    <Card userName = "Soumo"  btnText = "Visit Me" />
    </>
  )
}

export default App
