import React from "react";
import "./style.css"
import Title from "../../title/title";
import { testimonal } from "../../dummydata/dummydata";

const Test = () =>{
    return (
        <>
         <section className="testimonal padding">
            <div className="container1">
                <Title subtitle="testimonal" title="our successful students"/>

                <div className="content grid21">
                    {testimonal.map((val) => (
                        <div className="items1 shadow1">
                            <div className="box1 flex1">
                                <div className="img1">
                                    <img src={val.cover} alt="" />
                                    <i className="fa fa-quote-left icon"></i>
                                </div>
                                <div className="name1">
                                    <h2>{val.name}</h2>
                                    <span>{val.post}</span>
                                </div>
                            </div>
                            <p>{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
         </section>
        </>
    )
}
export default Test;

