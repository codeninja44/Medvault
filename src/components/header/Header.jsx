import React, { useState } from 'react'
import "./HeaderStyle.css"
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import handBurger from '../../assets/handBurger.png'
// import featuresimg1 from '../assets/featuresimg1.png'
import logo from '../../assets/logo.png'
// import LandingPage from '../../Landing Page/LandingPage'



const Header = () => {
    const nav = useNavigate()
    const [dropDown, setDropDown] = useState(false)


    return (
        <div className='HeaderBody'>
            <div className='headerContent'>
                <div className='headerLogo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='firstList'>
                    <ul>
                        <li onClick={() => nav('/')}>Home</li>
                        <li onClick={() => nav('/aboutPage')}>About us</li>
                        <li onClick={() => nav('/contactPage')} > Contact</li>
                    </ul>
                </div>
                <div className='buttons'>
                    <button className='signUpBtn' onClick={() => nav('/registration')}>Register</button>
                    <button className='loginbtn' onClick={() => nav('/login')}>Login</button>
                    <div className='handBurger' onClick={() => setDropDown(!dropDown)}>
                        <img src={handBurger} alt="handburgerMenu" />
                    </div>
                </div>
            </div>
            {
                dropDown ? (<div className="dropDown">
                    <div className="menu1">
                        <span onClick={() => setDropDown(false)}>X</span>
                    </div>
                    <div className="menu" onClick={() => nav('/')}> <p>Home</p></div>
                    <div className="menu"> <p>About us</p></div>
                    <div className="menu" onClick={() => nav('/contactPage')}> <p>Contact us</p></div>
                </div>) : null
            }

            {/* <LandingPage /> */}
        </div >
    )
}

export default Header