import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ex from './Components/Ex'

function App() {
  const [advice,setAdvice] = useState('')
  const [count, setCount] = useState(0);
  async function getadvice(){
   const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json();
  console.log(data.slip.advice);
  setAdvice(data.slip.advice)
  setCount((e) => e + 1)
  
  }
  useEffect(function(){
    getadvice();
  },[])
  return (
    <>
      <h1>{advice}</h1>
      <button onClick={getadvice}> Advice</button>
      <Ex count = {count} />
      
    </>
  )
}

export default App
