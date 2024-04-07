import React from 'react'
import './App.css';
import './components/responsive/responsive.css'
import Card from './components/card/card';
import Carousel from './components/carousel/carousel';
import Header from './components/header/header';
import Midlane from './components/midlane/midlane';
import Topo from './components/topo/topo';
import Square from './components/square/square';



function App() {
  return (
    <>
    <body>
    <div>
      <Header />
      <Topo />
      {/* <Carousel /> */}
      <Midlane />
      <Square />
      {/* <Card /> */}
    </div>
    <script src="https://kit.fontawesome.com/e90ddac5fc.js" crossorigin="anonymous"></script>
    </body>
    </>
    
);
}

export default App;
