import { Link } from "react-router-dom"

const CountryCard = ({ item }) => {
    return (
        <>
            <div className="card shadow-lg rounded h-100 card-hover">
                <img className="card-img-top" src={item.flags.png} alt="Card image cap" height={130} />
                <div className="card-body">
                    <h5 className="card-title">{item.name.common}</h5>
                    <p className="card-text">Ppl: {item.population.toLocaleString('en-IN')}</p>
                    <p className="card-text fs-bold">Capital: {item.capital}</p>
                    <Link to={`${item.name.common}`} className="btn btn-info btn-sm">Read more</Link>
                </div>
              
            </div>
        </>
    )
}

export default CountryCard
