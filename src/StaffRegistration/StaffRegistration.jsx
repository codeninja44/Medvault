    import React from 'react'
    import './StaffRegistration.css'
    import './StaffRegistrationmobile.css'

const StaffRegistration = () => {
  return (
      <>
        <body>
            <div className='staffreghead'>
               <div className='stafflogowrapper'>
                  <img src="./src/assets/logo.png" alt="logo" />
               </div>
            </div>
            <div className='staffregcarddiv'>
               <div className='staffregcard'>
                 <div className='staffregtext'>Staff Registration</div>
                 <div className='staffregcardholder'>
                      <input className='staffname' type="text"  placeholder='Name'/>
                      <input className='staffphoneno' type="text"  placeholder='Phone No'/>
                      <input className='staffemail' type="text"  placeholder='Email'/>
                      <input className='staffpassword' type="text"  placeholder='Password'/>
                      <input className='staffconfirmpass' type="text"  placeholder='Confirm Password'/>
                      <input className='staffrole' type="text"  placeholder='Role'/>
                      <input className='staffhoscode' type="text"  placeholder='Hospital Code'/>  
                      <button className='staffregbutton'>Register</button>
                      <div className='staffregdescription'>
                         <p className='staffalready'>Already have an account? <span className='stafflogin'>Log In</span></p>
                      </div>
                 </div>
               </div>
            </div>
        </body>
      </>
  )
}

export default StaffRegistration
