import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15) // hooks
  
 //let counter = 10
const addValue = () =>{
 
  if (counter < 20) {
    counter = counter + 1
    console.log(counter);
  } 
  setCounter(counter)
}

const removeValue = () =>{
  //setCounter(counter -1)
  if (counter > 0) {
    counter = counter -1
  }
  setCounter(counter)
}
  return (
    <>
      <h1>Counter</h1>
      <h2>counter Value {counter}</h2>
      <button onClick={addValue}>Add Value</button> 
      <br/>
      <button onClick={removeValue}>Remove Value</button>
      
    </>
  )
}

export default App
