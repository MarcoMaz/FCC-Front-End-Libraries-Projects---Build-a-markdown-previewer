import React from 'react';
import './App.scss';
import Preview from './data/Preview'
import marked from 'marked';

function Markdown(){
  const [ markdown, setMarkdown ] = React.useState( Preview )
  const handleChange = (event) => {
    setMarkdown(event.target.value)
    }
  return ( 
    <div id='container'>
      <h1>Markdown Previewer</h1>
      <textarea
        id = "editor"
        value = { markdown }
        onChange = { handleChange }
        placeholder = "enter text here">
      </textarea>
      <div
        id = "preview" 
        dangerouslySetInnerHTML = {{__html: marked(markdown)}}>
      </div>
    </div>
    )
  }

export default Markdown;
