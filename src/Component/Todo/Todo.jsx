
import TodoContextProvider from "../../store/Todo-Item"  // Todo and it use context api 
import Create from "./Create"
import Read from "./Read"


const Todo = () => {
    return (
        <TodoContextProvider>
            <Create />
            <Read />
        </TodoContextProvider>
    )
}

export default Todo
