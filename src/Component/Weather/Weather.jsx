import { useEffect, useState } from 'react' // Weather forcasting with vedio stacky background
import style from './Weather.module.css'
import axios from 'axios';

import haze from '../../assets/haze.png'
import cloud from '../../assets/cloud.png'
import Vedio from '../Vedio';

const Weather = () => {
    const [city, setCity] = useState("delhi")
    const [temp, setTemp] = useState(0)
    const [weather, setWeather] = useState("")

    const key = import.meta.env.VITE_WEATHER_KEY


    const serachHanlder = () => {
        if (city) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
                .then(res => { setTemp((res.data.main.temp - 273).toFixed(0)), setWeather(res.data.weather[0].main) })
        }
    }

    useEffect(() => {
        serachHanlder()
    }, [])




    return (
        <>
        <Vedio/>
            <div style={{minHeight:"500px"}}>
                <h1 className='text-center my-5'>Weather Forcasting</h1>

                <div className='mb-3 m-auto d-flex' style={{ width: "40%" }}>
                    <input type="text" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} />
                    <button className='btn btn-primary' onClick={serachHanlder}>Search</button>
                </div>
                <div >
                    <div className="card mb-3 m-auto" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={haze} className="img-fluid rounded-start m-4" alt="haze" width={150} />
                            </div>
                            <div className="col-md-8 text-center">
                                <div className="card-body m-3">
                                    <h5 className="card-title">{city.toUpperCase()}</h5>
                                    <p className="card-text">Temp : {temp} °C</p>
                                    <p className="card-text">Weather : {weather}</p>
                                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}

export default Weather