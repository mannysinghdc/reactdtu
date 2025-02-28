
import {  useEffect } from "react"   // Light and dark mode and store its value into localstorage
import { MdNightlight, MdOutlineLightMode } from "react-icons/md"

const DarkLight = ({ mode, toggleMode }) => {
    //Body bg change
    useEffect(() => {
        document.body.style.backgroundColor = mode ? "#13303f" : "white"
        document.body.style.color = mode ? "white" : "gray"
        document.body.style.transition = "background-color 0.3s ease"

        localStorage.setItem("isMode", JSON.stringify(mode))
    }, [mode])

    return (
        <>
            {!mode ? <MdNightlight onClick={toggleMode} style={{ cursor: "pointer" }} title="Light Mode" /> : <MdOutlineLightMode onClick={toggleMode} style={{ cursor: "pointer", color: mode ? "white":"gray" }} />}

        </>
    )
}

export default DarkLight
