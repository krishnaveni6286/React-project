import React from "react";
import Title from "../title/title";
import { online } from "../dummydata/dummydata";

const OnlineCourse =()=>{
    return(
        <>
        <section className="online">
            <div className="image2">
                <h1 className="heading" style={{fontSize:"50px",marginTop:"5px",
                 

                }}>Courses</h1>
            </div>
            <div className="container">
                <Title subtitle="COURSES" title="Browse Our Online Courses" />

                <div className="content grid3">
                    {online.map((val) =>(
                        <div className="box">
                           <div className="img"> 
                           <img src={val.cover} alt="" />
                           <img src={val.hoverCover} alt="" className="show" />
                           </div>
                           <h1>{val.courseName}</h1>
                           <span>{val.course}</span>
                       </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
  
}
export default OnlineCourse;



