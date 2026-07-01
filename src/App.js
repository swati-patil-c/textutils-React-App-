import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';

function App() {
  const [mode , setMode] = useState("light");
  const [alert ,setAlert] = useState(null);

  const changeTheme= (themeColor)=>{
    setMode(themeColor);
    if(themeColor === 'light'){
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    } else if(themeColor === 'dark'){
      document.body.style.backgroundColor = '#000000';
      showAlert("Dark mode enabled", "success");
    } else if(themeColor === 'pink'){
      document.body.style.backgroundColor = '#c43ebd';
      showAlert("Pink mode enabled", "success");
    } else if(themeColor === 'green'){
      document.body.style.backgroundColor = '#68d25e';
      showAlert("Green mode enabled", "success");
    } else if(themeColor === 'purple'){
      document.body.style.backgroundColor = '#3b044a';
      showAlert("Purple mode enabled", "success");
    }
  };

  const themeColors = {
    light: { bg: 'white', text: 'black' },
    dark: { bg: '#1D546D', text: 'white' },
    pink: { bg: '#c43ebd', text: 'black' },
    green: { bg: '#68d25e', text: 'black' },
    purple: { bg: '#3b044a', text: 'white' }
  };

  const showAlert= (message, type)=>{
    setAlert({ msg: message, type: type });
    setTimeout(()=> setAlert(null), 2000);
  };

  const toggleMode= ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1D546D';
      showAlert("Dark mode enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar title="Textutils" about="About us" mode={mode} changeTheme={changeTheme} toggleMode={toggleMode} themeColors={themeColors} />
      <Alert alert={alert} />
      <div className="container my-5">
        <Routes>
          <Route path="/about" element={<About mode={mode} themeColors={themeColors}/>} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils : Word counter, Character Counter, Remove Extra Space" mode={mode} themeColors={themeColors}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
