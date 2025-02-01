import { useState } from "react"


const CheckBox = () => {
    const [skills, setSkills] = useState([])
  
    const changeHandler = (e) => {
      const { value, checked } = e.target
  
      if (checked) {
        // Add the selected skill to the array
        setSkills([...skills, value])
      } else {
        // Remove the deselected skill
        setSkills(skills.filter((skill) => skill !== value))
      }
    }
    return (
        <>
            <center>
                <div>
                    <h3>Select Your Skills</h3>
                    <label>
                        <input type="checkbox" value="JavaScript" onChange={changeHandler} checked={skills.includes("JavaScript")} />
                        JavaScript
                    </label>
                    <label>
                        <input type="checkbox" value="React" onChange={changeHandler} checked={skills.includes("React")} />
                        React
                    </label>
                    <label>
                        <input type="checkbox" value="Node.js" onChange={changeHandler} checked={skills.includes("Node.js")} />
                        Node.js
                    </label>

                    <h4>Selected Skills: {skills.length > 0 ? skills.join(",   ") : "None"}</h4>
                </div>

            </center>
        </>
    )
}

export default CheckBox
