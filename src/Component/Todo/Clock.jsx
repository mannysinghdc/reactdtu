
import { useEffect, useState } from "react"


const Clock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(intervalId);


    }, [])

    return (
        <div style={{lineHeight:"0px"}}>
            <p>{time.toLocaleTimeString()}</p>
            <p style={{fontSize:"10px"}}>{time.toDateString()}</p>
        </div>


    )
}

export default Clock

