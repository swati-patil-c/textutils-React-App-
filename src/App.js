import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode , setMode] = useState("light");// waether thye dark mode is enbale or not
  const [alert ,setAlert] = useState(null);

  const changeTheme= (themeColor)=>{
    setMode(themeColor);

    if(themeColor ==='light'){
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enable", "success");
    }
    else if(themeColor === 'dark'){
      document.body.style.backgroundColor = '#000000';
      showAlert("dark mode enable", "success");
    }
    else if (themeColor === 'pink'){
      document.body.style.backgroundColor = '#c43ebd';
      showAlert("pink mode enable", "success");
    }
    else if (themeColor === 'green'){
      document.body.style.backgroundColor = '#68d25e';
      showAlert("green mode enable", "success");
    }
    else if (themeColor === 'purple'){
      document.body.style.backgroundColor = '#3b044a';
      showAlert("Purple mode enable", "success");
    }
  }

  const themeColors = {
    light: {
      bg: 'white',
      text: 'black'
    },
    dark: {
      bg: '#1D546D',
      text: 'white'
    },
    pink: {
      bg: '#c43ebd',
      text: 'black'
    },
    green: {
      bg: '#68d25e',
      text: 'black'
    },
    purple: {
      bg: '#3b044a',
      text: 'white'
    }
  };
 
  const showAlert= (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000 )
  }

  const toggleMode= ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#1D546D';
    showAlert("dark mode enabled", "success");
    // setInterval(() =>{
    //   document.title = " Textutils is Amazing applicatio"
    // } ,1500)
  }else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("light mode enabled", "success");
    // setInterval(() =>{
    //   document.title = " install Textutils in amazing mode applicatio"
    // } ,1000)
  }
}
  return (
    <>
    {/* <div className="container my-5" > */}
    <Router>
      <Navbar title="Textutils" about="About us" mode={mode} changeTheme={changeTheme} toggleMode={toggleMode} themeColors={themeColors} />
      <Alert alert={alert} />
      <div className="container my-5" >
         
         {/* /user --> component1
         /user/stud/ --->component2 (return user comp1 for this we use exact) */}

        <Routes>
          <Route exact path="/about" element={<About mode={mode} themeColors={themeColors}/>}
         />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} themeColors={themeColors}/>}
           />
        </Routes>
        </div>
        </Router>
         
      
        {/* <Navbar title="Textutils" about="About us" mode={mode} changeTheme={changeTheme} toggleMode={toggleMode} themeColors={themeColors} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} themeColors={themeColors}/>
        <About/> */}
       
    </>
  );
}
  
export default App;
