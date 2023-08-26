import { useNavigate, useParams } from 'react-router-dom'
import style from './patient.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import { useParams } from 'react-router-dom'


// const patientID = JSON.parse(localStorage.getItem("patientID"))
// const hospitalcode = JSON.parse(localStorage.getItem("hospitalcode")) 


function Patient() {
    const storedHospitalDetails = JSON.parse(localStorage.getItem("hospitaldetails"));
    console.log(storedHospitalDetails);
    const nav = useNavigate()
    // const [patientInfo, setPaientInfo] = useState([])
    // console.log((hospitalcode))
    const token = JSON.parse(localStorage.getItem("token"))
    const { hospitalcode } = useParams()
    console.log(hospitalcode)



    const [userData, setUserData] = useState([])

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const url1 = `https://medvault.onrender.com/api/hospitals/patient/${storedHospitalDetails.hospitalcode}`
    // const url2 = `https://medvault.onrender.com/api/delete/${patientID}`



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

    return (
        <div className={style.staffsInfo}>
            <div className={style.innerBody}>
                <div className={style.search}>
                    <div className={style.searchIcon}></div>
                    <p>Search</p>
                </div>
                <div className={style.info}>
                    {
                        userData.map((e) => (
                            <div className={style.infoDisplay} onClick={() => {
                                nav(`/api/getonepatient/${e.patientID}`)
                            }}>
                                <div className={style.profileInfo}>
                                    <div className={style.image}>
                                        <img src={e.patientImage.url} alt="profile" />
                                    </div>
                                    <p>{e.patientName}</p>
                                </div>
                                <button className={style.delete} onClick={(event) => {
                                    event.stopPropagation()
                                    axios.delete(`https://medvault.onrender.com/api/delete/${e.patientID}`, config)
                                        .then(res => {
                                            console.log(res);
                                            getData()
                                        })
                                        .catch(err => {
                                            console.log(err);
                                        })
                                }} >Delete</button>
                            </div>
                        ))
                    }
                </div>
                <div className={style.line}></div>
                <button className={style.create} onClick={() => nav('/registerPatient')}>Create</button>
                <button className={style.create} onClick={() => nav('/recoverPatient')} style={{ marginLeft: '530px' }}>Recover</button>
            </div>
        </div>
    )
}

export default Patient