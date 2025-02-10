import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

const ImageUpload = () => {
    const [data, setData] = useState([])

    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState("")
    const [loading, setLoading] = useState(false)

    // Convert image to Base64
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = (error) => reject(error)
        })
    }

    const handleImageChange = async (e) => {
        const selectedFile = e.target.files[0]
        if (!selectedFile) return

        // Convert to Base64
        const base64Image = await convertToBase64(selectedFile)

        setFile(base64Image)
        setPreview(URL.createObjectURL(selectedFile))
    }

    const uploadImage = async () => {
        if (!file) {
            alert("Please select an image first!")
            return
        }

        setLoading(true)

        // JSON object for JSON Server
        const userData = {
            image: file, // Base64 Image
            name: "kell",
            age: 34,
            email: "kell@gmail.com",
        }



        // Send Base64 Image to JSON Server
        axios
            .post("http://localhost:3000/users", userData)
            .then((res) => {
                console.log("Upload Success:", res.data)
                alert("Image uploaded successfully!")
            })
            .catch((err) => {
                console.error("Upload Error:", err)
                alert("Image upload failed!")
            })
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        axios.get("http://localhost:3000/users")
            .then((res) => {
                // handle success
                setData(res.data)
            })
    }, [])
    return (
        <>
            <center>
                <input type="file" accept="image/*" onChange={handleImageChange} />
                <br />

                {preview && <img src={preview} alt="Preview" height={100} width={150} />}
                <br />

                <button className="btn btn-primary" disabled={loading} onClick={uploadImage}>
                    {loading ? "Uploading..." : "Upload"}
                </button>
            </center>

            <div>
                <table className="table align-middle mb-0 bg-white">
                    <thead className="bg-light">
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, i) => (
                                <tr key={i}>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={item.image}
                                                alt=""
                                                style={{ width: "45px", height: "45px" }}
                                                className="rounded-circle"
                                            />
                                            <div className="ms-3">
                                                <p className="fw-bold mb-1">{item.name}</p>
                                                <p className="text-muted mb-0">{item.email ? item.emial : "kell@gmail.com"}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-1">{item.age}</p>
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

export default ImageUpload
