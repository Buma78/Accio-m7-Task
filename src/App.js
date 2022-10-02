import './App.css';
import Navbar from './components/Navbar.js';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Footers from './components/Footers.js';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/> 
     </Routes> 
     <Footers/>
    </div>
  );
}

export default App;
