import styles from './patientInfo.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function PatientInfo() {

    const token = JSON.parse(localStorage.getItem("token"))
    const { patientID } = useParams()
    const [useData, setUserData] = useState([])
    const nav = useNavigate()


    // const [userData, setUserData] = useState([])

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const url1 = `https://medvault.onrender.com/api/getonepatient/${patientID}`
    // const url2 = `https://medvault.onrender.com/api/delete/${patientID}`

    function getData() {

        axios.get(url1, config)
            .then((res) => {
                console.log(res)
                localStorage.setItem('data', JSON.stringify(res.data.data))
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

    return (
        <div className={styles.body}>
            <div className={styles.mainBody}>
                <p className={styles.mainBodyP}>Patient <span> Datails</span></p>
                <div className={styles.top}>
                    <div className={styles.image}>
                        {/* <img src={useData.patientImage.url} alt="image" /> */}
                    </div>
                    <div className={styles.text}>
                        <p>Frank Ikenga</p>
                        <p>9195</p>
                    </div>
                </div>
                <div className={styles.secondSec}>
                    <div className={styles.patientNumber}>
                        <p>Phone number: <span>09161894001</span></p>
                        <p>E-mail: <span className={styles.number}>beshelelvis@gmail.com</span></p>
                    </div>
                    <div className={styles.bloodGroup}>
                        <div className={styles.homeAddress}>
                            <p>Blood group: <span>AA</span></p>

                        </div>
                        <div className={styles.homeAddress2}>
                            <p>Home address: <span>6 Ladipo street</span></p>
                        </div>
                    </div>
                    <div className={styles.city}>
                        <div className={styles.address}>
                            <p>City: <span>Lagos</span></p>
                        </div>
                        <div className={styles.address}>
                            <p>State: <span>Lagos</span></p>
                        </div>
                        <div className={styles.address2}>
                            <p>Date of birth: <span>31 Aug 1999</span></p>
                        </div>
                    </div>
                    <div className={styles.hospital}>
                        <div className={styles.code}>
                            <p>Hospital code: <span>4328</span></p>
                        </div>
                        <div className={styles.code2}>Gender: <span>M</span></div>
                        <div className={styles.code3}>Relationship Status: <span>single</span></div>
                    </div>
                    <div className={styles.spouse}>
                        <div className={styles.spouseDetail}>Spouse name: <span>Frank Ikenga</span></div>
                        <div className={styles.spouseDetail}>Spouse number: <span>09161894001</span></div>
                    </div>
                    <div className={styles.contact}>
                        <div> Other contact: <span>0908030481</span></div>
                    </div>
                    <div className={styles.sec}>
                        <p> Diagnosis: </p>
                        <div className={styles.diagnosis}>
                            <span>terytuyiuoipuytretyuiopuytretuyioysryuioiutrertuoytreruioiuytreyuiouytryui</span>
                        </div>
                        <button className={styles.edit} onClick={() => nav(`/api/updatePatient/${patientID}`)}>Edit</button>
                    </div>
                    <div></div>
                </div>
            </div>
        </div >
    )
}

export default PatientInfo