import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router"
import Loader from "../Loader.jsx/Loader"

const RecipeItem = () => {
    const [post, setPost] = useState(null)
    const [error, setError] = useState(null)  // State for error handling
    let { id } = useParams()
    let navigate = useNavigate()

    // Fetch data from API
    const getFetchId = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/recipes/${id}`)
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`)
            }
            const data = await res.json()
            setPost({
                name: data.name,
                img: data.image,
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
        getFetchId()
    }, [id])

    return (
        <>
            {error ? (<div className="text-center text-danger fw-bold my-4 w-50 m-auto" style={{ height: "45vh" }}>{error}</div>)
                :
                post === null ? (<Loader />)
                    : (
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
                                        <img src={post.img} loading="lazy" alt={post.name} className="img-fluid rounded-circle" style={{ maxHeight: "200px", objectFit: "cover" }} />
                                    </div>

                                    {/* Text Section */}
                                    <div className="col-12 col-md-7">
                                        <h4 className="fw-bold">{post.name || "Unknown Recipe"}</h4>
                                        <p className="fw-bold">Cuisine: {post.cuisine || "Not Available"}</p>
                                        <ul className="list-unstyled">
                                            {post.mealType.length > 0 ? (
                                                post.mealType.map((item, i) => <li key={i}>{item}</li>)
                                            ) : (
                                                <li>No meal type available</li>
                                            )}
                                        </ul>
                                        <p className="fw-bold mb-0">Ingredients</p>
                                        {
                                            post.ingredients.map((item, i) => (
                                                <span key={i} className="badge text-bg-light mx-1">{item}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div >
                        </>

                    )

            }

        </>


    )
}

export default RecipeItem
