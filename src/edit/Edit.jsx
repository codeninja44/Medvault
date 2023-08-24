import { useEffect, useState } from 'react'
import styles from './edit.module.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'




function Edit() {

    const patient = JSON.parse(localStorage.getItem('data'))


    // const [, setPatientID] = useState(patient.patientName)
    const [patientName, setpatientName] = useState(patient.patientName)
    const [dateOfBirth, setdateOfBirth] = useState(patient.dateOfBirth)
    console.log(dateOfBirth)
    const [email, setemail] = useState(patient.email)
    const [gender, setgender] = useState(patient.gender)
    const [homeAddress, sethomeAddress] = useState(patient.homeAddress)
    const [hospitalcode, sethospitalcode] = useState(patient.hospitalcode)
    const [otherContacts, setotherContacts] = useState(patient.otherContacts)
    const [phoneNumber, setphoneNumber] = useState(patient.phoneNumber)
    const [relationshipStatus, setrelationshipStatus] = useState(patient.relationshipStatus)
    const [spouseName, setspouseName] = useState(patient.spouseName)
    const [spousePhonenumber, setspousePhonenumber] = useState(patient.spousePhonenumber)
    const [bloodGroup, setBloodGroup] = useState(patient.bloodGroup)

    console.log(patient)




    // const { patientName, dateOfBirth, gender, homeAddress, email, phoneNumber, bloodGroup, relationshipStatus, spouseName, spousePhonenumber } = patientDetails

    const token = JSON.parse(localStorage.getItem("token"))
    const { patientID } = useParams()
    const allData = {
        patientID,
        dateOfBirth,
        gender,
        email,
        phoneNumber,
        bloodGroup,
        relationshipStatus,
        spouseName,
        spousePhonenumber,
        otherContacts,
        homeAddress,
        patientName
    }


    // const [useData, setUserData] = useState([])

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const patientIdentification = patient.patientID

    const url2 = `https://medvault.onrender.com/api/updatePatient/${patientIdentification}`
    function setNew() {
        axios.patch(url2, allData, config)
            .then(res => {
                console.log(res)
            }
            )
            .catch(err => {
                console.log(err)
            })
    }

    console.log(patientIdentification)


    // const url1 = `https://medvault.onrender.com/api/getonepatient/${patientID}`
    console.log(patientID)

    // function getData() {

    //     axios.get(url1, config)
    //         .then((res) => {
    //             console.log(res)
    //             setPatientDetails(res.data.data)
    //         }
    //         )
    //         .catch(err => {
    //             console.log(err)
    //         })

    // }
    // useEffect(() => {
    //     getData()

    // }, [])

    return (
        <div className={styles.body}>
            <div className={styles.mainBody}>
                <p className={styles.mainBodyP}>Patient <span> Datails</span></p>
                <div className={styles.top}>
                    <div className={styles.image}>
                        <img src={patient.patientImage.url} alt="image" />
                    </div>
                    <div className={styles.text}>
                        <input type="text" value={patientName} onChange={(e) => setpatientName(e.target.value)} />
                        <input type="text" value={dateOfBirth} onChange={(e) => setdateOfBirth(e.target.value)} />
                    </div>
                </div>
                <div className={styles.secondSec}>
                    <div className={styles.patientNumber}>
                        <p>Phone number: <input type="text" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} /></p>
                        <p>E-mail: <input type="text" className={styles.number} value={email} onChange={(e) => setemail(e.target.value)} /></p>
                    </div>
                    <div className={styles.bloodGroup}>
                        <div className={styles.homeAddress}>
                            <p>Blood group: <input type="text" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} /></p>

                        </div>
                        <div className={styles.homeAddress2}>
                            <p>Home address: <input type="text" value={homeAddress} onChange={(e) => sethomeAddress(e.target.value)} /></p>
                        </div>
                    </div>
                    <div className={styles.city}>
                        <div className={styles.address}>
                            <p>City: <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} /></p>
                        </div>
                        <div className={styles.address}>
                            <p>State: <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} /></p>
                        </div>
                        <div className={styles.address2}>
                            <p>Date of birth: <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} /></p>
                        </div>
                    </div>
                    <div className={styles.hospital}>
                        <div className={styles.code}>
                            <p>Hospital code:<input type="text" value={hospitalcode} /></p>
                        </div>
                        <div className={styles.code2}>Gender:<input type="text" value={gender} onChange={(e) => setgender(e.target.value)} /></div>
                        <div className={styles.code3}>Relationship Status:<input type="text" value={relationshipStatus} onChange={(e) => setrelationshipStatus(e.target.value)} /></div>
                    </div>
                    <div className={styles.spouse}>
                        <div className={styles.spouseDetail}>Spouse name: <input type="text" value={spouseName} onChange={(e) => setspouseName(e.target.value)} /></div>
                        <div className={styles.spouseDetail}>Spouse number: <input type="text" value={spousePhonenumber} onChange={(e) => setspousePhonenumber(e.target.value)} /></div>
                    </div>
                    <div className={styles.contact}>
                        <div> Other contact: <input type="text" className={styles.number} value={otherContacts} onChange={(e) => setotherContacts(e.target.value)} /></div>
                    </div>
                    <div className={styles.sec}>
                        <p> Diagnosis: </p>
                        <input type="text" className={styles.diagnosis} />
                        <button className={styles.update} onClick={setNew}>Update</button>
                    </div>
                    <div></div>
                </div>
            </div>
        </div >
    )
}

export default Edit