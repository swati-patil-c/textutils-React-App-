import React, { useState } from 'react'

export default function About() {

    // let mystyle ={
    //     backgroundColor : 'black',
    //     color : 'white'
    // }

   const [mystyle, setStyle] = useState( 
        {backgroundColor : 'black',
        color : 'white',
        border : '1px solid white'
    });

    const[btntext, setBtnText] = useState('Enable dark mode');

    const toggleStyle = ()=>{
        if(mystyle.color === 'white'){
        setStyle({
        backgroundColor : 'white',
        color : 'black',
        border : '1px solid white'
            });
            setBtnText('Enable dark mode');
        }
        else{
            setStyle({
                backgroundColor : 'black',
                color : 'white'
            })
            setBtnText('Disable dark mode(white mode)');
        }
    };

  return (
    <>
        <div className='container px-0 my-3'  style={mystyle} >
        <h2> About us</h2>
        <div className="accordion" id="accordionExample" style={mystyle}>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
            #What is Textutils ?
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
            <strong>This section provides the fundamental tools</strong> for instant text formatting. Whether you accidentally typed an entire paragraph in lowercase or need to entirely clear the editing canvas to start fresh, these quick-action utilities handle it with a single click.
                    Why use it: Perfect for fixing accidental Caps Lock mistakes or preparing text headers for documents and essays without retyping everything manually.
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
            Text Oraginzation and sorting
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
            <strong>Arrange in Alphabetical Order : </strong> This feature takes your disorganized text and re-arranges every word into perfect, dictionary-style alphabetical order ($a \to z$). By sorting the words instantly, it turns a chaotic wall of text into a neat, easily scannable sequence.Why use it: Extremely helpful when organizing glossaries, creating sorted lists of items, alphabetizing names, or conducting quick text analyses.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
            Real-Time Text Analytics
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
            <strong>order Counter, Sentence Counter, Estimated Reading Time: </strong> This utility instantly analyzes your text data as you type. It tracks the exact number of words and sentences in your document and dynamically calculates how long it would take an average person to read through your content.Why use it: Essential for bloggers, students, and professionals who need to meet strict word count requirements, optimize reading engagement, or audit the length of their essays, emails, and articles before publishing.
        </div>
        </div>
    </div>
    </div>
    </div>
    <div className="container3 my-3 mx-2" >
    < button type="button" onClick={toggleStyle} className="btn btn-warning ">{btntext} </button>
    </div>
    </div>
    
</>
  )
}
