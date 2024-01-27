import { useState } from 'react'
import { useCallback } from 'react';

function App() {
  const [length,setLength] = useState(8);
  const [num_allow,setnum_allow] = useState(false)
  const [char_allow,setchar_allow] = useState(false)
  const [Password,setPassword] = useState("")
  
  const PasswordGenrator = useCallback( ()=>{
         let pass = ""
         let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
         if(num_allow){
           str += "0123456789"
         }
         if(char_allow){
           str += "!@$%^&*()~`;"
         }

         for (let i = 0; i < length; i++) {
             let char = Math.floor(Math.random()* str.length + 1)
             pass = str.charAt(char);
                      
         }
         setPassword(pass)

  },[length,num_allow,char_allow,setPassword])
  return (
    <>
      <h1 className='text-center text-white '>Password Genrator</h1>
      <div className='w-full text-center max-w-md  mx-auto shadow-md rounded-lg px-4 my-8
       text-orange-500 bg-gray-700 '>
         <div className="flex shadow rounded-lg overflow-hidden  mb-4">
           <input 
                type="text" 
                value={Password} 
                className='outline-none w-full py-1 px-3'
                placeholder='Password'
                readOnly
            />
            <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
         </div>
         <div className='flex text-sm gap-x-2'></div>
       </div>
    </>
  )
}

export default App
