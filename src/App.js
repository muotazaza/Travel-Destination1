import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import Header from ' ./header/Header';
import Footer from "./footer/Footer";
import data from './data/db.json';
import { Routes,Route } from "react-router-dom";

function App(props) {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/city/:id' element={<TourDetails tour={data} />} />
      </Routes>
    </>
  );
  

}

export default App;
 //   return (
    //     /
    //     <div>

    //       <Routes>
    //
    //             </Routes>

    //     </div>
    //   );