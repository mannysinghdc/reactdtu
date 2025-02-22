import { useState } from "react"
import { useTodo } from "../../store/Todo2Context"


const FormN = () => {
    const [text, setText] = useState("")

    const { addTodo } = useTodo() // Use Context

    //Add todo by submit form
    const submitHandler = (e) => {
        e.preventDefault()

        if (!text) return

        if (text) {
            const newTodo = {
                id: Date.now(),
                todo: text,
                checked: false
            }

            addTodo(newTodo)
            alert("Todo created successfully")
            setText("")
        }
    }


    return (
        <>
            {/* Todo Form */}
            <form onSubmit={submitHandler}>
                <div className="mb-3 w-50 mx-auto d-flex shadow rounded bg-light">
                    <input type="text" className="form-control" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your todos here.." />
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>

            </form>
        </>
    )
}

export default FormN
