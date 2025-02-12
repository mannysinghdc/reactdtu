import axios from "axios"
import { createContext, useEffect, useState } from "react"

export const TodoJsonContext = createContext()  // Context Structure


const TodoJsonContextProvider = ({ children }) => {
    const [todo, setTodo] = useState([])
    const [flag, setFlag] = useState(false)
    const [id, setId] = useState(null)

    // Fetch data from json server
    const fetchData = () => {
        axios.get("http://localhost:3000/users")
            .then((res) => {
                // handle success
                setTodo(res.data)
            })
    }

    //Delete post 
    const deleteHanlder = (id) => {
        axios.delete('http://localhost:3000/users/' + id)
            .then(() => {
                alert("post deleted!")
                fetchData()
            })
            .catch(error => {
                console.error('Error deleting user:', error)
            })
    }

    const editHanlder = (id) => {
        setId(id)
        setFlag(true)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return <TodoJsonContext.Provider value={{ id, todo, setTodo, flag, setFlag,deleteHanlder, editHanlder, fetchData }}>
        {children}
    </TodoJsonContext.Provider>
}

export default TodoJsonContextProvider

