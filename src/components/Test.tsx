import { useState } from "react"

const Test = () => {
  const [text, setText] = useState("Blah");

  return (
    <div className="customClass" onClick={() => setText("")}>{text}</div>
  )
}

export default Test