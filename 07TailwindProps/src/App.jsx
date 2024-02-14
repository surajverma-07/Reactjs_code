import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "suraj",
    age : 20,
    id : 7,
    collage : "BIT DURG"

  }
  
  let myArr = [7,10,18,8];
  return (
    <>
     {/* p-4 padding */}
       <h1 className='bg-green-500 text-black p-4 mb-4 rounded-xl' >Tailwind with Suraj7</h1>
       {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/14303820/pexels-photo-14303820.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
       </figure> */}
      {/* <Card channel="chaiaurcode" myArr=[1,2,3]/> */}
      {/* <Card channel="chaiaurcode" myArr={nam :"chai"}/> */}
      {/* <Card channel="chaiaurcode" Obj = {myObj}/> */}
      {/* <Card obj1={myArr} /> */}
      <Card username="Suraj Kumar Verma" btntxt="Explore more" />
      <Card username="Dharana" btntxt="Commited message"/>
      <Card username="us" />

    </>
  )
}

export default App
