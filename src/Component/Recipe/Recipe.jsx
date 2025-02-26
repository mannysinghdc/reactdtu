import { useEffect, useState } from "react"    // Api integration with error boundary and Shimmer Effect
import { MDBInput } from "mdb-react-ui-kit"
import { Link } from "react-router-dom"
import Loader from "../Loader.jsx/Loader"
import Card from "./Card"


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
            {/* Header and Search Box */}

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

            {/* Loader + Shimmer Effect */}
            {
                loading ? (
                    <div className="container position-relative"> {/* Wrapper for Loader & Shimmer Cards */}
                        {/* Centered Loader */}
                        <div style={{ position: "absolute", top: "20%", left: "50%", zIndex: 10 }}>
                            <Loader />
                        </div>

                        <div className="row mt-4">
                            {Array(8).fill().map((_, index) => (
                                <div className="col-md-3 mb-4" key={index}>
                                    <ShimmerCard />
                                </div>
                            ))}
                        </div>
                    </div>
                )
                    : (
                        <div className="container">
                            <div className="row">
                                {filterData.map((item) => (
                                    <div className="col-md-3 mb-4" key={item.id}>
                                        <Link to={`/recipe/${item.id}`} style={{ textDecoration: "none" }} state={item}>
                                            <Card item={item} />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
            }

        </>
    )
}

export default Recipe

//Shimmer cmpt
const ShimmerCard = () => {
    return (
        <div className="card shadow-lg rounded" style={{ height: "380px", width: "270px", backgroundColor: "#ded4d4" }}>

        </div>
    )
}



