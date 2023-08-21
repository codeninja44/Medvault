import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import './registrationMobile.css'
import EmailPopUp from '../popUp/EmailPopUp'
import toast, { Toaster } from 'react-hot-toast'


function Registration() {
    const [facilityname, setFacilityName] = useState("")
    const [facilityaddress, setFacilityAddress] = useState("")
    const [facilityphone, setFacilityPhoneNo] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [LGA, setLga] = useState("")
    const [hospitalLogo, setHospitalLogo] = useState('')
    const [confirmPassword, setConfirmPassword] = useState()

    const nav = useNavigate()
    const url = "https://medvault.onrender.com/api/registration"
    const [verify, setVerify] = useState(false)
    const [loadState, setLoadState] = useState(false)

    useEffect(() => {
    }, [loadState])

    const File = (e) => {
        const file = e.target.files[0]
        setHospitalLogo(file)
        console.log(file)
    }

    const data = new FormData()
    data.append("facilityname", facilityname)
    data.append("facilityaddress", facilityaddress)
    data.append("facilityphone", facilityphone)
    data.append("email", email)
    data.append("password", password)
    data.append("state", state)
    data.append("city", city)
    data.append("LGA", LGA)
    data.append("hospitalLogo", hospitalLogo)
    data.append("confirmPassword", confirmPassword)


    function register(e) {
        e.preventDefault()
        setLoadState(true)
        axios.post(url, data, {
            header: { "Content-type": "multipart/form-data" }
        })
            .then(res => {
                console.log(res); setVerify(true); setLoadState(false)
                localStorage.setItem("email", JSON.stringify(res.data.data.email))
                localStorage.setItem("hospitalcode", JSON.stringify(res.data.data.hospitalcode))
                nav('/emailVerificaion')
            })
            .catch((err) => {
                toast.error(err.response.data.message)
                setLoadState(false)
                console.log("The error ", err)
            })
    }




    return (
        <div>
            <div className="registration">
                <div className="registrationList">
                    {/* <div className='arrow' onClick={() => nav('/')}><HiOutlineArrowLeft /></div> */}
                    <div className="regSection">
                        <h4>REGISTRATION</h4>
                        <form className="inputSec" onSubmit={register}>
                            <input type="text" placeholder="Facility Name" className="inputType" value={facilityname} onChange={(e) => setFacilityName(e.target.value)} required />
                            {/* <p className="inputError">invalid user name</p> */}
                            <input type="text" placeholder="Facility Address" className="inputType" value={facilityaddress} onChange={(e) => setFacilityAddress(e.target.value)} required />
                            <input type="text" placeholder="Facility Phone no" className="inputType" value={facilityphone} onChange={(e) => setFacilityPhoneNo(e.target.value)} required />
                            <input type="email" placeholder="Email" className="inputType" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <input type="password" placeholder="Password" className="inputType" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <input type="password" placeholder="Confirm password" className="inputType" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                            {/* <input type="Password" placeholder="Confirm password" className="inputType" value={password} onChange={(e) => setPassword(e.target.value)} /> */}
                            <input type="text" placeholder="State" className="inputType" value={state} onChange={(e) => setState(e.target.value)} required />
                            <input type='file' accept='/image*/' placeholder='Facility logo' className="inputType" onChange={File} />
                            <input type="text" placeholder="City" className="inputType" value={city} onChange={(e) => setCity(e.target.value)} required />
                            <input type="text" placeholder="LGA" className="inputType" value={LGA} onChange={(e) => setLga(e.target.value)} required />
                            <button className="regBtn" type='submit'>{loadState ? 'Loading...' : "Register"}</button>
                        </form>
                        <div className="sighSec">
                            <div className="signUp">Already have an account?<span className="signBtn" onClick={() => nav("/login")}>Log In</span ></div>
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