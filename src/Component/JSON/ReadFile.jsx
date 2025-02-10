import { useEffect, useState } from "react"
import axios from "axios"
import TodoCmpt from "./TodoCmpt"


const ReadFile = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        axios.get("http://localhost:3000/users")
            .then((res) => {
                // handle success
                setData(res.data)
            })
    }, [])
    return (
        <>
            <div className="container">
                <table className="table align-middle mb-0 bg-white">
                    <thead className="bg-light">
                        <tr>
                            <th>SNo.</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Age</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, i) => (
                                <TodoCmpt key={i} item={item} index={i} />
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ReadFile


