import React from 'react'
// import Header from './components/header/Header'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Login from './verification/Login'
import Registration from './registration/Registration'
import VerifiedEmail from './emailVerified/VerifiedEmail'
import EmailPopUp from './popUp/EmailPopUp'
import Dashboard from './dashboard/Dashboard'
import StaffSpace from './staffDashboard/StaffSpace'
import StaffsInfo from './staffs/StaffsInfo'
import Patient from './patient/Patient'
import LandingPage from './Landing Page/LandingPage'
import ContactUs from './ContactUs/ContactUs'
import CreateStaff from './CreateStaff/CreateStaff'
import Forget from './forget/Forget'
import { Toaster } from 'react-hot-toast'
import AboutUs from './AboutUs/AboutUs'
import ResendEmail from './resendEmail/ResendEmail'
import ResendPopup from './resendPopup/ResendPopup'
import ALERT from './forgetPasswordVerified/ALERT'
import Password from './FORGOTPASSWORD2/Password'
import ForgetPopup from './forgetPopup/ForgetPopUp'
// import ABOUTUS from './ABOUTFOLD/ABOUTUS'

const App = () => {
  return (
    <>
      <Toaster />
      <HashRouter>

        <Routes>
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/verification/:token' element={<VerifiedEmail />} />
          <Route path='/emailVerificaion' element={<EmailPopUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/staffDashboard' element={<StaffSpace />} />
          <Route path='/staffInfo' element={<StaffsInfo />} />
          <Route path='/patient' element={<Patient />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='/contactPage' element={<ContactUs />} />
          <Route path='/createStaff' element={<CreateStaff />} />
          < Route path='/forgetPassword' element={<Forget />} />
          <Route path='/resendEmail' element={<ResendEmail />} />
          <Route path='/aboutPage' element={<AboutUs />} />
          <Route path='/resendPop' element={<ResendPopup />} />
          <Route path='/alert' element={<ALERT />} />
          <Route path='/newPassword' element={<Password />} />
          <Route path='/forgetPopup' element={<ForgetPopup />} />
          {/* <Route path='/aboutPage' element={<ABOUTUS />} /> */}
        </Routes>
      </HashRouter >
    </>





  )
}

export default App