import React from 'react';
// import Typed from 'react-typed'
import './ABOUTUS.css'
import Header from '../components/header/Header';
import Footer from '../Footer/Footer';
import { MdHealthAndSafety } from "react-icons/md"
import { BsFillCloudArrowDownFill } from "react-icons/bs"
import { FaHandshake } from 'react-icons/fa'
// import { FaHandshakeSimple } from "react-icons/fa"



function ABOUTUS() {

  return (
    <>
      <Header />
      <div className='mainyy'>

        <div className='seccy'>
          <div className='upbody'>
            {/* <h1 className='imgtext'><Typed
        
        strings={[
          "You Create We Store",
          
          
        ]} 
        typeSpeed={100}
        backSpeed={100}
        loop
        cursorChar='|'
        />
        </h1> */}
            <h1 className='imgtext'>YOU STORE , WE CREATE</h1>
          </div>

          <div className='benno'>
            <div className='beme1'><h2>Our Benefits</h2></div>
            <div className='boxcon'>
              <div className='box1'><div className='im1'><MdHealthAndSafety /></div><div className='text1'><h2>Security</h2></div><div className='textt1'><h3>Our robust security protocols guarantee the utmost protection for your valuable information, allowing you to focus on what matters most.</h3></div></div>
              {/* <div className='box2'><div className='im2'></div><div className='text2'><h2>Money back  guarantee</h2></div><div className='textt2'><h3>Enjoy complete confidence with our 30 days money-back guarantee, giving you the freedom to try our services risk-free.</h3></div></div> */}
              <div className='box3'><div className='im3'><BsFillCloudArrowDownFill /></div><div className='text3'><h2>Unlimited Storage</h2></div><div className='textt3'><h3>Unlock the limitless potential of our unlimited data storage, empowering you to expand your digital horizons without restrictions.</h3></div></div>
              <div className='box4'><div className='im4'><FaHandshake /></div><div className='text4'><h2>Partnership</h2></div><div className='textt4'><h3>Partnering with us as an investor opens doors to lucrative opportunities in thriving industries, maximizing your potential for high returns.</h3></div></div>
            </div>

          </div>
          <div className='space'>
            <div className='draphquote'>"MedVault's Health care storage system is a game changer for hospitals.
              It has streamlined data management, leading to improved patient care and efficiency".
              <h2>Dr Ralphael</h2>
            </div>
            <div className='drraphcircle'></div>
          </div>
          <div className='mission'><div className='content'><h1 className='mi'>Our Vision & Mission</h1><div className='write'><h3 className='kk'>
            Empowering secure and seamless digital data storage for clients worldwide.
            Delivering cutting-edge solutions to safeguard and organize critical information for our valued customers.
            Fostering trust and reliability as the go-to digital repository for client data and records.
            Pioneering innovative technologies to simplify data access and management in the digital age.
            Ensuring utmost privacy and confidentiality while efficiently managing clients' digital assets.
            Striving to be the leading global platform for secure and efficient digital data storage services.
          </h3></div></div>
          </div>


        </div>

        <Footer />
      </div>

    </>
  )
}

export default ABOUTUS
