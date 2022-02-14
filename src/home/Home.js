import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
import data from "../data/db.json";


function HOME(props) {
    return (
        <>
            <Header />
            <Footer />
            <Tours data={data}/>

        </>
    );

}
export default HOME; 