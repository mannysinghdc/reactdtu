import { TodoContextProvider } from "../../store/Todo2Context"  //Todo and this is used local storage and all CURD Operation by using Context Api
import TodoN from "./TodoN"


const Todo2 = () => {
  return (
    <TodoContextProvider>
      <TodoN />
    </TodoContextProvider>
  )
}

export default Todo2