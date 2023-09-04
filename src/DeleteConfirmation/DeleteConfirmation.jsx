import React, { useState } from 'react';
import './DeleteConfirmation.css'
import './DeleteConfirmationmobile.css'



const DeleteConfirmation =()=>{
  <>
        <div className="success-container">
          <h2>Patient Temporarily Deleted!</h2>
          <BsCheckLg className='createdicon'/>
          <p>Patient will be deleted permanently in 10 days</p>
          <button>Back to Dashboard</button>
        </div>
      </>
};

export default DeleteConfirmation;
