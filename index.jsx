import React from "react"
import ReactDOM from "react-dom/client"

marked.setOptions({
  breaks: true
})

const renderer = new marked.Renderer()

function App() {
  const [markdown, setMarkdown] = React.useState(`# Heading 1\n ## Subheading 2\n This is a [link](https://example.com).\n Inline code: \`console.log('Hello, World!');\`\nCode block:\n \`\`\` function greeting() { console.log('Hello, World!'); } \`\`\`\n - List item 1\n - List item 2\n - List item 3\n > This is a blockquote.\n ![Nature Image](https://images.unsplash.com/photo-1684336177311-b34743d99c5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=702&q=80)\n**Bolded text**

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