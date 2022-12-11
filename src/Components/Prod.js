import React from "react";

function Prod(props){
    return ( <div>
        <center><h2><i>{props.name}</i></h2></center>
        <center><h4><b>${props.price}</b></h4></center>
        <p><i>{props.description}</i></p>
    </div>)
}

export default Prod;