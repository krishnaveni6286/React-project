import React from "react";
import { price } from "../dummydata/dummydata";
import "./price.css"

const PriceCard = () =>{
    return(
        <>

        <div className="image4">
           <h1 className="heading" style={{color:"white",marginTop:"5px"}}>Prices</h1> 
        </div>
        {price.map((val) => (
            <div className="items shadow" >
                <h4>{val.name}</h4>
                <h1>
                    <span>  ₹ </span>
                    {val.price}
                </h1>
                <p>{val.desc}</p>
                <button className="outline-btn">GET STARTED</button>
            </div>
        ))}
        </>
    )
}
export default PriceCard;