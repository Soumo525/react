import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import Data from './Components/Data/Data'
import Card from './Components/Card/Card'
import Button from './Components/Button/Button';
function App() {
  const [item, setItem] = useState (Data)
  const menuItem = [...new Set(Data.map((val) => val.category))]
  const filterItem = (cat) => {
    const newItem = Data.filter((newVal) => newVal.category === cat)
    setItem(newItem)
  }
  return (
    <>
      <div className='container-fluid' >
        <div className='row'>
          <h1 className="col-12 text-center my-3 fw-bold">Food Filtering App</h1>
          <Button menu ={ menuItem }  filterItem = {filterItem}
            setItem = {setItem}
          />
          <Card  itemFood = {item} />
         </div>
      </div>
      
    </>
  )
}

export default App
