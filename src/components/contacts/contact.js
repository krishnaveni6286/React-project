import React from "react";
import "./contact.css"
import Back from "../back/back";
import Footer from "../footer/footer";

const Contact = () => {
    const map ='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.99756903899!2d78.36621958625969!3d17.4477735557726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1712330268647!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    return (
        <>
        <Back title="Contact Us" />
        <section className="contact padding" >
            <div className="container shadow flexSB">
                <div className="left row">
                    <iframe src={map} ></iframe>
                </div>
                <div className="right row">
                    <h1>Contact Us</h1>
                    <p> Ullam sit neque atque vitae molestias placeat? </p>

                    <div className="items grid2">
                        <div className="box">
                            <h4>ADDRESS: </h4>
                            <p>198 west 21st street, suite 751 New York NY 10016</p>
                        </div>
                    <div className="box">
                        <h4>Email:</h4>
                        <p>info@gmail.com</p>
                    </div>
                    <div className="box">
                        <h4>PHONE:</h4>
                        <p>+91 97347 65327</p>
                    </div>
                    </div>
                    <form action="">
                        <div className="flexSB">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                        </div>
                        <input type="email" placeholder="Subject" />
                        <textarea cols="30" rows="10">
                            Create a message here ...
                        </textarea>
                        <button className="primary-btn">SEND MESSAGE</button>
                    </form>

                    <h3>Follow us here</h3>
                    <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}
export default Contact;