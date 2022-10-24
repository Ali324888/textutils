import React, {useState} from 'react'

export default function 
TextForm(props) {

  const handleChange = (e) =>{
    setText(e.target.value);
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const[text, setText] = useState('');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="textArea" rows="8" value={text} onChange={handleChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to lowercase</button>
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p className="my-2">This text area has {text.length === 0 ? text.split(' ').length - 1 : text.split(' ').length } words and {text.length} characters</p>
      <p className="my-2">{0.008 * text.split(' ').length} minutes to read this paragraph</p>
    </div>
    <h2 className="my-2">Text Preview</h2>
    <p className="my-1">{text}</p>
    </>
  )
}
