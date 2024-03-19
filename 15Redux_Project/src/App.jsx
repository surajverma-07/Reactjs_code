import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1 className='bg-orange-400 text-blue-950 text-center'>Jay Shree Ram || Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
