import { useNavigate, useParams } from 'react-router-dom'
import style from './patient.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from "sweetalert2"
import logo from '../assets/logo.png'
import useDashboard from '../hooks/useDashboard'


// import { useParams } from 'react-router-dom'


// const patientID = JSON.parse(localStorage.getItem("patientID"))
// const hospitalcode = JSON.parse(localStorage.getItem("hospitalcode")) 


function Patient() {
    const storedHospitalDetails = JSON.parse(localStorage.getItem("hospitaldetails"));
    console.log(storedHospitalDetails);
    const nav = useNavigate()
    const login = useDashboard()

    // const [patientInfo, setPaientInfo] = useState([])
    // console.log((hospitalcode))
    const token = JSON.parse(localStorage.getItem("token"))
    // const { hospitalcode } = useParams()
    // console.log(hospitalcode)



    const [userData, setUserData] = useState([])

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const url1 = `https://medvault.onrender.com/api/hospitals/patient/${storedHospitalDetails}`



    function getData() {

        axios.get(url1, config)
            .then((res) => {
                console.log(res)
                setUserData(res.data.data)
            }
            )
            .catch(err => {
                console.log(err)
            })

    }

    useEffect(() => {
        getData()

    }, [])
    console.log(userData)

    const searchFunctionality = (e) => {
        console.log(e)
        const collectedUsers = userData;
        const filteredArray = collectedUsers.filter((user) => user.patientName.includes(e))
        console.log(filteredArray)
        setUserData(filteredArray)
    }


    return (
        <>
            <div className='stafflogowrapper'>
                <img src={logo} alt="logo" onClick={() => nav('/dashboard')} />
            </div>
            <div className={style.staffsInfo}>
                <div className={style.innerBody}>
                    <div className={style.search}>
                        <input className={style.searchIcon} placeholder="Search Patient Name" onChange={(e) => searchFunctionality(e.target.value)} />

                    </div>
                    <div className={style.info}>

                        {
                            userData.map((e) => (
                                <div className={style.infoDisplay} >
                                    <div className={style.profileInfo} onClick={() => {
                                        localStorage.setItem('patientID', JSON.stringify(e.patientID))
                                        nav(`/api/getonepatient/${e.patientID}`)
                                    }}>
                                        <div className={style.image}>
                                            <img src={e.patientImage.url} alt="profile" />
                                        </div>
                                        <p>{e.patientName}</p>
                                    </div>
                                    {login.admin ?
                                        <button className={style.delete} onClick={(event) => {
                                            Swal.fire({
                                                title: "Delete",
                                                icon: "warning",
                                                text: "Atre you sure you want to delete this patient?",
                                                showCancelButton: true
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    event.stopPropagation()
                                                    axios.delete(`https://medvault.onrender.com/api/delete/${e.patientID}`, config)
                                                        .then(res => {
                                                            console.log(res);
                                                            Swal.fire({
                                                                title: "Success",
                                                                icon: "success",
                                                                text: "Patient will be deleted permanently in 10 days",
                                                                showCancelButton: false,
                                                                showConfirmButton: false,
                                                                timer: 5000,
                                                            })
                                                            nav("/dashboard")
                                                            getData()
                                                        })
                                                        .catch(err => {
                                                            console.log(err);
                                                        })
                                                }
                                            })

                                        }} >Delete</button> : null}

                                </div>
                            ))
                        }
                    </div>
                    <div className={style.line}></div>
                    <button className={style.create} onClick={() => nav('/registerPatient')}>Create</button>
                    <button className={style.create} onClick={() => nav('/recoverPatient')} >Recover</button>
                </div>
            </div>
        </>
    )
}

export default Patient