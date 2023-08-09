import React from "react"
import './ContactUs.css'
import './ContactUsmobile.css'
import LandingPage from "../Landing Page/LandingPage"
import Header from "../components/header/Header"
import { MdHealthAndSafety, MdEmail, MdLocationOn } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"
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
                <div className="contacticonwrapper">
                    <div className="contactadressdiv">
                        <MdLocationOn className="contactaddressicon" />
                        <p className="contactaddresstext">161/163 Muyibi Street, Olodi, Apapa, Lagos.</p>
                    </div>
                    <div className="contactphonenodiv">
                        <BsFillTelephoneFill className="contactphonenoicon" />
                        <p className="contactphonenotext">08131245060</p>
                    </div>
                    <div className="contactemaildiv">
                        <div className="contactemaildiv">
                            <MdEmail className="contactemailicon" />
                            <p className="contactemailtext">thecurvemedvault@gmail.com</p>
                        </div>
                    </div>
                </div>
                <Footer />


            </div>
        </>
    )
}

export default ContactUs