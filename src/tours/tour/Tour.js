import {useState} from "react";
import { Routes,Route } from "react-router-dom";

import { Link } from "react-router-dom";

import TourDeltails from "../Tourdetails";


function tour(props) {
const[isLoggedin ,setLoggedin] =useState(false); 
const handleLoggin= ()=>{
    setLoggedin(!isLoggedin)
}
return(<>
<div key ={props.tour.id}>
    <img src={props.tour.image} alt={props.tour.NAME}/>
    <h3>NAME:{props.tour.name}</h3>
    if ({isLoggedin}) {
        <Link to={`/city/${props.tour.id}`}onClick={handleLoggin}>more details about city </Link> 
    }
    else{
        <Routes>
            <Route path={`/city ${props.tour.id}`}element={<TourDeltails data ={props.tour}></TourDeltails>} ></Route>
        </Routes>
    }

</div>
</>)}

export default tour;

//     let handelonClick = () => {
//         <TourDeltails />

//     }
//     return (
//         <>
//            {data.map(ele =>{
//                return(
//                    <div key={ele.id}> 
//                    <h5>name:{ele.name}</h5>
//                    < Link to={`/city/${ele.id}`}></Link> 
//                    </div>
//                )
//            })}
//         </>
//     )
// }