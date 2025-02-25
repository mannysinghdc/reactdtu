
import { useState, useEffect } from "react"
import { useParams } from "react-router"

const RecipeItem = () => {
    const [post, setPost] = useState({ name: "", img: null, cuisine: "", mealType: [] })
    let { id } = useParams()

    const getFetchId = () => {
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then(res => res.json())
            .then((data) => { setPost({ name: data.name, img: data.image, cuisine: data.cuisine, mealType: data.mealType }) })
    }

    useEffect(() => {
        getFetchId()
    }, [id])

    return (
        <>
            <div className="container w-50 my-4" style={{
                border: "1px solid", border: "1px solid",
                borderRadius: "10px",
                padding: "20px",
                background: "#ddfadd",
                minHeight:"264px"
            }}>
                <div className="row">
                    <div className="col-5">
                        <img src={post.img} alt="" height={200} style={{ borderRadius: "50%" }} />
                    </div>
                    <div className="col-7">
                        <h4>Name: {post.name}</h4>
                        <p className="fw-bold">Cuisine: {post.cuisine}</p>
                        <ul>
                            {
                                post.mealType.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

            </div >

        </>
    )
}

export default RecipeItem