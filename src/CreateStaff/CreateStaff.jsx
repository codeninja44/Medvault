import React from "react"
import './CreateStaff.css'
import './CreateStaffmobile.css'
import { LiaLessThanSolid } from 'react-icons/lia'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import testifourthcircle from '../assets/testifourthcircle.jpg'
import { useNavigate } from "react-router-dom"

const CreateStaff = () => {
    const nav = useNavigate()

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
                        <input className="createinput1" type="text" placeholder="Email" />
                        <input className="createinput2" type="text" placeholder="Hospital code" />
                    </div>
                    <div className="createstaffbtndiv">
                        <div className="createstaffbtnholder">
                            <button className="createstaffbtn">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateStaff