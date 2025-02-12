import { useContext } from "react"
import { TodoContext } from "../../store/Todo-Item"


const Search = () => {
    const { todo, searchTerm, setSearchTerm } = useContext(TodoContext)  //Context api

    return (
        <center>
            {
                todo.length>0 && <input type="text" placeholder="Search by name " value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ padding: "5px", width: "100%", maxWidth: "400px" }} />
            }
        </center>
    )
}

export default Search
