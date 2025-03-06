import { useEffect, useState } from "react" // Country card cmpt 
import { Link, useParams, useLocation,useNavigate } from "react-router"
import Loader from "../Loader.jsx/Loader"

const CountryDetail = () => {
    const [detail, setDetail] = useState(null)
    const [err, setErr] = useState("") //error state

    const { name } = useParams()
    const navigate = useNavigate()
    const { state } = useLocation() // data load without api fetch and by state props 

    // Multiple Api fetch
    const fetchData = () => {
        fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error Status ${res.status}`)
                }
                return res.json()
            })
            .then(([data]) => {
                setDetail(data)

                if (data.borders?.length > 0) {
                    Promise.all(
                        data.borders.map((border) =>
                            fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                                .then((res) => res.json())
                                .then(([result]) => result.name.common)
                        )
                    ).then((res) => setDetail((prev) => ({ ...prev, borders: res })))
                }


            })
            .catch((error) => {
                console.error("Error fetching country details:", error)
                setErr("Country not found. Please check the name");
            })
    }

    useEffect(() => {
        if (!state) {
            fetchData()
        }
    }, [name, state])

    const countryDetail = state || detail    // optional

    return (
        <div className="container">
            {/* Back button */}
            <div style={{position:"relative"}}>
                <button
                    className="btn btn-info btn-sm m-4"
                    onClick={() => navigate("/country")}
                    style={{ transition: " all 0.4s ease-in-out", position: "absolute" , right:"0px" }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#17a2b8")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "")}>
                    Back
                </button>
            </div>

            {err && <h2 className="text-danger my-4" style={{ minHeight: "300px" }}>{err}</h2>}
            {countryDetail === null ? <Loader /> : (
                <div style={{ textAlign: "left", width: "50%", margin: "3rem 0px" }}>
                    <img src={countryDetail.flags?.png} alt={name} width="200" />
                    <h1>Country: {countryDetail.name?.common || "Unknown"}</h1>
                    <h6>Official Name: {countryDetail.name?.official}</h6>
                    <h6>Car Side: {countryDetail.car?.side}</h6>
                    <h6>Continents: {countryDetail.continents?.join(", ")}</h6>
                    <h6>Population: {countryDetail.population?.toLocaleString("en-US")}</h6>
                    <h6>Area: {countryDetail.area?.toLocaleString()} km²</h6>
                    <h6>Time Zones: {countryDetail.timezones?.join(", ")}</h6>
                    <h6>Region: {countryDetail.region}</h6>
                    <h6>Subregion: {countryDetail.subregion}</h6>
                    <h6>Independent: {countryDetail.independent ? "Yes" : "No"}</h6>
                    <h6>Landlocked: {countryDetail.landlocked ? "Yes" : "No"}</h6>

                    <p><strong>Alt Spellings:</strong></p>
                    <ul>
                        {countryDetail.altSpellings?.map((e, i) => (
                            <li key={i}>{e}</li>
                        ))}
                    </ul>

                    <p><strong>Capital(s):</strong></p>
                    <ul>
                        {countryDetail.capital?.map((e, i) => (
                            <li key={i}>{e}</li>
                        ))}
                    </ul>

                    <p><strong>Languages:</strong></p>
                    <ul>
                        {countryDetail.languages &&
                            Object.values(countryDetail.languages).map((lang, i) => (
                                <li key={i}>{lang}</li>
                            ))}
                    </ul>

                    <p><strong>Currencies:</strong></p>
                    <ul>
                        {countryDetail.currencies &&
                            Object.entries(countryDetail.currencies).map(([key, value]) => (
                                <li key={key}>
                                    {value.name} ({value.symbol})
                                </li>
                            ))}
                    </ul>

                    <p><strong>Borders:</strong></p>
                    <ul>
                        {
                            countryDetail.borders?.map((border, i) => (
                                <Link key={i} className="btn btn-primary btn-sm mx-1" to={`/country/${border}`} role="button">{border}</Link>
                            ))
                        }
                    </ul>

                    <p><strong>Coat of Arms:</strong></p>
                    {countryDetail.coatOfArms?.png && (
                        <img src={countryDetail.coatOfArms.png} alt="Coat of Arms" width="150" />
                    )}
                    <br />
                    <Link className="btn my-4" to={countryDetail.maps.googleMaps} target="_blank" role="button">Google Map</Link>

                    <hr />
                </div>
            )}
        </div>
    )
}

export default CountryDetail

