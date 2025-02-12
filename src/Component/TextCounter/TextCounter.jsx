import { MDBTextArea, MDBBtn } from "mdb-react-ui-kit"
import { useState } from "react"

const TextCounter = () => {
  const [text, setText] = useState("")

  // Uppercase Function
  const upHandler = () => {
    setText(text.toUpperCase())
  }

  // Lowercase Function
  const lowerHandler = () => {
    setText(text.toLowerCase())
  }

  // Clear Function
  const clearHandler = () => {
    setText("")
  }

  // Extra space removal Function
  const extraSpaceHandler = () => {
    setText(text.replace(/\s+/g, " ").trim())
  }

  // Reversed text Function
  const reverseHandler = () => {
    setText(text.split(" ").reverse().join(" "))
  }

  // Copy Function with Alert
  const copyHandler = () => {
    navigator.clipboard.writeText(text)
    alert("Text copied to clipboard!")
  }

  // Word & Character Count
  const wordsArray = text.trim().split(/\s+/).filter((word) => word !== "")
  const wordCount = wordsArray.length
  const charCount = text.length

  // Estimated Read Time (assuming 200 words per min)
  const readTime = (wordCount / 125).toFixed(2)

  return (
    <div className="container my-4">
      <div className="col-md-8 mx-auto">
        <h2 className="mb-4">Enter the text to analyze</h2>
        <MDBTextArea
          className="mb-4"
          label="Enter Text"
          id="myBox"
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      {/* Buttons */}
      <div className="col-md-8 mx-auto" style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
        <MDBBtn disabled={!text} rounded color="primary" size="sm" onClick={upHandler}>
          UpperCase
        </MDBBtn>
        <MDBBtn disabled={!text} rounded color="primary" size="sm" onClick={lowerHandler}>
          LowerCase
        </MDBBtn>
        <MDBBtn disabled={!text} rounded color="primary" size="sm" onClick={copyHandler}>
          Copy
        </MDBBtn>
        <MDBBtn disabled={!text} rounded color="primary" size="sm" onClick={clearHandler}>
          Clear
        </MDBBtn>
        <MDBBtn disabled={!text} rounded color="primary" size="sm" onClick={extraSpaceHandler}>
          Space Remove
        </MDBBtn>
        <MDBBtn disabled={!text} rounded color="primary" size="sm" onClick={reverseHandler}>
          Reverse
        </MDBBtn>
      </div>

      {/* Text Summary */}
      <div className="container col-md-8 mx-auto mt-4">
        <h3>Your text summary</h3>
        <p>
          <strong>{wordCount}</strong> words and <strong>{charCount}</strong> characters
        </p>
        <p>
          <strong>{wordCount > 0 ? readTime : "0.00"}</strong> minutes read
        </p>
        <p>{text || "Enter something to preview here"}</p>
      </div>
    </div>
  )
}

export default TextCounter
