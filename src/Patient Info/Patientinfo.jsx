import React from 'react'
import './PatientInfo.css'
import './Patientinfomobile.css'

const Patientinfo = () => {
  return (
    <>
    {/* <main>
        <div class="overall">
            <section class="patient-image">
                <h2>Patient Image</h2>
                <img src="patient-photo.jpg" alt="Patient's Photo"></img>
            </section>

            <section class="patient-info">
                <h2>Patient Information</h2>
                <form>
                    <div class="form-group">
                        <label for="patientName">Name:</label>
                        <input type="text" id="patientName" name="patientName" value="John Doe" readonly></input>
                    </div>
                    <div class="form-group">
                        <label for="dateOfBirth">Date of Birth:</label>
                        <input type="date" id="dateOfBirth" name="dateOfBirth" value="1990-01-01" readonly></input>
                    </div>
                    <div class="form-group">
                        <label for="gender">Gender:</label>
                        <input type="text" id="gender" name="gender" value="Male" readonly></input>
                    </div>
                    <div class="form-group">
                        <label for="homeAddress">Home Address:</label>
                        <textarea id="homeAddress" name="homeAddress" readonly>123 Main St, City, Country</textarea>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" value="john.doe@example.com" readonly></input>
                    </div>
                    <div class="form-group">
                        <label for="phoneNumber">Phone Number:</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" value="+1234567890" readonly></input>
                    </div>
                    <div class="form-group">
                        <label for="bloodGroup">Blood Group:</label>
                        <input type="text" id="bloodGroup" name="bloodGroup" value="O+" readonly></input>
                    </div>
                    <div class="form-group">
                        <label for="relationshipStatus">Relationship Status:</label>
                        <input type="text" id="relationshipStatus" name="relationshipStatus" value="Single" readonly></input>
                    </div>
                    <div class="form-group">
                        <label for="spouseName">Spouse Name:</label>
                        <input type="text" id="spouseName" name="spouseName" value="N/A" readonly></input>
                    </div>
                    <div class="form-group">
                        <label for="spousePhonenumber">Spouse Phone Number:</label>
                        <input type="tel" id="spousePhonenumber" name="spousePhonenumber" value="N/A" readonly></input>
                    </div>
                    <div class="form-group">
                        <label for="otherContacts">Other Contacts:</label>
                        <textarea id="otherContacts" name="otherContacts" readonly>N/A</textarea>
                    </div>
                    <div class="form-group">
                        <label for="diagnosis">Diagnosis:</label>
                        <textarea id="diagnosis" name="diagnosis" readonly>N/A</textarea>
                    </div>
                </form>
            </section>
        </div>
    </main> */}

<main>
            <div className="overall">
                <section className="patient-image">
                    <h2>Patient Image</h2>
                    <img src="patient-photo.jpg" alt="Patient's Photo" />
                </section>

                <section className="patient-info">
                    <h2>Patient Information</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="patientName">Name:</label>
                            <input type="text" id="patientName" name="patientName" value="John Doe" readOnly />
                        </div>
                        <div className="form-group">
                           <label for="dateOfBirth">Date of Birth:</label>
                           <input type="date" id="dateOfBirth" name="dateOfBirth" value="1990-01-01" readonly/>
                       </div>
                       <div className="form-group">
                           <label for="gender">Gender:</label>
                           <input type="text" id="gender" name="gender" value="Male" readonly/>
                    </div>
                    <div className="form-group">
                        <label for="homeAddress">Home Address:</label>
                        <textarea id="homeAddress" name="homeAddress" readonly>123 Main St, City, Country</textarea>
                    </div>
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" value="john.doe@example.com" readonly/>
                    </div>
                    <div className="form-group">
                        <label for="phoneNumber">Phone Number:</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" value="+1234567890" readonly/>
                    </div>
                    <div className="form-group">
                        <label for="bloodGroup">Blood Group:</label>
                        <input type="text" id="bloodGroup" name="bloodGroup" value="O+" readonly/>
                    </div>
                    <div className="form-group">
                        <label for="relationshipStatus">Relationship Status:</label>
                        <input type="text" id="relationshipStatus" name="relationshipStatus" value="Single" readonly/>
                    </div>
                    <div className="form-group">
                        <label for="spouseName">Spouse Name:</label>
                        <input type="text" id="spouseName" name="spouseName" value="N/A" readonly/>
                    </div>
                    <div className="form-group">
                        <label for="spousePhonenumber">Spouse Phone Number:</label>
                        <input type="tel" id="spousePhonenumber" name="spousePhonenumber" value="N/A" readonly/>
                    </div>
                    <div className="form-group">
                        <label for="otherContacts">Other Contacts:</label>
                        <textarea id="otherContacts" name="otherContacts" readonly>N/A</textarea>
                    </div>
                    <div className="form-group">
                        <label for="diagnosis">Diagnosis:</label>
                        <textarea id="diagnosis" name="diagnosis" readonly>N/A</textarea>
                    </div>
                        {/* Other form groups go here */}
                    </form>
                </section>
            </div>
        </main>

      

    
    </>
  )
}

export default Patientinfo