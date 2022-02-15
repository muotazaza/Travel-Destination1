import { useParams } from "react-router-dom";
import data from "../data/db.json"
import "./TourDetails.css"
import React from "react";
import { useState } from "react"


function TourDetails(props) {
    const [readMore, setReadmore] = useState(false);
    let { id } = useParams();


    const result = props.data.filter((ele) => ele.id == { id });
    console.log(result);
    return (

        <>
            <h2>{result[0].name}</h2>
            <p> {readMore ? ` Destination : ${result[0].info}`
                : ` Destination : ${result[0].info.substring(0, 200)}...`}
                Destination : {result[0].info}

                <button onClick={() => setReadmore(!readMore)}>
                    {readMore ? "show less.." : "show more.."}
                    show more .. /show less..</button>
            </p>
            <p>{result[0].price}</p>
            <img src={result[0].image} />
        </>




    );

}
export default TourDetails;


// return(
//     <div key={ele.id}className="TourDetails">
//         <h1>citt name:{ele.name}</h1>
//         <p><h5>Destination:</h5>{ele.info}</p>
//     </div>
// )