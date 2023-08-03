import style from './verifiedEmail.module.css'
import image from '../images/email.png'
import { useNavigate } from 'react-router-dom'

function VerifiedEmail() {
    const nav = useNavigate()

    return (
        <main className={style.body}>
            <div className={style.card}>
                <div className={style.emailImage}>
                    <img src={image} alt="Email" />
                </div>
                <div className={style.textArea}>
                    <div className={style.headText}>Email Veridied Successfully</div>
                    <div className={style.clickBtn}>
                        <p>Click to login</p>
                        <button className={style.loginBtn} onClick={() => nav('/login')}>Login</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default VerifiedEmail