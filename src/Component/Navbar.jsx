import { Link } from "react-router-dom"
import { MdNightlight, MdOutlineLightMode } from "react-icons/md"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [color, setcolor] = useState(false) // dark and light mode

    useEffect(() => {
        if (color) {
            document.querySelector("body").style.backgroundColor = "gray"
            document.querySelector("body").style.color = "white"
        } else {
            document.querySelector("body").style.backgroundColor = ""
              document.querySelector("body").style.color = "gray"
        }

    }, [color])
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#cbf8f8" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="vite.svg" alt="image" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="color">Color</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="clock">Clock</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="todo">Todo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="social">Social</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="image">Image</Link>
                            </li>

                        </ul>
                        {
                            color ? <MdOutlineLightMode onClick={() => setcolor(!color)} style={{ cursor: "pointer" }} /> : <MdNightlight onClick={() => setcolor(!color)} style={{ cursor: "pointer" }} />
                        }
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Name</a></li>
                                    <li><a className="dropdown-item" href="#"> Profile</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
