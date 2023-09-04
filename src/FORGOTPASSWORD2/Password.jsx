import React, { useEffect, useState } from 'react'
import './Password.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Alert from '../forgetVerified/Alert';

function Password() {
  const { token } = useParams();
  // const [isVerified, setIsVerified] = useState(1)
  const [verified, setVerified] = useState(false)
  const [load, setLoad] = useState(false)
  const [existingPassword, setExistingPassword] = useState('')
  const [password, setPassword] = useState('')


  const forgetInfo = { password, existingPassword }

  const nav = useNavigate()



  // useEffect(() => {
  const verifyUser = () => {
    setLoad(true)
    axios
      .post(`https://medvault.onrender.com/api/changepassword/${token}`, forgetInfo)
      .then((res) => {
        console.log(res);
        setVerified(true)
        setLoad(false)
        // setIsVerified(2)
      })
      .catch((err) => {
        console.log("Error response:", err);
        setLoad(false)
        // setIsVerified(3)
      });
  };
  // verifyUser()
  // }, []);

  return (
    <>
      <div className='Mmain'>

        <div className='wrapper'>
          <div className='settt'>
            <div className='header'>
              <h2>Set a new password</h2>
            </div>
          </div>
          <input type="password" placeholder='New Password' className='in11' style={{ backgroundColor: 'white' }} value={existingPassword} onChange={(e) => setExistingPassword(e.target.value)} />
          <input type="password" placeholder='Confirm password' className='in22' style={{ backgroundColor: 'white' }} value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className='btn' onClick={verifyUser}>{load ? "Loading..." : 'change Password'}</button>
        </div>
        {
          verified ? <Alert /> : null
        }
      </div>


    </>
  )
}

export default Password
