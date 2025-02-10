import { MDBInput, MDBBtn, MDBFile } from "mdb-react-ui-kit"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

const Add = () => {
    const [data, setData] = useState({ name: "", age: "", email: "", date: "", file: null })
    const [preview, setPreview] = useState(null)

    // Convert image to Base64
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = (error) => reject(error)
        })
    }


    // Handle text input changes
    const changeHandler = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    // Handle file selection
    const fileChangeHandler = async (e) => {
        const file = e.target.files[0]

        // Convert to Base64
        const base64Image = await convertToBase64(file)

        if (file) {
            setData({ ...data, file: base64Image }) // Store Base64 in file
            setPreview(URL.createObjectURL(file)) // Create preview URL
        }
    }

    // Submit handler with POST request

    const submitHandler = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post("http://localhost:3000/users", data, {
                headers: { "Content-Type": "application/json" }
            })

            console.log("Success:", response.data)
            alert("Form submitted successfully!")

            // Reset form
            setData({ name: "", age: "", email: "", date: "", file: null })
            setPreview(null)
        } catch (error) {
            console.error("Error submitting form:", error)
            alert("Error submitting form")
        }
    }




    return (
        <div className="container my-4">
            <h2 className="text-center my-3">Create Todo</h2>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <form onSubmit={submitHandler}>
                                <MDBInput className="mb-3" name="name" type="text" label="Name" value={data.name} onChange={changeHandler} required />
                                <MDBInput className="mb-3" name="age" type="text" label="Age" value={data.age} onChange={changeHandler} required />
                                <MDBInput className="mb-3" name="email" type="email" label="Email" value={data.email} onChange={changeHandler} required />
                                <MDBInput className="mb-3" name="date" type="date" label="Date" value={data.date} onChange={changeHandler} required />

                                <MDBFile className="mb-3" name="file" onChange={fileChangeHandler} required />
                                <MDBBtn type="submit" size="sm">Submit</MDBBtn>
                            </form>
                        </div>

                        {/* Image Preview Section */}
                        <div className="col-md-4 col-sm-12 d-flex justify-content-center">
                            <div className="border rounded" style={{ width: "200px", height: "200px", overflow: "hidden" }}>
                                <img
                                    src={preview || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                                    alt="Preview"
                                    className="img-fluid w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add
