import { useState } from 'react'
import React from 'react'

function Card({color1="red",text}) {
  const [widthbtn,setWidth] = useState("100px")
  const [color,setColor] = useState("black")
  return (
    <>
     <div className="w-full h-screen"
            style={{backgroundColor: color}}>
              </div>

        {/* <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-9 mx-4  shadow-sm bg-transperant px-3 py-2  rounded-xl'> */}
             <button 
                 onClick={ ()=> setColor(color1)} 
                 className="outline-none px-4 py-1 rounded-lg "
                 style={{backgroundColor:color1, width:widthbtn , color:"wheat"}} >{text}</button>
            
            {/* </div> */}
        {/* </div> */}
    </>
    
  )
}

export default Card
