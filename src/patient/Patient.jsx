import { useNavigate } from 'react-router-dom'
import style from './patient.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const token = JSON.parse(localStorage.getItem("token"))
// const patientID = JSON.parse(localStorage.getItem("patientID"))
const hospitalcode = JSON.parse(localStorage.getItem("hospitalcode"))


function Patient() {
    const [patientInfo, setPaientInfo] = useState([])


    //     patientInfo.map(({ }) => (
    //             ))
    // }


    useEffect(() => {
        setPaientInfo(hospitalcode)
    }, [])

    const [userData, setUserData] = useState(null)

    async function getData() {
        const res = axios.get(`https://medvault.onrender.com/api/getAllpatientByHospital/${hospitalcode}`,
            { headers: { "Authorization": `Bearer ${token}` } })
        return res
    }

    useEffect(() => {
        getData().then((res) => setUserData(res.data.data))

    }, [])
    console.log(userData)
    const nav = useNavigate()

    return (
        <div className={style.staffsInfo}>
            <div className={style.innerBody}>
                <div className={style.search}>
                    <div className={style.searchIcon}></div>
                    <p>Search</p>
                </div>
                <div className={style.info}>
                    <div className={style.infoDisplay}>
                        <div className={style.profileInfo}>
                            <div className={style.image}>
                                <img src={userData?.patientImage.url} alt="profile" />
                            </div>
                            <p>Frank Ikenga</p>
                        </div>
                        <button className={style.delete}>Delete</button>
                    </div>
                </div>
                <div className={style.line}></div>
                <button className={style.create} onClick={() => nav('/registerPatient')}>Create</button>
            </div>
        </div>
    )
}

export default Patient