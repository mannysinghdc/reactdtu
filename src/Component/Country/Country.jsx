import { useState, useEffect } from 'react'
import CountryCard from './CountryCard'
import Loader from '../Loader.jsx/Loader'


const Country = () => {
    const [countriesData, setCountriesData] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json(res))
            .then((data) => { setCountriesData(data) })


    }, [])

    return (
        <>
            <div className="container">
                <h2 className='text-center my-4'>Country App</h2>
                <div className="row">
                    {
                        countriesData.map((item, i) => (
                            <div key={i} className="col-md-3 my-2">
                                <CountryCard item={item} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Country
