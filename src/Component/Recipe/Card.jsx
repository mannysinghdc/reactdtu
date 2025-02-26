import './Card.css'

const Card = ({ item }) => {
    return (
        <div className="card shadow-lg rounded h-100 card-hover">
            <img className="card-img-top" src={item.image} alt={item.name} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                    Rating:{" "}
                    <span className={item.rating > 4.6 ? "text-primary" : "text-danger"}>
                        {item.rating}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Card