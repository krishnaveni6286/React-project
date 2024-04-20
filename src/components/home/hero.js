import React from "react"
import "./hero.css" 
import Title from "../title/title"
import { Link } from "react-router-dom"



const Hero =()=>{
    return(
        <>
         <section className="hero">
            <div className="container">
                <div className="row">
                    <Title subtitle='WELCOME TO ACDAEMIA' title="Best Online Education"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nam, consectetur expedita rem quae est. Nam commodi maxime possimus. Nihil molestias alias quasi qui eligendi facilis expedita id recusandae corrupti.</p>
                 <div className="button">
                    <button className="primary-btn">
                       GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                    </button>
                    <Link to="/Courses" >   <button >
                       VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
                    </button></Link> 
                </div>   
                </div>
            </div>
         </section>
         <div className="marigin"></div>
        </>
    )
}
export default Hero;