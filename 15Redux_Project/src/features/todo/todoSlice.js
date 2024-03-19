import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1,text:"hello world"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,

    reducers:{
        //state tells the current situation of state 
        //action -> data passed
        addTodo: (state,action) => {
            const todo = {
                id : nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state , action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo: (state,action) =>{
            state.todos.filter((todo) => todo.id === action.payload ? (state.todos.text = action.payload.text):(state.todos = state.todos))
        }
    }
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions
export default todoSlice.reducer
