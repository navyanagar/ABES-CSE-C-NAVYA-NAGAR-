import './App.css';
import Card from './component/Card.jsx';
import Navbar from './component/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Count1 from './component/Count1.jsx';
// function App() {
//   return (
//     // <div>
//     //   <Navbar />
//     //   <br />
//     //   <Card name="Aditya" edu="Ph.D." />
//     //   <br />
//     //   <Card name="Deepak" edu="M.Tech" />
//     //   <br />
//     //   <Card name="Rupak" edu="B.Tech" />
//     // </div>
//     <div>
//       <Count1 />
//     </div>
//   );
// }
import React from "react";

export default  function App(){
  return(
    <>
    <Count1/>
    </>
  );
}
