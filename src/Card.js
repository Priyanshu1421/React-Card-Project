import React from "react";


function Card(props){
    return (
        <>
        <div className="card">
            <img src={props.img} alt="Cart1" />
            <h3>Card{props.title}</h3>
        </div>
        </>
    )
}
export default Card