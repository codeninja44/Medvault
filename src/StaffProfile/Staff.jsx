import React from 'react'
import './Staff.css'
import './Staffmobile.css'
import {LiaLessThanSolid} from 'react-icons/lia'






function Staff() {
 

  return (
    <>
<div className='staffbody'>
    <div className='staffcontain'>
        <div className='staffhead'>
            {/* <div className='imgy'></div> */}
            <div className='icony'><LiaLessThanSolid/></div>
         </div>
        <div className='bodycontainer'>
            <div className='profilecontainer'>
                <h2>Profile</h2> 
                <div className='ciccy'>
                  
                </div>
             </div>
             <div className='profilebody'>
              <div className='profilefnamecontainer'>
                  <h2>Name</h2>
                  <div className='profilefname'></div>
                </div>

                <div className='profilefemailcontainer'>
                  <h2>Email</h2>
                  <div className='profilefemail'></div>
                </div>

                <div className='profilefphonecontainer'>
                  <h2>Phone Number</h2>
                  <div className='profilefphone'></div>
                </div>

                <div className='profilefrolecontainer'>
                  <h2>Role</h2>
                  <div className='profilefrole'></div>
                </div>

                <div className='profilefidcontainer'>
                  <h2>Staff ID</h2>
                  <div className='profilefid'></div>
                </div>
                 
              
             </div>
        </div>
    </div>
</div>

    </>
  )
}

export default Staff