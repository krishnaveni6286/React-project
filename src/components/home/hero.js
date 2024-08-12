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
                    <p style={{color:"white"}}>Our online course stands out as the best because it combines expert-led instruction with a flexible, allowing you to learn at your own pace. With practical exercises, and personalized support, we ensure to gain the skills to apply it in real-world scenarios. Join us and experience a transformative learning journey that empowers you to achieve your goals and excel in your field..</p>
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