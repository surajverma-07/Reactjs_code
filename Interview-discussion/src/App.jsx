import { useState } from 'react'

import './App.css'

function App() {
  const [currentVal, setCurrentVal] = useState(1)
  // const [mulVal, setMulVal] = useState(1)
  // Note -> whenever state update whole component rerender (mount )
  let mulVal = currentVal*5;
  const multiply = () => {
    setCurrentVal(currentVal+1);
  }
  return (
    <div style={{textAlign:'center',margin:'auto'}}>
      <h1>Current Value : {currentVal}</h1>
      <button onClick={multiply}>Click to multiply</button>
      <h2>Multiplied Value : {mulVal}</h2>
    </div>
  )
}

export default App
