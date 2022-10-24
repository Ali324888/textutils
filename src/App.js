//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';




function App() {
  return (
    <>
    <Navbar title='Text Utils'/>
    <div className='container my-3'>
    <TextForm heading='Enter The Text Below.'/>
    </div>
    </>
  );
}

export default App;
