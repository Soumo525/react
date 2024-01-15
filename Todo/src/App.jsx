import React, { useState } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';


function App() {
  const [list,setList] = useState([]);
  let addList = (inputElement) => {
    if(inputElement !== '')
    setList([...list,inputElement])
  }
  //console.log(addList)
  const deleteItem = (e) => {
    let newList = [...list];
    newList.splice(e,1);
    setList([...newList])
  }
  return (
    <div className='main-container'>
      <div className='center-container'>
        <TodoInput addList = {addList} />
        {list.map((listItem,i)=>{
          return (
            <TodoList index = {i} key ={i} item ={listItem} 
            deleteList = {deleteItem}

            />
          )
        })}
        
      </div>
    </div>
  )
}

export default App