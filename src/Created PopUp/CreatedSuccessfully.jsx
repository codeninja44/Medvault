import React, { useState } from 'react';
import './CreatedSuccessfully.css';
import {BsCheckLg} from 'react-icons/bs'

const CreatedSuccessfully = () => {
  
  return(
      <>
        <div className="success-container">
          <h2>Patient Created Successfully!</h2>
          <BsCheckLg className='createdicon'/>
          <p>Your new patient has been successfully created.</p>
          <button>Back to Dashboard</button>
        </div>
      </>
  )
};

export default CreatedSuccessfully;
