

const SearchInput = ({ query, setQuery }) => {
    return (
        <>
            <div className='d-flex justify-content-between my-4'>
                <div className='w-25'>
                    <input type="text" className="form-control" placeholder='Search' value={query} onChange={(e) => setQuery(e.target.value)} />
                </div>
                <div className='w-25'>
                    <select className="form-select" onChange={(e) => setQuery(e.target.value.toLowerCase())}>
                        <option hidden>Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default SearchInput
