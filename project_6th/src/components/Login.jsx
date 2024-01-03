import React, {useState,useContext}from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [userName , setUsername] = useState ('')
    const [password, setpassword] = useState('')

    const { setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})
    }
  return (
    <div>
        <h2> Login</h2>
        <input type=' text' 
        value={userName}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='name'>
        </input>
        <input type=' text' 
        value={password}
        onChange={(e) => setpassword(e.target.value) }
        placeholder='password'></input>
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login