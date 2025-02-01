import { MDBBtn, MDBCheckbox } from 'mdb-react-ui-kit'   // This is todoItem
import { useContext } from 'react'
import { TodoContext } from '../../store/Todo-Item'



const TodoItem = ({ item, index }) => {
    const { todo, setTodo, deleteHandler, editHandler } = useContext(TodoContext)


    //Each latter capitalize function
    const capitalizeEachWord = (str) => {
        return str
            .split(' ') // Split the string into an array of words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
            .join(' '); // Join the words back into a string
    }


    // Checked line functionility
    const lineHandler = (val) => {
        const updateLine = todo.map((item) => {
            if (item.name === val) {
                return { ...item, checked: !item.checked }
            } else {
                return item
            }
        })
        setTodo(updateLine)
    }

    return (
        <>
            <tr>
                <td>
                    {index + 1}
                </td>
                <td>
                    <div className='d-flex align-items-center'>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                        />
                        <div className='ms-3'>
                            <p className={`fw-bold mb-1 ${item.checked && "text-decoration-line-through"}`}>{capitalizeEachWord(item.name)}</p>
                            <p className='text-muted mb-0'>{item.email}</p>
                        </div>

                    </div>

                </td>
                <td>
                    <MDBCheckbox id='form1Example3' onClick={() => lineHandler(item.name)} />
                </td>
                <td>
                    <p className='fw-normal mb-1'> {item.age}</p>
                </td>
                <td>
                    <p className='fw-normal mb-1'>{new Date(item.date).toDateString()}</p>
                </td>
                <td>
                    <MDBBtn color='link' rounded size='sm' onClick={() => editHandler(item.id)}>
                        Edit
                    </MDBBtn>
                    <MDBBtn color='danger' rounded size='sm' onClick={() => deleteHandler(item.id)}>
                        Delete
                    </MDBBtn>
                </td>
            </tr>
        </>
    )
}

export default TodoItem
