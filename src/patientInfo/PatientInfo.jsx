import './patientInfo.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import logo from '../assets/logo.png'

function PatientInfo() {

    const [patientName, setPatientName] = useState('')
    const [dateOfBirth, setdateOfBirth] = useState('')
    const [gender, setgender] = useState('')
    const [homeAddress, sethomeAddress] = useState('')
    const [email, setemail] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
    const [bloodGroup, setbloodGroup] = useState('')
    const [relationshipStatus, setrelationshipStatus] = useState('')
    const [spouseName, setspouseName] = useState('')
    const [spousePhonenumber, setspousePhonenumber] = useState('')
    const [otherContacts, setotherContacts] = useState('')
    const [editLoad, setEditLoad] = useState(false)
    const [photo, setPhoto] = useState()
    const [diagnosisText, setDiagnosis] = useState('')
    const [updating, setUpdating] = useState(false)

    const updatePatient = {
        patientName,
        dateOfBirth,
        gender,
        homeAddress,
        email,
        phoneNumber,
        bloodGroup,
        relationshipStatus,
        spouseName,
        spousePhonenumber,
        otherContacts,
    }

    const token = JSON.parse(localStorage.getItem("token"))
    const patientID = JSON.parse(localStorage.getItem('patientID'))
    const isAdmin = JSON.parse(localStorage.getItem('isAdmin'))
    const [useData, setUserData] = useState([])
    const nav = useNavigate()
    const newDiagnosis = { diagnosisText, patientID }


    // const [userData, setUserData] = useState([])

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const url1 = `https://medvault.onrender.com/api/getonepatient/${patientID}`
    // const url2 = `https://medvault.onrender.com/api/delete/${patientID}`

    function getData(e) {

        axios.get(url1, config)
            .then((res) => {
                console.log(res)
                localStorage.setItem('data', JSON.stringify(res.data.data))
                setUserData(res.data.data)
                setPatientName(res.data.data.patientName)
                setdateOfBirth(res.data.data.dateOfBirth)
                setgender(res.data.data.gender)
                setemail(res.data.data.email)
                setphoneNumber(res.data.data.phoneNumber)
                sethomeAddress(res.data.data.homeAddress)
                setbloodGroup(res.data.data.setbloodGroup)
                setrelationshipStatus(res.data.data.relationshipStatus)
                setspouseName(res.data.data.spouseName)
                setspousePhonenumber(res.data.data.spousePhonenumber)
                setotherContacts(res.data.data.otherContacts)
                setPhoto(res.data.data.patientImage.url)
                setDiagnosis(res.data.data.diagnosis)




            }
            )
            .catch(err => {
                console.log(err)
            })

    }
    useEffect(() => {
        getData()

    }, [])
    console.log(diagnosisText)

    const url2 = `https://medvault.onrender.com/api/updatePatient/${patientID}`

    const updatePatientInfo = (e) => {
        e.preventDefault()
        setEditLoad(true)
        axios.patch(url2, updatePatient, config)
            .then((res) => {
                console.log(res)
                setEditLoad(false)
            })
            .catch((err) => {
                console.log(err)
                setEditLoad(false)
            })
    }

    const url5 = `https://medvault.onrender.com/api/addDiagnosis`


    const addDiagnosis = (e) => {
        e.preventDefault()
        setUpdating(true)
        axios.post(url5, newDiagnosis, config)
            .then((res) => {
                console.log(res)
                setUpdating(false)
            })
            .catch((err) => {
                console.log(err)
                setUpdating(false)
            })
    }


    return (
        <>
            <div className='stafflogowrapper'>
                <img onClick={() => nav('/api/hospitals/patient/:hospitalcode')} src={logo} alt="logo" />
            </div>
            <main>
                <div className="overall">
                    <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Patient Information</h1>
                    <section className="patient-image">
                        <p>Patient Image:</p>
                        <div className='patientimgphoto'>
                          <img src={photo} alt="Patient's Photo" />
                        </div>
                    </section>

                    <section className="patient-info">
                        <form>
                            <div className="form-group">
                                <label htmlFor="patientName">Name:</label>
                                <input type="text" className='textType' id="patientName" name="patientName" value={patientName} onChange={(e) => setPatientName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label for="dateOfBirth">Date of Birth:</label>
                                <input type="date" id="dateOfBirth" name="dateOfBirth" value={dateOfBirth} onChange={(e) => setdateOfBirth(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label for="gender">Gender:</label>
                                <input type="text" className='textType' id="gender" name="gender" value={gender} onChange={(e) => setgender(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label for="homeAddress">Home Address:</label>
                                <textarea id="homeAddress" name="homeAddress" value={homeAddress} onChange={(e) => sethomeAddress(e.target.value)}></textarea>
                            </div>
                            <div className="form-group">
                                <label for="email">Email:</label>
                                <input type="email" id="email" name="email" className='emailInput' value={email} onChange={(e) => setemail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label for="phoneNumber">Phone Number:</label>
                                <input type="tel" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label for="phoneNumber">Patient Id:</label>
                                <input type="tel" id="phoneNumber" name="phoneNumber" value={patientID} onChange={(e) => setphoneNumber(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label for="bloodGroup">Blood Group:</label>
                                <input type="text" className='textType' id="bloodGroup" name='blood Group' value={bloodGroup} onChange={(e) => setbloodGroup(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label for="relationshipStatus">Relationship Status:</label>
                                <input type="text" className='textType' id="relationshipStatus" name="relationshipStatus" value={relationshipStatus} onChange={(e) => setrelationshipStatus(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label for="spouseName">Spouse Name:</label>
                                <input type="text" className='textType' id="spouseName" name="spouseName" value={spouseName} onChange={(e) => setspouseName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label for="spousePhonenumber">Spouse Phone Number:</label>
                                <input type="tel" id="spousePhonenumber" name="spousePhonenumber" value={spousePhonenumber} onChange={(e) => setspousePhonenumber(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label for="otherContacts">Other Contacts:</label>
                                <textarea id="otherContacts" name="otherContacts" value={otherContacts} onChange={(e) => setotherContacts(e.target.value)}></textarea>
                            </div>
                            <div className="form-group">
                                <label for="diagnosis">Diagnosis:</label>
                                <textarea id="diagnosis" name="diagnosis" value={diagnosisText} onChange={(e) => setDiagnosis(e.target.value)}></textarea>
                                <button style={{
                                    height: '50px',
                                    width: '50px',
                                    fontSize: '10px',
                                    backgroundColor: 'white',
                                    color: '#1EBFC1',
                                    marginBottom: '20px',
                                    marginLeft: "10px",
                                    borderRadius: '5px'
                                }} onClick={addDiagnosis}>{updating ? "updating..." : 'Add diagnosis'}</button>
                            </div>
                            <button className='updateBtn' onClick={updatePatientInfo}>{editLoad ? "Updating..." : 'Update'}</button>
                        </form>
                    </section>
                </div>
            </main>



        </>
    )
}

export default PatientInfo