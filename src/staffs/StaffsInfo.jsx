import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import style from './staffsInfo.module.css'
import axios from 'axios'
import Swal from "sweetalert2"
import logo from '../assets/logo.png'


// import { useParams } from 'react-router-dom'


// const patientID = JSON.parse(localStorage.getItem("patientID"))
// const hospitalcode = JSON.parse(localStorage.getItem("hospitalcode")) 


function Patient() {
const hospitalcode = JSON.parse(localStorage.getItem("hospitalcode"))

    const storedHospitalDetails = JSON.parse(localStorage.getItem("hospitaldetails"));
    console.log(storedHospitalDetails);
    const nav = useNavigate()
    // const [patientInfo, setPaientInfo] = useState([])
    // console.log((hospitalcode))
    const token = JSON.parse(localStorage.getItem("token"))
    // const { hospitalcode } = useParams()
    console.log(hospitalcode)



    const [userData, setUserData] = useState([])

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const url1 = `https://medvault.onrender.com/api/hospitals/staff/${hospitalcode}`



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
        const filteredArray = collectedUsers.filter((user) => user.name.includes(e))
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
                        <input className={style.searchIcon} placeholder="Search staff Name" onChange={(e) => searchFunctionality(e.target.value)} />

                    </div>
                    <h2>View Hospital Staffs</h2>
                    <div className={style.info}>
                        {
                            userData.map((e) => (
                                <div className={style.infoDisplay} >
                                    <div className={style.profileInfo} onClick={() => {
                                        localStorage.setItem('staffID', JSON.stringify(e.staffID))
                                        nav(`/api/getonestaff/${e.staffID}`)
                                    }}>
                                        <div className={style.image}>
                                            <img src={e.photo.url} alt="profile" />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <p style={{ fontWeight: '550', fontSize: '14px' }}>{e.name}</p>
                                            <p style={{ fontSize: '11px' }}>Staff ID: <span style={{ fontSize: '11px',color: '#1EBFC1' }}>{e.staffID}</span></p>
                                        </div>
                                    </div>
                                    <button className={style.delete} onClick={(event) => {
                                        Swal.fire({
                                            title: "Delete",
                                            icon: "warning",
                                            text: "Are you sure you want to delete this staff?",
                                            showCancelButton: true
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                event.stopPropagation()
                                                axios.delete(`https://medvault.onrender.com/api/deletestaff/${storedHospitalDetails}/${e.staffID}`, config)
                                                    .then(res => {
                                                        console.log(res);
                                                        Swal.fire({
                                                            title: "Success",
                                                            icon: "success",
                                                            text: "Staff will be deleted permanently in 10 days",
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

                                    }} >Delete</button>
                                </div>
                            ))
                        }
                    </div>
                    <div className={style.line}></div>
                    <button className={style.create} onClick={() => nav('/createStaff')}>Create</button>
                    {/* <button className={style.create} onClick={() => nav('/recoverPatient')} >Recover</button>+ */}
                </div>
            </div>
        </>
    )
}

export default Patient