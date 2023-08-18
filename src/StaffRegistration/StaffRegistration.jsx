import React, { useState } from 'react'
import './StaffRegistration.css'
import './StaffRegistrationmobile.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const StaffRegistration = () => {
   const [name, setName] = useState('')
   const [age, setAge] = useState('')
   const [email, setEmail] = useState('')
   const [phoneNumber, setPhoneNumber] = useState('')
   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')
   const [role, setRole] = useState('')
   const [hospitalcode, setHospitalcode] = useState('')
   const [photo, setPhoto] = useState('')
   const nav = useNavigate()
   const [load, setLoad] = useState(false)

   const staffDetails = { name, age, email, phoneNumber, password, confirmPassword, role, hospitalcode, photo }

   const url = "https://medvault.onrender.com/api/createprofile"

   const File = (e) => {
      const file = e.target.files[0]
      setPhoto(file)
      console.log(file)
   }

   function registerStaff(e) {
      e.preventDefault
      axios.post(url, staffDetails)
         .then(res => {
            console.log(res)
            nav = ('/staffDashboard')
            setLoad(true)
         })
         .catch((err) => console.log('this is an error', err));
   }
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
                     <input className='staffname' type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                     <input className='staffphoneno' type="text" placeholder='Phone No' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                     <input className='staffemail' type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                     <input className='staffemail' type="text" placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} />
                     <input type='file' accept='/image*/' placeholder='Facility logo' className="inputType" onChange={File} />
                     <input className='staffpassword' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                     <input className='staffconfirmpass' type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                     <input className='staffrole' type="text" placeholder='Role' value={role} onChange={(e) => setRole(e.target.value)} />
                     <input className='staffhoscode' type="text" placeholder='Hospital Code' value={hospitalcode} onChange={(e) => setHospitalcode(e.target.value)} />
                     <button className='staffregbutton'>{load ? "Loading..." : "Register"}</button>
                     <div className='staffregdescription'>
                        <p className='staffalready'>Already have an account? <span className='stafflogin' onClick={registerStaff}>Log In</span></p>
                     </div>
                  </div>
               </div>
            </div>
         </body>
      </>
   )
}

export default StaffRegistration
