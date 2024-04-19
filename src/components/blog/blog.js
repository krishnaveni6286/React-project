import React from "react";
import "./blog.css"
import BlogCard from "./blogcard";
import Back from "../back/back";
import Test from "../home/testiomonal/test";

const Blog = () =>{
    return(
        <>
        <Back  />
        <section className="blog padding">
        <div className="container grid2" >
        
        <BlogCard/>
        
        </div>
        </section>
        <Test/>
        </>
    )
}
export default Blog;