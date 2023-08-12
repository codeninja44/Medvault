import { useEffect, useState } from 'react'
import style from './forgetPassword.module.css'
import axios from 'axios'
import EmailPopUp from '../popUp/EmailPopUp'
function ForgetPassword() {
    const [email, setemail] = useState('')
    const url = "https://medvault.onrender.com/api/forgotpassword"
    const [loadState, setLoadState] = useState(false)
    const [verify, setVerify] = useState(false)
    const [errorMessage, seterrorMessage] = useState()
    // useEffect(() => {
    // }, [loadstate])
    function forgetPassword(e) {
        e.preventDefault()
        setLoadState(true)
        axios.post(url, { email })
            .then(res => {
                console.log(res); setVerify(true); setLoadState(false)
                seterrorMessage(res.data.message)
            })
            .catch((err) => {
                setLoadState(false)
                console.log("The error ", err)
                seterrorMessage(err.response.data.message)
            })

    }


    return (
        <div className={style.main}>
            <div className={style.card}>
                <div className={style.top}>
                    <h3>Forget Password</h3>
                </div>
                <input type="email" placeholder='Email' value={email} className={style.input} onChange={(e) => setemail(e.target.value)} />
                <p className={style.error}>{errorMessage}</p>
                <button className={style.sendMail} onClick={forgetPassword}>{loadState ? 'a moment...' : 'send email'}</button>
            </div>
            {
                verify ? <EmailPopUp /> : null
            }
        </div>
    )
}

export default ForgetPassword