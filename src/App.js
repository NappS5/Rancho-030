import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import './components/responsive/responsive.css'
import Home from './components/pages/home';




function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    </>
    
);
}

export default App;
