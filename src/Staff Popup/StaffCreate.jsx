import React, { useState } from 'react';
import {BsCheckLg} from 'react-icons/bs'
import './StaffCreate.css'

const StaffCreate = () => {
  return(
    <>
      <div className="success-container">
        <h2>Staff Created Successfully!</h2>
        <BsCheckLg className='createdicon'/>
        <p>Staff has been successfully created.</p>
        <button>Back to Dashboard</button>
      </div>
    </>
)
};

export default StaffCreate;
