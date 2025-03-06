import { useEffect, useState } from "react" // Country card cmpt
import { Link, useParams } from "react-router"
import Loader from "../Loader.jsx/Loader"

const CountryDetail = () => {
    const [detail, setDetail] = useState(null)
    const [err, setErr] = useState("") //error state

    const { name } = useParams()

    useEffect(() => {
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
    }, [name])

    return (
        <center>
            {err && <h2 className="text-danger my-4" style={{ minHeight: "300px" }}>{err}</h2>}
            {detail === null ? <Loader /> : (
                <div style={{ textAlign: "left", width: "50%", margin: "3rem 0px" }}>
                    <img src={detail.flags?.png} alt={name} width="200" />
                    <h1>Country: {detail.name?.common || "Unknown"}</h1>
                    <h6>Official Name: {detail.name?.official}</h6>
                    <h6>Car Side: {detail.car?.side}</h6>
                    <h6>Continents: {detail.continents?.join(", ")}</h6>
                    <h6>Population: {detail.population?.toLocaleString("en-US")}</h6>
                    <h6>Area: {detail.area?.toLocaleString()} km²</h6>
                    <h6>Time Zones: {detail.timezones?.join(", ")}</h6>
                    <h6>Region: {detail.region}</h6>
                    <h6>Subregion: {detail.subregion}</h6>
                    <h6>Independent: {detail.independent ? "Yes" : "No"}</h6>
                    <h6>Landlocked: {detail.landlocked ? "Yes" : "No"}</h6>

                    <p><strong>Alt Spellings:</strong></p>
                    <ul>
                        {detail.altSpellings?.map((e, i) => (
                            <li key={i}>{e}</li>
                        ))}
                    </ul>

                    <p><strong>Capital(s):</strong></p>
                    <ul>
                        {detail.capital?.map((e, i) => (
                            <li key={i}>{e}</li>
                        ))}
                    </ul>

                    <p><strong>Languages:</strong></p>
                    <ul>
                        {detail.languages &&
                            Object.values(detail.languages).map((lang, i) => (
                                <li key={i}>{lang}</li>
                            ))}
                    </ul>

                    <p><strong>Currencies:</strong></p>
                    <ul>
                        {detail.currencies &&
                            Object.entries(detail.currencies).map(([key, value]) => (
                                <li key={key}>
                                    {value.name} ({value.symbol})
                                </li>
                            ))}
                    </ul>

                    <p><strong>Borders:</strong></p>
                    <ul>
                        {
                            detail.borders?.map((border, i) => (
                                <Link key={i} className="btn btn-primary btn-sm mx-1" to={`/country/${border}`} role="button">{border}</Link>
                            ))
                        }
                    </ul>

                    <p><strong>Coat of Arms:</strong></p>
                    {detail.coatOfArms?.png && (
                        <img src={detail.coatOfArms.png} alt="Coat of Arms" width="150" />
                    )}
                    <br />
                    <Link className="btn my-4" to={detail.maps.googleMaps} target="_blank" role="button">Google Map</Link>

                    <hr />
                </div>
            )}
        </center>
    )
}

export default CountryDetail

