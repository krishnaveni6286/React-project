 import React from "react";
import Back from "../back/back";
import CourseCard from "./coursecard";
import OnlineCourse from "./onlinecourses";

const CourseHome =()=>{
    return (
        <>
           {/* <Back title="Explore Courses" style={backgrounimg={}} /> */}
           <Back/>
           <CourseCard/>
           <OnlineCourse/>
        </>
    )
}
export default CourseHome;