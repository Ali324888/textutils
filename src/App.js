//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({msg: message, type: type})
    setTimeout(() => {
      setAlert(null);
    },2000)
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#010835';
      showAlert('Dark mode has been enabled!', 'success')
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled!', 'success')
    }
  }
  return (
    <>
    <Router>
    <Navbar title='Text Utils' mode ={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-5'>
    {/* <TextForm heading='Enter The Text Below.' showAlert={showAlert} mode ={mode}/> */}
    <Routes>
          <Route path="/about" element={<About mode ={mode} />} />
          <Route path="/" element={<TextForm heading='Enter The Text Below.' showAlert={showAlert} mode ={mode}/>} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
