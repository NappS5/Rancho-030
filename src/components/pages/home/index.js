import React from 'react'
import '../../../App.css';
import '../../responsive/responsive.css'
import Header from '../../header/header';
import Midlane from '../../midlane/midlane';
import Topo from '../../topo/topo';
import Square from '../../square/square';



function Home() {
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

export default Home;
