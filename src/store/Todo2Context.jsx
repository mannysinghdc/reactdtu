import { createContext, useContext, useEffect, useState } from "react"

export const TodoContext = createContext({
    todos: [],
    addTodo: () => { },
    deleteTodo: () => { },
    updateTodo: () => { },
    toggleComplete: () => { },
    searchData: () => { }
});



export const TodoContextProvider = ({ children }) => {
    const [todos, setTodos] = useState(() => {
        try {
            const storedTodos = localStorage.getItem("todos")
            return storedTodos ? JSON.parse(storedTodos) : []
        } catch (error) {
            console.error("Failed to parse todos from localStorage:", error)
            return []
        }
    })

    const [searchTerm, setSearchTerm] = useState("") // State for search term

    const fiterSearchData = searchTerm ? todos.filter((item) => item.todo.toLowerCase().includes(searchTerm.toLowerCase())) : todos


    // Add todo
    const addTodo = (todo) => {
        setTodos((prev) => [todo, ...prev])
    }
    // Delete todo
    const deleteTodo = (id) => {
        if (confirm("Are you sure want to delete this todo?")) {
            setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
        }

    }

    // Update todo
    const updateTodo = (id, todo) => {
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
    }

    // Cjecked todo
    const toggleComplete = (id) => {
        setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, checked: !prevTodo.checked } : prevTodo))
    }

    // Set Todos in localstorage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return <TodoContext.Provider value={{ fiterSearchData, addTodo, deleteTodo, updateTodo, toggleComplete, searchTerm, setSearchTerm }}>
        {children}
    </TodoContext.Provider>

}


export const useTodo = () => {
    return useContext(TodoContext)
}