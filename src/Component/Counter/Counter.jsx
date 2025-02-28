import { useState } from "react"  // Counter cmpt

const Counter = () => {
    const [count, setCount] = useState(10) // Left bucket
    const [count2, setCount2] = useState(0) // Right bucket

    const Left = () => {
        if (count < 10 && count2 > 0) {
            setCount((prev) => prev + 1)
            setCount2((prev) => prev - 1)
        }
    }

    const Right = () => {
        if (count > 0 && count2 < 10) {
            setCount((prev) => prev - 1)
            setCount2((prev) => prev + 1)
        }
    }

    const styleCss = {
        border: "1px solid red",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "20px",
        width: "50%",
        margin: "4rem auto",
        minHeight: "200px",
        borderRadius: "10px",
        boxSizing: "border-box", // Ensures padding/borders don't change the box size
        transition: "all 0.3s ease-in-out", // Smooth transition effect
    }

    return (
        <div style={styleCss}>
            {/* Left Bucket */}
            <div>
                <h1>{count}</h1>
                <p
                    style={{
                        color: count2 > 0 && count2 < 10 ? "gray" : "black",
                    }}
                >
                    {`Bucket 2 ${count2 === 10 ? "(Full)" : count2 > 0 ? "Transferring..." : "(Empty)"}`}
                </p>
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "10px" }}>
                <button className="btn btn-info btn-sm" onClick={Left} disabled={count === 10}>Left</button>
                <button className="btn btn-info btn-sm" onClick={Right} disabled={count2 === 10}>Right</button>
            </div>

            {/* Right Bucket */}
            <div>
                <h1>{count2}</h1>
                <p
                    style={{
                        color: count2 > 0 && count2 < 10 ? "gray" : "black",
                    }}
                >
                    {`Bucket 2 ${count2 === 10 ? "(Full)" : count2 > 0 ? "Transferring..." : "(Empty)"}`}
                </p>
            </div>
        </div>
    )
}

export default Counter
