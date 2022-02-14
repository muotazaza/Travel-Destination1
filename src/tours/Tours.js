
function Tours(props) {

    return (
        <>
            {props.data.map(ele => {
                return (<div>

                    <h4>name:{ele.name}</h4>;
                    <h6>id :{ele.id}</h6>;
                    <h5>Destination:{ele.Destination}</h5>;
                    <img  src ={ele.image} alt ={ele.name}  />
                </div>)
            })
            }

        </>
    );



}
export default Tours;
