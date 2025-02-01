import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../../store/Todo-Item';

const Create = () => {
    const [data, setData] = useState({ name: "", age: "", email: "", date: "" })
    const { todo, setTodo, flag, setFlag, clearHanlder, id } = useContext(TodoContext)

    // Reset form
    const resetForm = () => {
        setData({ name: "", age: "", email: "", date: "" });
    };

    //Refill data based on Id
    const editHandlerId = () => {
        if (id !== null) {
            const dt = todo.find((e) => e.id === id)
            if (dt) {
                setData({ name: dt.name, age: dt.age, email: dt.email, date: dt.date })
            } else {
                alert("Data with the given ID not found!")
            }

        }
    }

    // Change Functionlity
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    //Add
    const addTodo = () => {
        if (!data.name || !data.age || !data.email || !data.date) {
            alert("Please fill all details!")
            return
        }
        if (todo.some((item) => item.name === data.name || item.email === data.email)) {
            alert("This user detail is already exist!")
            resetForm()
            return
        }
        else {
            const addNewUser = { ...data, id: todo.length, checked: false }
            setTodo([...todo, addNewUser])
            alert("New user created!")
            localStorage.setItem("user", JSON.stringify([addNewUser, ...todo])) // data save into localstorage
            resetForm()
        }
    }

    //update 
    const updateTodo = () => {
        if (!data.name || !data.age || !data.email || !data.date) {
            alert("Please fill all details!")
        } else {
            const updatedTodos = todo.map((item) =>
                item.id === id ? { ...item, ...data } : item
            )
            setTodo(updatedTodos)
            alert("User updated successfully!")
            resetForm()
            setFlag(false)
        }
    }

    // Submit and Update Functionlity
    const submitHanlder = (e, action) => {
        e.preventDefault()
        if (action === "add") {
            addTodo()
        }
        if (action === "update") {
            updateTodo()
        }

    }


    useEffect(() => {
        if (todo.length !== 0 && flag) {
            editHandlerId()
        }
        if (!flag) {
            resetForm()
        }
    }, [id, flag])

    return (
        <>
            <div className="container w-50 mt-3 img-fluid hover-shadow p-4 rounded-2">
                    <form onSubmit={(e) => submitHanlder(e, "add")}>
                        <h2>{flag ? "Update Form" : "Create Todo"}</h2>
                        <MDBInput className='mb-3' name="name" type='text' id='name' label='Name' value={data.name} onChange={changeHandler} />
                        <MDBInput className='mb-3' name="age" type='text' id='age' label='Age' value={data.age} onChange={changeHandler} />
                        <MDBInput className='mb-3' name="email" type='email' id='email' label='Email' value={data.email} onChange={changeHandler} />
                        <MDBInput className='mb-3' name="date" type='date' id='date' label='Date' value={data.date} onChange={changeHandler} />
                        {
                            !flag ? <MDBBtn type='submit' size='sm'> Submit  </MDBBtn> : <MDBBtn type='submit' size='sm' color='success' onClick={(e) => submitHanlder(e, "update")}> Update</MDBBtn>
                        }
                        {/* clear table button */}
                        <MDBBtn size='sm' color='danger' className='mx-2' onClick={clearHanlder}>
                            Clear
                        </MDBBtn>
                    </form>
                </div>

            <hr />
        </>



    );
}

export default Create