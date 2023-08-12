import React from 'react'

import './Password.css'

function Password() {
  

  return (
    <>
      <div className='Mmain'>
        
        <div className='wrapper'>
          <div className='logo'></div>
          <div className='cardi'>
            <div className='settt'><h2>Set a new password</h2></div>
            <div className='input11'>
            <h2 className='new'>New Password</h2>
            <input type="text" placeholder='Enter New Password' className='in11' />
            </div>
            <div className='input2'>
            <h2 className='new2'>Confirm New Password</h2>
            <input type="text" placeholder='Enter New Password' className='in22' />
            </div>
            <button className='btn'>Confirm Password</button>
          </div>

        </div>
      
      </div>
    
    </>
  )
}

export default Password
