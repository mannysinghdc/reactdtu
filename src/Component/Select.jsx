import React, { useState } from "react";

const Select = () => {
  const [selectedOption, setSelectedOption] = useState(""); // Default is empty

  const handleChange = (e) => {
    setSelectedOption(e.target.value)
  }

  return (
    <center>
      <h2>Select Your Favorite Language</h2>

      <select value={selectedOption} onChange={handleChange}>
        <option value="">-- Select --</option>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="c++">C++</option>
      </select>

      <p className="text-primary">You selected: <strong>{selectedOption}</strong></p>
    </center>
  );
};

export default Select;
