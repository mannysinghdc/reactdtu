import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Protect = ({ children }) => {
    const navigate = useNavigate()
    const isAuthenticate =  JSON.parse(localStorage.getItem("login-user" || "{}"))


    useEffect(() => {
        if (!isAuthenticate) {
            navigate("/login")
        }


    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default Protect
