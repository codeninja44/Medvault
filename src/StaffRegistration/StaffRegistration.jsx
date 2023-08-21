import React, { useState } from 'react'
import './StaffRegistration.css'
import './StaffRegistrationmobile.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const StaffRegistration = () => {
   const [name, setName] = useState('')
   const [age, setAge] = useState('')
   const [email, setEmail] = useState('')
   const [phoneNumber, setPhoneNumber] = useState('')
   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')
   const [role, setRole] = useState('')
   const [hospitalcode, setHospitalcode] = useState('')
   // const [photo, setPhoto] = useState('')
   const nav = useNavigate()
   const [load, setLoad] = useState(false)


   const url = "https://medvault.onrender.com/api/createprofile"
   const token = JSON.parse(localStorage.getItem("token"))


   // const File = (e) => {
   //    const file = e.target.files[0]
   //    setPhoto(file)
   //    console.log(file)
   // }

   const data = new FormData()
   data.append("name", name)
   data.append("age", age)
   data.append("email", email)
   data.append("phoneNumber", phoneNumber)
   data.append("password", password)
   data.append("confirmPassword", confirmPassword)
   data.append("role", role)
   data.append("hospitalcode", hospitalcode)
   // data.append("photo", photo)


   function register(e) {
      e.preventDefault()
      setLoad(true)
      axios.post(url, data, {
         header: { "Content-type": "multipart/form-data" }
      })
         .then(res => {
            console.log(res);
            // setVerify(true); 
            setLoad(false)
            nav('/staffDashboard')

         })
         .catch((err) => {
            toast.error(err.response.data.message)
            setLoad(false)
            console.log("The error ", err)
         })
   }




   return (

      <>
         <body>
            <form className="inputSec" onSubmit={register}>
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
                        <input className='staffpassword' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input className='staffconfirmpass' type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <input className='staffrole' type="text" placeholder='Role' value={role} onChange={(e) => setRole(e.target.value)} />
                        <input className='staffhoscode' type="text" placeholder='Hospital Code' value={hospitalcode} onChange={(e) => setHospitalcode(e.target.value)} />
                        <button className='staffregbutton' type='submit'>{load ? "Loading..." : "Register"}</button>
                        <div className='staffregdescription'>
                           <p className='staffalready'>Already have an account? <span className='stafflogin' >Log In</span></p>
                        </div>
                     </div>
                  </div>
               </div>
            </form>
         </body>


      </>
   )
}

export default StaffRegistration
