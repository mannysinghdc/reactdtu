import { MDBInput, MDBBtn, MDBFile } from 'mdb-react-ui-kit';
import { useState } from 'react';

const Add = () => {
    const [data, setData] = useState({ name: "", age: "", email: "", date: "", file: null });
    const [preview, setPreview] = useState(null);

    // Handle text input changes
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    // Handle file selection
    const fileChangeHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData({ ...data, file });
            setPreview(URL.createObjectURL(file)); // Create preview URL
        }
    };

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(data)
    }

    return (
        <div className="container my-4">
            <h2 className="text-center my-3">Create Todo</h2>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <form onSubmit={submitHandler}>
                                <MDBInput className="mb-3" name="name" type="text" label="Name" value={data.name} onChange={changeHandler} />
                                <MDBInput className="mb-3" name="age" type="text" label="Age" value={data.age} onChange={changeHandler} />
                                <MDBInput className="mb-3" name="email" type="email" label="Email" value={data.email} onChange={changeHandler} />
                                <MDBInput className="mb-3" name="date" type="date" label="Date" value={data.date} onChange={changeHandler} />

                                <MDBFile className="mb-3" name="file" onChange={fileChangeHandler} />
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
    );
};

export default Add;
