
import { useTodo } from "../../store/Todo2Context"

const SearchCpmt = () => {
    const { searchTerm, setSearchTerm } = useTodo()


    return (
        <>
            <div className="mb-3 w-25 mx-auto">
                <input type="text" className="form-control" value={searchTerm} placeholder="Search" onChange={(e)=>setSearchTerm(e.target.value)} />
            </div>
        </>
    )
}

export default SearchCpmt