import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Loader from "../Loader.jsx/Loader"

const CountryDetail = () => {
    const [detail, setDetail] = useState(null)
    const [err, setErr] = useState("")

    const { name } = useParams()

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
            .then((res) => {
                if (!res.ok) {
                    setErr("Country not found. Please check the name.");
                    throw new Error(`HTTP error Status ${res.status}`)
                }
                return res.json()
            })
            .then(([data]) => {
                // console.log(data)

                setDetail(data) // Store the entire response in state
            })
            .catch((error) => console.error("Error fetching country details:", error))
    }, [name])

    return (
        <center>
            {err && <h2 className="text-danger my-4" style={{minHeight:"300px"}}>{err}</h2>}
            {detail === null ? <Loader /> : (
                <div style={{ textAlign: "left", width: "50%", margin: "3rem 0px" }}>
                    <img src={detail.flags?.png} alt={name} width="200" />
                    <h1>Country: {detail.name?.common || "Unknown"}</h1>
                    <h6>Official Name: {detail.name?.official}</h6>
                    <h6>Car Side: {detail.car?.side}</h6>
                    <h6>Continents: {detail.continents?.join(", ")}</h6>
                    <h6>Population: {detail.population?.toLocaleString()}</h6>
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
                        {detail.borders?.length > 0 ? (
                            detail.borders.map((border, i) => <li key={i}>{border}</li>)
                        ) : (
                            <li>No bordering countries</li>
                        )}
                    </ul>

                    <p><strong>Coat of Arms:</strong></p>
                    {detail.coatOfArms?.png && (
                        <img src={detail.coatOfArms.png} alt="Coat of Arms" width="150" />
                    )}

                    <hr />
                </div>
            )}
        </center>
    )
}

export default CountryDetail

