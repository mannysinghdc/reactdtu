import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext()  // Context Structure

const localStorageData = JSON.parse(localStorage.getItem("user")) // get data from localStorage

const TodoContextProvider = ({ children }) => {
    const [todo, setTodo] = useState(localStorageData || [])
    const [flag, setFlag] = useState(false)
    const [id, setId] = useState(null)
    const [searchTerm, setSearchTerm] = useState("") // State for search term

    // Filtered todos based on the search term
    const filteredTodos = searchTerm ? todo.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())) : todo

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

    // Checked line functionality
    const lineHandler = (val) => {
        const updatedTodos = todo.map((todoItem) =>
            todoItem.name === val ? { ...todoItem, checked: !todoItem.checked } : todoItem
        )
        setTodo(updatedTodos)
    };

    // Sync with localStorage
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(todo)) // data save into localstorage after deletion
    }, [todo])

    return <TodoContext.Provider value={{ todo: filteredTodos, setTodo,searchTerm, setSearchTerm, flag, setFlag, deleteHandler, clearHanlder, editHandler, lineHandler, id }}>
        {children}
    </TodoContext.Provider>
}

export default TodoContextProvider