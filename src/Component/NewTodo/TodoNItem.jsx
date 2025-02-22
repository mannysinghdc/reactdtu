import { useState } from "react"
import { useTodo } from "../../store/Todo2Context"

const TodoNItem = ({ todo }) => {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [msg, setMsg] = useState(todo.todo)

    const { deleteTodo, updateTodo, toggleComplete } = useTodo() // Use Context

    // Edit
    const updateEdit = () => {
        updateTodo(todo.id, { ...todo, todo: msg })
        setIsTodoEditable(false)
    }

    function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1)
    }

    return (
        <div className={`alert alert-${todo.checked ? "success" : "primary"} mx-auto d-flex flex-column flex-md-row justify-content-between align-items-center w-50 p-3 shadow rounded`} role="alert">
            <div className="d-flex align-items-center w-100">
                <input className="form-check-input me-2" type="checkbox" checked={todo.checked} onChange={() => toggleComplete(todo.id)} />

                {isTodoEditable ? (
                    <input
                        className="form-control form-control-sm w-100"
                        type="text"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                    />
                ) : (
                    <p className={`mx-2 mb-0 text-break ${todo.checked && "text-decoration-line-through"}`}>
                        {capitalizeFirstLetter(todo.todo)}
                    </p>
                )}
            </div>

            <div className="d-flex flex-column flex-md-row mt-2 mt-md-0">
                {isTodoEditable ? (
                    <button className="btn btn-success btn-sm mx-1 mb-1 mb-md-0" onClick={updateEdit}>Update</button>
                ) : (
                    <button className="btn btn-primary btn-sm mx-1 mb-1 mb-md-0" onClick={() => setIsTodoEditable(true)}>Edit</button>
                )}

                <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
        </div>
    )
}

export default TodoNItem
