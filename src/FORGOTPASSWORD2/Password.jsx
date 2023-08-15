import React from 'react'

import './Password.css'

function Password() {


  return (
    <>
      <div className='Mmain'>

        <div className='wrapper'>
          <div className='settt'>
            <div className='header'>
              <h2>Set a new password</h2>
            </div>
          </div>
          <input type="text" placeholder='New Password' className='in11' />
          <input type="text" placeholder='Confirm password' className='in22' />
          <button className='btn'>Confirm Password</button>
        </div>

      </div>


    </>
  )
}

export default Password
