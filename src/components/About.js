import React, { useState } from 'react'

export default function About({mode, themeColors}) {

    // let mystyle ={
    //     backgroundColor : 'black',
    //     color : 'white'
    // }

//    const [mystyle, setStyle] = useState( 
//         {backgroundColor : 'white',
//         color : 'black',
//         border : '1px solid white'
//     });
    // to set colour according to background
    const mystyla = {
        backgroundColor: themeColors[mode]?.bg || 'white',
        color: themeColors[mode]?.text || '#228dbf',
        border: '1px solid white'
    }

    const sty={
      color: mode === 'black'?'white':'#04243',
    backgroundColor : mode ==='dark'?'#228dbf':'white'

    }
    


    const[btntext, setBtnText] = useState('Enable dark mode');

    // const toggleStyle = ()=>{
    //     if(mystyla.color === 'white'){
    //     setStyle({
    //     backgroundColor : 'white',
    //     color : 'black',
    //     border : '1px solid white'
    //     //document.body.backgroundColor = ""
    //         });
    //         setBtnText('Enable dark mode');
            
    //     }
    //     else{
    //         setStyle({
    //             backgroundColor : '#1D546D',
    //             color : 'white'
    //         })
    //         setBtnText('Disable dark mode(white mode)');
    //     }
    // };

  return (
    <div>
        <div className='container px-0 my-3'   style={{color: 'white'}} >
        <h2 className='my-3' style={{color: mode === 'black'?'white':'#04243'}}> About us</h2>
        <div className="accordion" id="accordionExample" sty={sty} >
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyla} >
        <strong>#What is Textutils ?</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyla}>
            <strong>This section provides the fundamental tools</strong> for instant text formatting. Whether you accidentally typed an entire paragraph in lowercase or need to entirely clear the editing canvas to start fresh, these quick-action utilities handle it with a single click.
                    Why use it: Perfect for fixing accidental Caps Lock mistakes or preparing text headers for documents and essays without retyping everything manually.
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyla} >
        <strong>Text Oraginzation and sorting</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyla}>
            <strong>Arrange in Alphabetical Order : </strong> This feature takes your disorganized text and re-arranges every word into perfect, dictionary-style alphabetical order ($a \to z$). By sorting the words instantly, it turns a chaotic wall of text into a neat, easily scannable sequence.Why use it: Extremely helpful when organizing glossaries, creating sorted lists of items, alphabetizing names, or conducting quick text analyses.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyla} >
        <strong>Real-Time Text Analytics </strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyla}>
            <strong>order Counter, Sentence Counter, Estimated Reading Time: </strong> This utility instantly analyzes your text data as you type. It tracks the exact number of words and sentences in your document and dynamically calculates how long it would take an average person to read through your content.Why use it: Essential for bloggers, students, and professionals who need to meet strict word count requirements, optimize reading engagement, or audit the length of their essays, emails, and articles before publishing.
        </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    {/* <div className="container3 my-3 mx-2" >
    < button type="button" onClick={toggleStyle} className="btn btn-warning ">{btntext} </button>
    </div> */}

  <div className="row align-items-center">
          
          {/* Left - 2x2 Image Grid */}
          <div className="col-lg-7 col-md-6 my-4">
            <div className="row g-2">
              <div className="col-6">
                <img src="/image.jpg" alt="stressed" className="img-fluid rounded mb-2" style={{height: '280px', width: '100%', objectFit:'cover'}} />
                <img src="/aplha.jpg" alt="alphabets" className="img-fluid rounded" style={{height: '200px', width: '100%', objectFit:'cover'}}/>
              </div>
              <div className="col-6">
                <img src="/seek.jpg" alt="computer" className="img-fluid rounded mb-2" style={{height: '260px', width: '100%', objectFit:'cover'}} />
                <img src="/img4.jpg" alt="search" className="img-fluid rounded" style={{height: '230px', width: '100%', objectFit:'cover'}} />
              </div>
            </div>
          </div>

          {/* Right - Text in circled area */}
          <div className="col-md-6 col-lg-5 ps-lg-5 pt-3 my-1 " style={{border: '1px solid black'}}  style={mystyla}>
            <h2 className="fw-bold">Properties</h2>
            <p className="text-muted mb-3" >
              At textutil we take pride in our service, intelligence and excellence.
            </p>
            
            <ol>
              <li className="mb-3">UpperCase</li>
              <li className="mb-3">LowerCase</li>
              <li className="mb-3">Alphabetical order</li>
              <li className="mb-3">Copy text</li>
            </ol>
          </div>

        </div>
      </div>
      
   
    
  
    

  )
}
