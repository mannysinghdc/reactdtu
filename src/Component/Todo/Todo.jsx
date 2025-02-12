
import TodoContextProvider from "../../store/Todo-Item"  // Todo and it use context api 
import Create from "./Create"
import Read from "./Read"
import Search from "./Search"


const Todo = () => {
    return (
        <TodoContextProvider>
            <Create />
            <Search/>
            <Read />
        </TodoContextProvider>
    )
}

export default Todo
