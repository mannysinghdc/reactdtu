import { useState } from "react"
import { useTodo } from "../../store/Todo2Context"


const TodoNItem = ({ todo }) => {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [msg, setMsg] = useState(todo.todo)


    const { deleteTodo, updateTodo, toggleComplete } = useTodo()  // Use Context

    //Edit
    const updateEdit = () => {
        updateTodo(todo.id, { ...todo, todo: msg })
        setIsTodoEditable(!isTodoEditable)

    }

    function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }


    return (
        <>
            <div className={`alert alert-${todo.checked ? "success" : "primary"} w-50 mx-auto d-flex justify-content-between`} role="alert">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked={todo.checked} onChange={() => toggleComplete(todo.id)} />
                    {
                        isTodoEditable ? <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
                            :
                            <p className={`mx-2 ${todo.checked && "text-decoration-line-through"} `}>{capitalizeFirstLetter(todo.todo)}</p>
                    }


                </div>

                <div>
                    {
                        isTodoEditable ? <button className="btn btn-success btn-sm mx-1" onClick={updateEdit}>Update</button> : <button className="btn btn-primary btn-sm mx-1" onClick={() => setIsTodoEditable(!isTodoEditable)}>Edit</button>
                    }

                    <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>



            </div>
        </>
    )
}

export default TodoNItem
