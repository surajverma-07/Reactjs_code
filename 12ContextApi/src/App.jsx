import { useState } from 'react'
import './App.css'
import UserContext from './Context/UserContext'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'
import Dash from './Components/Dash'
function App() {
  const [count, setCount] = useState(0)

  return (
     <UserContextProvider>

       <h1>Context API || Chai aur Code </h1>
        <Login/>
        <Profile/>
        <Dash />
     </UserContextProvider>   
  )
}

export default App
