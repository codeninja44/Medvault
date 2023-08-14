import { useState } from 'react'
import styles from './resendEmail.module.css'
import ResendPopup from '../resendPopup/ResendPopup'
import axios from 'axios'

function ResendEmail() {
    const [sent, setSent] = useState(false)
    const [loadState, setLoadState] = useState(false)
    const email = JSON.parse(localStorage.getItem("email"))
    const url = 'https://medvault.onrender.com/api/resendverificationemail'

    function resendEmail(e) {
        e.preventDefault()
        setLoadState(true)
        axios.post(url, { email })
            .then(res => {
                console.log(res); setSent(true); setLoadState(false)
                // seterrorMessage(res.data.message)
            })
            .catch((err) => {
                setLoadState(false)
                console.log("The error ", err)
                // seterrorMessage(err.response.data.message)
            })

    }

    return (
        <div className={styles.resendEmail}>
            <div className={styles.contentSec}>
                <div className={styles.header}>
                    <p>Resend Email</p>
                </div>
                <div className={styles.inputSec}>
                    <input type="text" placeholder="Email" disabled value={email} />
                    <button onClick={resendEmail}>{loadState ? "sending..." : "Resend email"}</button>
                </div>
            </div>
            {
                sent ? <ResendPopup /> : null
            }
        </div >
    )
}

export default ResendEmail