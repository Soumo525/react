import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>
        Custom App
      </h1>
    </div>
  )
}
const anotherUser = "Chai aur React"

const anotherElement = (
  <a href = "https://google.com" target = '_blank'>Visit Google</a>
)
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me ',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElement
  
)
