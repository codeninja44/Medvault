import React, { useState } from 'react'
import "./HeaderStyle.css"
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import LandingPage from '../../Landing Page/LandingPage'



const Header = () => {
    const nav = useNavigate()


    return (
        <div className='HeaderBody'>
            <div className='headerContent'>
                <div className='headerLogo'>
                    <img src="./src/images/nonono-removebg-preview 2.png" alt="" />
                </div>
                <div className='firstList'>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='buttons'>
                    <button className='signUpBtn' onClick={() => nav('/registration')}>Register</button>
                    <button className='loginbtn' onClick={() => nav('/login')}>Login</button>
                </div>
            </div>
            {/* <LandingPage /> */}
        </div>
    )
}

export default Header