
import TodoJsonContextProvider from '../../store/TodoJson-Item'
import Add from './Add'
import ReadFile from './ReadFile'

const TodoJson = () => {
    return (
        <>
            <TodoJsonContextProvider>
                <Add />
                <hr />
                <ReadFile />
            </TodoJsonContextProvider>
        </>
    )
}

export default TodoJson
