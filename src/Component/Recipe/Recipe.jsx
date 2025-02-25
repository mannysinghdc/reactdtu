import { useEffect, useState } from "react"    // Api integration
import { MDBInput } from "mdb-react-ui-kit"
import { Link } from "react-router-dom"
import Loader from "../Loader.jsx/Loader"

const Recipe = () => {
    const [data, setData] = useState([])
    const [text, setText] = useState("")
    const [loading, setLoading] = useState(false)


    //Data fetch from API
    const getFetch = async () => {
        setLoading(true)
        try {
            const res = await fetch("https://dummyjson.com/recipes")
            const result = await res.json()
            setData(result.recipes)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
        setLoading(false)
    }

    useEffect(() => {
        getFetch()
    }, [])

    //Filter daat
    const filterData = data.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
    )

    return (
        <>
            {
                !loading && <>
                    <h1 className="text-center my-4">Food Gallery</h1>
                    <div className="m-auto w-50 mb-4">
                        <MDBInput
                            className="mb-4"
                            type="text"
                            label="Search Food"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                </>
            }


            {loading && <Loader />}

            <div className="container">
                <div className="row">
                    {filterData.map((item) => (
                        <div className="col-md-3 mb-4" key={item.id}>
                            <Link to={`/recipe/${item.id}`} style={{ textDecoration: "none" }}>
                                <Card item={item} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Recipe

const Card = ({ item }) => {
    return (
        <div className="card shadow-lg rounded h-100">
            <img className="card-img-top" src={item.image} alt={item.name} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                    Rating:{" "}
                    <span className={item.rating > 4.6 ? "text-primary" : "text-danger"}>
                        {item.rating}
                    </span>
                </p>
            </div>
        </div>
    )
}
