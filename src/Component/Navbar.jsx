import { Link } from "react-router-dom"
import { MDBBtn } from "mdb-react-ui-kit"
import { NavLink, useLocation, useNavigate } from "react-router"
import Clock from "./Todo/Clock"
import DarkLight from "./DarkLight/DarkLight"

const Navbar = ({ mode, toggleMode }) => {
    const dropProjectList = ["Clock", "Color", "Counter", "MixColor", "Image", "TextCounter", "Social", "Weather"]
    const NavList = ["Home", "Todo", "Todo2", "TodoFile", "Recipe"]

    const navigate = useNavigate()
    const { pathname } = useLocation()



    // Fix localStorage parsing
    const login = JSON.parse(localStorage.getItem("login-user") || "{}")


    // Capitalize first letter function
    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }





    return (
        <nav
            className="navbar navbar-expand-lg"
            style={{
                backgroundColor: mode ? "#143356" : "#cbf8f8",
                position: "sticky",
                top: 0,
                zIndex: 1,
            }}
        >
            <div className="container-fluid">
                {/* Logo */}
                <Link className="navbar-brand" to="/">
                    <img src="vite.svg" loading="lazy" alt="logo" />
                </Link>

                {/* Mobile Menu Button */}
                {login?.flag && (
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                )}

                {/* Navbar Content */}
                {login?.flag && (
                    <div className="collapse  navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {NavList.map((item, i) => (
                                <li key={i} className="nav-item">
                                    {pathname === "/" ? (
                                        <Link className={`nav-link ${mode && "text-white"}`} to={item === "Home" ? "/" : item.toLowerCase()}>
                                            {item}
                                        </Link>
                                    ) : (
                                        <NavLink
                                            className="nav-link"
                                            style={({ isActive }) => ({
                                                color: isActive ? "red" : mode ? "white" : "gray", 
                                            })}
                                            to={item === "Home" ? "/" : item.toLowerCase()}
                                        >
                                            {item}
                                        </NavLink>
                                    )}
                                </li>
                            ))}

                            {/* Dropdown */}
                            <li className="nav-item dropdown">
                                <a className={`nav-link dropdown-toggle ${mode && "text-white"}`} role="button" data-bs-toggle="dropdown">
                                    Project
                                </a>
                                <ul className="dropdown-menu">
                                    {dropProjectList.map((item) => (
                                        <li key={item}>
                                            <Link className="dropdown-item" to={item.toLowerCase()}>
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>

                        {/* Date & Time */}
                        <div style={{ position: "relative", top: "8px", marginRight: "5px", color: mode ? "white" : "gray" }}>
                            <Clock />
                        </div>

                        {/* Dark & Light Mode */}
                        <DarkLight mode={mode} toggleMode={toggleMode} />

                        {/* Profile Dropdown */}
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className={`nav-link dropdown-toggle ${mode && "text-white"}`} role="button" data-bs-toggle="dropdown">
                                    Profile
                                </a>
                                <ul className="dropdown-menu" style={{ minWidth: "87px" }}>
                                    <li>
                                        <span className="dropdown-item text-danger">{capitalizeFirstLetter(login?.name || "Guest")}</span>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/profile">
                                            Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <button
                                            className="dropdown-item"
                                            onClick={() => {
                                                localStorage.removeItem("login-user")
                                                navigate("login")
                                            }}
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                )}

                {/* Login & Signup (if not logged in) */}
                {!login?.flag && (
                    <div>
                        <DarkLight />
                        <MDBBtn rounded size="sm" className="mx-1" onClick={() => navigate("login")}>
                            Login
                        </MDBBtn>
                        <MDBBtn rounded size="sm" onClick={() => navigate("signUp")}>
                            SIGNUP
                        </MDBBtn>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
