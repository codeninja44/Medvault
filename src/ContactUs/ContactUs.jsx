import React from "react"
import './ContactUs.css'
import './ContactUsmobile.css'
import LandingPage from "../Landing Page/LandingPage"
import Header from "../components/header/Header"
import { MdHealthAndSafety, MdEmail, MdLocationOn } from "react-icons/md"
import { BsFillTelephoneFill, BsFillClockFill } from "react-icons/bs"
import Footer from "../Footer/Footer"

const ContactUs = () => {

    return (
        <>
            <Header />
            <div className="ContactMain">
                <div className="contacttextwrapper">
                    <p className="contactustext">Contact Us</p>
                    <p>Feel free to contact us anytime.</p>
                </div>

                <div className="contactusbody">
                    <div className="contactusbodyholder">
                        <div className="contactusleft">
                            <input className="contactname" type="text" placeholder="Name" />
                            <input className="contactemail" type="text" placeholder="Email" />
                            <input className="contactmsg" type="text" placeholder="Message" />
                            <button className="contactusbtn">Send</button>
                        </div>
                        <div className="contactusright">
                            <div className="contactusemail">
                                <div className="contactusemailholder">
                                    <MdEmail className="contactusemailicon" />
                                    <p className="contactusemailtext">thecurvemedvault@gmail.com</p>
                                </div>
                            </div>
                            <div className="contactusphone">
                                <div className="contactusphoneholder">
                                    <BsFillTelephoneFill className="contactusphoneicon" />
                                    <p className="contactusphonetest">08131245060, 08081825445</p>
                                </div>
                            </div>
                            <div className="contactusaddress">
                                <div className="contactusaddressholder">
                                    <MdLocationOn className="contactusaddyicon" />
                                    <p className="contactusaddytext">161/163 Muyibi Street,Olodi,Apapa</p>
                                </div>
                            </div>
                            <div className="contactustime">
                                <div className="contactustimeholder">
                                    <BsFillClockFill className="contactustimeicon" />
                                    <p className="contactustimetext">10:00am-06;pm (Monday - Friday)</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />



            </div>
        </>
    )
}

export default ContactUs