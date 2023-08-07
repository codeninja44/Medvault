import React from 'react'
import Header from './components/header/Header'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Login from './verification/Login'
import Registration from './registration/Registration'
import VerifiedEmail from './emailVerified/VerifiedEmail'
import EmailPopUp from './popUp/EmailPopUp'
import Dashboard from './dashboard/Dashboard'
import StaffSpace from './staffDashboard/StaffSpace'


const App = () => {
  return (

    <HashRouter>
      {/* <Header /> */}
      <Routes>
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/verification' element={<VerifiedEmail />} />
        <Route path='/emailVerificaion' element={<EmailPopUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/staffDashboard' element={<StaffSpace />} />
      </Routes>
    </HashRouter >




  )
}

export default App