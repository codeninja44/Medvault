import React from 'react'
import './Adminprofile.css'
import './AdminMobile.css'
import {LiaLessThanSolid} from 'react-icons/lia'






function Adminprofile() {
 

  return (
    <>
<div className='Adminbody'>
    <div className='Admincontain'>
        <div className='Adminhead'>
            {/* <div className='imgy'></div> */}
            <div className='iconic'><LiaLessThanSolid/></div>
         </div>
        <div className='Admincontainer'>
            <div className='profileadmincontainer'>
                <h2>Profile</h2> 
                <div className='curved'>
                  
                </div>
             </div>
             <div className='adminprofilebody'>
              <div className='profilefnamecon'>
                  <h2>Facility Name</h2>
                  <div className='profilefnameAdmin'></div>
                </div>

                <div className='profilefphonecon'>
                  <h2>Facility Phone Number</h2>
                  <div className='profilefphoneAdmin'></div>
                </div>

                <div className='profilefemailcon'>
                  <h2>Facility Email</h2>
                  <div className='profilefemailAdmin'></div>
                </div>

               

                <div className='profilefaddresscon'>
                  <h2>Facility Address</h2>
                  <div className='profilefaddressAdmin'></div>
                </div>

                <div className='profilefhoscon'>
                  <h2>Hosipital Code </h2>
                  <div className='profilefhosAdmin'></div>
                </div>

                <div className='profilefstatecon'>
                  <h2>State</h2>
                  <div className='profilefstateAdmin'></div>
                </div>

                <div className='profilefcitycon'>
                  <h2>City</h2>
                  <div className='profilefcityAdmin'></div>
                </div>

                <div className='profileflgacon'>
                  <h2>L.G.A</h2>
                  <div className='profileflgaAdmin'></div>
                </div>

                
                 
              
             </div>
        </div>
    </div>
</div>

    </>
  )
}

export default Adminprofile