
import { useEffect, useState } from "react";

const Rgb = () => {
    const [r, setR] = useState( 0)
    const [g, setG] = useState( 0)
    const [b, setB] = useState( 0)
    const [color, setColor] = useState("#000000") // Default color


    // Function to convert hex color to RGB
    const hexToRgb = (hex) => {
        hex = hex.replace("#", "")
        let bigint = parseInt(hex, 16)
        let red = (bigint >> 16) & 255
        let green = (bigint >> 8) & 255
        let blue = bigint & 255
        return { red, green, blue }
    };

    // Handle color picker change
    const handleColorChange = (e) => {
        setColor(e.target.value);
        const { red, green, blue } = hexToRgb(e.target.value)
        setR(red)
        setG(green)
        setB(blue)
    }

    const saveHanlder = () => {
        const colorNum = { r, g, b }

        localStorage.setItem("color", JSON.stringify(colorNum))
        alert("Color has been saved!")
    }


    useEffect(() => {
        const colorCode = JSON.parse(localStorage.getItem("color"))
        if (colorCode) {
            const { r, g, b } = colorCode
            setR(r)
            setG(g)
            setB(b)
        }
    }, [])

    return (
        <center className="mb-3">
            <h2 className="my-4 ">RGB Color Mixer</h2>
            <div
                style={{
                    backgroundColor: `rgb(${r},${g},${b})`,
                    height: "150px",
                    width: "150px",
                    borderRadius: "10px",
                    border: "2px solid black",
                    marginBottom: "10px",
                }}
            >

            </div>

            {/* RGB Sliders */}
            <div>
                <label>
                    Red: {r}
                    <input type="range" min="0" max="255" value={r} onChange={(e) => setR(parseInt(e.target.value))} />

                </label>
                <br />
                <label>
                    Green: {g}
                    <input type="range" min="0" max="255" value={g} onChange={(e) => setG(parseInt(e.target.value))} />
                </label>
                <br />
                <label>
                    Blue: {b}
                    <input type="range" min="0" max="255" value={b} onChange={(e) => setB(parseInt(e.target.value))}
                    />
                </label>
            </div>

            {/* Color Picker */}
            <div style={{ marginTop: "10px" }}>
                <label>Pick a Color: </label>
                <input type="color" value={color} onChange={handleColorChange} />
            </div>
            <button className="btn btn-primary btn-sm" onClick={saveHanlder}>Save</button>
        </center>
    );
};

export default Rgb
