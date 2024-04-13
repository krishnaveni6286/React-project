import React from "react";
import "./blog.css"
import BlogCard from "./blogcard";
import Back from "../back/back";

const Blog = () =>{
    return(
        <>
        <Back title="Blog Posts" />
        <section className="blog padding">
        <div className="container grid2" >
        
        <BlogCard/>
        </div>
        </section>
        </>
    )
}
export default Blog;