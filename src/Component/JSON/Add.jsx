import { MDBInput, MDBBtn, MDBFile } from 'mdb-react-ui-kit'
import { useState } from 'react'

const Add = () => {
    const [data, setData] = useState({ name: "", age: "", email: "", date: "", file: null })

    // Change Functionlity
    const changeHandler = (e) => {
        const { name, value, files } = e.target
        setData({ ...data, [name]: value, [name]: files[0] })
    }

    const submitHanlder = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className="container my-4">
                <h2 className='text-center my-3'>{"Create Todo"}</h2>
                <div className="col-md-8  mx-auto">
                    <div className="row">
                        <div className="col-8">
                            <form onSubmit={(e) => submitHanlder(e, "add")}>
                                <MDBInput className='mb-3' name="name" type='text' id='name' label='Name' value={data.name} onChange={changeHandler} />
                                <MDBInput className='mb-3' name="age" type='text' id='age' label='Age' value={data.age} onChange={changeHandler} />
                                <MDBInput className='mb-3' name="email" type='email' id='email' label='Email' value={data.email} onChange={changeHandler} />
                                <MDBInput className='mb-3' name="date" type='date' id='date' label='Date' value={data.date} onChange={changeHandler} />

                                <MDBFile className='mb-3' name="file" id='file' />
                                <MDBBtn type='submit' size='sm'> Submit  </MDBBtn>
                            </form>
                        </div>
                        <div className="col-4">
                            <div style={{ border: "1px solid", width: "200px", height: "200px" }}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add







