import React, { useState } from "react"
import './CreateStaff.css'
import './CreateStaffmobile.css'
import { LiaLessThanSolid } from 'react-icons/lia'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import testifourthcircle from '../assets/testifourthcircle.jpg'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import CreateStaffAlert from "../staffAlert/CreateStaffAlert"

const CreateStaff = () => {
    const nav = useNavigate()
    const [hospitalcode, setHospitalCode] = useState('')
    const [email, setEmail] = useState('')
    const staffInfo = { email, hospitalcode }
    const [popUp, setPopUp] = useState(false)
    const [buttonText, setButtonText] = useState(false)
    const url = "https://medvault.onrender.com/api/creatingastaff/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthcmVlbUBtYWlsaW5hdG9yLmNvbSIsImlzbG9naW4iOmZhbHNlLCJpYXQiOjE2OTIxOTYyOTMsImV4cCI6MTY5MjE5NzE5M30.EQ1TyUkylGwPp76dZKEeAWJU-zfQQ454K-ZoEH08ffQ"

    function staff(e) {

        e.preventDefault()
        axios.post(url, staffInfo)
            .then(res => {
                // nav('/dashboard')
                console.log(res)
                setPopUp(true)
                setButtonText(true)
                // localStorage.setItem(JSON.stringify(res.data.data))
            })
            .catch((err) => console.log('this is an error', err));
        setButtonText(false)
    }

    return (
        <>
            <div className="createstaffmain">
                <div className="createstaffwrapper">
                    <div className="createstafficondiv">
                        <div className="createstafficonholder">
                            <div className="createstaffcircle" onClick={() => nav('/dashboard')}>
                                <div><HiOutlineArrowLeft /></div>
                            </div>
                        </div>
                    </div>
                    <div className="createstafftextdiv">
                        <p className="createstafftext">Create New Staff</p>
                    </div>
                    <div className="createstaffimagediv">
                        <div className="createstaffimageholder">
                            <img src={testifourthcircle} alt="staffimg" />
                        </div>
                    </div>
                    <div className="createstaffinputdiv">
                        <input className="createinput1" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input className="createinput2" type="text" placeholder="Hospital code" value={hospitalcode} onChange={(e) => setHospitalCode(e.target.value)} />
                    </div>
                    <div className="createstaffbtndiv">
                        <div className="createstaffbtnholder">
                            <button className="createstaffbtn" onClick={staff}>{buttonText ? "creating" : 'send'}</button>
                        </div>
                    </div>
                </div>
                {
                    popUp ? <CreateStaffAlert /> : null
                }
            </div>
        </>
    )
}

export default CreateStaff