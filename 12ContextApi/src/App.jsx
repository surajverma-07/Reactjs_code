import { useState } from 'react'
import './App.css'
import UserContext from './Context/UserContext'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
     <UserContextProvider>
       <h1>Context API || Chai aur Code </h1>
        
     </UserContextProvider>   
  )
}

export default App
