import {createContext,useContext} from "react"

export const TodoContext = createContext({
    todos : [
        {
            id:1,
            todo:"message",
            done:false,
        },
    ],
    update : (id , todo ) => {},
    add : (todo) => {},
    deleteTodo : (id) => {},
    toggle:(id) => {}

})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider 