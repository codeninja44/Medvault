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
import CreateStaff from './CreateStaff/CreateStaff'
import Forget from './forget/Forget'
import { Toaster } from 'react-hot-toast'
import AboutUs from './AboutUs/AboutUs'
import ResendEmail from './resendEmail/ResendEmail'
import ResendPopup from './resendPopup/ResendPopup'
import Password from './FORGOTPASSWORD2/Password'
import ForgetPopup from './forgetPopup/ForgetPopUp'
import Alert from './forgetVerified/Alert'
import StaffRegistration from './StaffRegistration/StaffRegistration'
import CreateStaffAlert from './staffAlert/CreateStaffAlert'
import ContactUs from './ContactUs/ContactUs/ContactUs'
import RegisterPatient from './registerPatient/ResgisterPatient'
import PatientInfo from './patientInfo/PatientInfo'
import Edit from './edit/Edit'
import Recover from './recoverPatient/Recover'
import CreatedSuccessfully from './Created PopUp/CreatedSuccessfully'
import StaffDetails from './staffDetail/StaffDetails'
// import PatientsRegistration from './createPatients/CreatePatients'
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
          <Route path='/CreatedPopUp' element={<CreatedSuccessfully />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/staffDashboard' element={<StaffSpace />} />
          <Route path='/staffInfo' element={<StaffsInfo />} />
          <Route path='/api/getonestaff/:staffID' element={<StaffDetails />} />
          <Route path='/api/hospitals/patient/:hospitalcode' element={<Patient />} />
          <Route path='/api/getonepatient/:patientID' element={<PatientInfo />} />
          <Route path='/api/updatePatient/:patientID' element={<Edit />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='/contactPage' element={<ContactUs />} />
          <Route path='/createStaff' element={<CreateStaff />} />
          <Route path='/forgetPassword' element={<Forget />} />
          <Route path='/resendEmail' element={<ResendEmail />} />
          <Route path='/aboutPage' element={<AboutUs />} />
          <Route path='/resendPop' element={<ResendPopup />} />
          <Route path='/newPassword/:token' element={<Password />} />
          <Route path='/forgetPopup' element={<ForgetPopup />} />
          <Route path='/alert' element={<Alert />} />
          <Route path='/staffRegistration' element={<StaffRegistration />} />
          <Route path='/newStaffAlert' element={<CreateStaffAlert />} />
          <Route path='/registerPatient' element={<RegisterPatient />} />
          <Route path='/recoverPatient' element={<Recover />} />
        </Routes>
      </HashRouter >
    </>





  )
}

export default App