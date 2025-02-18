import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../store/Todo-Item';

const Create = () => {
    const [data, setData] = useState({ name: "", age: "", email: "", date: "" });
    const { todo, setTodo, flag, setFlag, clearHanlder, id } = useContext(TodoContext);

    // Reset form
    const resetForm = () => {
        setData({ name: "", age: "", email: "", date: "" });
    };

    // Refill data for editing
    useEffect(() => {
        if (flag && id !== null) {
            const dt = todo.find((e) => e.id === id);
            if (dt) {
                setData({ name: dt.name, age: dt.age, email: dt.email, date: dt.date });
            }
        } else {
            resetForm();
        }
    }, [id, flag]);

    // Change Handler
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    // Add New User
    const addTodo = () => {
        if (!data.name || !data.age || !data.email || !data.date) {
            alert("Please fill all details!");
            return;
        }
        if (todo.some((item) => item.name === data.name || item.email === data.email)) {
            alert("This user detail already exists!");
            resetForm();
            return;
        }

        const newUser = { ...data, id: todo.length, checked: false };
        setTodo([...todo, newUser]);
        localStorage.setItem("user", JSON.stringify([...todo, newUser])); // Proper order
        alert("New user created!");
        resetForm();
    };

    // Update Existing User
    const updateTodo = () => {
        if (!data.name || !data.age || !data.email || !data.date) {
            alert("Please fill all details!");
            return;
        }

        const updatedTodos = todo.map((item) => (item.id === id ? { ...item, ...data } : item));
        setTodo(updatedTodos);
        localStorage.setItem("user", JSON.stringify(updatedTodos));
        alert("User updated successfully!");
        resetForm();
        setFlag(false);
    };

    // Form Submission Handler
    const submitHandler = (e, action) => {
        e.preventDefault();
        if (action === "add") addTodo();
        if (action === "update") updateTodo();
    };

    return (
        <>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 p-4 shadow rounded bg-light">
                        <form onSubmit={(e) => submitHandler(e, flag ? "update" : "add")}>
                            <h2 className="text-center">{flag ? "Update Form" : "Create Todo"}</h2>

                            <div className="gap-2 d-flex flex-column">
                                <MDBInput name="name" type="text" label="Name" value={data.name} onChange={changeHandler} />
                                <MDBInput name="age" type="text" label="Age" value={data.age} onChange={changeHandler} />
                                <MDBInput name="email" type="email" label="Email" value={data.email} onChange={changeHandler} />
                                <MDBInput name="date" type="date" label="Date" value={data.date} onChange={changeHandler} />
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
    );
};

export default Create;




