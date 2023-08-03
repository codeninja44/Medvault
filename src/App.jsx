import React from 'react'
import Header from './components/header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './verification/Login'
import Registration from './registration/Registration'
import VerifiedEmail from './emailVerified/VerifiedEmail'


const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/verification' element={<VerifiedEmail />} />
        </Routes>
      </BrowserRouter >

    </>



  )
}

export default App