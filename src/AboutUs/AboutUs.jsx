import React from 'react';
import './ABOUTUS.css'
import './AboutUsmobile.css'
import { MdHealthAndSafety } from "react-icons/md"
import { BsFillCloudArrowDownFill } from "react-icons/bs"
import { FaHandshake } from 'react-icons/fa'
import abtusimg1 from '../assets/abtusimg1.jpg'
import abtusimg3 from '../assets/abtusimg3.jpg'
import abtusimg2 from '../assets/abtusimg2.jpg'
import abtusimg4 from '../assets/abtusimg4.jpg'
import Header from '../components/header/Header';
import Footer from '../Footer/Footer';




function ABOUTUS() {

   return (
      <>
         <Header />
         <div className='Aboutusbody'>
            <div className='aboutustextdiv'>About Us</div>
            <div className='aboutusimgdiv'>
               <div className='aboutus1'>
                  <div className='aboutus1imgholder'>
                     <img src={abtusimg1} alt="" />
                  </div>
               </div>
               <div className='aboutus2'>
                  <div className='aboutus2imgholder'>
                     <img src={abtusimg3} alt="" />
                  </div>
               </div>
               <div className='aboutus3'>
                  <div className='aboutus3imgholder'>
                     <img src={abtusimg2} alt="" />
                  </div>
               </div>
               <div className='aboutus4'>
                  <div className='aboutus4imgholder'>
                     <img src={abtusimg4} alt="" />
                  </div>
               </div>
            </div>
            <div className='aboutusdescdiv'>
               <div className='aboutusdescwrapper'>
                  <p className='aboutusdesctext'>  At MedVault, we are dedicated to revolutionizing the way healthcare
                     professionals manage and access patient information. With a profound
                     understanding of the critical role that accurate and efficient record-keeping
                     plays in the healthcare industry, we have crafted an advanced
                     Electronic Medical Records (EMR) system that empowers medical practices
                     and hospitals to streamline their workflows and provide the highest
                     level of patient care
                  </p>
               </div>
            </div>
            <div className='aboutusdetailsdiv'>
               <div className='aboutusfounded'>
                  <p className='year'>2023</p>
                  <p className='founded'>Founded</p>
               </div>
               <div className='aboutusemployees'>
                  <p className='employeesnumber'>100+</p>
                  <p className='employees'>Employees</p>
               </div>
               <div className='aboutususers'>
                  <p className='abtusersno'>100k</p>
                  <p className='abtusers'>Users</p>
               </div>
               <div className='aboutusvolume'>
                  <p className='abtvolumenumber'>$1M</p>
                  <p className='abtvolume'>Volume</p>
               </div>
            </div>
            <div className='aboutuslast'>
               <div className='aboutuslastwrapper'>
                  <div className='aboutuslastwrappetextdiv'>Our Benefits</div>
                  <div className='aboutusboxesdiv'>
                     <div className='aboutusbox1'>
                        <div className='aboutusboxcircle1'>
                           <MdHealthAndSafety className='aboutusboxcircle1icon' />
                        </div>
                        <p className='aboutussecurity'>Security</p>
                        <p className='aboutusbox1desc'>Our robust security protocols guarantee the utmost
                           protection for your valuable information, allowing
                           you to focus on what matters most.
                        </p>
                     </div>
                     <div className='aboutusbox2'>
                        <div className='aboutusboxcircle1'>
                           <BsFillCloudArrowDownFill className='aboutusboxcircle2icon' />
                        </div>
                        <p className='aboutustorage'>Unlimited Storage</p>
                        <p className='aboutusbox2desc'>Unlock the limitless potential of our unlimited
                           data storage, empowering you to expand your digital horizons without
                           restrictions.
                        </p>
                     </div>
                     <div className='aboutusbox3'>
                        <div className='aboutusboxcircle1'>
                           <FaHandshake className='aboutusboxcircle3icon' />
                        </div>
                        <p className='aboutuspartnership'>Partnership</p>
                        <p className='aboutusbox3desc'>Partnering with us as an investor, opens doors to lucrative
                           opportunities in thriving industries, maximizing your potential for high
                           returns.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <Footer />
         </div>

      </>
   )
}

export default ABOUTUS
