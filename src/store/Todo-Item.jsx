import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext()  // Context Structure

const localStorageData = JSON.parse(localStorage.getItem("user")) // get data from localStorage

const TodoContextProvider = ({ children }) => {
    const [todo, setTodo] = useState(localStorageData || [])
    const [flag, setFlag] = useState(false)
    const [id, setId] = useState(null)

    // Edit Functionlity
    const editHandler = (id) => {
        setId(id)
        setFlag(true)

    }

    // Delete Functionlity
    const deleteHandler = (id) => {
        if (confirm("Are you sure want to delete this item?")) {
            setTodo(todo.filter(e => e.id !== id))
        }
    }

    // Clear Functionlity
    const clearHanlder = (e) => {
        e.preventDefault()
        if (todo.length === 0) {
            alert("No data available")
        } else {
            if (confirm("Are you sure to clear data?")) {
                setTodo([])
                setFlag(false)
            }
        }
    }

    // Sync with localStorage
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(todo)) // data save into localstorage after deletion
    }, [todo])

    return <TodoContext.Provider value={{ todo, setTodo, flag, setFlag, deleteHandler, clearHanlder, editHandler, id }}>
        {children}
    </TodoContext.Provider>
}

export default TodoContextProvider