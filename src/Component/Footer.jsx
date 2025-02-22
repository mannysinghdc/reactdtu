import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="text-white py-4 mt-3" style={{ backgroundColor: "#48a5a5" }}>
            <div className="container text-center text-md-start">
                <div className="row">
                    {/* Left Section - Branding */}
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h5 className="fw-bold">MyTodoApp</h5>
                        <p className="text-muted">
                            Organize your tasks efficiently and stay productive.
                        </p>
                    </div>

                    {/* Middle Section - Quick Links */}
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h5 className="fw-bold">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="" className="text-white text-decoration-none">Home</Link></li>
                            <li><Link to="" className="text-white text-decoration-none">About</Link></li>
                            <li><Link to="" className="text-white text-decoration-none">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Right Section - Social Media */}
                    <div className="col-md-4">
                        <h5 className="fw-bold">Follow Us</h5>
                        <div className="d-flex justify-content-center justify-content-md-start">
                            <Link to="https://facebook.com" target="_blank" className="text-white me-3"><i className="fab fa-facebook fa-lg"></i></Link>
                            <Link to="https://twitter.com" target="_blank" className="text-white me-3"><i className="fab fa-twitter fa-lg"></i></Link>
                            <Link to="https://instagram.com" target="_blank" className="text-white me-3"><i className="fab fa-instagram fa-lg"></i></Link>
                            <Link to="https://github.com/mannysinghdc" target="_blank" className="text-white"><i className="fab fa-github fa-lg"></i></Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Section */}
                <div className="text-center mt-3">
                    <p className="mb-0">© {new Date().getFullYear()} MyTodoApp. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
