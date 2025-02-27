import { MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../../store/Todo-Item'

const Create = () => {
    const [data, setData] = useState({ name: "", age: "", email: "", date: "" })
    const { todo, setTodo, flag, setFlag, clearHanlder, id } = useContext(TodoContext)

    const [error, setError] = useState({}) // Error state

    const lightDarkVal = JSON.parse(localStorage.getItem("isMode"))  // Retrieve its value for change color of text on light dark mode


    // Reset form
    const resetForm = () => {
        setData({ name: "", age: "", email: "", date: "" })
    }

    // Validation form
    const validate = (formData) => {

        const errorData = {}

        if (!formData.name) {
            errorData.name = "Name is required!"
        }
        if (!formData.age) {
            errorData.age = "Age is required!"
        }
        if (!formData.email) {
            errorData.email = "Email is required!"
        }
        if (!formData.date) {
            errorData.date = "Date is required!"
        }

        setError(errorData)
        return errorData
    }


    // Change Handler
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        setError((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }))
    }

    // Add New User
    const addTodo = () => {
        console.log(validate(data).name)
        if (Object.keys(validate(data)).length) {
            alert("Please fill all details!")
            return
        }
        if (todo.some((item) => item.name === data.name || item.email === data.email)) {
            alert("This user detail already exists!")
            resetForm()
            return
        }

        const newUser = { ...data, id: todo.length, checked: false }
        setTodo([newUser, ...todo])
        localStorage.setItem("user", JSON.stringify([...todo, newUser])) // Proper order
        alert("New user created!")
        resetForm()
    }

    // Update Existing User
    const updateTodo = () => {
        if (Object.keys(validate(data)).length) {
            alert("Please fill all details!")
            return
        }

        const updatedTodos = todo.map((item) => (item.id === id ? { ...item, ...data } : item))
        setTodo(updatedTodos)
        localStorage.setItem("user", JSON.stringify(updatedTodos))
        alert("User updated successfully!")
        resetForm()
        setFlag(false)
    }

    // Form Submission Handler
    const submitHandler = (e, action) => {
        e.preventDefault()
        if (action === "add") addTodo()
        if (action === "update") updateTodo()
    }

    // Refill data for editing
    useEffect(() => {
        if (flag && id !== null) {
            const dt = todo.find((e) => e.id === id)
            if (dt) {
                setData({ name: dt.name, age: dt.age, email: dt.email, date: dt.date })
            }
        } else {
            resetForm()
        }
    }, [id, flag])

    return (
        <>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 p-4 shadow rounded bg-light">
                        <form onSubmit={(e) => submitHandler(e, flag ? "update" : "add")}>
                            <h2 style={{ color: lightDarkVal && "black" }} className="text-center">{flag ? "Update Form" : "Create Todo"}</h2>

                            <div className="gap-2 d-flex flex-column">
                                <MDBInput name="name" type="text" label="Name" value={data.name} onChange={changeHandler} />
                                <span className='text-danger'>{error.name}</span>
                                <MDBInput name="age" type="text" label="Age" value={data.age} onChange={changeHandler} />
                                <span className='text-danger'>{error.age}</span>
                                <MDBInput name="email" type="email" label="Email" value={data.email} onChange={changeHandler} />
                                <span className='text-danger'>{error.email}</span>
                                <MDBInput name="date" type="date" label="Date" value={data.date} onChange={changeHandler} />
                                <span className='text-danger'>{error.date}</span>
                            </div>

                            <div className="text-center mt-3">
                                <MDBBtn type="submit" size="sm" color={flag ? "success" : "primary"}>
                                    {flag ? "Update" : "Submit"}
                                </MDBBtn>
                                <MDBBtn size="sm" color="danger" className="mx-2" onClick={clearHanlder}>
                                    Clear
                                </MDBBtn>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <hr />
        </>
    )
}

export default Create




