import { MDBBtn, MDBCheckbox } from 'mdb-react-ui-kit'
import { useContext } from 'react'
import { TodoContext } from '../../store/Todo-Item'

const TodoItem = ({ item, index }) => {
    const { lineHandler, deleteHandler, editHandler } = useContext(TodoContext)

    // Capitalize Each Word
    const capitalizeEachWord = (str) => {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    return (
        <tr className="align-middle">
            <td className="text-center">{index + 1}</td>

            {/* User Info */}
            <td>
                <div className="d-flex align-items-center flex-column flex-md-row text-center text-md-start">
                    <img
                        src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                        alt=""
                        className="rounded-circle"
                        style={{ width: '40px', height: '40px' }}
                    />
                    <div className="ms-md-3">
                        <p className={`fw-bold mb-1 ${item.checked ? "text-decoration-line-through" : ""}`}>
                            {capitalizeEachWord(item.name)}
                        </p>
                        <p className="text-muted mb-0">{item.email}</p>
                    </div>
                </div>
            </td>

            {/* Checkbox */}
            <td className="text-center">
                <MDBCheckbox id={`checkbox-${index}`} onClick={() => lineHandler(item.name)} />
            </td>

            {/* Age */}
            <td className="text-center">
                <p className="fw-normal mb-1">{item.age}</p>
            </td>

            {/* Date */}
            <td className="text-center">
                <p className="fw-normal mb-1">{new Date(item.date).toDateString()}</p>
            </td>

            {/* Actions */}
            <td>
                <div className="d-flex flex-column flex-md-row gap-2 justify-content-center">
                    <MDBBtn color="link" rounded size="sm" onClick={() => editHandler(item.id)}>
                        Edit
                    </MDBBtn>
                    <MDBBtn color="danger" rounded size="sm" onClick={() => deleteHandler(item.id)}>
                        Delete
                    </MDBBtn>
                </div>
            </td>
        </tr>
    );
};

export default TodoItem
