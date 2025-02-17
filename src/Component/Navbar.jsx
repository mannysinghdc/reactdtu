import { Link } from "react-router-dom"
import { MdNightlight, MdOutlineLightMode } from "react-icons/md"
import { useEffect, useState } from "react"
import { MDBBtn } from 'mdb-react-ui-kit';
import { NavLink, useLocation, useNavigate } from "react-router";
import Clock from "./Todo/Clock";

const Navbar = () => {
    const [color, setcolor] = useState(false) // dark and light mode
    const dropProject = ["Clock", "Color", "MixColor", "Image", "TextCounter"]

    const NavList = ["Home", "Todo", "TodoFile", "Social"]

    let navigate = useNavigate()
    const { pathname } = useLocation()
    const login = JSON.parse(localStorage.getItem("login-user" || "{}"))

    //Capital first letter function
    const capitalizeFirstLetter = (word) => {
        return String(word).charAt(0).toUpperCase() + String(word).slice(1);
    }

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
                    <Link className="navbar-brand" to="/">
                        <img src="vite.svg" alt="image" />
                    </Link>
                    {
                        login?.flag && <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    }

                    {/* If user is logged in */}
                    {
                        login?.flag && (
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    {
                                        NavList.map((item, i) => (
                                            <li key={i} className="nav-item">
                                                {
                                                    pathname === "/" ? <Link className="nav-link" ria-current="page" to={item === "Home" ? "/" : item.toLowerCase()} >{item}</Link> :

                                                        <NavLink className="nav-link" style={({ isActive }) => isActive ? { color: "red" } : {}} aria-current="page" to={item === "Home" ? "/" : item.toLowerCase()}>{item}</NavLink>
                                                }
                                            </li>
                                        ))
                                    }
                                    {/* Dropdown */}
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Project
                                        </a>
                                        <ul className="dropdown-menu">
                                            {
                                                dropProject.map((item) => (
                                                    <li key={item}><Link className="dropdown-item" to={item.toLocaleLowerCase()}>{item}</Link></li>
                                                ))
                                            }
                                        </ul>
                                    </li>


                                </ul>
                                {/* Date & Time */}
                                <div style={{ position: "relative", top: "8px", marginRight: "5px", color: color ? "gray" : "gray" }}>
                                    <Clock />
                                </div>
                                {
                                    color ? <MdOutlineLightMode title="Light mode" onClick={() => setcolor(!color)} style={{ cursor: "pointer", color: color ? "gray" : "gray" }} /> : <MdNightlight title="Dark mode" onClick={() => setcolor(!color)} style={{ cursor: "pointer" }} />
                                }
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Profile
                                        </a>
                                        <ul className="dropdown-menu" style={{ minWidth: "87px" }}>
                                            <li><a className="dropdown-item" href="#"><span className="text-danger">{capitalizeFirstLetter(login.name)}</span></a></li>
                                            <li><a className="dropdown-item" href="#"> Profile</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#" onClick={() => { localStorage.removeItem("login-user"), navigate("login") }}>Logout</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        )
                    }
                    {
                        !login?.flag && <div>
                            {
                                color ? <MdOutlineLightMode title="Light mode" onClick={() => setcolor(!color)} style={{ cursor: "pointer", marginBottom: "5px", color: color ? "gray" : "gray" }} /> : <MdNightlight title="Dark mode" onClick={() => setcolor(!color)} style={{ cursor: "pointer", marginBottom: "5px" }} />
                            }
                            <MDBBtn rounded size='sm' className="mx-1" onClick={() => navigate("login")}>Login</MDBBtn>
                            <MDBBtn rounded size='sm' onClick={() => navigate("signUp")}>SIGNUP</MDBBtn>
                        </div>
                    }


                </div>
            </nav>
        </>
    )
}

export default Navbar
