import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
  
    const [username,SetUsername] = useState("suraj")
    const [password, setPassword] = useState("$uraj")
     
    const {setUser} = useContext(UserContext)

    const handleSubmit = () =>{

    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
               value={username}
               onChange={(e)=> SetUsername(e.target.value)}
        placeholder='username' />
        <input type="text"
               value={password}
               onChange={(e)=> setPassword(e.target.value)}    
        placeholder='Password' />
        <button onClick={handleSubmit}> Submit</button>
    </div>
  )
}

export default Login 