import React from "react"
import './LandingPage.css'
import './Landingmobile.css'
import { FaUserPlus, FaQuoteRight, FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa"
import { MdHealthAndSafety, MdEmail, MdLocationOn } from "react-icons/md"
import { BiSolidLock, BiLogoInstagramAlt } from "react-icons/bi"
import { BsCheckLg, BsFillTelephoneFill } from "react-icons/bs"
import Header from "../components/header/Header"
import Footer from "../Footer/Footer"
import heronurse from '../assets/heronurse.png'
import featuresimg1 from '../assets/featuresimg1.png'
import featuresimg2 from '../assets/featuresimg2.png'
import featuresimg3 from '../assets/featuresimg3.png'
import featuresimg4 from '../assets/featuresimg4.png'
import testifirstcircle from '../assets/testifirstcircle.jpg'
import testisecondcircle from '../assets/testisecondcircle.jpg'
import testifourthcircle from '../assets/testifourthcircle.jpg'
import testithirdcircle from '../assets/testithirdcircle.jpg'
// import { FaQuoteRight, } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import video from '../assets/aboutVideo.mp4'
import {Typewriter} from 'react-simple-typewriter'


const LandingPage = () => {
    const nav = useNavigate()

    return (
        <>
            <Header />
            <div className="Main">
                {/* <div className="Header">
                <button className="Contus">contact Us</button>
              </div> */}
                <div className="MainHero">
                    <div className="Heroleft">
                        <div className="Herolefttext">
                        <p className="health">Health in <span className="safety">
                            <Typewriter
            words={['Safety', 'Progress', 'Care']}
            loop={true}
            cursor
            cursorStyle=''
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
          
          /></span></p>
                            <span className="with">with Medvault.</span>
                            <p className="trusted">Your trusted partner for secure,seamless and smart patient care.</p>
                            <button onClick={() => nav('/registration')}>Create Account</button>
                        </div>

                    </div>
                    <div className="Heroright">
                        <div className="Herorightbox">
                        <img src={heronurse} alt="nurselogo" />
                        </div>
                    </div>
                </div>
                <div className="Ourservicediv">
                    <div className="Ourservicecontainer">
                        <p className="Ourservice">Our<span> Service</span></p>
                        <div className="Emrimgholder">
                            <div className="Emrbox1">
                                <FaUserPlus className="createicon" />
                                <p className="createtext">Create</p>
                                <p className="descemr1">Create a digitally secure patient database for your
                                    healthcare facilities with MedVault.
                                </p>
                            </div>
                            <div className="Emrbox2">
                                <MdHealthAndSafety className="safeicon" />
                                <p className="safetext">Secure</p>
                                <p className="descemr2">At MedVault, be rest assured, your trust in us is rewarded with a
                                    fortress-like security system.
                                </p>
                            </div>
                            <div className="Emrbox3">
                                <BiSolidLock className="protecticon" />
                                <p className="protecttext">Protect</p>
                                <p className="descemr3">MedVault creates a secure ecosystem, shielding health facilities from data
                                    breaches.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="MVvideodiv">
                    <div className="custom-video-container">
                        <video autoPlay muted controls loop poster="./src/assets/emr.jpg">
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className="Uniquefeaturesdiv">
                    <div className="Uniquefeaturetextbox">
                        <div className="Uniquefeaturestext">
                            <p className="Uniquep">Key <span className="Features">Features</span></p>
                        </div>
                    </div>
                    <div className="Uniquefeaturesfirstbox">
                        <div className="Uniqueleftbox">
                            <div className="Uniquelefttextholder">
                                <p className="Uniquelefttext">MedVault offers a centralized
                                    platform to securely store
                                    and manage patient information.
                                    Embrace MedVault to elevate your practice, improve patient care,
                                    and embark on a transformative journey towards excellence in
                                    healthcare delivery.</p>
                            </div>
                        </div>
                        <div className="Uniquerightbox">
                            <div className="Uniquerightimgholder">
                                <img src={featuresimg1} alt="f1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Uniquefeaturessecondbox">
                    <div className="secondboxleft">
                        <div className="secondboxleftimgholder">
                            <img src={featuresimg2} alt="f2" />
                        </div>
                    </div>
                    <div className="secondboxright">
                        <div className="secondtextholder">
                            <p className="secondtext">Access MedVault on-the-go with
                                our mobile app, empowering
                                healthcare providers to access
                                patient data anytime, anywhere.
                                With MedVault's mobile app,we take
                                patient care to the next level,
                                keeping your practice at the
                                forefront of modern healthcare.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="Uniquefeaturethirdbox">
                    <div className="thirdleftbox">
                        <div className="thirdlefttextholder">
                            <div className="thirdlefttext">
                                <p>MedVault is designed with a
                                    user-friendly interface, making
                                    it easy for registered healthcare
                                    providers to navigate through
                                    their patient  data easily.
                                    With MedVault, managing patient
                                    data becomes a stress-free experience,
                                    empowering
                                    healthcare providers to deliver
                                    exceptional patient-centric care.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="thirdrightbox">
                        <div className="thirdightimgholder">
                            <img src={featuresimg3} alt="f3" />
                        </div>
                    </div>
                </div>
                <div className="Uniquefeaturesfourthbox">
                    <div className="fourthboxleft">
                        <div className="fourthboxleftimgholder">
                            <img src={featuresimg4} alt="f4" />
                        </div>
                    </div>
                    <div className="fourthboxright">
                        <div className="fourthtextholder">
                            <p className="fourthtext">Intuitive menu structures and
                                pathways ensure healthcare
                                providers can quickly and
                                effortlessly find the information
                                they need.Say goodbye to information
                                overload and embrace a streamlined
                                experience that empowers you
                                to focus on what truly matters.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="Pricingdiv">
                    <div className="Pricingcontainer">
                        <div className="Pricingtextholder">
                            <p className="pri">Pri<span className="cing">cing</span></p>
                        </div>
                        <div className="Pricingboxholder">
                            <div className="pricingbox1">
                                <p className="pricingnaira">&#8358;20,000</p>
                                <p className="regular">Regular</p>
                                <div className="regulardesc">
                                    <div className="regularcircle"><BsCheckLg /></div>
                                    <p>100-200 Patients</p>
                                </div>
                            </div>
                            <div className="pricingbox2">
                                <p className="pricenaira2">&#8358;50,000</p>
                                <p className="Medium">Medium</p>
                                <div className="mediumdesc">
                                    <div className="mediumcircle"><BsCheckLg /></div>
                                    <p>200-500 Patients</p>
                                </div>
                            </div>
                            <div className="pricingbox3">
                                <p className="pricenaira3">&#8358;100,000</p>
                                <p className="Premium">Premium</p>
                                <div className="premiumdesc">
                                    <div className="premiumcircle"><BsCheckLg /></div>
                                    <p>500-800 Patients</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="quote">
                    <div className="quoteholder">
                        <p>“Electronic Medical Records are the heartbeat of modern healthcare, empowering
                            clinicians with a symphony of patient information to compose the best care possible.”<br></br>
                            <span className="Emily">Dr. Emily Richards</span></p>
                    </div>
                </div>

                <div className="testimonialsmaindiv">
                    <div className="testimonialscontainer">
                        <div className="testimonialstextholder">
                            <p className="testimonials">Testim<span className="onials">onials</span></p>
                        </div>
                        <div className="testimonialsboxholder">
                            <div className="testimonialsbox1">
                                <div className="testimonialsbox1top">
                                    <div className="testimonialscircle">
                                        <img src={testifirstcircle} alt="testi1" />
                                    </div>
                                    <p className="testimonialsname">Doctor Kelvin Ibe</p>
                                    <p className="testimonialstitle">General Health Practioner</p>
                                    <p className="testimonialsdesc">
                                        "I trust the platform's security
                                        to keep patient information safe
                                        and confidential".
                                    </p>
                                </div>
                                <div className="testimonialsbox1bottom"><FaQuoteRight /></div>
                            </div>
                            <div className="testimonialsbox2">
                                <div className="testimonialsbox1top">
                                    <div className="testimonialscircle">
                                        <img src={testisecondcircle} alt="testi2" />
                                    </div>
                                    <p className="testimonialsname">Nurse Mariam Sanni</p>
                                    <p className="testimonialstitle">Admin, Hope Clinic</p>
                                    <p className="testimonialsdesc">"MedVault's patient storage
                                        features have revolutionized my
                                        practice".
                                    </p>
                                </div>
                                <div className="testimonialsbox1bottom"><FaQuoteRight /></div>
                            </div>
                            <div className="testimonialsbox3">
                                <div className="testimonialsbox1top">
                                    <div className="testimonialscircle">
                                        <img src={testifourthcircle} alt="testi3" />
                                    </div>
                                    <p className="testimonialsname">Nurse Victoria Trust</p>
                                    <p className="testimonialstitle">Hospital Admin</p>
                                    <p className="testimonialsdesc">"MedVault
                                        user-friendly interface have
                                        streamlined our workflow,and it's saving us time".
                                    </p>
                                </div>
                                <div className="testimonialsbox1bottom"><FaQuoteRight /></div>
                            </div>
                            <div className="testimonialsbox3">
                                <div className="testimonialsbox1top">
                                    <div className="testimonialscircle">
                                        <img src={testithirdcircle} alt="testi4" />
                                    </div>
                                    <p className="testimonialsname">Nurse Mary Francis</p>
                                    <p className="testimonialstitle">Hospital Receptionist</p>
                                    <p className="testimonialsdesc">"MedVault
                                        user-friendly interface have
                                        streamlined our workflow,and it's saving us time".
                                    </p>
                                </div>
                                <div className="testimonialsbox1bottom"><FaQuoteRight /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="downsignupmaindiv">
                    <div className="signupwrapper">
                        <p className="join">Join the Community and unlock a World of Healthcare Excellence.</p>
                        <div className="signupbtn">
                            <button onClick={() => nav('/registration')}>Register</button>
                        </div>
                    </div>
                </div>
                <Footer />

            </div>


        </>
    )
}

export default LandingPage