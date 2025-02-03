import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [data, setData] = useState({ name: "", lastName: "", email: "", password: "" })
    const navigate = useNavigate()

    //inputHandler or change handler
    const inputHandler = (e, property) => {
        setData({ ...data, [property]: e.target.value })
    }


    //submit  
    const submitHandler = (e) => {
        e.preventDefault()
        // Remove whitespace and empty string

        //add new user
        const addUser = {
            name: data.name.trim(),
            lastName: data.lastName.trim(),
            email: data.email.trim(),
            password: data.password
        }

        // Validation for empty fields
        if (!data.name || !data.lastName || !data.email || !data.password) {
            alert("Please enter details!")
            return
        }

        //Get user detail from localStorage
        const storedUsers = JSON.parse(localStorage.getItem("user-info") || "[]")

        // Validation for duplicates
        if (storedUsers.some((elm) => elm.email === data.email)) {
            alert("This email is already registered!")
            return
        }

        // Save to localStorage
        storedUsers.push(addUser)

        // set user detail into local storage
        localStorage.setItem("user-info", JSON.stringify(storedUsers))
        alert("Registration successful!")
        navigate("/login")

    }
    return (
        <>
            <h2 className='text-center my-4'>Register form</h2>
            <form className='col-md-4 mx-auto' onSubmit={submitHandler}>
                <MDBRow className='mb-4'>
                    <MDBCol>
                        <MDBInput id='firstName' label='First name' value={data.name} onInput={(e) => inputHandler(e, 'name')} />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput id='lastName' label='Last name' value={data.lastName} onInput={(e) => inputHandler(e, 'lastName')} />
                    </MDBCol>
                </MDBRow>
                <MDBInput className='mb-4' type='email' id='email' label='Email address' onInput={(e) => inputHandler(e, 'email')} />
                <MDBInput className='mb-4' type='password' id='password' label='Password' onInput={(e) => inputHandler(e, 'password')} />

                <MDBCheckbox
                    wrapperClass='d-flex justify-content-center mb-4'
                    id='form3Example5'
                    label='Subscribe to our newsletter'
                    defaultChecked
                />

                <MDBBtn type='submit' className='mb-4' block>
                    Sign in
                </MDBBtn>

                <div className='text-center'>
                    <p>or sign up with:</p>

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='google' />
                    </MDBBtn>

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='twitter' />
                    </MDBBtn>

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                </div>
            </form>
        </>
    )
}
export default SignUp