import React, { useState } from "react"
import './CreateStaff.css'
import './CreateStaffmobile.css'
// import { LiaLessThanSolid } from 'react-icons/lia'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import testifourthcircle from '../assets/testifourthcircle.jpg'
import { json, useNavigate } from "react-router-dom"
import axios from "axios"
import CreateStaffAlert from "../staffAlert/CreateStaffAlert"

const CreateStaff = () => {
    const nav = useNavigate()
    const [hospitalcode, setHospitalCode] = useState('')
    const [email, setEmail] = useState('')
    const staffInfo = { email, hospitalcode }
    const [popUp, setPopUp] = useState(false)
    const [buttonText, setButtonText] = useState(false)
    const url = "https://medvault.onrender.com/api/creatingastaff"
    const token = JSON.parse(localStorage.getItem("token"))


    const storedHospitalDetails = JSON.parse(localStorage.getItem("hospitaldetails"));
    console.log(storedHospitalDetails);

    function staff(e) {
        // const nav = useNavigate()

        // e.preventDefault()
        setButtonText(true)
        axios.post(url, staffInfo, { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => {
                console.log(res);
                setPopUp(true)
                nav('/dashboard')
                setButtonText(false)
            })
            .catch((err) => {
                console.log('this is an error', err),
                    setButtonText(false)
            });
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
                        <p className="createstafftext" style={{ fontSize: '40px', fontWeight: '600' }}>Create staff</p>
                    </div>

                    <div className="createstaffinputdiv">
                        <input className="createinput1" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input className="createinput2" type="text" placeholder="Hospital code" value={storedHospitalDetails} readOnly />
                    </div>
                    <div className="createstaffbtndiv">
                        <div className="createstaffbtnholder">
                            <button className="createstaffbtn" type='submit' onClick={() => {
                                staff()
                                setHospitalCode(storedHospitalDetails)
                                console.log("Button")
                            }}>{buttonText ? "creating..." : 'send'}</button>
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