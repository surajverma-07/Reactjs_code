import { useState } from 'react' //improting hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//  We use hooks for updation in UI 
var message='';
function App() {
  // const [count, setCount] = useState(0)

  // useState(true)
  // useState(hello())
  // useState('suraj')

  let [counter,setCounter7] = useState(10)
  // const [varname,methodname] = useState(default value)
  // let counter = 5;

  const increase = ()=>{
    // console.log("Value added ", Math.random())
    counter = counter+1;
    // console.log(counter)
    // setCounter(counter);
    if(counter<21){
      setCounter7(counter);
    }
    else{
      // message = "Value should no exeed 20";
      alert("value shouldn't exeed from 20")
    }
  }
  function decrease(){
    counter = counter-1;
    if(counter>=0){
      setCounter7(counter);
    }
    else{
      // message = "Value should no exeed 20";
      alert("value shouldn't less than 0")
    }
  }
  return (
    <>
      <h1 >Chay or React With Suraj</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={increase}>Increase Value {counter}</button>

      <br /> <br />
      <button onClick={decrease}>Decrese Value {counter}</button>
      <br /><br />
      <div>Message: {message}</div>
    </>
  )
}
//data updation through hooks in UI
// function App1(){
//   return(
//     <>
//         {message}
//     </>
//   )
// }
export default App;
// export default App1;

