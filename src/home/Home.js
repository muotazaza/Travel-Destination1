import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
import data from "../data/db.json";
import { Routes, route } from "react-router-dom";


function HOME(props) {
    return (
        <>
            <Header />
            <Tours data={data} />
            <Footer />
        </>
    );

}
export default HOME; 