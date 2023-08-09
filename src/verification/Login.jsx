import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import VerifiedEmail from "../emailVerified/VerifiedEmail"
import { HiOutlineArrowLeft } from 'react-icons/hi'
// import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { useEffect, useRef, useState } from "react"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const nav = useNavigate()
    const loginInfo = { email, password }

    const url = 'https://medvault.onrender.com/api/login'

    function login(e) {

        e.preventDefault()
        axios.post(url, loginInfo)
            .then(res => {
                nav('/dashboard')
                console.log(res)
            })
            .catch((err) => console.log('this is an error', err));

    }

    return (
        <div className="registration">
            {/* //     <div className="illustration">
        //         <div className="topIllustration">
        //             <img src="./src/images/undraw_secure_login_pdn4 1.png" alt="" />
        //         </div>
        //         <div className="bottomIllustration">
        //             <img src="./src/images/Arrow 1.png" alt="" />
        //         </div>
            </div> */}
            <div className='arrow' onClick={() => nav('/')}><HiOutlineArrowLeft /></div>
            <div className="registrationList">
                <div className="regSection">
                    <h4>LOGIN</h4>
                    <div className="loginInput">
                        <input type="text" placeholder="Email" className="inputType" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="Password" placeholder="Password" className="inputType" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="forgetPassword">
                        <p>Forget password</p>
                    </div>
                    <button className="regBtn" onClick={login}>Login</button>
                    <div className="sighSec">
                        <div className="signUp">Don't have an account?<span className="signBtn" onClick={() => nav("/registration")}>Register </span></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login