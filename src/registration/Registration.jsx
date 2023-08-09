import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import './registrationMobile.css'
import EmailPopUp from '../popUp/EmailPopUp'


function Registration() {
    const [facilityname, setFacilityName] = useState("")
    const [facilityaddress, setFacilityAddress] = useState("")
    const [facilityphone, setFacilityPhoneNo] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")   
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [LGA, setLga] = useState("")
    const userData = { facilityname, facilityaddress, facilityphone, email, password, state, city, LGA }
    // console.log(userData);

    const nav = useNavigate()
    const url = "https://medvault.onrender.com/api/registration"
    const [verify, setVerify] = useState(false)
    const [loadState, setLoadState] = useState(false)

    useEffect(() => {
    }, [loadState])


    function register(e) {
        e.preventDefault()
        setLoadState(true)
        axios.post(url, userData)
            .then(res => {
                console.log(res); setVerify(true); setLoadState(false)
                nav('/emailVerificaion')
            })
            .catch((err) => console.log("The error ", err))
    }


    return (
        <div>
            <div className="registration">
                {/* <div className="illustration">
                    <div className="topIllustration">
                        <img src="./src/images/undraw_sign_in_re_o58h 1.png" alt="" />
                    </div>
                    <div className="bottomIllustration">
                        <img src="./src/images/Arrow 1.png" alt="" />
                    </div>
                </div> */}
                <div className="registrationList">
                    <div className="regSection">
                        <h4>REGISTRATION</h4>
                        <div className="inputSec">
                            <input type="text" placeholder="Facility Name" className="inputType" value={facilityname} onChange={(e) => setFacilityName(e.target.value)} />
                            <p className="inputError">invalid user name</p>
                            <input type="text" placeholder="Facility Address" className="inputType" value={facilityaddress} onChange={(e) => setFacilityAddress(e.target.value)} />
                            <input type="text" placeholder="Facility Phone no" className="inputType" value={facilityphone} onChange={(e) => setFacilityPhoneNo(e.target.value)} />
                            <input type="text" placeholder="Email" className="inputType" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="Password" placeholder="Password" className="inputType" value={password} onChange={(e) => setPassword(e.target.value)} />
                            {/* <input type="Password" placeholder="Confirm password" className="inputType" value={password} onChange={(e) => setPassword(e.target.value)} /> */}
                            <input type="text" placeholder="State" className="inputType" value={state} onChange={(e) => setState(e.target.value)} />
                            <input type="text" placeholder="City" className="inputType" value={city} onChange={(e) => setCity(e.target.value)} />
                            <input type="text" placeholder="LGA" className="inputType" value={LGA} onChange={(e) => setLga(e.target.value)} />
                        </div>
                        <button className="regBtn" onClick={register}>{loadState ? 'Loading...' : "Register"}</button>
                        <div className="sighSec">
                            <div className="signUp">Already have an account?<span className="signBtn" onClick={() => nav("/login")}>Sign up</span ></div>
                        </div>
                    </div>
                </div>

            </div>
            {
                verify ? <EmailPopUp /> : null
            }
        </div>

    )
}

export default Registration