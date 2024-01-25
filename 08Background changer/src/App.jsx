import { useState } from 'react'

function App() {
  const [widthbtn,setWidth] = useState("100px")
  const [color,setColor] = useState("black")
  return (
    
     <div className="w-full h-screen duration-200"
            style={{backgroundColor: color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-9 mx-4  shadow-sm bg-transperant px-3 py-2  rounded-xl'>
             <button 
                 onClick={ ()=> setColor("red")} 
                 className="outline-none px-4 py-1 rounded-lg "
                 style={{backgroundColor:"red", width:widthbtn}} >Red</button>
             <button
                onClick={() => setColor("green")} 
                 className="outline-none px-4 py-1 rounded-lg"
                 style={{backgroundColor:"green" ,width:widthbtn}} >Green</button>
             <button 
                 onClick={ ()=> setColor("blue")} 
                 className="outline-none px-4 py-1 rounded-lg"
                 style={{backgroundColor:"blue", width:widthbtn}} >Blue</button>
             <button 
                 onClick={ ()=> setColor("gray")}
                 className="outline-none px-4 py-1 rounded-lg"
                 style={{backgroundColor:"gray" , color:"black" ,width:widthbtn}} >gray</button>
             <button
                 onClick={ ()=> setColor("pink")} 
                 className="outline-none px-4 py-1 rounded-lg"
                 style={{backgroundColor:"pink" ,width:widthbtn , color:'black'} } >pink</button>
             <button
                 onClick={ ()=> setColor("yellow")} 
                 className="outline-none px-4 py-1 rounded-lg"
                 style={{backgroundColor:"yellow", color:"black" ,width:widthbtn}} >yellow</button>
             <button 
                 onClick={ ()=> setColor("lightblue")} 
                 className="outline-none px-4 py-1 rounded-lg"
                 style={{backgroundColor:"lightblue", color:"black" ,width:widthbtn}} >Sky</button>
             <button 
                 onClick={ ()=> setColor("lightgreen")} 
                 className="outline-none px-4 py-1 rounded-lg"
                 style={{backgroundColor:"lightgreen" ,width:widthbtn , color:"black"}} >l-green</button>
         
            </div>
        </div>
    </div>
    
  )
}

export default App
