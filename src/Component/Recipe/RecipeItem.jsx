import { useState, useEffect } from "react"
import { useParams } from "react-router"

const RecipeItem = () => {
    const [post, setPost] = useState({ name: "", img: null, cuisine: "", mealType: [] })
    let { id } = useParams()

    const getFetchId = () => {
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then(res => res.json())
            .then((data) => { 
                setPost({ name: data.name, img: data.image, cuisine: data.cuisine, mealType: data.mealType })
            })
    }

    useEffect(() => {
        getFetchId()
    }, [id])

    return (
        <div className="container w-50 my-4 p-3 rounded" style={{ background: "#ddfadd", minHeight: "264px" }}>
            <div className="row align-items-center text-center text-md-start">
                {/* Image Section */}
                <div className="col-12 col-md-5 mb-3 mb-md-0">
                    <img src={post.img} alt={post.name} className="img-fluid rounded-circle" style={{ maxHeight: "200px" }} />
                </div>

                {/* Text Section */}
                <div className="col-12 col-md-7">
                    <h4 className="fw-bold">{post.name}</h4>
                    <p className="fw-bold">Cuisine: {post.cuisine}</p>
                    <ul className="list-unstyled">
                        {post.mealType.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RecipeItem
