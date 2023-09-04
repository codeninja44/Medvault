import React, { useState } from 'react'
import "./HeaderStyle.css"
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import handBurger from '../../assets/handBurger.png'
import logo from '../../assets/logo.png'
import axios from 'axios'
import useLogin from '../../hooks/useLogin'
import Swal from 'sweetalert2'

const getId = JSON.parse(localStorage.getItem('id'))

const Header = () => {
    const nav = useNavigate()
    const [dropDown, setDropDown] = useState(false)
    const token = JSON.parse(localStorage.getItem("token"))
    const login = useLogin()

    const url = `https://medvault.onrender.com/api/logouthospital/${getId}`


    function logout(e) {
        e.preventDefault
        axios.post(url)
            .then((res) => {
                localStorage.removeItem('token')
                login.setLogin(false)
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function isLoggedIn() {
        return (
            login.login ? <div className='loginbtn' onClick={logout} style={{ cursor: 'pointer' }}>Logout</div> : <button className='loginbtn' onClick={() => nav('/login')} style={{ margin: '0px' }}>Login</button>
        )
    }


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
                    <button className='signUpBtn' onClick={() => nav('/registration')} style={{ margin: '0px' }}>Register</button>
                    {isLoggedIn()}
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
                    <div className="menu" onClick={() => nav('/')} style={{ color: 'white' }}> <p>Home</p></div>
                    <div className="menu" style={{ color: 'white' }} onClick={() => nav('/aboutPage')}> <p>About us</p></div>
                    <div className="menu" onClick={() => nav('/contactPage')} style={{ color: 'white' }}> <p>Contact us</p></div>
                    <div className="menu" style={{ color: 'white' }} onClick={() => nav('/registration')}> <p>Registration</p></div>
                </div>) : null
            }

            {/* <LandingPage /> */}
        </div >
    )
}

export default Header