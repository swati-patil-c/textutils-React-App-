import React, { useState } from 'react'


//const [text, setText] = useState('Enter text here..');

export default function TextForm(props) {
  //Declare a new state variable , whoch we'll call text
  const [text, setText] = useState(' ');
  const [unique, setUnique] = useState([]); //storing array
  //text = "new text" : is wrong way to change the text
 // setText("Enter new text"); // correct way to change the text

    const handleUpClick = ()=>{
      console.log("Upper log click" + text);
      let newText = text.toUpperCase();
      setText(newText);
      
    }
    const handleOnchange = (event)=>{ // we use event object so we can enter our text in textarea
      //console.log("on chnage  log click");
      //setText("u have on chnage");
      setText(event.target.value); //using this we cam take value in textarea
    }
    const handleLowClick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
    
    }
    
    const handleclear =()=>{
      let newtext = ' ';
      setText(newtext);
      setUnique([]);
    }

    const handleDuplicate = ()=>{
      let words = text.split(/\s+/);
      let unique = [...new Set(words)]; //set is spl js obj that store only unique value(duplicate are automaticcaly remove)
      setText(unique.join(" ")); // join work on array not on set
      setUnique(unique);
    }
//... - spread op taht take all itme from smthing iterable and spraed them out
    const handleArrangemnt = ()=>{
      let word = text.split(/\s+/); //divde a string into array & return array and this s is regex
      //\s find whitespace means space tab and newline 
      let sorted = [...word].sort((a, b)=>
        a.localeCompare(b) // this giove correct alphabeticle order
      );
      setText(sorted.join(' '));
      setUnique([]);
    }
    
  return (
    <>
    <div className="containerd">
        <h3>{props.heading} </h3>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnchange}></textarea>
        <div className="container py-3" >
        <button className="btn btn-primary btn-space me-3" onClick={handleUpClick}>Convert to upper case</button>
        <button className="btn btn-primary" onClick={handleLowClick}>Convert to Lower case</button>
        <button className="btn btn-primary mx-4" onClick={handleclear}>Clear text</button>

        <button className="btn btn-primary mx-3" onClick={handleDuplicate}>Remove Duplicate Sentense</button>
        <button className="btn btn-primary mx-3" onClick={handleArrangemnt}>Arrange in Alphabeticle order</button>
       </div> 
      </div>
    </div>

    <div className="cont  my-3 " >
      <h2>Your text summary</h2>
      <p><b>{text.split(" ").length} words and  {text.length} characters</b> </p>
      <p>{0.008*text.split(" ").length} Minutes read</p>

      <h3>Preview</h3>
      <p>{text}</p>
      <div className="me my-3">
      <h3>Unique words:</h3>
      <p> 
        {unique.join(" , ")}
      </p>
    </div>
    </div>
    
    </>
  )
}
