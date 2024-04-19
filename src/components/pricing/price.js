import React from "react";
import "./price.css"
import Back from "../back/back";
import PriceCard from "./pricecard";
import Faq from "./faq";

const Price = () => {
    return(
        <>
        <Back  />
        <section className="price padding">
            <div className="container grid" >
                <PriceCard/>
            </div>
        </section>
        <Faq/>
        </>
    )
}
export default Price