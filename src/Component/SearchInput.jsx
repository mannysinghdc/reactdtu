import { useEffect, useState } from "react"

const SearchInput = () => {
    const val = ["Price", "Category", "Product", "Custom"]

    const [valIndex, setValIndex] = useState(0)
    const [data, setData] = useState(val[0])

    useEffect(() => {
        const id = setInterval(() => {
            setValIndex((prevIndex) => {
                const newIndex = prevIndex === val.length - 1 ? 0 : prevIndex + 1
                setData(val[newIndex]) 
                return newIndex
            })
        }, 2000)

        return () => clearInterval(id)
    }, []) 
    return (
        <div>
            <input type="text" className="searchInput" placeholder={`Search by ${data}`} />
        </div>
    )
}

export default SearchInput





const Input = () => {





    return (
        <div>
            <label>Search by {data}</label>
            <input type="text" />
        </div>
    )
}

