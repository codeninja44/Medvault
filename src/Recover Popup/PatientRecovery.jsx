import React, { useState } from 'react';
import './PatientRecovery.css'; // Import your CSS file
import './PatientRecoverymobile.css'
import {BsCheckLg} from 'react-icons/bs'

const PatientRecovery = () => {
  
  return(
  <>
        <div className="success-container">
          <h2>Patient Recovered Successfully!</h2>
          <BsCheckLg className='createdicon'/>
          <p>Patient has been successfully recovered.</p>
          <button>Back to Dashboard</button>
        </div>
      </>
  )
};

export default PatientRecovery;
