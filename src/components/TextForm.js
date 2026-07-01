import React, { useState } from 'react'


//const [text, setText] = useState('Enter text here..');

export default function TextForm(props) {

  
  //Declare a new state variable , whoch we'll call text
  const [text, setText] = useState(' ');
  const [unique, setUnique] = useState([]); //storing array
  //text = "new text" : is wrong way to change the text
 // setText("Enter new text"); // correct way to change the text
 const { mode, themeColors, } = props;


    const handleUpClick = ()=>{
      console.log("Upper log click" + text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Uppercase converted" , "success");
      document.title = "Textutils - Uppercase"
      
    }
    const handleOnchange = (event)=>{ // we use event object so we can enter our text in textarea
      //console.log("on chnage  log click");
      //setText("u have on chnage");
      setText(event.target.value); //using this we cam take value in textarea
    }
    const handleLowClick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Lowercase converted" , "success")
    //document.title = "Textutils - Lower"
    
    }
    
    const handleclear =()=>{
      let newtext = ' ';
      setText(newtext);
      setUnique([]);
      props.showAlert("Clear text!!" , "success");
      //document.title = "Textutils - clear"
    }

    const handleDuplicate = ()=>{
      let words = text.split(/\s+/);
      let unique = [...new Set(words)]; //set is spl js obj that store only unique value(duplicate are automaticcaly remove)
      setText(unique.join(" ")); // join work on array not on set
      setUnique(unique);
      props.showAlert("Duplicate has been removed.." , "success")
      //document.title = "Textutils - Remove_duplicate"
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
      props.showAlert("Sorted in Aplhabetical order!" , "success")
      //document.title = "Textutils - AplhabeticleOrder"
    }

    const handleCopy = ()=>{
      console.log("i am copyingg...")
      let textarea = document.getElementById("myBox");
      props.showAlert("Copied to clipboard" , "warning");
      textarea.select();
      navigator.clipboard.writeText(text);
      document.getSelection().removeAllRanges();
    }

    const handleExtraSpace = ()=>{
      let nwtext = text.split(/[ ]+/);
      setText(nwtext.join(" "));
      props.showAlert("Extra space removed!" , "info")
    }
    const getBtnClass = ()=>{
    if(props.mode === 'pink' ) return'btn-outline-light';
    if(props.mode === 'green' ) return'btn-dark';
    if(props.mode === 'purple' ) return'btn-info';
    if(props.mode === 'dark' ) return'btn-warning';
    if(props.mode === 'light') return'btn-secondary';
    return 'btn-primary';
    }

    const wordcount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    const charcount = text.trim().length;
  return (
    <>
    <div className="containerd" style={{color: props.mode=== 'light'?'black':'white', backgroundColor: themeColors[mode].bg,color: themeColors[mode].text }}>
        <h3 className='mb-3'> {props.heading} </h3>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode=== 'light'?'white':'#edece5', color: props.mode=== 'dark'?'#000000':'black', color: props.mode === 'dark' ? '#000000' : 'black'}}></textarea>
        <div className="container py-3" >
        <button disabled={text.length===0} className={`btn ${getBtnClass()} btn-space me-3 mx-1 my-1`} onClick={handleUpClick} >Convert to upper case</button>
        <button disabled={text.length===0} className={`btn ${getBtnClass()} btn-space me-3 mx-1 my-1`} onClick={handleLowClick} >Convert to Lower case</button>
        <button disabled={text.length===0} className={`btn ${getBtnClass()} btn-space me-3 mx-1 my-1`} onClick={handleclear} >Clear text</button>

        <button disabled={text.length===0} className={`btn ${getBtnClass()} btn-space me-3 mx-1 my-1`} onClick={handleDuplicate}>Remove Duplicate Sentense</button>
        <button disabled={text.length===0} className={`btn ${getBtnClass()} btn-space me-3 mx-1 my-1`} onClick={handleArrangemnt}>Arrange in Alphabeticle order</button>
        <button disabled={text.length===0} className={`btn ${getBtnClass()} btn-space me-3 mx-1 my-1`} onClick={handleCopy} >Copy</button>
        <button disabled={text.length===0} className={`btn ${getBtnClass()} btn-space me-3 mx-1 my-1`} onClick={handleExtraSpace} >Remove Extra SPace</button>
        
       </div> 
      </div>
    </div>

    <div className="container  my-3 " style={{color: props.mode=== 'light'?'black':'white', background: themeColors[mode].bg, color: themeColors[mode].text}}>
      <h2>Your text summary</h2>
      <p><b>{wordcount} words and  {charcount} characters</b> </p>
      <p>{0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length} Minutes read</p>
      {/* text.split[" "].filter{(element)=>{return element.length!==0}} for wordcount*/}
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview"}</p>
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
