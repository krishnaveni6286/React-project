import React from "react";
import Back from "../back/back";
import TeamCard from "./teamcard";
import "./team.css"

const Team =()=>{
    return(
        <>
       <Back title="Team" /> 
       <section className="team padding">
        <div className="container grid">
            <TeamCard/>
        </div>
       </section>
        </>
    )
}
export default Team