import React from 'react'
import '../../../App.css';
import '../../responsive/responsive.css'
import Header from '../../header/header';
import Midlane from '../../midlane/midlane';
import Topo from '../../topo/topo';
import Square from '../../square/square';
import Footer from '../../footer/footer';



function Home() {
  return (
    <>
    <body>
    <div>
      <Header />
      <Topo />
      <Midlane />
      <Square />
      <Footer />
    </div>
    <script src="https://kit.fontawesome.com/e90ddac5fc.js" crossorigin="anonymous"></script>
    </body>
    </>
    
);
}

export default Home;
