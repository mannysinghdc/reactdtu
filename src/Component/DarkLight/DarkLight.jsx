
import { useState, useEffect } from "react"   // Light and dark mode and store its value into localstorage
import { MdNightlight, MdOutlineLightMode } from "react-icons/md"

const DarkLight = () => {
    const [mode, setMode] = useState(() => {
        return JSON.parse(localStorage.getItem("isMode")) ?? false// Ensure a boolean value
    })

    useEffect(() => {
        document.body.style.backgroundColor = mode ? "#13303f" : "white"
        document.body.style.color = mode ? "white" : "black"
        document.body.style.transition = "background-color 0.3s ease"

        localStorage.setItem("isMode", JSON.stringify(mode)) // Store the correct value
    }, [mode])


    const toggleMode = () => setMode(prevMode => !prevMode)

    return (
        <>
            {!mode ? <MdNightlight onClick={toggleMode} style={{ cursor: "pointer" }} title="Light Mode" /> : <MdOutlineLightMode onClick={toggleMode} style={{ cursor: "pointer" ,color:"black"}}/>}

        </>
    )
}

export default DarkLight
