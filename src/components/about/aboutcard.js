import React from "react"
import Title from "../title/title"
import { homeAbout } from "../dummydata/dummydata"
import Awrapper from "./awrapper"
import "./about.css"
const AboutCard =()=>{
    return(
        <>
     <section className="aboutHome">
        <div className="container flexSB">
            <div className="left row">
                <img src="https://i.pinimg.com/474x/c9/44/bc/c944bc16f77af80e0022a0a2c7f086d7.jpg" alt=""/>
            </div>
            <div className="right row">
                <Title subtitle="LEARN ANYTHING" title="Benefits About Online Learning Expertise " />
                <div className="items">{homeAbout .map((val) =>(
                    <div className="item flexSB">
                        <div className="img">
                            <img src={val.cover} alt=""/>
                        </div>
                        <div className="text">
                            <h2>{val.title}</h2>
                            <p>{val.desc}</p>
                        </div>
                    </div>
                ))}

                </div>
            </div>
        </div>
     </section>
     <Awrapper/>
        </>
    )
}
export default AboutCard