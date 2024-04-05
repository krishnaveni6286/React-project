import React from "react";



const Title = ({ title, subtitle })=>{
    return(
        <div>
        <div id="heading">
        <h3 style={{color:"rgb(73, 73, 185)"}}>{subtitle}</h3>
        <h1>{title}</h1>
    </div>
        </div>
    )
}
export default Title;