import { useState } from 'react'
import './App.css'
import conf from './conf/conf'
function App() {
  const [count, setCount] = useState(0)
  console.log(conf.appwriteUrl);
  return (
    <>
      <h1>Suraj Blog's</h1>
    </>
  )
}

export default App
