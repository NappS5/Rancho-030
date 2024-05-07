import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import './components/responsive/responsive.css'
import Home from './components/pages/home';
import Sobre from './components/pages/sobre/sobre';
import Contato from './components/pages/contato/contato';




function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/sobre' element={<Sobre />}></Route>
        <Route path='/contato' element={<Contato />}></Route>
      </Routes>
    </BrowserRouter>
    </>
    
);
}

export default App;
