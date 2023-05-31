import { useState } from "react"
import "./App.css"
import ReactMarkdown from "react-markdown"

export default function App() {
  const [markdown, setMarkdown] = useState("# write your document here")

  function handleChange(e) {
    return setMarkdown(e.target.value)
  }

  return (
    <div className="app">
      <textarea onChange={handleChange} value={markdown} />
      {/* <div className="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div> */}
      <ReactMarkdown className="preview">{markdown}</ReactMarkdown>
    </div>
  )
}
