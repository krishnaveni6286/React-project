import React from "react"
import Title from "../title/title"
import { homeAbout } from "../dummydata/dummydata"
import Awrapper from "./awrapper"
import "./about.css"
const AboutCard =()=>{
    return(
        <>
     <section className="aboutHome">
        <div className="image1">

        </div>
        <div className="container flexSB">
            <div className="left row">
                <img src="https://p1.pxfuel.com/preview/271/256/958/student-education-training-school-books-college.jpg" alt=""/>
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