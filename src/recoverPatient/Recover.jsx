import { useState } from 'react'
import style from './recover.module.css'
import axios from 'axios'
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom'

function Recover() {
    const [patientID, setPatientID] = useState('')
    const [loadState, setLoadState] = useState(false)

    console.log(patientID)

    // const patient_ID = JSON.parse(localStorage.getItem("patientID"))
    // console.log(patient_ID)

    const token = JSON.parse(localStorage.getItem("token"))
    console.log(token)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const storedHospitalDetails = JSON.parse(localStorage.getItem("hospitaldetails"));
console.log(storedHospitalDetails, "this is the hospital detail")
    const nav = useNavigate()
    const url = `https://medvault.onrender.com/api/recover/${patientID}`
    function restore(e) {
        e.preventDefault()
        setLoadState(true)
        axios.patch(url, {}, config)
            .then(res => {
                Swal.fire({
                    title: "Success",
                    icon: "success",
                    text: "Patient has been recovered successfully",
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 2000,
                })
                nav(`/api/hospitals/patient/${storedHospitalDetails.hospitalcode}`)
                setLoadState(false)
                console.log(res)
            }
            )
            .catch(err => {
                setLoadState(false)
                console.log(err)
            })
    }


    return (
        <div className={style.resendEmail}>
            <div className={style.contentSec}>
                <div className={style.header}>
                    <p>Recover Patient</p>
                </div>
                <div className={style.inputSec}>
                    <input type="text" placeholder="Patient ID" value={patientID} onChange={(e) => setPatientID(e.target.value)} />
                    <button onClick={restore} > {loadState ? "Restoring..." : "Restore"}</button>
                </div>
            </div>
            {/* {
                sent ? <ResendPopup /> : null
            } */}
        </div >
    )
}

export default Recover