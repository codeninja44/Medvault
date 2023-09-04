import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import VerifiedEmail from "../emailVerified/VerifiedEmail"
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { toast } from "react-hot-toast"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [load, setLoad] = useState(false)
    const nav = useNavigate()
    const loginInfo = { email, password }

    const url = 'https://medvault.onrender.com/api/login'

    function login(e) {
        e.preventDefault()
        setLoad(true)
        axios.post(url, loginInfo)
            .then(res => {
                setLoad(false)
                localStorage.setItem("token", JSON.stringify(res.data.data.token))
                localStorage.setItem("id", JSON.stringify(res.data.data.id))
                nav('/dashboard')
                console.log(res)
            })
            .catch((err) => {
                console.log(err),
                    setLoad(false),
                    toast.error(err.response.data.message)
            }
            );
    }

    return ( 
        <>
        <div className='stafflogowrapper'>
                       <img onClick={() => nav('/')} src="./src/assets/logo.png" alt="logo" />
                  </div>
        <div className="registration">
            {/* <div className='arrow' onClick={() => nav('/')}><HiOutlineArrowLeft /></div> */}
            <div className="registrationList">
                <div className="regSection">
                    <h4>LOGIN</h4>
                    <div className="loginInput">
                        <input type="text" placeholder="Email" className="inputType" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="Password" placeholder="Password" className="inputType" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="forgetPassword" onClick={() => nav('/forgetPassword')}>
                        <p>Forget password</p>
                    </div>
                    <button className="regBtn" onClick={login}>{load ? 'loading...' : "Login"}</button>
                    <div className="sighSec">
                        <div className="signUp">Don't have an account?<span className="signBtn" onClick={() => nav("/registration")}>Register </span></div>
                    </div>
                </div>
            </div>
        </div >
        </>
    )
}

export default Login