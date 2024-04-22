import { useEffect, useState } from 'react'
import { TodoProvider } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'


function App() {

  const [todos,setTodos] = useState([])
  const add = (todo) =>{
      setTodos ((prev) => [{id:Date.now(),...todo},...prev] ) 
  }
  const update = (id,todo) =>{
      setTodos ((prev) => prev.map((prevTodo)=>(prevTodo.id === id ? (todo):(prevTodo))))
  }
  //filter create new array in below repeataidly add all previous array element in new array expect where id != id
  const deleteTodo = (id) =>{
     setTodos((prev)=> prev.filter((prevTodo)=>(prevTodo.id !== id )))
  }
  const toggle = (id) =>{
       setTodos ((prev)=> prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, done: !prevTodo.done} : prevTodo))
  }
  
    useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'))
    if(todos && todos.length > 0){
        setTodos(todos)
    }
    },[])
 useEffect(()=>{
  localStorage.setItem("todos" , JSON.stringify(todos))
 },[todos])

  return (
    <TodoProvider value={{todos,update,add,deleteTodo,toggle}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
