import { useState } from "react"

const Radio = () => {
    const [gender, setGender] = useState("")

    function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }

    return (
        <center>
            <h2>Select Gender (Radio input handling)</h2>

            <input type="radio" name="gender" id="male" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} />
            <label htmlFor="male">Male</label>

            <input type="radio" name="gender" id="female" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} />
            <label htmlFor="female">Female</label>

            <input type="radio" name="gender" id="other" value="other" checked={gender === "other"} onChange={(e) => setGender(e.target.value)} />
            <label htmlFor="other">Other</label>

            {
                gender && <p className="text-primary">Selected Gender: <strong>{capitalizeFirstLetter(gender)}</strong></p>
            }
        </center>
    );
};

export default Radio;

