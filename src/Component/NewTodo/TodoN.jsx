import { useTodo } from '../../store/Todo2Context'
import FormN from './FormN'
import SearchCpmt from './SearchCpmt'
import TodoNItem from './TodoNItem'

const TodoN = () => {
    const { fiterSearchData } = useTodo()

    return (
        <>
            <h1 className='text-center my-4'>Manage Your Todos</h1>
            <FormN />
            {
                fiterSearchData.length === 0 ? <h3 className='text-center mt-4'>No todos are available</h3> : <SearchCpmt />
            }

            {
                fiterSearchData?.map((item) => (
                    <TodoNItem key={item.id} todo={item} />
                ))
            }

        </>
    )
}

export default TodoN
