import { useState, useEffect } from "react"
import { useParams, useNavigate, useLocation } from "react-router"
import Loader from "../Loader.jsx/Loader"

const RecipeItem = () => {
    const [post, setPost] = useState(null)
    const [error, setError] = useState(null)
    let { id } = useParams()
    let navigate = useNavigate()
    const { state } = useLocation()

    // Fetch data from API if state is not available

    const getFetchId = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/recipes/${id}`)
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`)
            }
            const data = await res.json()
            setPost({
                name: data.name,
                image: data.image,
                cuisine: data.cuisine,
                mealType: data.mealType || [],
                ingredients: data.ingredients || []
            })
        } catch (error) {
            setError("Failed to fetch recipe data. Please try again later.")
            console.error("Error fetching recipe:", error)
        }
    }


    useEffect(() => {
        if (!state) {
            getFetchId()
        }
    }, [id, state])

    // Show error message if fetching fails
    if (error) {
        return (
            <div className="text-center text-danger fw-bold my-4 w-50 m-auto" style={{ height: "45vh" }}>
                {error}
            </div>
        )
    }

    // Show loader while fetching data
    if (!state && post === null) {
        return <Loader />
    }

    // Use state if available, otherwise use post data
    const recipe = state || post

    console.log(recipe)

    return (
        <div style={{position:"relative"}}>
            {/* Back button */}
            <button
                className="btn btn-info btn-sm m-4"
                onClick={() => navigate(-1)}
                style={{ transition: " all 0.4s ease-in-out", position:"absolute" }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#17a2b8")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "")}>
                Back
            </button>

            {/* Recipe Container */}
            <div className="container w-50 w-md-50 mx-auto my-4 p-4 rounded shadow-lg" style={{ background: "#ddfadd", minHeight: "264px" }}>
                <div className="row align-items-center text-center text-md-start">
                    {/* Image Section */}
                    <div className="col-12 col-md-5 mb-3 mb-md-0">
                        <img
                            src={recipe.image}
                            loading="lazy"
                            alt={recipe.name || "Unknown Recipe"}
                            className="img-fluid rounded-circle"
                            style={{ maxHeight: "200px", objectFit: "cover" }}
                        />
                    </div>

                    {/* Text Section */}
                    <div className="col-12 col-md-7">
                        <h4 className="fw-bold">{recipe.name || "Unknown Recipe"}</h4>
                        <p className="fw-bold">Cuisine: {recipe.cuisine || "Not Available"}</p>
                        <ul className="list-unstyled">
                            {recipe.mealType.length > 0 ? (
                                recipe.mealType.map((item, i) => <li key={i}>{item}</li>)
                            ) : (
                                <li>No meal type available</li>
                            )}
                        </ul>
                        <p className="fw-bold mb-0">Ingredients</p>
                        {recipe.ingredients.length > 0 ? (
                            recipe.ingredients.map((item, i) => (
                                <span key={i} className="badge text-bg-light mx-1">{item}</span>
                            ))
                        ) : (
                            <span>No ingredients available</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeItem
