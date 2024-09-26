import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearText = ()=>{
        setText(" ");

    }

    const handleCopy = ()=>
    {
        var text = document.getElementById("my-box");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleRemoveSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
        const [text, setText] = useState("Enter Text Here...");
         return (
            <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box"  rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}> Convert to UpperCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}> Clear Text</button>
         <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}> Convert to LowerCase</button>
         <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}> Copy Text</button>
         <button className="btn btn-primary mx-2 my-2" onClick={handleRemoveSpace}> Remove Extra Space</button>



    </div>
    <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p><b>{text.split(" ").length}</b> Words and <b>{text.length}</b> Characters</p>
        <p> Need <b>{0.008 * text.split(" ").length }</b> Minutes to Read This. </p>

        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
