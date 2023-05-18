import React from "react"
import ReactDOM from "react-dom/client"

marked.setOptions({
  breaks: true
})

const renderer = new marked.Renderer()

function App() {
  const [markdown, setMarkdown] = React.useState(`
  # H1

  ## H2

  [GitHub](https://github.com/myildiz97)

  This is inline code: \`<div></div>\`

  Here is code block:

  \`\`\`
  {
    "firstName": "Mehmet",
    "lastName": "Yıldız",
    "age": 26
  }
  \`\`\`

  - First item
  - Second item
  - Third item

  > blockquote

  ![Nature Image](image.jpg)

  ***bold text**

  `);
  return (
    <div className="app">
      <Editor markdown={markdown} setMarkdown={setMarkdown}/>
      <Preview markdown={markdown} />
    </div>
  )
}

function Editor(props) {
  const {markdown, setMarkdown} = props
  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };
  
  return(
    <div className="editor">
      <h1 className="h1">Editor</h1>
      <textarea
        name="textarea"
        id="editor"
        rows="15"
        cols="40"
        value={markdown}
        onChange={handleChange}
      ></textarea>
    </div>
  )
}

function Preview(props) {
  const {markdown} = props
  return (
    <div className="preview">
      <h1 className="h1">Previewer</h1>
      <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer }),
      }}
    ></div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)