import React, {useState} from 'react'

export default function 
TextForm(props) {

  const handleChange = (e) =>{
    setText(e.target.value);
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text has been converted to upper case', 'success');
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text has been converted to lower case', 'success');
  }

  const handleSentanceClick = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    setText(newText);
    props.showAlert('Text has been converted to sentence case', 'success');
  }

  const handleCapClick = () => {
    let newText = text.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join(' ');           

    setText(newText);
    props.showAlert('Text has been converted to capitalize case', 'success');
  }

  const handleCopy = () => {
    let newText = document.querySelector('#textArea');
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert('Text has been copied', 'success');
  }

  const handleSpace = () => {
    let newText = text.split(/[ ]+/).join(' ');
    setText(newText);
    props.showAlert('Blank spaces has been removed', 'success');
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert('Text has been cleared', 'success');
  }
  const[text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'? 'white': 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{color: props.mode==='dark'? 'white': 'black', backgroundColor: props.mode==='dark'? '#010835': 'white'}} id="textArea" rows="8" value={text} onChange={handleChange}></textarea>
        </div>
        <button disabled={text.length ===0} className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={text.length ===0} className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to lowercase</button>
        <button disabled={text.length ===0} className="btn btn-primary" onClick={handleSentanceClick}>Convert to Sentence case</button>
        <button disabled={text.length ===0} className="btn btn-primary mx-3" onClick={handleCapClick}>Convert to capitalize case</button>
        <button disabled={text.length ===0} className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length ===0} className="btn btn-primary mx-3" onClick={handleSpace}>Remove extra spaces</button>
        <button disabled={text.length ===0} className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'? 'white': 'black'}}>
      <h1>Your Text Summary</h1>
      <p className="my-2">This text area has {text.split(' ').filter(elem => elem.length!==0).length} words and {text.length} characters</p>
      <p className="my-2">{0.008 * text.split(' ').filter(elem => elem.length!==0).length} minutes to read this paragraph</p>
      <h2 className="my-4">Text Preview</h2>
      <p className="my-1">{text.length>0?text:'Enter text to preview here..'}</p>
    </div>
    </>
  )
}
