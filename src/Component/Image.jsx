import { useState } from "react"  // File send to server 
import { MDBFile } from "mdb-react-ui-kit"
import axios from "axios"
import CheckBox from "./CheckBox"
import Radio from "./Radio"
import Select from "./Select"


const Image = () => {
    const [file, setFile] = useState(null)
    const [sts, setSts] = useState("idle") // Set initial status as "idle"


    // Handle file selection
    const fileChangeHandler = (e) => {
        if (e.target.files.length > 0) {
            setFile(e.target.files[0])
        }
    }

    // Handle file upload to server 
    const uploadHandler = async () => {
        if (!file) return

        setSts("upload") // Set status to "uploading"

        const formData = new FormData()
        formData.append("file", file)

        try {
            const response = await axios.post("https://httpbin.org/post", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })

            console.log("Upload Response:", response.data)
            setSts("success")
        } catch (error) {
            console.error("Upload Error:", error)
            setSts("error")
        }
    }





    return (
        <center className="my-4">
            <h3>File Handling in React.js</h3>

            <div className="w-25">
                <MDBFile id="customFile" onChange={fileChangeHandler} />
            </div>

            <br />
            {/* Information of file */}
            {file && (
                <>
                    <p><strong>Name:</strong> {file.name}</p>
                    <p><strong>Size:</strong> {(file.size / 1024).toFixed(2)} KB</p>
                    <p><strong>Type:</strong> {file.type}</p>
                </>
            )}

            {file && (
                <button
                    className="btn btn-primary"
                    onClick={uploadHandler}
                    disabled={sts === "upload"} // Disable button while uploading
                >
                    {sts === "upload" ? "Uploading..." : "Upload"}
                </button>
            )}

            {/* File status messages */}
            {sts === "success" && <p className="text-success">✅ File successfully uploaded!</p>}
            {sts === "error" && <p className="text-danger">❌ Upload failed. Please try again!</p>}


            <hr />
            <CheckBox />
            <hr />
            <Radio />
            <hr />
            <Select />
        </center>
    )
}

export default Image
