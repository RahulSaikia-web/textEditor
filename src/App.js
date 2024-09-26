// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import { useState } from 'react';n

function App() {
  // const [darkMode, setdarkModet] = useState('light')
  return (
    <>
    <Navbar title="Text Editor Online" />
<div className="container my-3" >

<TextForm heading="Enter The text to Analyze below"/>

</div>
    </>
  );
}

export default App;
