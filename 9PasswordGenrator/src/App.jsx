import { useState, useCallback ,useEffect , useRef} from "react";
import './App.css'
function App() {
  const [length, setLength] = useState(8);
  const [numallow, setNumAllow] = useState(false);
  const [charallow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  // to optimise method we use useCallback react keep these method in chache
  // to use multiple time with certain changes in input
  // use callback (function,[dependency])

  //useref hook
  const PasswordRef = useRef(null)
  const PasswordGenrator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numallow) {
      str += "0123456789";
    }
    if (charallow) {
      str += "~!@#$%^&*(){}?><";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numallow, charallow, setPassword]);
  
  const CopyToClipboard = useCallback(()=>{
    PasswordRef.current?.select()
    // PasswordRef.current?.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(password)
  },[password])
  
  useEffect(()=>{
    PasswordGenrator()
    
  },[length,numallow,charallow,PasswordGenrator]) 
  // If any change occures in any one of dependencies then function re-run 

  return (
    <>
      <h1 className="head text-center text-white">Password Genrator</h1>
      <div
        className="w-full main text-center max-w-sm md:max-w-lg  mx-auto h-36  rounded-lg px-4 border border-gray-700 shadow-md
                      text-orange-600 bg-gray-700"
      >
        <div className="flex inputcon shadow text-lg md:text-2xl lg:text-3xl overflow-hidden p-0 mt-8 mb-4  border border-gray-700">
          <input
            className="text-center outline-none w-full py-3 rounded-md px-3"
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={PasswordRef}
          />
          <button
                  onClick={CopyToClipboard}  
                  className="ontline-none cpbtn bg-blue-800 px-3 py-0.5 uppercase shrink-0">
                
            copy
          </button>
        </div>
      <div className="flex text-sm md:text-lg justify-evenly ">
          <input
            type="range"
            min={6}
            max={25}
            value={length}
            className="cursor-pointer w-16 md:w-36"
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label >Length:{length}</label>
        {/* </div> */}
        {/* <div className="flex items-center gap-x-1"> */}
        <div>
           <input type="checkbox" 
                  defaultChecked={numallow}
                  id="numerinput"
                  //(prev) => !prev to reverse number
                  onChange={()=>{setNumAllow((prev)=> !prev)}}
                  />
            <label>Numbers</label>
         </div>
         <div>
           <input type="checkbox" 
                  defaultChecked={charallow}
                  id="charinput"
                  //(prev) => !prev to reverse number
                  onChange={()=>{setCharAllow((prev)=> !prev)}}
            />
            <label>Characters</label>
        </div>
      </div> 
         {/* <button className="bg-green-500 text-black gen"
                onClick={hello()}>Genrate</button> */}
      </div>  
    </>
  );
}

export default App;
