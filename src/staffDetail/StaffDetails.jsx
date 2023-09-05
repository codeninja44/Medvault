import './staffDetails.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import logo from '../assets/logo.png'


function StaffDetails() {
    const [photo, setPhoto] = useState()


    const token = JSON.parse(localStorage.getItem("token"))
    const staffId = JSON.parse(localStorage.getItem('staffID'))
    const [useData, setUserData] = useState([])
    const nav = useNavigate()


    // const [userData, setUserData] = useState([])

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const url1 = `https://medvault.onrender.com/api/getonestaff/${staffId}`

    function getData(e) {

        axios.get(url1, config)
            .then((res) => {
                console.log(res)
                localStorage.setItem('data', JSON.stringify(res.data.data))
                setUserData(res.data.data)
                setPhoto(res.data.data.photo.url)
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
        <>
            <div className='stafflogowrapper'>
                <img src={logo} alt="logo" onClick={() => nav('/api/hospitals/patient/:hospitalcode')} />
            </div>
            <main>
                <div className="overall">
                    <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Staff Information</h1>
                    <section className="patient-image">
                        <p>Staff image:</p>
                        <img src={photo} alt="Patient's Photo" />
                    </section>

                    <section className="patient-info">
                        <form>
                            <div className="form-group">
                                <label htmlFor="patientName">Name:</label>
                                <input type="text" className='textType' id="patientName" name="patientName" value={useData?.name} readOnly />
                            </div>
                            <div className="form-group">
                                <label for="dateOfBirth">Date of Birth:</label>
                                <input type="date" id="dateOfBirth" name="dateOfBirth" value={useData?.dateOfBirth} />
                            </div>
                            <div className="form-group">
                                <label for="gender">Role:</label>
                                <input type="text" className='textType' id="gender" name="gender" value={useData?.role} readOnly />
                            </div>
                            {/* <div className="form-group">
                                <label for="homeAddress">Home Address:</label>
                                <textarea id="homeAddress" name="homeAddress" value={homeAddress} onChange={(e) => sethomeAddress(e.target.value)}></textarea>
                            </div> */}
                            <div className="form-group">
                                <label for="email">Email:</label>
                                <input type="email" id="email" className='emailInput' name="email" value={useData?.email} readOnly />
                            </div>
                            <div className="form-group">
                                <label for="phoneNumber">Hospital code:</label>
                                <input type="tel" id="phoneNumber" name="Hospital code" value={useData?.hospitalcode} readOnly />
                            </div>

                            <div className="form-group">
                                <label for="phoneNumber">Age:</label>
                                <input type="tel" id="phoneNumber" name="phoneNumber" value={useData?.age} readOnly />
                            </div>

                            <div className="form-group">
                                <label for="phoneNumber">StaffID:</label>
                                <input type="tel" id="phoneNumber" name="phoneNumber" value={useData?.staffID} readOnly />
                            </div>



                        </form>
                    </section>
                </div>
            </main>



        </>
    )
}

export default StaffDetails