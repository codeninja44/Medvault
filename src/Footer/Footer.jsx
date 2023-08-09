import React from "react"
import './Footer.css'
import './Footermobile.css'
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import logo from '../assets/logo.png'





const Footer = () => {

    return (
        <>
            <div className="footer">
                <div className="footerwrapper">
                    <div className="leftfooter">
                        <div className="medlogo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="footeraddress">
                            <MdLocationOn />
                            <p>161 Muyibi Street,
                            </p>
                        </div>
                        <div className="footerphoneno">
                            <BsFillTelephoneFill />
                            <p>08131245060</p>
                        </div>
                        <div className="footeremail">
                            <MdEmail />
                            <p>thecurvemedvault@gmail.com</p>
                        </div>
                        <div className="footercopyrights">
                            <p>© Copyright 2023 by  The Curve Africa. All right reserved.</p>
                        </div>
                    </div>
                    <div className="footer2">
                        <div className="quicklinkstext">
                            <p>Quick Links</p>
                        </div>
                        <div className="quicklinkshome">
                            <p>Home</p>
                        </div>
                        <div className="quicklinksabout">
                            <p>About</p>
                        </div>
                        <div className="quicklinksservices">
                            <p>Services</p>
                        </div>
                        <div className="quicklinkempty"></div>
                    </div>
                    <div className="footer2">
                        <div className="legallinkstext">
                            <p>Legal Links</p>
                        </div>
                        <div className="legallinksterms">
                            <p>Terms</p>
                        </div>
                        <div className="legallinkscondition">
                            <p>Conditions</p>
                        </div>
                        <div className="legallinksprivacy">
                            <p>Privacy</p>
                        </div>
                        <div className="legallinksempty"></div>
                    </div>
                    <div className="footer2">
                        <div className="socialmediatext">
                            <p>Social Media</p>
                        </div>
                        <div className="socialmediafb">
                            <FaFacebookF />
                            <p>Facebook</p>
                        </div>
                        <div className="socialmediatwi">
                            <FaTwitter />
                            <p>Twitter</p>
                        </div>

                        <div className="socialmedialnkd">
                            <FaLinkedin />
                            <p>Linkedin</p>
                        </div>
                        <div className="socialmediaempty"></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer