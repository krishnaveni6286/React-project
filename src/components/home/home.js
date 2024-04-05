
import AboutCard from "../about/aboutcard";
import HAbout from "./habout";
import Hero from "./hero";
import React  from "react";
import Test from "./testiomonal/test";


const Home =()=>{
    return(
        <div>
            <Hero/>
            <AboutCard/>
            <HAbout/>
            <Test />
            
        </div>
    )
}
export default Home;