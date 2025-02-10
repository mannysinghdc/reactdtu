

const TodoCmpt = ({ item, index }) => {

    // Capitalize Each Word
    const capitalizeEachWord = (str) => {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>
                    <div className="d-flex align-items-center">
                        <img
                            src={item.file}
                            alt="image"
                            style={{ width: "45px", height: "45px" }}
                            className="rounded-circle"
                        />
                        <div className="ms-3">
                            <p className="fw-bold mb-1">{capitalizeEachWord(item.name)}</p>
                            <p className="text-muted mb-0">{item.email}</p>
                        </div>
                    </div>
                </td>
                <td>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
                <td>
                    <p className="text-muted mb-0">{item.age}</p>
                </td>
                <td>
                    <span className="badge badge-success rounded-pill d-inline">{new Date(item.date).toDateString()}</span>
                </td>
                <td>
                    <button type="button" className="btn btn-danger btn-sm btn-rounded mx-1">
                        Edit
                    </button>
                    <button type="button" className="btn btn-primary btn-sm btn-rounded">
                        Edit
                    </button>
                </td>
            </tr>
        </>
    )
}

export default TodoCmpt
