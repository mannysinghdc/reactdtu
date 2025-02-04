
import { useEffect, useState } from "react"

const Form = () => {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
    const [detail, setdetail] = useState({ name: "", age: "", email: "" })
    const [flag, setFlag] = useState(false)


    const changeHandler = (e) => {
        setdetail({ ...detail, [e.target.name]: e.target.value })
    }

    const submitHandler = (e, action) => {
        e.preventDefault()
    
        if (action === "add") {
          fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(detail),
          })
            .then(response => {
              if (!response.ok) {
                throw new Error(`Failed to add user: ${response.statusText}`);
              }
              return response.json();
            })
            .then(() => {
              getFetch(); // Refresh data after adding user
            })
            .catch(error => {
              console.error("Error:", error);
            });
        }
        if(action === "update"){
          
        }
      };
    


    const getFetch = async () => {
        setloading(true)
        let data = await fetch("http://localhost:3000/users")
        data = await data.json()
        setdata(data)
        setloading(false)
    }

    const edithandler = (id) => {
        const edit = data.find(e => e.id === id)
        setdetail({ name: edit.name, age: edit.age, email: edit.email })
        setFlag(true)
    }

    const delteHandler = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/users/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error(`Failed to delete user. Status: ${response.status}`);
            }

            const data = await response.json()
            if (data) {
                alert("User deleted!")
                getFetch()
            }
        } catch (error) {
            console.error("Error:", error.message);
        }
    }

    useEffect(() => {
        getFetch()
    }, [])
    return (
        <>
            <div className="container text-center">
                <h2>Form</h2>
                <form onSubmit={(e) => submitHandler(e, action)}>
                    <input type="text" name="name" value={detail.name} onChange={changeHandler} placeholder="Enter name" />
                    <br />
                    <input type="text" name="age" value={detail.age} onChange={changeHandler} placeholder="Enter age" />
                    <br />
                    <input type="text" name="email" value={detail.email} onChange={changeHandler} placeholder="Enter email" />
                    <br />
                    {
                        flag ? <button className="btn btn-success btn-sm">Update</button> : <button className="btn btn-primary btn-sm">Save</button>
                    }

                </form>
            </div>
            <hr />
            <div>
                {loading && <h2>loading....</h2>}
                {data.length == 0 ? <h4 className="text-center">No data availble</h4> : null}


                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">SNO.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, i) => (
                                <tr key={item.id}>
                                    <th scope="row">{i + 1}</th>
                                    <th>{item.name}</th>
                                    <td>{item.age}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm  mx-2" onClick={() => delteHandler(item.id)}>Delete</button>
                                        <button className="btn btn-primary btn-sm" onClick={() => edithandler(item.id)}>Edit</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>

            </div>
        </>
    )
}

export default Form
