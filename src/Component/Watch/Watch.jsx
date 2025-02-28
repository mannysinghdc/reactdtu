import { useEffect, useState } from "react"  // Digital Clock and select option for bg  


const Watch = ({mode}) => {
    const [time, setTime] = useState(new Date())
    const [color, setColor] = useState("")

    const handleChange = (e) => {
        setColor(e.target.value)
    }

    const styleCss = {
        backgroundColor: color ? color : "pink",
        height: "100px",
        width: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        borderRadius: "10px",
        fontSize: "20px",
        fontWeight: "bolder",
        marginTop: "20px"
    }


    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(intervalId)

    }, [])

    return (
        <center className="mt-3" style={{ minHeight: "280px"  }}>
            <h2 style={{ fontStyle: "oblique" }}>Digital Clock</h2>
            <select value={color} onChange={handleChange}>
                <option value="">--Select--</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
            </select>
            <div style={styleCss}>
                <p>{time.toLocaleTimeString()}</p>
            </div>
            <h3 className="mt-3">Date:{time.toLocaleDateString()}</h3>
        </center>
    )
}

export default Watch
