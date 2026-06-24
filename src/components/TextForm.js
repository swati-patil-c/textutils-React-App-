import React, { useState } from 'react'


//const [text, setText] = useState('Enter text here..');

export default function TextForm(props) {
  //Declare a new state variable , whoch we'll call text
  const [text, setText] = useState('Enter text here..');
  //text = "new text" : is wrong way to change the text
 // setText("Enter new text"); // correct way to change the text

    const handleUpClick = ()=>{
      console.log("Upper log click" + text);
      let newText = text.toUpperCase();
      setText(newText);
    }
    const handleOnchange = (event)=>{ // we use event object so we can enter our text in textarea
      console.log("on chnage  log click");
      //setText("u have on chnage");
      setText(event.target.value); //using this we cam take value in textarea
    }
    const handleLowClick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
    }
    
  return (
    <div>
        <h3>{props.heading} </h3>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnchange}></textarea>
        <div className="container py-3" >
        <button className="btn btn-primary btn-space me-3" onClick={handleUpClick}>Convert to upper case</button>
        <button className="btn btn-primary" onClick={handleLowClick}>Convert to Lower case</button>
       </div> 
      </div>
    </div>
  )
}
