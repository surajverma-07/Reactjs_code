import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Dash() {
    const {user} = useContext(UserContext)
 if (user){
    return (
    <div style={{marginTop:"10px", color:"red" , fontSize:"2rem"}}> 
        Hello Mr. {user.username}
    </div>
  )
    }
    else return "login kar le bhai"
}

export default Dash
