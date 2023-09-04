import React, { useEffect, useState } from 'react'
import "./registerPatient.css"
import "./registerPatientMobile.css"
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import CreatedSuccessfully from '../Created PopUp/CreatedSuccessfully'
import Swal from "sweetalert2"

const RegisterPatient = () => {
  const [patientImage, setPatientImage] = useState()
  const [patientName, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmailAddress] = useState('')
  const [homeAddress, setHomeAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [gender, setGender] = useState("")
  const [relationshipStatus, setMaritalStatus] = useState('')
  const [male, setMale] = useState(false)
  const [female, setFemale] = useState(false)
  const [single, setSingle] = useState(false)
  const [married, setMarried] = useState(false)
  const [divorced, setDivorced] = useState(false)
  const [load, setLoad] = useState(false)
  const [hospitalcode, setHospitalcode] = useState('')
  const [bloodGroup, setBloodGroup] = useState('')
  const [spouseName, setSpouseName] = useState('')
  const [otherContacts, setOtherContacts] = useState('')
  // const [otherContacts, setHospitalCode] = useState('')
  const [spousePhonenumber, setSpouseNumber] = useState('')
  const [diagnosis, setDiagnosis] = useState('')

  const handleMaleChange = () => {
    setMale(!male);
    setFemale(false);
  };

  const handleFemaleChange = () => {
    setFemale(!female);
    setMale(false);
  }

  const selectedGender = male ? 'M' : female ? 'F' : '';

  const isSingle = () => {
    setSingle(true)
    setMarried(false)
    setDivorced(false)
  }

  const isMarried = () => {
    setMarried(true)
    setSingle(false)
    setDivorced(false)
  }

  const isDivorced = () => {
    setDivorced(true)
    setSingle(false)
    setMarried(false)
  }

  const selectRelationshipStatus = single ? 'Single' : married ? 'Married' : divorced ? 'Divorced' : ''

  const File = (e) => {
    const file = e.target.files[0]
    setPatientImage(file)
    console.log(file)
  }


  const data = new FormData()
  data.append("patientImage", patientImage)
  data.append("patientName", patientName)
  data.append("phoneNumber", phoneNumber)
  data.append("homeAddress", homeAddress)
  data.append("email", email)
  data.append("state", state)
  data.append("city", city)
  data.append("state", state)
  data.append("gender", selectedGender)
  data.append("relationshipStatus", selectRelationshipStatus)
  data.append("dateOfBirth", dateOfBirth)
  data.append("bloodGroup", bloodGroup)
  data.append("otherContacts", otherContacts)
  data.append("spouseName", spouseName)
  data.append("spousePhonenumber", spousePhonenumber)
  data.append("diagnosis", diagnosis)
  data.append('hospitalcode', hospitalcode)

  const nav = useNavigate()
  const url = "https://medvault.onrender.com/api/createpatient"
  const token = JSON.parse(localStorage.getItem("token"))
  const [verify, setVerify] = useState(false)
  const [loadState, setLoadState] = useState(false)

  function register(e) {
    e.preventDefault()
    setLoad(true)
    axios.post(url, data, {
      header: { "Content-type": "multipart/form-data" },
      headers: { "Authorization": `Bearer ${token}` }

    }
    )

      .then(res => {
        // setVerify(true);
        setLoad(false)
        Swal.fire({
          title: "Success",
          icon: "success",
          text: "Patient has been created successfully",
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000,
        })
        console.log(res);
        localStorage.setItem("email", JSON.stringify(res.data.data.email))
        localStorage.setItem('patientID', JSON.stringify(res.data.data.patientID))
        nav('/dashboard')

      })
      .catch((err) => {
        toast.error(err?.response?.data?.message)
        setLoad(false)
        console.log("The error ", err)
      })
  }


  return (
    <div className='App'>
      <div className='App2'>
        <form className="inputSec" onSubmit={register}>
          <div className='detailsHeader'>
            <p>Patient Details</p>
            <input placeholder='photo' type='file' accept='image/*' style={{
              height: '145px',
              width: '150px',
              border: 'none',
              outline: 'none',
              borderRadius: "5px",
              paddingTop: '30px',
              paddingLeft: '20px',
              background: 'white'
            }} onChange={File} />

          </div>
          <div className='PatientsInfo'>
            <div className='NameA'>
              <p>Name: </p>
              <input placeholder='' type='text' value={patientName} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className='NameB'>
              <p>Phone Number: </p>
              <input placeholder='' type='number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>

            <div className='NameC'>
              <p>E-Mail Address: </p>
              <input placeholder='' type='email' value={email} onChange={(e) => setEmailAddress(e.target.value)} />
            </div>

            <div className='NameC'>
              <p>Blood group: </p>
              <input placeholder='' type='text' value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} />
            </div>

            <div className='NameD'>
              <p>Home Address: </p>
              <input placeholder='' type='text' value={homeAddress} onChange={(e) => setHomeAddress(e.target.value)} />
            </div>

            <div className='NameE'>
              <p>City: </p>
              <input placeholder='' type='' value={city} onChange={(e) => setCity(e.target.value)} />
            </div>

            <div className='NameF'>
              <p>State: </p>
              <input placeholder='' type='text' value={state} onChange={(e) => setState(e.target.value)} />
            </div>

            <div className='NameH'>
              <p>Date Of Birth: </p>
              <input placeholder='' type='text' value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
            </div>

            <div className='NameH'>
              <p>Hospital code: </p>
              <input placeholder='' type='text' value={hospitalcode} onChange={(e) => setHospitalcode(e.target.value)} />
            </div>


            <div className='NameG'>
              <p>Gender:</p>
              <p >M</p>
              <input checked={male} onChange={handleMaleChange} type='checkbox' />
              <p >F</p>
              <input checked={female} onChange={handleFemaleChange} type='checkbox' />
            </div>

            <div className='NameG'>
              <p>Marital Status: </p>
              <p>Single</p>
              <input checked={single} onChange={isSingle} type='checkbox' />
              <p>Married</p>
              <input checked={married} onChange={isMarried} type='checkbox' />
              <p>Divorced</p>
              <input checked={divorced} onChange={isDivorced} type='checkbox' />

            </div>

            <div className='NameI'>
              <p>Spouse Name(if Married or Divorced): </p>
              <input placeholder='' type='text' value={spouseName} onChange={(e) => setSpouseName(e.target.value)} />
            </div>

            <div className='NameJ'>
              <p>Spouse Number(if Married or Divorced): </p>
              <input placeholder='' type='text' value={spousePhonenumber} onChange={(e) => setSpouseNumber(e.target.value)} />
            </div>

            <div className='NameK'>
              <p>Other contact: </p>
              <input placeholder='' type='text' value={otherContacts} onChange={(e) => setOtherContacts(e.target.value)} />
            </div>


            {/* <div className='Diagnosis'>
              <p>Diagnosis: </p>
              <input placeholder='' type='text' style={{ outline: 'none' }} />
            </div> */}

            <div className="form-group">
              <label for="diagnosis">Diagnosis:</label>
              <textarea id="diagnosis" value={diagnosis} style={{
                flex: "2",
                padding: "10px",
                border: "1px solid #ccc",
                backgroundColor: "white",
                borderRadius: "5px",
                width: "100%"
              }} name="diagnosis" onChange={(e) => setDiagnosis(e.target.value)}>{ }</textarea>
            </div>

            <button className='createPatient' type='submit'>{load ? 'Creating...' : 'Create patient'}</button>

          </div>
        </form>
      </div>
      {
        // verify ? <EmailPopUp /> : null
        // verify ? <CreatedSuccessfully/> : null
      }
    </div>

  )
}

export default RegisterPatient
