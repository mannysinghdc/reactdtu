import { useContext, useEffect, useState } from "react"
import axios from "axios"
import TodoCmpt from "./TodoCmpt"
import { TodoJsonContext } from "../../store/TodoJson-Item"


const ReadFile = () => {
    const { todo } = useContext(TodoJsonContext)




    return (
        <>
            
            {
                todo.length === 0 ? <h2 className="text-center">No data available</h2> : <div className="container">
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
                                todo?.map((item, i) => (
                                    <TodoCmpt key={i} item={item} index={i} />
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            }

        </>
    )
}

export default ReadFile


