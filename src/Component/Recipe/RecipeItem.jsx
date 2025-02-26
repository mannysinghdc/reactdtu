
import { useNavigate, useLocation } from "react-router"
import Loader from "../Loader.jsx/Loader"

const RecipeItem = () => {
    let navigate = useNavigate()
    const { state } = useLocation()

    return (
        <>
            {/* Back button */}
            <button
                className="btn btn-info btn-sm m-4"
                onClick={() => navigate(-1)}
                style={{ transition: "all 0.4s ease-in-out" }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#17a2b8"}
                onMouseOut={(e) => e.target.style.backgroundColor = ""}>
                Back
            </button>
            <div className="container w-50 w-md-50 mx-auto my-4 p-4 rounded shadow-lg" style={{ background: "#ddfadd", minHeight: "264px" }}>
                <div className="row align-items-center text-center text-md-start">
                    {/* Image Section */}
                    <div className="col-12 col-md-5 mb-3 mb-md-0">
                        <img src={state.image} loading="lazy" alt={state.name} className="img-fluid rounded-circle" style={{ maxHeight: "200px", objectFit: "cover" }} />
                    </div>

                    {/* Text Section */}
                    <div className="col-12 col-md-7">
                        <h4 className="fw-bold">{state.name || "Unknown Recipe"}</h4>
                        <p className="fw-bold">Cuisine: {state.cuisine || "Not Available"}</p>
                        <ul className="list-unstyled">
                            {state.mealType.length > 0 ? (
                                state.mealType.map((item, i) => <li key={i}>{item}</li>)
                            ) : (
                                <li>No meal type available</li>
                            )}
                        </ul>
                        <p className="fw-bold mb-0">Ingredients</p>
                        {
                            state.ingredients.map((item, i) => (
                                <span key={i} className="badge text-bg-light mx-1">{item}</span>
                            ))
                        }
                    </div>
                </div>
            </div >
        </>

    )
}

export default RecipeItem
