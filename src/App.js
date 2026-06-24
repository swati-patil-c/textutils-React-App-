import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar title="Textutils" about="About us" />
      <div className="container my-5" >
        {/* <TextForm heading="Enter the text to analyze"/> */}
        <About/>
      </div>
    </>
  );
}
  
export default App;
