import { useState, useEffect } from 'react'
import CountryCard from './CountryCard'
import Loader from '../Loader.jsx/Loader'
import { MDBInput } from 'mdb-react-ui-kit'


const Country = () => {
    const [countriesData, setCountriesData] = useState([])
    const [query, setQuery] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json(res))
            .then((data) => { setCountriesData(data), setLoading(false) })
    }, [])

    const filteredItems = countriesData.filter(item =>
        item.name.common.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <>
            {
                loading ? <Loader /> : (
                    <div className="container">
                        <h2 className='text-center my-4'>Country App</h2>
                        <div className='w-25'>
                            <MDBInput className='mb-4' type='text' label='Search Counrty' value={query} onChange={(e) => setQuery(e.target.value)} />
                        </div>

                        <div className="row">
                            {
                                filteredItems.map((item, i) => (
                                    <div key={i} className="col-md-3 my-2">
                                        <CountryCard item={item} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default Country
