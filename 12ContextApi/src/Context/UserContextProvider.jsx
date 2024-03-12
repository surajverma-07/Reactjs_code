import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{
    const [user,Setuser] = useState(true);
  return(
    <UserContext.Provider value={{user,Setuser}}>
       {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider