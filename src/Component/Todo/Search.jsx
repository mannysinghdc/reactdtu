import { useContext, useState, useEffect } from "react" // placeholder change dynamically
import { TodoContext } from "../../store/Todo-Item"


const Search = () => {
    const placeValue = ["Name", "Age"]
    const [placeholder, setplaceholder] = useState(placeValue[0])
    const [index, setIndex] = useState(0)
    const { todo, searchTerm, setSearchTerm } = useContext(TodoContext)  //Context api


    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prev) => {
                const newIndex = prev === placeValue.length - 1 ? 0 : prev + 1
                setplaceholder(placeValue[newIndex])
                return newIndex
            })
        }, 2000)

        return () => {
            clearInterval(id)
        }
    }, [])


    return (
        <center>
            {
                todo.length > 0 && <input type="text" placeholder={`Search by ${placeholder}`} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ padding: "5px", width: "100%", maxWidth: "400px" }} />
            }
        </center>
    )
}

export default Search
