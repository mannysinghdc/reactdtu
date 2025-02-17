import { useId } from 'react'
import { useState } from 'react'

const Today = () => {
    const [count, setcount] = useState(0)
    const id = useId()

    console.log(id)

    return (
        <center>
            <h1>{count}</h1>
            <button onClick={() => setcount(count + 1)}>update</button>

        </center>
    )
}

export default Today



